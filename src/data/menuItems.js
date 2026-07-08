const menuItems = [
  {
    id: "grilled-chicken-roasted-veg-rice",
    title: "Grilled Chicken with Roasted Vegetables & Brown Rice",
    description:
      "Juicy grilled chicken breast served over brown rice with a sheet pan of roasted broccoli, bell peppers, and zucchini, finished with a lemon-herb drizzle.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Broccoli", quantity: "150g" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Zucchini", quantity: "1" },
      { name: "Brown Rice", quantity: "75g dry" },
    ],
  },
  {
    id: "soy-ginger-salmon-asparagus",
    title: "Soy-Ginger Salmon with Roasted Asparagus",
    description:
      "Baked salmon glazed with a light soy-ginger sauce, paired with roasted asparagus and jasmine rice.",
    ingredients: [
      { name: "Salmon Fillet", quantity: "180g" },
      { name: "Asparagus", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Green Onion", quantity: "2 stalks" },
    ],
  },
  {
    id: "turkey-lettuce-wraps",
    title: "Ground Turkey Lettuce Wraps",
    description:
      "Seasoned lean ground turkey with garlic, ginger, and soy sauce served in crisp butter lettuce cups with shredded carrots and green onion. Steamed edamame on the side.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "250g" },
      { name: "Butter Lettuce", quantity: "1 head" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Green Onion", quantity: "3 stalks" },
      { name: "Edamame", quantity: "150g" },
    ],
  },
  {
    id: "chimichurri-steak-sweet-potato",
    title: "Chimichurri Steak with Roasted Sweet Potatoes",
    description:
      "Pan-seared flank steak topped with fresh chimichurri sauce, served alongside roasted sweet potato wedges and a simple side salad.",
    ingredients: [
      { name: "Flank Steak", quantity: "200g" },
      { name: "Sweet Potato", quantity: "1 large" },
      { name: "Mixed Greens", quantity: "80g" },
      { name: "Fresh Parsley", quantity: "1/2 cup" },
    ],
  },
  {
    id: "chicken-stirfry-cauliflower-rice",
    title: "Chicken Stir-Fry with Cauliflower Rice",
    description:
      "Quick chicken thigh stir-fry with snap peas, carrots, and bell peppers in a light soy-garlic sauce, served over cauliflower rice.",
    ingredients: [
      { name: "Chicken Thighs (boneless, skinless)", quantity: "200g" },
      { name: "Cauliflower Rice", quantity: "200g" },
      { name: "Snap Peas", quantity: "100g" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Bell Pepper", quantity: "1" },
    ],
  },
  {
    id: "baked-cod-salsa-verde",
    title: "Baked Cod with Salsa Verde & Black Beans",
    description:
      "Flaky baked cod topped with a bright tomatillo salsa verde, served with seasoned black beans and sliced avocado.",
    ingredients: [
      { name: "Cod Fillet", quantity: "180g" },
      { name: "Salsa Verde", quantity: "60ml" },
      { name: "Canned Black Beans", quantity: "200g drained" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Lime", quantity: "1" },
      { name: "Cilantro", quantity: "2 tbsp" },
    ],
  },
  {
    id: "sheet-pan-shrimp-veg",
    title: "Sheet Pan Shrimp & Roasted Vegetables",
    description:
      "Garlic-seasoned shrimp roasted on a sheet pan with cherry tomatoes, zucchini, and red onion, served over couscous with lemon.",
    ingredients: [
      { name: "Shrimp (peeled, deveined)", quantity: "200g" },
      { name: "Cherry Tomatoes", quantity: "150g" },
      { name: "Zucchini", quantity: "1" },
      { name: "Red Onion", quantity: "1/2" },
      { name: "Couscous", quantity: "75g dry" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "turkey-chili",
    title: "Turkey Chili",
    description:
      "Hearty one-pot chili with lean ground turkey, kidney beans, black beans, and diced tomatoes seasoned with cumin, chili powder, and smoked paprika.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "250g" },
      { name: "Canned Kidney Beans", quantity: "200g drained" },
      { name: "Canned Black Beans", quantity: "200g drained" },
      { name: "Canned Diced Tomatoes", quantity: "400g" },
      { name: "Onion", quantity: "1" },
    ],
  },
  {
    id: "citrus-pork-brussels-sprouts",
    title: "Citrus-Herb Grilled Pork Tenderloin with Roasted Brussels Sprouts",
    description:
      "Lean pork tenderloin marinated in citrus and herbs, grilled and sliced, served with roasted Brussels sprouts and quinoa.",
    ingredients: [
      { name: "Pork Tenderloin", quantity: "200g" },
      { name: "Brussels Sprouts", quantity: "200g" },
      { name: "Quinoa", quantity: "75g dry" },
    ],
  },
  {
    id: "chicken-tacos-mango-salsa",
    title: "Black Bean & Chicken Tacos with Mango Salsa",
    description:
      "Seasoned shredded chicken and black beans in corn tortillas, topped with a fresh mango-cilantro-lime salsa and sliced avocado.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Canned Black Beans", quantity: "150g drained" },
      { name: "Corn Tortillas", quantity: "4 small" },
      { name: "Mango", quantity: "1/2" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Cilantro", quantity: "2 tbsp" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "lemon-garlic-chicken-green-beans",
    title: "Lemon-Garlic Chicken Thighs with Sautéed Green Beans",
    description:
      "Crispy-skinned chicken thighs baked with lemon and garlic, served with sautéed green beans and brown rice.",
    ingredients: [
      { name: "Chicken Thighs (bone-in, skin-on)", quantity: "250g" },
      { name: "Green Beans", quantity: "200g" },
      { name: "Brown Rice", quantity: "75g dry" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "turkey-meatball-soup",
    title: "Turkey Meatball & Vegetable Soup",
    description:
      "Light broth-based soup loaded with lean turkey meatballs, zucchini, carrots, celery, diced tomatoes, and spinach.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "250g" },
      { name: "Zucchini", quantity: "1 medium" },
      { name: "Carrots", quantity: "2 medium" },
      { name: "Celery", quantity: "2 stalks" },
      { name: "Canned Diced Tomatoes", quantity: "400g" },
      { name: "Fresh Spinach", quantity: "80g" },
      { name: "Chicken Broth (low-sodium)", quantity: "250ml" },
      { name: "Onion", quantity: "1" },
    ],
  },
];

export default menuItems;

/** Look up a menu item by id */
export const getMenuItem = (id) => menuItems.find((item) => item.id === id);
