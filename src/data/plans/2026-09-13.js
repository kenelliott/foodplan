export const id = "2026-09-13";
export const label = "Sep 13 – Sep 26, 2026";

export const approach = {
  title: "Early-Fall Dinners with Flexible Sunday Prep",
  summary: "Two weeks of protein-forward dinners that rotate familiar meats and seafood while reusing vegetables, herbs, citrus, and grains before they spoil.",
  principles: [
    { title: "Prep once on Sunday", detail: "Wash and portion produce, cook versatile grains, and mix light sauces so the remaining dinners stay quick." },
    { title: "Rotate proteins and sides", detail: "Turkey, seafood, chicken, pork, and beef alternate without repeating the same featured vegetable or starch on consecutive nights." },
    { title: "Use delicate groceries first", detail: "Fresh seafood, leafy greens, herbs, and cut produce are scheduled before longer-lasting ingredients." },
    { title: "Keep Friday flexible", detail: "Friday remains dinner out, with short-life groceries used earlier in the week." },
  ],
};

export const weeks = [
  {
    label: "Week 1 — Sep 13–19",
    days: [
      { day: "Sunday, Sep 13 — Prep Day", batchNotes: "Make the turkey meatball soup · Cook jasmine rice and quinoa · Slice carrots, zucchini, cabbage, peppers, and green onions · Mix soy-ginger sauce and chimichurri", meals: [{ meal: "Dinner", menuItemId: "turkey-meatball-soup", notes: "Freeze two extra portions for future lunches" }] },
      { day: "Monday, Sep 14", meals: [{ meal: "Dinner", menuItemId: "baked-cod-salsa-verde", notes: "Uses fresh cilantro, lime, avocado, and black beans early in the week" }] },
      { day: "Tuesday, Sep 15", meals: [{ meal: "Dinner", menuItemId: "chicken-stirfry-cauliflower-rice", notes: "Uses Sunday-prepped carrots and peppers" }] },
      { day: "Wednesday, Sep 16", meals: [{ meal: "Dinner", menuItemId: "bbq-pork-chops-coleslaw", notes: "Uses the remaining carrots and prepared cabbage" }] },
      { day: "Thursday, Sep 17", meals: [{ meal: "Dinner", menuItemId: "soy-ginger-salmon-asparagus", notes: "Uses the prepared soy-ginger sauce, green onions, and jasmine rice" }] },
      { day: "Friday, Sep 18", meals: [{ meal: "Dinner", menu: "🍽️ Eating out — choose grilled protein with vegetables and a light sauce", notes: "Short-life produce has already been used" }] },
      { day: "Saturday, Sep 19", meals: [{ meal: "Dinner", menuItemId: "chimichurri-steak-sweet-potato", notes: "Uses the prepared chimichurri and closes the week with sturdy produce" }] },
    ],
  },
  {
    label: "Week 2 — Sep 20–26",
    days: [
      { day: "Sunday, Sep 20 — Prep Day", batchNotes: "Roast the chicken and root vegetables · Cook jasmine rice and quinoa · Wash arugula and lettuce · Slice carrots, cucumber, green onions, and Brussels sprouts · Mix lemon-herb dressing", meals: [{ meal: "Dinner", menuItemId: "herb-roasted-chicken-root-veg", notes: "Reserve extra herbs, lemon, and prepared vegetables for later dinners" }] },
      { day: "Monday, Sep 21", meals: [{ meal: "Dinner", menuItemId: "lemon-herb-shrimp-quinoa", notes: "Uses prepared quinoa, lemon, herbs, and arugula while freshest" }] },
      { day: "Tuesday, Sep 22", meals: [{ meal: "Dinner", menuItemId: "korean-beef-bowl", notes: "Uses Sunday-prepped rice, cucumber, carrots, and green onions" }] },
      { day: "Wednesday, Sep 23", meals: [{ meal: "Dinner", menuItemId: "herb-crusted-tilapia-roasted-potatoes", notes: "Roast the potatoes while the tilapia bakes" }] },
      { day: "Thursday, Sep 24", meals: [{ meal: "Dinner", menuItemId: "turkey-lettuce-wraps", notes: "Finishes the lettuce, carrots, and green onions" }] },
      { day: "Friday, Sep 25", meals: [{ meal: "Dinner", menu: "🍽️ Eating out — choose grilled protein with vegetables and dressing on the side", notes: "Refrigerator is clear of short-life ingredients" }] },
      { day: "Saturday, Sep 26", meals: [{ meal: "Dinner", menuItemId: "citrus-pork-brussels-sprouts", notes: "Finishes the Brussels sprouts, citrus, and remaining quinoa" }] },
    ],
  },
];

export const wastePrevention = [
  { tactic: "Sunday produce prep", detail: "Vegetables and herbs are washed, portioned, and assigned to meals before they can be forgotten." },
  { tactic: "Shared staples", detail: "Rice, quinoa, carrots, green onions, citrus, herbs, and greens are reused in distinct meals within each week." },
  { tactic: "Freezer safety net", detail: "Two portions of turkey meatball soup are frozen on Sunday for later lunches instead of lingering in the refrigerator." },
  { tactic: "Friday dinner out", detail: "Perishable ingredients are scheduled by Thursday, leaving Friday flexible without creating waste." },
  { tactic: "Two shopping waves", detail: "Buy fresh produce and seafood each Sunday so nothing must last for the full two-week plan." },
];

// Shopping lists are generated from menuItems.js by buildShoppingLists().
export const shoppingLists = [];
