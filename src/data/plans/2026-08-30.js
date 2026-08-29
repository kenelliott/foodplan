export const id = "2026-08-30";
export const label = "Aug 30 – Sep 12, 2026";

export const approach = {
  title: "Late-Summer Family Dinners with Smart Ingredient Reuse",
  summary: "Two weeks of protein-forward dinners that rotate meats and seafood while reusing produce, herbs, grains, and pantry staples before they spoil.",
  principles: [
    { title: "Prep once on Sunday", detail: "Wash and portion produce, cook versatile grains, and prepare light sauces so weeknight dinners come together quickly." },
    { title: "Rotate proteins and sides", detail: "Chicken, seafood, turkey, pork, and beef alternate without repeating the same featured vegetable or starch on consecutive nights." },
    { title: "Use perishables early", detail: "Tender greens, herbs, seafood, and cut produce are assigned before longer-lasting pantry and freezer ingredients." },
    { title: "Keep Friday flexible", detail: "Friday remains dinner out, with short-life groceries used earlier in the week." },
  ],
};

export const weeks = [
  {
    label: "Week 1 — Aug 30–Sep 5",
    days: [
      { day: "Sunday, Aug 30 — Prep Day", batchNotes: "Roast the chicken and root vegetables · Cook brown and jasmine rice · Wash greens, broccoli, green beans, snap peas, and peppers · Mix citrus-soy dressing and chimichurri", meals: [{ meal: "Dinner", menuItemId: "herb-roasted-chicken-root-veg", notes: "Reserve extra herbs and prepared produce for later dinners" }] },
      { day: "Monday, Aug 31", meals: [{ meal: "Dinner", menuItemId: "honey-sriracha-salmon-bowls", notes: "Uses Sunday-prepped brown rice and broccoli" }] },
      { day: "Tuesday, Sep 1", meals: [{ meal: "Dinner", menuItemId: "turkey-bolognese-penne", notes: "Uses remaining onion, carrots, tomatoes, and basil" }] },
      { day: "Wednesday, Sep 2", meals: [{ meal: "Dinner", menuItemId: "rosemary-dijon-pork-chops", notes: "Uses the prepared green beans and remaining baby potatoes" }] },
      { day: "Thursday, Sep 3", meals: [{ meal: "Dinner", menuItemId: "coconut-curry-shrimp", notes: "Finishes the bell peppers, snap peas, basil, and jasmine rice" }] },
      { day: "Friday, Sep 4", meals: [{ meal: "Dinner", menu: "🍽️ Eating out — choose grilled protein with vegetables and a light sauce", notes: "Short-life produce has already been used" }] },
      { day: "Saturday, Sep 5", meals: [{ meal: "Dinner", menuItemId: "chimichurri-steak-sweet-potato", notes: "Uses the prepared chimichurri and remaining mixed greens" }] },
    ],
  },
  {
    label: "Week 2 — Sep 6–12",
    days: [
      { day: "Sunday, Sep 6 — Prep Day", batchNotes: "Make a large pot of turkey chili · Cook jasmine rice and quinoa · Slice bell peppers, onions, carrots, cabbage, and bok choy · Mix salsa verde and citrus-herb marinade", meals: [{ meal: "Dinner", menuItemId: "turkey-chili", notes: "Freeze two extra portions for future lunches" }] },
      { day: "Monday, Sep 7", meals: [{ meal: "Dinner", menuItemId: "baked-cod-salsa-verde", notes: "Uses prepared salsa verde, cilantro, lime, and black beans" }] },
      { day: "Tuesday, Sep 8", meals: [{ meal: "Dinner", menuItemId: "chicken-fajita-bowl", notes: "Uses Sunday-prepped peppers, onions, rice, cilantro, and lime" }] },
      { day: "Wednesday, Sep 9", meals: [{ meal: "Dinner", menuItemId: "citrus-pork-brussels-sprouts", notes: "Uses the prepared citrus-herb marinade and quinoa" }] },
      { day: "Thursday, Sep 10", meals: [{ meal: "Dinner", menuItemId: "miso-glazed-salmon-bok-choy", notes: "Uses Sunday-prepped bok choy and jasmine rice" }] },
      { day: "Friday, Sep 11", meals: [{ meal: "Dinner", menu: "🍽️ Eating out — choose grilled protein with vegetables and dressing on the side", notes: "Refrigerator is clear of short-life ingredients" }] },
      { day: "Saturday, Sep 12", meals: [{ meal: "Dinner", menuItemId: "cajun-turkey-sweet-potato-hash", notes: "Finishes the bell peppers, onion, and remaining sweet potatoes" }] },
    ],
  },
];

export const wastePrevention = [
  { tactic: "Sunday produce prep", detail: "Vegetables and herbs are washed, portioned, and assigned to meals before they can be forgotten." },
  { tactic: "Shared staples", detail: "Rice, peppers, onions, carrots, citrus, cilantro, herbs, and greens are reused in distinct meals within each week." },
  { tactic: "Freezer safety net", detail: "Two portions of turkey chili are frozen on Sunday for later lunches instead of lingering in the refrigerator." },
  { tactic: "Friday dinner out", detail: "Perishable ingredients are scheduled by Thursday, leaving Friday flexible without creating waste." },
  { tactic: "Two shopping waves", detail: "Buy fresh produce and seafood each Sunday so nothing must last for the full two-week plan." },
];

// Shopping lists are generated from menuItems.js by buildShoppingLists().
export const shoppingLists = [];
