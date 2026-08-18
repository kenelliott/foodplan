export const id = "2026-08-16";
export const label = "Aug 16 – Aug 29, 2026";

export const approach = {
  title: "Late-Summer Variety with Low-Waste Prep",
  summary: "Two weeks of protein-forward dinners that reuse produce and pantry staples without repeating the same protein, featured vegetable, or grain on consecutive nights.",
  principles: [
    { title: "Prep once on Sunday", detail: "Wash and portion produce, cook versatile grains, and mix light sauces so weeknight dinners stay fast." },
    { title: "Alternate proteins", detail: "Chicken, beef, seafood, turkey, and pork rotate throughout each week." },
    { title: "Reuse ingredients intentionally", detail: "Rice, peppers, onions, citrus, herbs, and greens appear in different preparations before they spoil." },
    { title: "Keep Friday flexible", detail: "Friday dinner remains eating out, with short-life ingredients scheduled earlier in the week." },
  ],
};

export const weeks = [
  {
    label: "Week 1 — Aug 16–22",
    days: [
      { day: "Sunday, Aug 16 — Prep Day", batchNotes: "Cook brown and jasmine rice · Wash and cut broccoli, bell peppers, zucchini, asparagus, carrots, and green onions · Mix lemon-herb drizzle and soy-ginger sauce", meals: [{ meal: "Dinner", menuItemId: "grilled-chicken-roasted-veg-rice", notes: "Save extra rice and prepped vegetables for later meals" }] },
      { day: "Monday, Aug 17", meals: [{ meal: "Dinner", menuItemId: "korean-beef-bowl", notes: "Uses Sunday-prepped rice, carrots, and green onion" }] },
      { day: "Tuesday, Aug 18", meals: [{ meal: "Dinner", menuItemId: "soy-ginger-salmon-asparagus", notes: "Uses the prepared soy-ginger sauce and rice" }] },
      { day: "Wednesday, Aug 19", meals: [{ meal: "Dinner", menuItemId: "turkey-lettuce-wraps", notes: "Uses remaining carrots and green onion" }] },
      { day: "Thursday, Aug 20", meals: [{ meal: "Dinner", menuItemId: "citrus-pork-brussels-sprouts", notes: "Cook only the quinoa needed; reserve extra citrus for Saturday" }] },
      { day: "Friday, Aug 21", meals: [{ meal: "Dinner", menu: "🍽️ Eating out — choose grilled protein with vegetables and a light sauce", notes: "Short-life produce has already been used" }] },
      { day: "Saturday, Aug 22", meals: [{ meal: "Dinner", menuItemId: "sheet-pan-shrimp-veg", notes: "Finishes zucchini, tomatoes, red onion, and citrus" }] },
    ],
  },
  {
    label: "Week 2 — Aug 23–29",
    days: [
      { day: "Sunday, Aug 23 — Prep Day", batchNotes: "Make a large pot of turkey chili · Cook jasmine and brown rice · Slice bell peppers, onions, carrots, mushrooms, and cabbage · Mix salsa verde and lime-cilantro dressing", meals: [{ meal: "Dinner", menuItemId: "turkey-chili", notes: "Freeze two portions for future lunches" }] },
      { day: "Monday, Aug 24", meals: [{ meal: "Dinner", menuItemId: "baked-cod-salsa-verde", notes: "Uses prepared salsa verde, cilantro, lime, and black beans" }] },
      { day: "Tuesday, Aug 25", meals: [{ meal: "Dinner", menuItemId: "chicken-fajita-bowl", notes: "Uses Sunday-prepped peppers, onions, rice, cilantro, and lime" }] },
      { day: "Wednesday, Aug 26", meals: [{ meal: "Dinner", menuItemId: "rosemary-balsamic-beef-mushrooms", notes: "Roast mushrooms while the sweet potatoes cook" }] },
      { day: "Thursday, Aug 27", meals: [{ meal: "Dinner", menuItemId: "honey-lime-tilapia-mango-slaw", notes: "Uses prepared cabbage, cilantro, and lime" }] },
      { day: "Friday, Aug 28", meals: [{ meal: "Dinner", menu: "🍽️ Eating out — choose grilled protein with vegetables and dressing on the side", notes: "Refrigerator is clear of short-life ingredients" }] },
      { day: "Saturday, Aug 29", meals: [{ meal: "Dinner", menuItemId: "mustard-herb-pork-roasted-carrots", notes: "Finishes carrots and the remaining brown rice" }] },
    ],
  },
];

export const wastePrevention = [
  { tactic: "Sunday produce prep", detail: "Vegetables and herbs are washed, portioned, and assigned to meals before they can be forgotten." },
  { tactic: "Shared staples", detail: "Rice, peppers, onions, carrots, citrus, cilantro, and cabbage are reused in distinct meals within each week." },
  { tactic: "Freezer safety net", detail: "Two portions of turkey chili are frozen on Sunday for later lunches instead of lingering in the refrigerator." },
  { tactic: "Friday dinner out", detail: "Perishable ingredients are scheduled by Thursday, leaving Friday flexible without creating waste." },
  { tactic: "Two shopping waves", detail: "Buy fresh produce and seafood each Sunday so nothing must last for the full two-week plan." },
];

// Shopping lists are generated from menuItems.js by buildShoppingLists().
export const shoppingLists = [];
