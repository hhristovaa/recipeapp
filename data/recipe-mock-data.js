import Category from '../models/category';
import Recipe from '../models/recipe';

export const CATEGORIES = [
    new Category(
        'cat1', 
        'Italian',
         'https://i.ibb.co/wRJpRRy/italian.jpg'
         ),
    new Category(
        'cat2',
         'Meat', 
         'https://i.ibb.co/q1WDJmp/meat.jpg'
         ),
    new Category(
        'cat3',
         'Exotic',
          'https://i.ibb.co/gmzr9dG/chinese.jpg'
          ),
    new Category(
        'cat4', 
        'Seafood',
         'https://i.ibb.co/5Rx7VYx/seafood.jpg'
         ),
    new Category(
        'cat5', 
        'Vegan',
         'https://i.ibb.co/3sTMfzW/vegan.jpg'
         ),
    new Category(
        'cat6', 
        'Desserts',
         'https://i.ibb.co/7V5kXnD/desserts.jpg'
         ),
];


export const RECIPES  = [
    new Recipe(
        'rec1',
        ['cat5'],
        'Roasted Asparagus',
        'easy',
        'https://i.ibb.co/cQGHR2x/asparagus.jpg', 
        [
            '400g Asparagus',
            '1 1/2 tbsp Olive Oil',
            '1 tbsp Kosher Salt',
            'Grounded pepper',
        ],
        [
            "Preheat oven to 425°F.",
            "Cut off the woody bottom part of the asparagus spears and discard.",
            "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
            "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
            "Sprinkle with salt.",
            "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
            "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
            "They should be tender when pierced with the tip of a knife.",
            "The tips of the spears will get very brown but watch them to prevent burning.",
            "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our Recipe."
        ],
        true,
        true,
        true,
        true
    ),

    new Recipe(
        'rec2',
        ['cat5'],
        'Curried Lentils and Rice',
        'easy',
        'https://i.ibb.co/NC1JvvD/lentils.jpg',
        [
        '3 cups vegetable broth',
        '1 cup dried green lentils',
        '1/2 cup basmati rice',
        '1 tsp curry powder',
        '1 tsp salt'
        ],
        [
            "Bring broth to a low boil.",
            "Add curry powder and salt.",
            "Cook lentils for 20 minutes.",
            "Add rice and simmer for 20 minutes.",
            "Enjoy!"
        ],
        true,
        true,
        true,
        true
    ),

    new Recipe(
        'rec3',
        ['cat6'],
        'Cranberry and Apple Stuffed Acorn Squash Recipe',
        'medium',
        'https://i.ibb.co/NYmbCRV/squash.jpg',

        [
            '2 acorn squash',
            '2 apples chopped',
            '1/2 cup dried cranberries',
            '1 teaspoon cinnamon',
            '2 tbsps melted butter',
        ],
        [
            "Cut squash in half, remove seeds.",
            "Place squash in baking dish, cut-side down.",
            "Pour 1/4-inch water into dish.",
            "Bake for 30 minutes at 350 degrees F.",
            "In large bowl, combine remaining ingredients.",
            "Remove squash from oven, fill with mix.",
            "Bake for 30-40 more minutes, until squash tender.",
            "Enjoy!"
        ],
        false,
        true,
        false,
        false
    ),

    new Recipe(
        'rec4',
        ['cat2'],
        'Wiener Schnitzel',
        'medium',
        'https://i.ibb.co/nRfw0Dn/schnitzel.jpg',
        [
            '8 Veal Cutlets',
            '4 Eggs',
            '200g Bread Crumbs',
            '100g Flour',
            '300ml Butter',
            '100g Vegetable Oil',
            'Salt',
            'Lemon Slices'
        ],
        [
            'Tenderize the veal to about 2–4mm, and salt on both sides.',
            'On a flat plate, stir the eggs briefly with a fork.',
            'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
            'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
            'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
            'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
            'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
        ],
        false,
        false,
        false,
        false
    ),

    new Recipe(
        'rec5',
        ['cat4'],
        'Salad with Grilled Salmon',
        'easy',
        'https://i.ibb.co/MkBQS8r/salmon-salad.jpg',
        [
            'Arugula',
            "Lamb's Lettuce",
            'Parsley',
            'Fennel',
            '200g Salmon',
            'Mustard',
            'Balsamic Vinegar',
            'Olive Oil',
            'Salt and Pepper'
        ],
        [
            'Wash and cut salad and herbs',
            'Grill the salmon.',
            'Process mustard, vinegar and olive oil into a dessing',
            'Prepare the salad',
            'Add diced salmon and dressing'
        ],
        true,
        false,
        false,
        true
    ),

    new Recipe(
        'rec6',
        ['cat2'],
        'Perfect roast beef',
        'hard',
        'https://i.ibb.co/zbkfW23/roast-beef.jpg',

        [
            '1.5 kg topside of beef',
            '2 medium onions',
            '2 carrots',
            '2 sticks celery',
            '1 bulb of garlic',
            '1 bunch of mixed fresh herbs , such as thyme, rosemary, bay, sage',
            'olive oil'
        ],
        [
            'Pile all the veg, garlic and herbs into the middle of a large roasting tray and drizzle with oil.',
            'Drizzle the beef with oil and season well with sea salt and black pepper, then rub all over the meat.',
            'Place the tray in the oven, ',
            'Baste the beef halfway through cooking and if the veg look dry, add a splash of water to the tray to stop them from burning.',
            'Serve with gravy, horseradish sauce and Yorkshire puddings.'
        ],
        true,
        false,
        false,
        true
    ),

    new Recipe(
        'rec7',
        ['cat6'],
        'Pancakes',
        'easy',
        'https://i.ibb.co/r2s611v/pancakes.jpg',
        [
            '1 1/2 Cups all-purpose Flour',
            '3 1/2 Teaspoons Baking Powder',
            '1 Teaspoon Salt',
            '1 Tablespoon White Sugar',
            '1 1/4 cups Milk',
            '1 Egg',
            '3 Tablespoons Butter, melted'
        ],
        [
            'In a large bowl, sift together the flour, baking powder, salt and sugar.',
            'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
            'Heat a lightly oiled griddle or frying pan over medium high heat.',
            'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
        ],
        false,
        true,
        false,
        false
    ),

    new Recipe(
        'rec8',
        ['cat6'],
        'Flaky Buttermilk Biscuits',
        'medium',
        'https://i.ibb.co/tbVQjm5/cookies.jpg',

        [
            "8 tablespoon unsalted butter, cold, lightly floured and cut into 1/8-inch slices",
            "2 tablespoon vegetable shortening, cut into 1/2-inch chunks",
            "1 teaspoon salt\r",
            "1 tablespoon baking powder\r",
            "1/2 teaspoon baking soda\r",
            "2 1/2 cup unbleached all-purpose flour",
            "2 tablespoon butter, melted",
            "1 1/4 cup buttermilk, cold"
        ],
        [
            'Adjust oven rack to lower-middle position; heat oven to 450 degrees. ',
            'Whisk flour, baking power, baking soda, and salt in large bowl.',
            ' Working in batches, drop butter slices into flour mixture and toss to coat; ',
            'Pick up each slice of butter and press between floured fingertips into flat, nickel-sized pieces.s',
            'Freeze mixture (in bowl) until chilled, about 15 minutes.',
            'Bake, without opening oven door, until tops are golden brown and crisp, 15 to 17 minutes. ',
            '  Let cool on baking sheet 5 to 10 minutes before serving.'
        ],
        false,
        true,
        false,
        false
    ),

    new Recipe(
        'rec9',
        ['cat1'],
        'Pizza bianca',
        'medium',
        'https://i.ibb.co/vxT9yq6/pizza.jpg',
        [
            "all-purpose flour, for dusting and rolling\r",
            "1 pound pizza dough, thawed if frozen\r",
            "1 teaspoon extra-virgin olive oil, for brushing\r",
            "<hr>\r",
            "1\/2 cup whole-milk ricotta cheese\r",
            "1 tablespoon extra-virgin olive oil\r",
            "1 garlic clove, minced\r",
            "salt and freshly ground pepper\r",
            "<hr>\r",
            "6 oz mozzarella, shredded\r",
            "1 oz Parmesan, grated (or Pecorino Romano)\r",
            "2 oz baby arugula\r",
            "1 tsp extra-virgin olive oil"
        ],
        [
            'Preheat oven to 250°C. Lightly dust a work surface, rolling pin, and a baking sheet with flour.',
            ' Roll dough out to a 13-inch round and transfer to sheet.',
            'In a small bowl, stir together ricotta, oil and garlic; season with salt and pepper. ',
            'Spread ricotta mixture on dough, leaving a \/2-inch border. Top with mozzarella, then Parmesan. Brush oil on edge of dough. ',
            ' Bake until crust is golden and cheese is melted and browned in spots, 12 to 14 minutes. ',
            'In a small bowl, toss arugula with oil and season to taste with salt and pepper. Top pizza with arugula and serve.',

        ],
        false,
        true,
        false,
        false
    ),
    new Recipe(
        'rec10',
        ['cat4', 'cat3'],
        'Shrimps and edamame with lime',
        'easy',
        'https://i.ibb.co/QCMXQ8z/shrimp.jpg',

        [
            "1 cup long-grain rice, such as jasmine or basmati\r",
            "1 tbsp extra-virgin olive oil\r",
            "1 1\/4 lb medium shrimp, peeled and deveined\r",
            "1 large clove garlic, minced\r",
            "2 cup frozen shelled edamame, thawed (from a 10 oz package)\r",
            "5 green onions, halved lengthwise and cut into 1-inch pieces, white and green parts separated\r",
            "1 tbsp fresh lime juice, plus wedges for serving (optional)\r",
            "salt and freshly ground pepper"

        ],
        [
            "Cook rice according to package instructions.",
            "Meanwhile, in a large nonstick skillet, heat oil over medium-high.",
            "Add shrimp and garlic and cook, stirring occasionally, 4 minutes.",
            "Add edamame and scallion whites and cook until shrimp are opaque and garlic is golden, about 3 minutes. ",
            "Add scallion greens ad lime juice and cook 1 minute.",
            "Season to taste with salt and pepper; serve with rice and lime wedges, if desired."
        ],
        true,
        true,
        false,
        true
    ),
    new Recipe(
        'rec11',
        ['cat3', 'cat5'],
        'Guacamole',
        'easy',
        'https://i.ibb.co/b7H5vYf/guacamole.jpg',
        30,
        [
            "4 ripe avocados\r",
            "2 roma tomates, diced fine\r",
            "1\/2 red onion, minced\r",
            "1\/2 handful cilantro, minced\r",
            "2 clove garlic, minced\r",
            "1 lime, juiced\r",
            "Pinch of sea salt\r",
            "1 jalapeno, seeded and minced fine (optional)"

        ],
        [
            "Place all ingredients in a bowl with a flat bottom and mash it with a potato masher.",
            "Alternatively, you can mix everything briefly in a food processor.",
            "Stir well and keep refrigerated.",
            "This dish will brown on the areas exposed to air within a few hours, so serve it shortly after making it or just stir again before serving.",

        ],
        true,
        true,
        true,
        true
    ),
    new Recipe(
        'rec12',
        ['cat1'],
        'Tagliatelle alla Bolognese',
        'easy',

        'https://i.ibb.co/mJsht2J/bolognese.jpg',
        30,
        [
            "1 pound egg tagliatelle",
            "Grana Padano DOP cheese, for serving",
            "1 1/2 cups of ragù alla Bolognese",
            "Extra virgin olive oil, to taste",
            "1 clove garlic",


        ],
        ["Bring a large pot of water to a boil for the pasta.",
            "Cook a few minutes less than package instructions if dry or until the pasta rises to the surface if fresh.",
            "In a large skillet, heat the garlic in a drizzle of extra virgin olive oil.",
            "Add the ragù, and heat over medium until simmering.",
            "When the pasta is cooked, drain it in a colander, preserving a small amount of the cooking water.",
            "Transfer immediately to the saucepan, and toss vigorously to combine and allow the pasta to cook a final minute in the sauce.",
            "Serve immediately with the grated cheese on the side, and dream of Bologna."




        ],
        false,
        false,
        false,
        false
    )
];
