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

When the user says **“create a new meal plan”**, treat that as a request to complete the entire creation, validation, source-control, and production-deployment workflow below. Do not stop after drafting menu ideas or creating one file.

Unless the user provides different dates or constraints, use these defaults:

- Create a 2-week plan beginning on the next Sunday after the latest registered plan.
- Include dinner for every day, with Friday dinner set to `🍽️ Eating out`.
- Use quantities in `menuItems.js` as per-person quantities; the UI scales them using the People selector.
- Follow every meal rule in this file and preserve the established Sunday prep/batch-cooking and waste-reduction strategy.

Implementation steps:

1. Inspect the newest plan, `src/data/menuItems.js`, and `src/data/plans/index.js` before editing.
2. Create `src/data/plans/YYYY-MM-DD.js`, using the plan’s first Sunday as the filename and exported `id`.
3. Export `id`, `label`, `weeks`, `wastePrevention`, and `shoppingLists`. Keep `shoppingLists` as an empty array for backward compatibility; the current UI generates lists dynamically.
4. Reuse existing `menuItemId` values when they accurately represent the intended recipe.
5. When a recipe is new or materially different, add a unique entry to `src/data/menuItems.js` with `id`, `title`, `description`, and per-person `ingredients` quantities, then reference that ID from the plan.
6. Import the plan in `src/data/plans/index.js` and place it first in the `plans` array so it becomes the default selection.
7. Validate that every `menuItemId` resolves through `getMenuItem`, all 14 dates/days are represented, labels match the date range, and no prohibited or consecutive-night repetition rules are violated.
8. Run `npx vitest run`, `npm run lint`, and `npm run build`. Fix code-related failures before continuing.
9. Check the UI at a portrait iPhone width. There must be no horizontal page overflow; selectors must stack and meal tables/text must fit or wrap within the viewport.
10. Commit and push the complete change to the default branch of the existing GitHub `foodplan` repository. Do not create a new repository, branch-only copy, or Vercel project for each plan.
11. Persist the update to the existing Vercel application:
    - Primary path: the existing Vercel project `food-plan` must remain connected to the GitHub `foodplan` repository with the default branch configured as Production. Pushing the validated commit triggers its production deployment.
    - Fallback when Git-triggered deployment is unavailable: from the repository root, link to the existing project with `npx vercel link --yes --project food-plan --scope elliott-ranch`, then run `npx vercel deploy --prod --yes`.
    - Never create a second Vercel project, deploy under a new project name, or replace the stable production alias.
12. Poll the resulting Vercel deployment until it reaches `READY`. Confirm `https://food-plan-elliott-ranch.vercel.app` serves the new plan, returns HTTP 200, and does not redirect to Vercel login. If the stable alias still serves the previous plan, treat the deployment as incomplete and repair or promote the correct deployment.
13. Report the new plan dates, files changed, validation results, Git commit, Vercel deployment status, and stable live URL.

### Editing meals or ingredients

Shopping lists are generated by `buildShoppingLists(plan.weeks, servings)` from the ingredients attached to each referenced entry in `src/data/menuItems.js`. When a meal or ingredient changes, update the corresponding menu-item ingredients and verify the generated lists at multiple serving counts. Do not hand-maintain shopping-list contents in a plan file.

Ingredient names and units must be consistent across recipes so the generator can aggregate them. Before adding a spelling or unit variation, search existing menu items and reuse the established form when it represents the same grocery item.

### Completion rule

A new meal plan is not complete until it is registered, tested, committed to the existing GitHub repository, pushed to its production branch, deployed to the existing `food-plan` Vercel project, and verified at the stable public URL. Creating the plan locally or obtaining a temporary deployment URL does not count as completion. If GitHub or Vercel is unavailable, preserve the finished source locally and report the exact blocked step; do not claim completion.

### Meal rules

All dinner recipes must follow these constraints:

1. **Meat is required.** Every meal must include a meat or seafood protein — no vegetarian dinners.
2. **One cooked-vegetable method per meal.** If vegetables are roasted, all cooked vegetables in that meal are roasted. Do not mix roasting with steaming, sautéing, etc. Raw/fresh sides (salads, sliced cucumber) do not count toward this rule.
3. **No spiralized vegetables.** Do not use zucchini noodles, spiralized carrots, or any vegetable-as-noodle substitute.
4. **Light sauces only.** Sauces should add flavor without heavy calories. No cream-based, cheese-heavy, or butter-rich sauces. Prefer vinaigrettes, citrus-based, soy-ginger, chimichurri, salsa, or herb-forward sauces.
5. **Under 1 hour of active prep.** Any meal that requires more than 60 minutes of hands-on preparation must be scheduled on a Prep Day (Sunday).
6. **No scallops.** Do not include scallops in any meal.
7. **No catfish.** Do not include catfish in any meal.
8. **HEB-available proteins only.** All proteins must be reliably found at HEB in North Texas. Allowed: chicken (all cuts), turkey, beef (sirloin, chuck, flank, skirt, ribeye, short ribs), pork (chops, tenderloin, shoulder), salmon, shrimp, tilapia, cod, mahi-mahi. Do not use: duck, lamb, pork belly, Cornish hen, ahi tuna, swordfish, halibut, sole, black cod, grouper, rainbow trout, or other specialty/seasonal proteins.
9. **Share ingredients across meals.** When planning a week of meals, reuse proteins, produce, and pantry items across multiple dinners to simplify the shopping list and reduce waste. For example, if one meal uses chicken thighs and bell peppers, schedule another meal that week using the same ingredients in a different preparation.
10. **No repeat proteins on consecutive nights.** Do not use the same primary protein two dinners in a row. For example, if Monday is chicken, Tuesday must use a different protein (beef, pork, fish, shrimp, turkey, etc.). Also avoid repeating the same featured vegetable or grain on back-to-back nights — e.g., if Monday has broccoli and jasmine rice, Tuesday should use different vegetables and a different starch.
