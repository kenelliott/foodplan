# Copilot Instructions — foodplan

## Project Overview

Vite + React app using MUI (Material UI) for the UI. Tests use Vitest with React Testing Library.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` (Oxlint)
- **Tests:** `npx vitest run`

## Testing

### Setup

- Test environment: `jsdom` (configured in `vite.config.js`)
- Setup file: `src/test/setup.js` — imports `@testing-library/jest-dom/vitest` and runs `cleanup` after each test
- Test files live alongside their components and use the `.test.jsx` extension

### MUI + React Testing Library gotchas

These lessons apply when testing any MUI component with `@testing-library/react`:

1. **DOM cleanup is required.** `@testing-library/react` does NOT auto-cleanup in Vitest. Without explicit `afterEach(cleanup)` in the setup file, DOM nodes from previous tests persist, causing "Found multiple elements" errors that look like query issues but are actually stale DOM.

2. **MUI Accordion renders duplicate button roles.** `AccordionSummary` wraps content in both an `<h3>` heading and a `<button>`. Any text inside (e.g. a `<Typography>`) will match **both** `role="heading"` and `role="button"` queries. Use `{ level: 6 }` or similar to disambiguate headings, and prefer `getByRole("button", { name })` for clicking accordion toggles.

3. **Collapsed Accordion content stays in the DOM.** MUI Accordion keeps `AccordionDetails` content mounted even when collapsed (hidden via CSS). `getByText` searches the full DOM tree including hidden content. When multiple accordions contain the same text (e.g. "Produce" in two shopping list weeks), use `getAllByText` or scope queries with `within()`.

4. **Scope table queries with `within()`.** After expanding an accordion, use `within(screen.getByRole("table"))` to query table cell content. This avoids false "multiple elements" matches from MUI's internal DOM structure.

5. **MUI icons import paths must match exactly.** MUI icon imports use the variant suffix in the module path (e.g. `@mui/icons-material/CheckCircleOutlined`, NOT `CheckCircleOutline`). Verify against `node_modules/@mui/icons-material/` if unsure.

### Test patterns

```jsx
// Clicking an MUI Accordion to expand it
await userEvent.click(screen.getByRole("button", { name: /Section Title/ }));

// Querying inside expanded content
const table = screen.getByRole("table");
expect(within(table).getByText("cell content")).toBeInTheDocument();

// Targeting a specific heading level (avoids MUI's duplicate h3/h6)
screen.getByRole("heading", { name: /Title/, level: 6 });

// When text appears in multiple collapsed accordions
expect(screen.getAllByText("Produce").length).toBeGreaterThanOrEqual(1);
```

## Project Structure

```
src/
  components/       — Reusable UI components (DayAccordion, WeekAccordion, etc.)
  data/
    intro.js        — Shared intro/philosophy data
    plans/          — One file per 2-week meal plan (e.g. 2026-07-07.js)
      index.js      — Registry that imports and exports all plan modules
  test/             — Vitest setup file
  MealPlan.jsx      — Page-level component with plan selector dropdown
  App.jsx           — App shell with CssBaseline
```

### Adding a new meal plan

1. Create a new file in `src/data/plans/` named by start date (e.g. `2026-07-21.js`)
2. Export `id` (date string), `label` (display name), `weeks`, `wastePrevention`, and `shoppingLists`
3. Import and add it to the `plans` array in `src/data/plans/index.js`

### Editing meals or ingredients

When a day, meal, or ingredient is changed in a plan file, **always update the `shoppingLists` in the same file to match**. Add new ingredients and remove ones that are no longer needed. The Combined Shopping List component derives its data from `shoppingLists`, so they must stay in sync.

### Meal rules

All dinner recipes must follow these constraints:

1. **Meat is required.** Every meal must include a meat or seafood protein — no vegetarian dinners.
2. **One cooked-vegetable method per meal.** If vegetables are roasted, all cooked vegetables in that meal are roasted. Do not mix roasting with steaming, sautéing, etc. Raw/fresh sides (salads, sliced cucumber) do not count toward this rule.
3. **No spiralized vegetables.** Do not use zucchini noodles, spiralized carrots, or any vegetable-as-noodle substitute.
4. **Light sauces only.** Sauces should add flavor without heavy calories. No cream-based, cheese-heavy, or butter-rich sauces. Prefer vinaigrettes, citrus-based, soy-ginger, chimichurri, salsa, or herb-forward sauces.
5. **Under 1 hour of active prep.** Any meal that requires more than 60 minutes of hands-on preparation must be scheduled on a Prep Day (Sunday).
