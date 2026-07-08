export const id = "2026-07-19";
export const label = "Jul 19 – Aug 1, 2026";

export const approach = {
  title: "Gradual Portion Reduction",
  summary:
    "After two weeks of healthy eating with generous portions, this plan begins a smart, gradual calorie reduction to promote weight loss without triggering cravings or the urge to snack.",
  principles: [
    {
      title: "Week 1: reduce portions 15–20%",
      detail:
        "Grain servings drop from ~1.5 cups to ~1 cup cooked. Protein and vegetable portions stay the same — they keep you full.",
    },
    {
      title: "Week 2: reduce another 10%",
      detail:
        "Grain servings drop to ~¾ cup. Some meals swap grains for extra vegetables or go grain-free (lettuce wraps, salad bases).",
    },
    {
      title: "Add volume with vegetables",
      detail:
        "Broccoli, cauliflower, leafy greens, and zucchini replace the volume lost from reducing starches — almost zero calorie cost.",
    },
    {
      title: "Measure healthy fats",
      detail:
        "Avocado, tahini, olive oil are calorie-dense. Use half an avocado, 1 tbsp oil, measured nut butter instead of pouring freely.",
    },
    {
      title: "Keep Friday dinner out",
      detail:
        "Deprivation kills adherence. Choose grilled protein + vegetables and skip the bread basket.",
    },
  ],
};

export const weeks = [
  {
    label: "Week 1",
    days: [
      {
        day: "Sunday — Prep Day",
        batchNotes:
          "Batch cook: Grill 2 lb chicken breast · Cook 3 cups dry brown rice · Roast sheet pan vegetables (broccoli, bell peppers, zucchini, cauliflower)",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "grilled-chicken-roasted-veg-rice",
            notes: "Save remaining chicken, veggies, and rice",
          },
        ],
      },
      {
        day: "Monday",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "chicken-stirfry-cauliflower-rice",
            notes: "Cauliflower rice stretches the grain portion; finishes chicken",
          },
        ],
      },
      {
        day: "Tuesday",
        meals: [
          {
            meal: "Dinner",
            menu: "Black bean & sweet potato tacos — black beans, roasted sweet potato, 2 corn tortillas, lettuce wraps on the side, ½ avocado, salsa",
            notes: "Lettuce wraps add volume without calories",
          },
        ],
      },
      {
        day: "Wednesday",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "soy-ginger-salmon-asparagus",
            notes: "—",
          },
        ],
      },
      {
        day: "Thursday",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "turkey-meatball-soup",
            notes: "Make a large pot (6+ servings); hearty, high-protein, low-starch",
          },
        ],
      },
      {
        day: "Friday",
        meals: [
          {
            meal: "Dinner",
            menu: "🍽️ Eating out — choose grilled protein + vegetables, skip the bread basket",
            notes: "Fridge should be clear of short-life perishables",
          },
        ],
      },
      {
        day: "Saturday",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "turkey-lettuce-wraps",
            notes: "—",
          },
        ],
      },
    ],
  },
  {
    label: "Week 2",
    days: [
      {
        day: "Sunday — Prep Day",
        batchNotes:
          "Batch cook: Slow-cook 2 lb skinless chicken thighs with garlic & herbs · Cook 2 cups dry quinoa · Roast cauliflower, Brussels sprouts, sweet potato",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "grilled-chicken-roasted-veg-rice",
            notes: "Save remaining chicken and quinoa",
          },
        ],
      },
      {
        day: "Monday",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "chicken-stirfry-cauliflower-rice",
            notes: "Finishes most of the chicken",
          },
        ],
      },
      {
        day: "Tuesday",
        meals: [
          {
            meal: "Dinner",
            menu: "Sheet pan white fish (cod or tilapia, 6 oz) with roasted zucchini, cherry tomatoes, red onion, garlic, Italian seasoning",
            notes: "Light and lean",
          },
        ],
      },
      {
        day: "Wednesday",
        meals: [
          {
            meal: "Dinner",
            menuItemId: "turkey-chili",
            notes: "Make a large pot (6+ servings); high protein, high fiber",
          },
        ],
      },
      {
        day: "Thursday",
        meals: [
          {
            meal: "Dinner",
            menu: "Zucchini noodle pasta — spiralized zucchini, sautéed cherry tomatoes, garlic, olive oil (1 tbsp), grilled shrimp, parmesan (1 tbsp)",
            notes: "Zucchini replaces pasta entirely",
          },
        ],
      },
      {
        day: "Friday",
        meals: [
          {
            meal: "Dinner",
            menu: "🍽️ Eating out — grilled protein + vegetables, ask for dressing on the side",
            notes: "Fridge should be clear of short-life perishables",
          },
        ],
      },
      {
        day: "Saturday",
        meals: [
          {
            meal: "Dinner",
            menu: "Grilled white fish with roasted cauliflower and a large green salad with lemon vinaigrette",
            notes: "Light and clean to close the plan",
          },
        ],
      },
    ],
  },
];

export const wastePrevention = [
  {
    tactic: "Smaller grain batches",
    detail:
      "Brown rice (W1, 3 cups dry) and quinoa (W2, 2 cups dry) in reduced quantities — last 2–3 days each",
  },
  {
    tactic: "Protein chaining",
    detail:
      "Each protein is cooked once and appears in 2–3 dinners before it's gone",
  },
  {
    tactic: "Freezer safety net",
    detail:
      "Turkey meatball soup (W1) and turkey chili (W2) are frozen on Friday to prevent spoilage",
  },
  {
    tactic: "Friday dinner out",
    detail:
      "Dinner out on Friday — fridge is clear of short-life perishables",
  },
  {
    tactic: "Produce in 2 waves",
    detail: "Fresh produce bought each Sunday, used within 5 days",
  },
];

export const shoppingLists = [
  {
    label: "Week 1 — Buy Sunday",
    categories: [
      {
        name: "Produce",
        items:
          "Sweet potatoes (2), bell peppers (3), broccoli (2 heads), zucchini (3), cauliflower (1 head), snap peas (8 oz), carrots (1 lb bag), celery (1 bunch), avocado (1), spinach (1 bag), asparagus (1 bunch), lemons (1), green onions (1 bunch), butter lettuce (1 head), fresh ginger root, garlic, onions (2)",
      },
      {
        name: "Protein",
        items:
          "Chicken breast (2 lb), salmon fillet (6 oz), ground turkey (1.5 lb)",
      },
      {
        name: "Pantry / Dry",
        items:
          "Brown rice, canned black beans (2), canned diced tomatoes (2), corn tortillas (small pack), salsa, soy sauce, olive oil, edamame (frozen), cauliflower rice (frozen, 1 bag)",
      },
    ],
  },
  {
    label: "Week 2 — Buy Sunday",
    categories: [
      {
        name: "Produce",
        items:
          "Cauliflower (2), Brussels sprouts (1 lb), sweet potato (1), broccoli (1 head), zucchini (3), cherry tomatoes (1 pint), red onion (1), salad greens (1 container), lemons (1), fresh ginger root, garlic, onions (2)",
      },
      {
        name: "Protein",
        items:
          "Chicken thighs, skinless (2 lb), white fish fillets (1 lb), lean ground turkey (1.5 lb), shrimp (1 lb)",
      },
      {
        name: "Pantry / Dry",
        items:
          "Quinoa, canned kidney beans (1), canned black beans (1), canned diced tomatoes (2), olive oil, low-sodium soy sauce, Italian seasoning, chili powder, cumin, smoked paprika",
      },
      {
        name: "Dairy / Other",
        items:
          "Parmesan (small block)",
      },
    ],
  },
];
