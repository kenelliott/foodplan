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
  {
    id: "teriyaki-chicken-broccoli-rice",
    title: "Teriyaki Chicken with Steamed Broccoli & Rice",
    description:
      "Grilled chicken thighs glazed with a light teriyaki sauce, served with steamed broccoli and jasmine rice.",
    ingredients: [
      { name: "Chicken Thighs (boneless, skinless)", quantity: "200g" },
      { name: "Broccoli", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Green Onion", quantity: "2 stalks" },
    ],
  },
  {
    id: "herb-crusted-tilapia-roasted-potatoes",
    title: "Herb-Crusted Tilapia with Roasted Potatoes",
    description:
      "Panko-and-herb-crusted tilapia baked until golden, served with roasted baby potatoes and a lemon wedge.",
    ingredients: [
      { name: "Tilapia Fillet", quantity: "180g" },
      { name: "Baby Potatoes", quantity: "200g" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "korean-beef-bowl",
    title: "Korean Beef Bowl",
    description:
      "Thinly sliced beef bulgogi-style with a sweet soy-ginger glaze, served over rice with pickled cucumber and shredded carrots.",
    ingredients: [
      { name: "Beef Sirloin", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Green Onion", quantity: "2 stalks" },
    ],
  },
  {
    id: "lemon-herb-shrimp-quinoa",
    title: "Lemon-Herb Shrimp with Quinoa & Arugula",
    description:
      "Sautéed shrimp tossed with lemon, garlic, and fresh herbs, served over quinoa with a bed of peppery arugula.",
    ingredients: [
      { name: "Shrimp (peeled, deveined)", quantity: "200g" },
      { name: "Quinoa", quantity: "75g dry" },
      { name: "Arugula", quantity: "60g" },
      { name: "Lemon", quantity: "1" },
      { name: "Cherry Tomatoes", quantity: "100g" },
    ],
  },
  {
    id: "bbq-pork-chops-coleslaw",
    title: "BBQ Pork Chops with Coleslaw",
    description:
      "Grilled bone-in pork chops with a light smoky BBQ glaze, served with a tangy vinegar-based coleslaw.",
    ingredients: [
      { name: "Pork Chops (bone-in)", quantity: "250g" },
      { name: "Cabbage", quantity: "150g" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Red Onion", quantity: "1/4" },
    ],
  },
  {
    id: "garlic-butter-steak-asparagus",
    title: "Garlic Butter Steak with Roasted Asparagus",
    description:
      "Pan-seared NY strip steak finished with a light garlic-herb butter, paired with roasted asparagus spears.",
    ingredients: [
      { name: "NY Strip Steak", quantity: "200g" },
      { name: "Asparagus", quantity: "200g" },
      { name: "Baby Potatoes", quantity: "150g" },
    ],
  },
  {
    id: "chicken-fajita-bowl",
    title: "Chicken Fajita Bowl",
    description:
      "Seared chicken strips with sautéed bell peppers and onions, served over cilantro-lime rice with salsa and avocado.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Bell Pepper", quantity: "2" },
      { name: "Onion", quantity: "1" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Lime", quantity: "1" },
      { name: "Cilantro", quantity: "2 tbsp" },
    ],
  },
  {
    id: "miso-glazed-salmon-bok-choy",
    title: "Miso-Glazed Salmon with Bok Choy",
    description:
      "Salmon fillet broiled with a light miso glaze, served with sautéed baby bok choy and steamed jasmine rice.",
    ingredients: [
      { name: "Salmon Fillet", quantity: "180g" },
      { name: "Baby Bok Choy", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
    ],
  },
  {
    id: "mediterranean-chicken-orzo",
    title: "Mediterranean Chicken with Orzo & Tomatoes",
    description:
      "Grilled chicken breast over orzo tossed with sun-dried tomatoes, kalamata olives, and a lemon-oregano vinaigrette.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Orzo", quantity: "75g dry" },
      { name: "Cherry Tomatoes", quantity: "100g" },
      { name: "Cucumber", quantity: "1/2" },
      { name: "Red Onion", quantity: "1/4" },
    ],
  },
  {
    id: "cajun-shrimp-grits",
    title: "Cajun Shrimp & Grits",
    description:
      "Spicy cajun-seasoned shrimp served over creamy stone-ground grits with sautéed bell peppers and green onion.",
    ingredients: [
      { name: "Shrimp (peeled, deveined)", quantity: "200g" },
      { name: "Stone-Ground Grits", quantity: "60g dry" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Green Onion", quantity: "3 stalks" },
    ],
  },
  {
    id: "thai-basil-chicken",
    title: "Thai Basil Chicken",
    description:
      "Stir-fried ground chicken with Thai basil, fresh chilies, and green beans in a light soy-oyster sauce, served over jasmine rice.",
    ingredients: [
      { name: "Ground Chicken", quantity: "250g" },
      { name: "Green Beans", quantity: "150g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Fresh Basil", quantity: "1/2 cup" },
      { name: "Red Onion", quantity: "1/2" },
    ],
  },
  {
    id: "honey-lime-tilapia-mango-slaw",
    title: "Honey-Lime Tilapia with Mango Slaw",
    description:
      "Pan-seared tilapia with a honey-lime glaze, served with a fresh mango and cabbage slaw.",
    ingredients: [
      { name: "Tilapia Fillet", quantity: "180g" },
      { name: "Mango", quantity: "1/2" },
      { name: "Cabbage", quantity: "120g" },
      { name: "Cilantro", quantity: "2 tbsp" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "cumin-lime-chicken-black-bean-rice",
    title: "Cumin-Lime Chicken with Black Bean Rice",
    description:
      "Grilled cumin-rubbed chicken breast over black bean rice with a fresh lime-cilantro topping.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Canned Black Beans", quantity: "150g drained" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Lime", quantity: "1" },
      { name: "Cilantro", quantity: "2 tbsp" },
    ],
  },
  {
    id: "harissa-lamb-chops-couscous",
    title: "Harissa Lamb Chops with Couscous",
    description:
      "Broiled lamb loin chops rubbed with harissa paste, served over fluffy couscous with roasted cherry tomatoes.",
    ingredients: [
      { name: "Lamb Loin Chops", quantity: "200g" },
      { name: "Couscous", quantity: "75g dry" },
      { name: "Cherry Tomatoes", quantity: "150g" },
      { name: "Cucumber", quantity: "1/2" },
    ],
  },
  {
    id: "ginger-scallion-cod-rice",
    title: "Ginger-Scallion Steamed Cod with Rice",
    description:
      "Delicate cod fillet steamed with ginger and scallions, drizzled with a light soy-sesame sauce over jasmine rice.",
    ingredients: [
      { name: "Cod Fillet", quantity: "180g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Green Onion", quantity: "4 stalks" },
      { name: "Baby Bok Choy", quantity: "150g" },
    ],
  },
  {
    id: "jerk-chicken-plantains",
    title: "Jerk Chicken with Roasted Plantains",
    description:
      "Oven-roasted jerk-spiced chicken thighs with roasted sweet plantains and a fresh cabbage slaw.",
    ingredients: [
      { name: "Chicken Thighs (bone-in, skin-on)", quantity: "250g" },
      { name: "Plantains", quantity: "1 large" },
      { name: "Cabbage", quantity: "120g" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "seared-tuna-sesame-salad",
    title: "Seared Tuna Steak with Sesame Salad",
    description:
      "Sesame-crusted seared ahi tuna over a crisp salad of mixed greens, cucumber, edamame, and a citrus-soy dressing.",
    ingredients: [
      { name: "Ahi Tuna Steak", quantity: "180g" },
      { name: "Mixed Greens", quantity: "100g" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Edamame", quantity: "100g" },
      { name: "Avocado", quantity: "1/2" },
    ],
  },
  {
    id: "italian-sausage-peppers-polenta",
    title: "Italian Sausage & Peppers with Polenta",
    description:
      "Sautéed Italian turkey sausage with bell peppers and onions in a light marinara, served over creamy polenta.",
    ingredients: [
      { name: "Italian Turkey Sausage", quantity: "200g" },
      { name: "Bell Pepper", quantity: "2" },
      { name: "Onion", quantity: "1" },
      { name: "Polenta", quantity: "75g dry" },
      { name: "Canned Diced Tomatoes", quantity: "200g" },
    ],
  },
  {
    id: "mustard-herb-pork-roasted-carrots",
    title: "Mustard-Herb Pork Tenderloin with Roasted Carrots",
    description:
      "Pork tenderloin coated in a light whole-grain mustard and herb crust, roasted alongside honey-glazed carrots.",
    ingredients: [
      { name: "Pork Tenderloin", quantity: "200g" },
      { name: "Carrots", quantity: "3 medium" },
      { name: "Brown Rice", quantity: "75g dry" },
    ],
  },
  {
    id: "chicken-shawarma-bowl",
    title: "Chicken Shawarma Bowl",
    description:
      "Spiced grilled chicken shawarma over basmati rice with pickled red onion, cucumber-tomato salad, and a tahini drizzle.",
    ingredients: [
      { name: "Chicken Thighs (boneless, skinless)", quantity: "200g" },
      { name: "Basmati Rice", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Cherry Tomatoes", quantity: "100g" },
      { name: "Red Onion", quantity: "1/4" },
    ],
  },
  {
    id: "blackened-mahi-mahi-mango-rice",
    title: "Blackened Mahi-Mahi with Mango Rice",
    description:
      "Cajun-blackened mahi-mahi fillet served over coconut-scented rice with a fresh mango-cilantro relish.",
    ingredients: [
      { name: "Mahi-Mahi Fillet", quantity: "180g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Mango", quantity: "1/2" },
      { name: "Cilantro", quantity: "2 tbsp" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "rosemary-balsamic-beef-mushrooms",
    title: "Rosemary-Balsamic Beef with Roasted Mushrooms",
    description:
      "Seared beef medallions finished with a rosemary-balsamic reduction, served with roasted cremini mushrooms and mashed sweet potato.",
    ingredients: [
      { name: "Beef Tenderloin Medallions", quantity: "200g" },
      { name: "Cremini Mushrooms", quantity: "200g" },
      { name: "Sweet Potato", quantity: "1 large" },
    ],
  },
  {
    id: "coconut-curry-shrimp",
    title: "Coconut Curry Shrimp",
    description:
      "Shrimp simmered in a light coconut curry with bell peppers, snap peas, and fresh basil, served over jasmine rice.",
    ingredients: [
      { name: "Shrimp (peeled, deveined)", quantity: "200g" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Snap Peas", quantity: "100g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Fresh Basil", quantity: "1/4 cup" },
    ],
  },
  {
    id: "turkey-stuffed-peppers",
    title: "Turkey-Stuffed Bell Peppers",
    description:
      "Bell peppers stuffed with seasoned lean ground turkey, rice, diced tomatoes, and topped with a light sprinkle of cheese.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "200g" },
      { name: "Bell Pepper", quantity: "2" },
      { name: "Brown Rice", quantity: "50g dry" },
      { name: "Canned Diced Tomatoes", quantity: "200g" },
      { name: "Onion", quantity: "1/2" },
    ],
  },
  {
    id: "lemongrass-chicken-rice-noodles",
    title: "Lemongrass Chicken with Rice Noodles",
    description:
      "Grilled lemongrass-marinated chicken thighs served over rice noodles with fresh herbs, cucumber, and a light nuoc cham dressing.",
    ingredients: [
      { name: "Chicken Thighs (boneless, skinless)", quantity: "200g" },
      { name: "Rice Noodles", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Fresh Basil", quantity: "1/4 cup" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "ancho-chile-beef-tacos",
    title: "Ancho Chile Beef Tacos",
    description:
      "Slow-braised ancho-chile-rubbed beef in corn tortillas with pickled jalapeños, radish, and cilantro.",
    ingredients: [
      { name: "Beef Chuck", quantity: "200g" },
      { name: "Corn Tortillas", quantity: "4 small" },
      { name: "Radishes", quantity: "4" },
      { name: "Cilantro", quantity: "2 tbsp" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "pan-seared-duck-cherry-sauce",
    title: "Pan-Seared Duck Breast with Cherry Sauce",
    description:
      "Scored duck breast pan-seared to crispy skin, finished with a light tart cherry and red wine reduction, served with roasted sweet potato.",
    ingredients: [
      { name: "Duck Breast", quantity: "200g" },
      { name: "Sweet Potato", quantity: "1 large" },
      { name: "Cherries (fresh or frozen)", quantity: "100g" },
    ],
  },
  {
    id: "greek-chicken-skewers-tzatziki",
    title: "Greek Chicken Skewers with Tzatziki",
    description:
      "Marinated chicken breast skewers grilled and served with a light yogurt-cucumber tzatziki, warm pita, and a tomato-onion salad.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Cherry Tomatoes", quantity: "100g" },
      { name: "Red Onion", quantity: "1/4" },
      { name: "Pita Bread", quantity: "2" },
    ],
  },
  {
    id: "maple-dijon-salmon-green-beans",
    title: "Maple-Dijon Salmon with Sautéed Green Beans",
    description:
      "Baked salmon fillet glazed with a light maple-Dijon sauce, paired with sautéed green beans and wild rice.",
    ingredients: [
      { name: "Salmon Fillet", quantity: "180g" },
      { name: "Green Beans", quantity: "200g" },
      { name: "Wild Rice", quantity: "75g dry" },
    ],
  },
  {
    id: "chipotle-turkey-burgers",
    title: "Chipotle Turkey Burgers with Avocado",
    description:
      "Grilled chipotle-seasoned turkey patties on butter lettuce buns with avocado, tomato, and pickled onion.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "250g" },
      { name: "Butter Lettuce", quantity: "1 head" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Tomato", quantity: "1 medium" },
      { name: "Red Onion", quantity: "1/4" },
    ],
  },
  {
    id: "seared-swordfish-corn-succotash",
    title: "Seared Swordfish with Corn Succotash",
    description:
      "Pan-seared swordfish steak served over a warm succotash of corn, cherry tomatoes, zucchini, and fresh basil.",
    ingredients: [
      { name: "Swordfish Steak", quantity: "180g" },
      { name: "Corn", quantity: "2 ears" },
      { name: "Cherry Tomatoes", quantity: "100g" },
      { name: "Zucchini", quantity: "1" },
      { name: "Fresh Basil", quantity: "1/4 cup" },
    ],
  },
  {
    id: "za-atar-chicken-fattoush",
    title: "Za'atar Chicken with Fattoush Salad",
    description:
      "Roasted za'atar-spiced chicken thighs served with a crisp fattoush salad of romaine, radish, cucumber, and toasted pita chips.",
    ingredients: [
      { name: "Chicken Thighs (bone-in, skin-on)", quantity: "250g" },
      { name: "Romaine Lettuce", quantity: "1 head" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Radishes", quantity: "4" },
      { name: "Pita Bread", quantity: "1" },
      { name: "Cherry Tomatoes", quantity: "100g" },
    ],
  },
  {
    id: "balsamic-glazed-pork-peach",
    title: "Balsamic-Glazed Pork Chops with Grilled Peaches",
    description:
      "Grilled bone-in pork chops with a balsamic reduction, served alongside grilled peach halves and arugula.",
    ingredients: [
      { name: "Pork Chops (bone-in)", quantity: "250g" },
      { name: "Peaches", quantity: "2" },
      { name: "Arugula", quantity: "60g" },
    ],
  },
  {
    id: "vietnamese-pork-rice-bowls",
    title: "Vietnamese Pork Rice Bowls",
    description:
      "Caramelized lemongrass pork over broken rice with pickled daikon and carrots, fresh herbs, and nuoc cham.",
    ingredients: [
      { name: "Pork Shoulder (thinly sliced)", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Fresh Basil", quantity: "1/4 cup" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "tuscan-white-bean-chicken",
    title: "Tuscan White Bean & Chicken Skillet",
    description:
      "Seared chicken breast in a light garlic and sun-dried tomato broth with white beans and wilted kale.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Canned White Beans", quantity: "200g drained" },
      { name: "Kale", quantity: "100g" },
      { name: "Cherry Tomatoes", quantity: "100g" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "spicy-honey-garlic-drumsticks",
    title: "Spicy Honey-Garlic Drumsticks with Roasted Broccoli",
    description:
      "Baked chicken drumsticks coated in a spicy honey-garlic glaze, served with roasted broccoli and jasmine rice.",
    ingredients: [
      { name: "Chicken Drumsticks", quantity: "300g" },
      { name: "Broccoli", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
    ],
  },
  {
    id: "peruvian-chicken-green-sauce",
    title: "Peruvian-Style Chicken with Green Sauce",
    description:
      "Roasted chicken leg quarters with a bright aji verde sauce, served with roasted sweet potatoes and a simple salad.",
    ingredients: [
      { name: "Chicken Leg Quarters", quantity: "300g" },
      { name: "Sweet Potato", quantity: "1 large" },
      { name: "Cilantro", quantity: "1/4 cup" },
      { name: "Jalapeño", quantity: "1" },
      { name: "Lime", quantity: "1" },
      { name: "Mixed Greens", quantity: "60g" },
    ],
  },
  {
    id: "sesame-crusted-ahi-poke-bowl",
    title: "Sesame-Crusted Ahi Poke Bowl",
    description:
      "Seared sesame-crusted ahi tuna over sushi rice with avocado, edamame, cucumber, and a ponzu drizzle.",
    ingredients: [
      { name: "Ahi Tuna Steak", quantity: "180g" },
      { name: "Sushi Rice", quantity: "75g dry" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Edamame", quantity: "100g" },
      { name: "Cucumber", quantity: "1 medium" },
    ],
  },
  {
    id: "braised-short-ribs-polenta",
    title: "Braised Beef Short Ribs with Polenta",
    description:
      "Slow-braised beef short ribs in a red wine and tomato broth, served over creamy polenta with roasted carrots.",
    ingredients: [
      { name: "Beef Short Ribs", quantity: "250g" },
      { name: "Polenta", quantity: "75g dry" },
      { name: "Carrots", quantity: "2 medium" },
      { name: "Canned Diced Tomatoes", quantity: "200g" },
      { name: "Onion", quantity: "1" },
    ],
  },
  {
    id: "tandoori-chicken-raita",
    title: "Tandoori Chicken with Raita & Basmati Rice",
    description:
      "Yogurt-marinated tandoori-spiced chicken thighs baked until charred, served with cucumber raita and basmati rice.",
    ingredients: [
      { name: "Chicken Thighs (bone-in, skin-on)", quantity: "250g" },
      { name: "Basmati Rice", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Cherry Tomatoes", quantity: "100g" },
      { name: "Red Onion", quantity: "1/4" },
    ],
  },
  {
    id: "cilantro-lime-shrimp-tacos",
    title: "Cilantro-Lime Shrimp Tacos",
    description:
      "Sautéed cilantro-lime shrimp in warm corn tortillas with shredded cabbage, avocado, and a chipotle crema.",
    ingredients: [
      { name: "Shrimp (peeled, deveined)", quantity: "200g" },
      { name: "Corn Tortillas", quantity: "4 small" },
      { name: "Cabbage", quantity: "120g" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Cilantro", quantity: "2 tbsp" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "bourbon-glazed-pork-belly-slaw",
    title: "Bourbon-Glazed Pork Belly with Apple Slaw",
    description:
      "Crispy roasted pork belly with a light bourbon glaze, paired with a fresh apple and cabbage slaw.",
    ingredients: [
      { name: "Pork Belly", quantity: "200g" },
      { name: "Apple", quantity: "1" },
      { name: "Cabbage", quantity: "150g" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "moroccan-lamb-stew",
    title: "Moroccan Lamb Stew with Chickpeas",
    description:
      "Fragrant lamb stew with chickpeas, diced tomatoes, sweet potato, and warm Moroccan spices, served over couscous.",
    ingredients: [
      { name: "Lamb Stew Meat", quantity: "200g" },
      { name: "Canned Chickpeas", quantity: "200g drained" },
      { name: "Sweet Potato", quantity: "1 medium" },
      { name: "Canned Diced Tomatoes", quantity: "200g" },
      { name: "Couscous", quantity: "75g dry" },
    ],
  },
  {
    id: "blackened-grouper-collard-greens",
    title: "Blackened Grouper with Collard Greens",
    description:
      "Cajun-blackened grouper fillets served with braised collard greens and a side of black-eyed peas.",
    ingredients: [
      { name: "Grouper Fillet", quantity: "180g" },
      { name: "Collard Greens", quantity: "200g" },
      { name: "Canned Black-Eyed Peas", quantity: "200g drained" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "swedish-meatballs-egg-noodles",
    title: "Swedish Turkey Meatballs with Egg Noodles",
    description:
      "Lean turkey meatballs in a light gravy with a touch of allspice, served over egg noodles with lingonberry jam on the side.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "250g" },
      { name: "Egg Noodles", quantity: "75g dry" },
      { name: "Onion", quantity: "1/2" },
      { name: "Carrots", quantity: "1 medium" },
    ],
  },
  {
    id: "thai-red-curry-chicken",
    title: "Thai Red Curry Chicken",
    description:
      "Chicken breast simmered in a light Thai red curry with bamboo shoots, bell peppers, and fresh Thai basil, served over jasmine rice.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Bamboo Shoots", quantity: "100g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Fresh Basil", quantity: "1/4 cup" },
    ],
  },
  {
    id: "grilled-halibut-mango-avocado",
    title: "Grilled Halibut with Mango-Avocado Salsa",
    description:
      "Grilled halibut fillet topped with a fresh mango-avocado salsa, served with coconut rice.",
    ingredients: [
      { name: "Halibut Fillet", quantity: "180g" },
      { name: "Mango", quantity: "1/2" },
      { name: "Avocado", quantity: "1/2" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Cilantro", quantity: "2 tbsp" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "herb-roasted-cornish-hen",
    title: "Herb-Roasted Cornish Hen with Root Vegetables",
    description:
      "Whole Cornish hen roasted with fresh herbs, served with roasted parsnips, carrots, and fingerling potatoes.",
    ingredients: [
      { name: "Cornish Hen", quantity: "1 whole" },
      { name: "Parsnips", quantity: "1 medium" },
      { name: "Carrots", quantity: "2 medium" },
      { name: "Fingerling Potatoes", quantity: "150g" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "gochujang-chicken-wings-pickled-veg",
    title: "Gochujang Chicken Wings with Pickled Vegetables",
    description:
      "Baked chicken wings tossed in a light gochujang glaze, served with quick-pickled daikon and carrots over steamed rice.",
    ingredients: [
      { name: "Chicken Wings", quantity: "300g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Carrots", quantity: "1 medium" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Green Onion", quantity: "2 stalks" },
    ],
  },
  {
    id: "pistachio-crusted-rack-of-lamb",
    title: "Pistachio-Crusted Rack of Lamb",
    description:
      "Rack of lamb with a pistachio-herb crust, roasted and served with roasted broccolini and a mint-lemon gremolata.",
    ingredients: [
      { name: "Rack of Lamb", quantity: "250g" },
      { name: "Broccolini", quantity: "200g" },
      { name: "Pistachios", quantity: "30g" },
      { name: "Lemon", quantity: "1" },
      { name: "Fresh Mint", quantity: "2 tbsp" },
    ],
  },
  {
    id: "smoked-paprika-chicken-romesco",
    title: "Smoked Paprika Chicken with Romesco Sauce",
    description:
      "Roasted smoked-paprika chicken breast with a light romesco sauce, served with roasted cauliflower and quinoa.",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Cauliflower", quantity: "200g" },
      { name: "Quinoa", quantity: "75g dry" },
      { name: "Red Bell Pepper", quantity: "1" },
      { name: "Almonds", quantity: "20g" },
    ],
  },
  {
    id: "mango-habanero-grilled-pork",
    title: "Mango-Habanero Grilled Pork Chops",
    description:
      "Grilled pork chops with a sweet and spicy mango-habanero glaze, served with coconut rice and a fresh cucumber salad.",
    ingredients: [
      { name: "Pork Chops (bone-in)", quantity: "250g" },
      { name: "Mango", quantity: "1/2" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "pan-seared-trout-almond-brown-butter",
    title: "Pan-Seared Trout with Almond Brown Butter",
    description:
      "Delicate rainbow trout pan-seared and finished with a light almond brown butter, served with sautéed spinach and wild rice.",
    ingredients: [
      { name: "Rainbow Trout Fillet", quantity: "180g" },
      { name: "Fresh Spinach", quantity: "100g" },
      { name: "Wild Rice", quantity: "75g dry" },
      { name: "Almonds", quantity: "20g" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "indonesian-satay-chicken",
    title: "Indonesian Chicken Satay with Peanut Sauce",
    description:
      "Grilled chicken skewers with a light peanut-lime dipping sauce, served with jasmine rice and a quick cucumber-red onion relish.",
    ingredients: [
      { name: "Chicken Thighs (boneless, skinless)", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Red Onion", quantity: "1/4" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "adobo-pork-fried-rice",
    title: "Filipino Adobo Pork with Fried Rice",
    description:
      "Braised pork adobo in a tangy soy-vinegar sauce, served over garlic fried rice with a fried egg and sliced cucumber.",
    ingredients: [
      { name: "Pork Shoulder (cubed)", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Green Onion", quantity: "2 stalks" },
    ],
  },
  {
    id: "chimichurri-grilled-lamb-chops",
    title: "Chimichurri Grilled Lamb Chops",
    description:
      "Grilled lamb loin chops topped with fresh chimichurri, served with roasted fingerling potatoes and arugula.",
    ingredients: [
      { name: "Lamb Loin Chops", quantity: "200g" },
      { name: "Fingerling Potatoes", quantity: "150g" },
      { name: "Arugula", quantity: "60g" },
      { name: "Fresh Parsley", quantity: "1/4 cup" },
      { name: "Lime", quantity: "1" },
    ],
  },
  {
    id: "orange-glazed-duck-bok-choy",
    title: "Orange-Glazed Duck Breast with Bok Choy",
    description:
      "Pan-seared duck breast with a light orange glaze, served with sautéed baby bok choy and steamed jasmine rice.",
    ingredients: [
      { name: "Duck Breast", quantity: "200g" },
      { name: "Baby Bok Choy", quantity: "200g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Orange", quantity: "1" },
    ],
  },
  {
    id: "cajun-turkey-sweet-potato-hash",
    title: "Cajun Turkey & Sweet Potato Hash",
    description:
      "Sautéed lean ground turkey with diced sweet potatoes, bell peppers, and onions in Cajun seasoning, topped with a fried egg.",
    ingredients: [
      { name: "Lean Ground Turkey", quantity: "250g" },
      { name: "Sweet Potato", quantity: "1 large" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
  },
  {
    id: "lemon-caper-sole-rice-pilaf",
    title: "Lemon-Caper Sole with Rice Pilaf",
    description:
      "Pan-seared sole fillets finished with a light lemon-caper sauce, served alongside herbed rice pilaf and steamed green beans.",
    ingredients: [
      { name: "Sole Fillet", quantity: "180g" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Green Beans", quantity: "150g" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    id: "korean-bbq-short-rib-lettuce-wraps",
    title: "Korean BBQ Short Rib Lettuce Wraps",
    description:
      "Thinly sliced galbi-style beef short ribs grilled and served in butter lettuce cups with pickled radish, steamed rice, and gochujang.",
    ingredients: [
      { name: "Beef Short Ribs (flanken-cut)", quantity: "250g" },
      { name: "Butter Lettuce", quantity: "1 head" },
      { name: "Jasmine Rice", quantity: "75g dry" },
      { name: "Radishes", quantity: "4" },
      { name: "Green Onion", quantity: "3 stalks" },
    ],
  },
];

export default menuItems;

/** Look up a menu item by id */
export const getMenuItem = (id) => menuItems.find((item) => item.id === id);
