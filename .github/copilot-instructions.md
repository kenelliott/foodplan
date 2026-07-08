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
- Test files live in `src/test/` and use the `.test.jsx` extension

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
  test/             — Vitest test files and setup
  mealPlanData.js   — Static data for the meal plan
  MealPlan.jsx      — Page-level component composing all sections
  App.jsx           — App shell with CssBaseline
```
