import { describe, expect, it } from "vitest";
import { buildShoppingLists } from "./buildShoppingLists";

// Minimal weeks structure referencing real menuItem IDs
const weeks = [
  {
    label: "Week 1",
    days: [
      {
        day: "Sunday",
        meals: [{ meal: "Dinner", menuItemId: "grilled-chicken-roasted-veg-rice", notes: "" }],
      },
      {
        day: "Monday",
        meals: [{ meal: "Dinner", menuItemId: "turkey-chili", notes: "" }],
      },
      {
        day: "Friday",
        meals: [{ meal: "Dinner", menu: "🍽️ Eating out", notes: "" }],
      },
    ],
  },
];

describe("buildShoppingLists", () => {
  it("returns one list per week", () => {
    const result = buildShoppingLists(weeks);
    expect(result).toHaveLength(1);
    expect(result[0].label).toBe("Week 1 — Buy Sunday");
  });

  it("groups ingredients into categories", () => {
    const result = buildShoppingLists(weeks);
    const names = result[0].categories.map((c) => c.name);
    expect(names).toContain("Produce");
    expect(names).toContain("Protein");
    expect(names).toContain("Pantry / Dry");
  });

  it("aggregates ingredients from multiple meals", () => {
    const result = buildShoppingLists(weeks);
    const produce = result[0].categories.find((c) => c.name === "Produce");
    // Onion appears in turkey-chili, broccoli in grilled-chicken
    expect(produce.items.some((i) => i.includes("Broccoli"))).toBe(true);
    expect(produce.items.some((i) => i.includes("Onion"))).toBe(true);
  });

  it("skips meals without menuItemId (e.g. eating out)", () => {
    const result = buildShoppingLists(weeks);
    const allItems = result[0].categories.flatMap((c) => c.items).join(", ");
    expect(allItems).not.toMatch(/Eating out/);
  });

  it("scales quantities by servings", () => {
    const result1 = buildShoppingLists(weeks, 1);
    const result2 = buildShoppingLists(weeks, 2);

    const protein1 = result1[0].categories.find((c) => c.name === "Protein");
    const protein2 = result2[0].categories.find((c) => c.name === "Protein");

    // Chicken Breast: 200g for 1 person, 400g for 2
    expect(protein1.items.some((i) => i.includes("Chicken Breast (200 g)"))).toBe(true);
    expect(protein2.items.some((i) => i.includes("Chicken Breast (400 g)"))).toBe(true);
  });

  it("aggregates same ingredient across meals", () => {
    // Both grilled-chicken and turkey-chili have ground turkey / chicken
    // Use a week with two meals using the same ingredient
    const twoTurkeyWeeks = [
      {
        label: "Week 1",
        days: [
          {
            day: "Monday",
            meals: [{ meal: "Dinner", menuItemId: "turkey-chili", notes: "" }],
          },
          {
            day: "Tuesday",
            meals: [{ meal: "Dinner", menuItemId: "turkey-meatball-soup", notes: "" }],
          },
        ],
      },
    ];
    const result = buildShoppingLists(twoTurkeyWeeks, 1);
    const protein = result[0].categories.find((c) => c.name === "Protein");
    // Both have 250g Lean Ground Turkey → should be 500g
    expect(protein.items.some((i) => i.includes("Lean Ground Turkey (500 g)"))).toBe(true);
  });
});
