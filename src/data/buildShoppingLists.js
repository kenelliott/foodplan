import { getMenuItem } from "./menuItems";

/**
 * Parse a quantity string into a numeric value and unit.
 * Examples: "200g" → { value: 200, unit: "g" }
 *           "1 large" → { value: 1, unit: "large" }
 *           "1/2" → { value: 0.5, unit: "" }
 *           "2 stalks" → { value: 2, unit: "stalks" }
 *           "75g dry" → { value: 75, unit: "g dry" }
 */
function parseQuantity(qty) {
  // Handle fractions like "1/2"
  const fractionMatch = qty.match(/^(\d+)\/(\d+)\s*(.*)/);
  if (fractionMatch) {
    return {
      value: Number(fractionMatch[1]) / Number(fractionMatch[2]),
      unit: fractionMatch[3].trim(),
    };
  }

  const match = qty.match(/^([\d.]+)\s*(.*)/);
  if (match) {
    return { value: Number(match[1]), unit: match[2].trim() };
  }
  return { value: 1, unit: qty };
}

function formatQuantity(value, unit) {
  // Show clean numbers (no trailing .0)
  const num = Number.isInteger(value) ? value : parseFloat(value.toFixed(1));
  return unit ? `${num} ${unit}` : `${num}`;
}

/**
 * Build shopping lists from a plan's weeks, scaled by number of people.
 * Returns [{ label, categories: [{ name, items: string[] }] }]
 */
export function buildShoppingLists(weeks, servings = 1) {
  return weeks.map((week, wi) => {
    // Collect all ingredients for this week
    const ingredientMap = new Map(); // key: ingredient name → { value, unit }

    for (const day of week.days) {
      for (const meal of day.meals) {
        if (!meal.menuItemId) continue;
        const menuItem = getMenuItem(meal.menuItemId);
        if (!menuItem) continue;

        for (const ing of menuItem.ingredients) {
          const parsed = parseQuantity(ing.quantity);
          const scaled = parsed.value * servings;
          const existing = ingredientMap.get(ing.name);
          if (existing && existing.unit === parsed.unit) {
            existing.value += scaled;
          } else {
            ingredientMap.set(ing.name, { value: scaled, unit: parsed.unit });
          }
        }
      }
    }

    // Group into categories
    const produce = [];
    const protein = [];
    const pantry = [];

    for (const [name, { value, unit }] of ingredientMap) {
      const item = `${name} (${formatQuantity(value, unit)})`;
      const lower = name.toLowerCase();

      if (
        isProtein(lower)
      ) {
        protein.push(item);
      } else if (isPantry(lower)) {
        pantry.push(item);
      } else {
        produce.push(item);
      }
    }

    const categories = [];
    if (produce.length) categories.push({ name: "Produce", items: produce });
    if (protein.length) categories.push({ name: "Protein", items: protein });
    if (pantry.length) categories.push({ name: "Pantry / Dry", items: pantry });

    return {
      label: `${week.label} — Buy Sunday`,
      categories,
    };
  });
}

function isProtein(name) {
  const keywords = [
    "chicken", "turkey", "salmon", "cod", "fish", "shrimp", "steak",
    "pork", "beef", "ground", "fillet", "thigh", "breast",
  ];
  return keywords.some((k) => name.includes(k));
}

function isPantry(name) {
  const keywords = [
    "rice", "quinoa", "couscous", "canned", "tortilla", "broth",
    "salsa", "edamame", "pasta", "penne", "lentil", "oat",
  ];
  return keywords.some((k) => name.includes(k));
}
