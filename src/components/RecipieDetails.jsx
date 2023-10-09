import React from 'react'
import { useState, useEffect } from 'react';
function RecipieDetails(props) {

    let data = [{
        image: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=400&lazy=load",
        cuisine: 'Indian',
        dishName: 'Paneer Tikka',
        ingredients: ['Paneer (Cottage Cheese)', 'Yogurt', 'Spices', 'Bell Peppers', 'Onions'],
        description: 'Paneer Tikka - A popular Indian appetizer made with marinated paneer and vegetables.',
        makingProcess: '1. Cut the paneer, bell peppers, and onions into small, even-sized pieces.\n' +
            '2. Prepare a marinade with yogurt, spices, and a touch of lemon juice.\n' +
            '3. Marinate the paneer and vegetables in the yogurt mixture for at least 1 hour.\n' +
            '4. Thread the marinated paneer and vegetables onto skewers.\n' +
            '5. Grill or bake in the oven until the paneer and vegetables are charred and cooked through.\n' +
            '6. Serve hot with mint chutney.',
        duration: 30,
    },
    {
        image: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?w=996&t=st=1696752291~exp=1696752891~hmac=d8e57a890eb0b18469ddfe971dc2d4788160dd26313bdc72c8bbad11ebf14548",
        cuisine: 'Indian',
        dishName: 'Butter Chicken (Murgh Makhani)',
        ingredients: ['Chicken', 'Tomato Sauce', 'Cream', 'Spices', 'Butter'],
        description: 'Butter Chicken (Murgh Makhani) - A creamy and rich chicken curry.',
        makingProcess: '1. Marinate the chicken pieces in yogurt and spices for at least 1 hour.\n' +
            '2. Grill the marinated chicken until charred and partially cooked.\n' +
            '3. Prepare a tomato-based sauce with cream and spices.\n' +
            '4. Simmer the grilled chicken in the sauce until fully cooked and flavorful.\n' +
            '5. Finish with a generous amount of butter.\n' +
            '6. Serve hot with naan or rice.',
        duration: 50,

    }, {
        image: "https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?w=1060&t=st=1696752329~exp=1696752929~hmac=f82ba13eb46e29306aaee82cbd744e838f9ea2e5e44892cffaff4d7934164ed5",
        cuisine: 'Indian',
        dishName: 'Aloo Paratha',
        ingredients: ['Wheat Flour', 'Potatoes', 'Spices', 'Ghee'],
        description: 'Aloo Paratha - Stuffed Indian flatbread with spiced mashed potatoes.',
        makingProcess: '1. Boil and mash the potatoes, then add spices and mix well.\n' +
            '2. Prepare the dough using wheat flour, water, and a pinch of salt.\n' +
            '3. Take a portion of the dough, roll it into a small disc, and stuff with the spiced potato mixture.\n' +
            '4. Seal the edges and roll it into a flatbread.\n' +
            '5. Cook the paratha on a griddle with ghee until golden and crispy on both sides.\n' +
            '6. Serve hot with yogurt and pickle.',
        duration: 40,

    }, {
        image: "https://img.freepik.com/free-photo/top-view-pakistani-food-arrangement_23-2148825109.jpg?w=996&t=st=1696752360~exp=1696752960~hmac=cfcc2f792dc59404e34025af9a86364f42a05a21a764a99b3452b95d6681ce54",
        cuisine: 'Indian',
        dishName: 'Palak Paneer',
        ingredients: ['Paneer (Cottage Cheese)', 'Spinach', 'Spices', 'Cream'],
        description: 'Palak Paneer - Creamy spinach curry with paneer cubes.',
        makingProcess: '1. Blanch the spinach leaves in boiling water for a few seconds, then transfer to ice water to retain the green color.\n' +
            '2. Blend the blanched spinach into a smooth puree.\n' +
            '3. Sauté onions and spices until fragrant, then add the spinach puree and cook.\n' +
            '4. Add paneer cubes and cream, and simmer until the curry thickens.\n' +
            '5. Garnish with a swirl of cream and serve hot with naan or rice.',
        duration: 35,

    }, {
        image: "https://img.freepik.com/free-photo/ong-chili-paste-mortar-decorated-with-beautiful-side-dishes_1150-24469.jpg?w=1060&t=st=1696752468~exp=1696753068~hmac=195843328ced78ad18c177ca7ce2ee54944bada138ed2fb810220358de052523",
        cuisine: 'Indian',
        dishName: 'Rogan Josh',
        ingredients: ['Lamb', 'Yogurt', 'Tomatoes', 'Spices'],
        description: 'Rogan Josh - A spicy and aromatic Kashmiri lamb curry.',
        makingProcess: '1. Marinate the lamb pieces in yogurt and spices for at least 2 hours.\n' +
            '2. Sauté onions until golden, then add tomatoes and cook until they break down.\n' +
            '3. Add marinated lamb and simmer until tender.\n' +
            '4. Finish with aromatic spices like cardamom and cloves.\n' +
            '5. Serve hot with steamed rice or naan.',
        duration: 75,

    }, {
        image: "https://img.freepik.com/free-photo/view-delicious-dish-food_23-2150777767.jpg?t=st=1696752391~exp=1696755991~hmac=b6f8d57440be9747df48a81ad50ea4f0bd634425f5b09ea27ee66b8c684c918a&w=1060",
        cuisine: 'Indian',
        dishName: 'Dal Tadka',
        ingredients: ['Lentils', 'Spices', 'Tomatoes', 'Cilantro'],
        description: 'Dal Tadka - Tempered lentil soup with aromatic spices.',
        makingProcess: '1. Cook lentils until soft and mashable, then set aside.\n' +
            '2. Prepare a tempering (tadka) with spices, garlic, and tomatoes.\n' +
            '3. Add the cooked lentils and simmer until the flavors meld.\n' +
            '4. Garnish with fresh cilantro and serve hot with rice or bread.',
        duration: 30,


    }, {
        image: "https://img.freepik.com/free-photo/steamed-rice-with-seafood-calamary-corns-carrot-peas-side-view_141793-3564.jpg?w=1060&t=st=1696752974~exp=1696753574~hmac=a5c095419a35a099fe141cd80588cdb8cfa9daba83d3278e0d1b9dd3345d2927",
        cuisine: 'Indian',
        dishName: 'Vegetable Biryani',
        ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Spices', 'Ghee'],
        description: 'Vegetable Biryani - Fragrant rice dish with mixed vegetables.',
        makingProcess: '1. Parboil the basmati rice and set aside.\n' +
            '2. Sauté mixed vegetables with spices until slightly tender.\n' +
            '3. Layer the rice and vegetables in a pot, adding ghee and saffron for flavor.\n' +
            '4. Cover and cook until the rice is fully cooked and aromatic.\n' +
            '5. Serve hot with raita (yogurt sauce).',
        duration: 55,


    },
    {
        image: "https://img.freepik.com/free-photo/craft-beef-burger-french-fries-wooden-table-melting-chesses-isolated-black-background-ai-generative_157027-1745.jpg?w=1060&t=st=1696753471~exp=1696754071~hmac=a391a5fee087090460cb50a0be0920dbb9389016664fc59c8f41590483a269fe",
        cuisine: 'American',
        dishName: 'Classic Hamburger',
        ingredients: ['Ground Beef', 'Burger Buns', 'Lettuce', 'Tomato', 'Onion', 'Cheese', 'Ketchup', 'Mustard', 'Pickles'],
        description: 'A quintessential American fast-food delight, the classic hamburger features a juicy beef patty with various toppings and condiments.',
        makingProcess: '1. Form ground beef into patties and season with salt and pepper.\n' +
          '2. Grill or fry the patties until well-cooked and slightly crispy on the outside.\n' +
          '3. Toast the burger buns.\n' +
          '4. Assemble the burger by placing lettuce, tomato, onion, cheese, and condiments between the bun halves.\n' +
          '5. Serve hot.\n',
        duration: 30
      },
      {
        image: "https://img.freepik.com/free-photo/side-view-different-types-cheese-white-plate-table_140725-11501.jpg?size=626&ext=jpg&uid=R100999161&ga=GA1.1.436628004.1696662119&semt=ais",
        cuisine: 'American',
        dishName: 'Macaroni and Cheese',
        ingredients: ['Macaroni Pasta', 'Cheese', 'Milk', 'Butter', 'Flour'],
        description: 'A creamy and cheesy American comfort food made with tender macaroni pasta and a rich cheese sauce.',
        makingProcess: '1. Cook macaroni pasta according to package instructions, then drain.\n' +
          '2. In a saucepan, melt butter and whisk in flour to make a roux.\n' +
          '3. Gradually add milk while continuously stirring to create a smooth sauce.\n' +
          '4. Add shredded cheese to the sauce and stir until it melts into a creamy consistency.\n' +
          '5. Combine the cooked macaroni with the cheese sauce.\n' +
          '6. Serve hot and enjoy the cheesy goodness.\n',
        duration: 45
      },
      {
        image: "https://img.freepik.com/free-photo/side-view-meat-kebab-with-grilled-potatoes-vegetables-with-sauce-fire-board_141793-5006.jpg?size=626&ext=jpg&uid=R100999161&ga=GA1.2.436628004.1696662119&semt=ais",
        cuisine: 'American',
        dishName: 'BBQ Ribs',
        ingredients: ['Pork Ribs', 'BBQ Sauce', 'Spices', 'Marinade'],
        description: 'BBQ Ribs - Tender, smoky, and flavorful pork ribs grilled to perfection with barbecue sauce.',
        makingProcess: '1. Marinate pork ribs with spices and marinade for several hours or overnight.\n' +
          '2. Preheat the grill to medium-high heat.\n' +
          '3. Grill the ribs, basting with BBQ sauce, until they are tender and have a smoky flavor.\n' +
          '4. Serve hot with extra BBQ sauce.\n',
        duration: 120
      },
      {
        image: "https://img.freepik.com/free-photo/front-view-sweet-pancakes-tower-arrangement_23-2148654085.jpg?size=626&ext=jpg&uid=R100999161&ga=GA1.1.436628004.1696662119&semt=sph",
        cuisine: 'American',
        dishName: 'Pancakes',
        ingredients: ['Flour', 'Milk', 'Eggs', 'Baking Powder', 'Butter', 'Maple Syrup'],
        description: 'Pancakes - Fluffy and golden pancakes served with butter and maple syrup.',
        makingProcess: '1. Mix flour, milk, eggs, and baking powder in a bowl until you have a smooth batter.\n' +
          '2. Heat a griddle or non-stick pan and add a little butter.\n' +
          '3. Pour the pancake batter onto the griddle to form pancakes.\n' +
          '4. Cook until bubbles form on the surface, then flip and cook the other side until golden.\n' +
          '5. Serve hot with a drizzle of maple syrup.\n',
        duration: 25
      },
      {
        image: "https://img.freepik.com/free-photo/side-view-ossetian-pie-with-cheese-table_140725-10281.jpg?w=360&t=st=1696753592~exp=1696754192~hmac=2cab7e2ad7777240b9f0b735192d8327b627708e3fb8576be26f265959533e35",
        cuisine: 'American',
        dishName: 'Chicken Pot Pie',
        ingredients: ['Chicken', 'Vegetables', 'Pastry Dough', 'Chicken Broth', 'Cream', 'Spices'],
        description: 'Chicken Pot Pie - A comforting and hearty American dish with tender chicken and vegetables in a creamy filling, enclosed in flaky pastry.',
        makingProcess: '1. Cook chicken and vegetables until tender.\n' +
          '2. Make a creamy sauce using chicken broth, cream, and spices.\n' +
          '3. Combine the cooked chicken and vegetables with the sauce.\n' +
          '4. Line a pie dish with pastry dough, add the filling, and cover with another layer of pastry dough.\n' +
          '5. Bake until the pie is golden and bubbling.\n' +
          '6. Let it cool slightly before serving.\n',
        duration: 60
      },
      {
        image: "https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table_2829-6473.jpg?w=900&t=st=1696753661~exp=1696754261~hmac=bd43fc8b710e5e64ab91bed3def3ca7758390d87ff8c8242b8d3d26299fe2d0e",
        cuisine: 'American',
        dishName: 'Caesar Salad',
        ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing', 'Anchovies'],
        description: 'Caesar Salad - A classic salad made with crisp Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
        makingProcess: '1. Tear or chop Romaine lettuce into bite-sized pieces.\n' +
          '2. Add croutons and shaved Parmesan cheese.\n' +
          '3. Drizzle with Caesar dressing and add anchovies for extra flavor (optional).\n' +
          '4. Toss the salad until all ingredients are well coated with dressing.\n' +
          '5. Serve chilled.\n',
        duration: 15
      },
  {
    dishName: 'Spaghetti Carbonara',
    description: 'Spaghetti Carbonara is a classic Roman pasta dish known for its creamy sauce made from eggs, Pecorino Romano cheese, guanciale (cured pork jowl), and black pepper.',
    makingProcess: '1. Cook spaghetti until al dente.\n2. In a separate pan, sauté guanciale until crispy.\n3. In a bowl, mix eggs, cheese, and black pepper.\n4. Toss cooked spaghetti with the egg mixture.\n5. Add crispy guanciale and serve.',
    duration: 'Approximately 20 minutes.',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino Romano cheese',
      'Guanciale',
      'Black pepper'
    ],
    cuisine: 'Italian',
   image: 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1380&t=st=1696753036~exp=1696753636~hmac=12c740f8c1f5f942fce2c11eb7d516a6cd82838e3790ca5519c929d878fbd96c'
  },
  {
    dishName: 'Margherita Pizza',
    description: 'Margherita Pizza is a classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, fresh basil leaves, and a drizzle of extra-virgin olive oil. It\'s known for its simplicity and flavors.',
    makingProcess: '1. Roll out pizza dough.\n2. Spread tomato sauce evenly.\n3. Add fresh mozzarella slices.\n4. Bake until crust is golden.\n5. Garnish with fresh basil and olive oil.',
    duration: 'Approximately 15-20 minutes.',
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Fresh mozzarella cheese',
      'Fresh basil leaves',
      'Extra-virgin olive oil'
    ],
    cuisine: 'Italian',
   image: 'https://img.freepik.com/free-photo/pizza-pepperoni-table_140725-5396.jpg?w=1060&t=st=1696753160~exp=1696753760~hmac=bbd5d242277367b742b6c5f93c44a0e45722e6b1ce7ef58584d47dedefa2a7ef'
  },
  {
    dishName: 'Risotto alla Milanese',
    description: 'Risotto alla Milanese is a creamy Italian rice dish from Milan. It\'s flavored with saffron, giving it a distinctive yellow color, and typically includes onions, white wine, and Parmesan cheese.',
    makingProcess: '1. Sauté onions in butter.\n2. Add Arborio rice and toast.\n3. Add white wine and saffron.\n4. Gradually add broth and stir until creamy.\n5. Finish with Parmesan cheese.',
    duration: 'Approximately 30-40 minutes.',
    ingredients: [
      'Arborio rice',
      'Saffron',
      'Onions',
      'White wine',
      'Parmesan cheese'
    ],
    cuisine: 'Italian',
   image: 'https://img.freepik.com/free-photo/mushroom-risotto-garnished-with-grated-parmesan-parsley_141793-1932.jpg?w=1060&t=st=1696753236~exp=1696753836~hmac=df8afb0c2a100b58d407b5060b933e6a583c7d9cc5a23d172129d9e84cc97b5e'
  },
  {
    dishName: 'Tiramisu',
    description: 'Tiramisu is a beloved Italian dessert featuring layers of coffee-soaked ladyfingers, mascarpone cheese mixture, and cocoa powder. It\'s known for its rich and indulgent flavor.',
    makingProcess: '1. Dip ladyfingers in coffee.\n2. Layer them in a dish with mascarpone mixture.\n3. Repeat layers and refrigerate.\n4. Dust with cocoa powder before serving.',
    duration: 'Approximately 4 hours (including chilling time).',
    ingredients: [
      'Ladyfingers',
      'Mascarpone cheese',
      'Coffee',
      'Cocoa powder'
    ],
    cuisine: 'Italian',
   image: 'https://img.freepik.com/free-photo/layered-chocolate-tiramisu-cake-with-mascarpone-cream-generated-by-ai_188544-18033.jpg?t=st=1696753278~exp=1696756878~hmac=9b548f4305d5b75f8542c9a054281ab96b45b9d838163738c49ac36319fae346&w=1380'
  },
  {
    dishName: 'Osso Buco',
    description: 'Osso Buco is a hearty Italian dish made from braised veal shanks cooked with white wine, broth, onions, carrots, celery, and gremolata. It\'s known for its tender and flavorful meat.',
    makingProcess: '1. Brown veal shanks in a pan.\n2. Sauté onions, carrots, and celery.\n3. Add white wine, broth, and veal.\n4. Braise until veal is tender.\n5. Garnish with gremolata.',
    duration: 'Approximately 2.5-3 hours.',
    ingredients: [
      'Veal shanks',
      'White wine',
      'Onions',
      'Carrots',
      'Celery',
      'Gremolata'
    ],
    cuisine: 'Italian',
   image: 'https://img.freepik.com/free-photo/rustic-meal-wooden-table-with-fresh-ingredients-generated-by-ai_188544-38165.jpg?t=st=1696753302~exp=1696756902~hmac=e57bbbdaef950c22f06db407c3c656a685531b3308360a2fd017a06b611f6cb2&w=1380'
  },
  {
    dishName: 'Caprese Salad',
    description: 'Caprese Salad is a refreshing Italian salad made with sliced tomatoes, fresh mozzarella cheese, fresh basil leaves, extra-virgin olive oil, balsamic vinegar, and a pinch of salt. It\'s a simple yet flavorful appetizer.',
    makingProcess: '1. Layer tomato and mozzarella slices.\n2. Add basil leaves.\n3. Drizzle with olive oil and balsamic vinegar.\n4. Season with salt and pepper.',
    duration: 'Approximately 10 minutes.',
    ingredients: [
      'Tomatoes',
      'Fresh mozzarella cheese',
      'Fresh basil leaves',
      'Extra-virgin olive oil',
      'Balsamic vinegar'
    ],
    cuisine: 'Italian',
   image: 'https://img.freepik.com/free-photo/fresh-garden-salad-with-juicy-tomato-slice-generated-by-ai_188544-30492.jpg?t=st=1696753331~exp=1696756931~hmac=60501915df404af9895a434c1d32eada4f154a8858f635524690fac706707498&w=1380'
  },
{
    dishName: 'Kung Pao Chicken',
    description: 'Kung Pao Chicken is a spicy and flavorful Sichuan dish made with diced chicken, peanuts, vegetables, and chili peppers. Its known for its bold and balanced flavors.',
    makingProcess: '1. Marinate chicken with soy sauce and cornstarch.\n2. Heat oil in a wok and stir-fry chicken until browned.\n3. Add peanuts, garlic, and ginger.\n4. Stir in a sauce made from soy sauce, vinegar, sugar, and cornstarch.\n5. Add chili peppers and scallions.\n6. Serve hot.',
    duration: 'Approximately 20-30 minutes.',
    ingredients: [
      'Chicken',
      'Peanuts',
      'Soy sauce',
      'Vinegar',
      'Sugar',
      'Cornstarch',
      'Chili peppers',
      'Scallions'
    ],
    cuisine: 'Chinese',
    image: 'https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg?t=st=1696753450~exp=1696757050~hmac=8e1bbb8d9f9ec18f5e8bc628dbfd17b04bed93da03862fe274e4d1df5dbdf44d&w=1060'
  },
  {
    dishName: 'Dim Sum (Har Gow)',
    description: 'Dim Sum is a popular Chinese cuisine featuring a variety of bite-sized dishes. Har Gow is a type of steamed dumpling filled with shrimp and wrapped in a translucent wrapper.',
    makingProcess: '1. Prepare a dough for the dumpling wrapper.\n2. Mix a shrimp filling with seasonings.\n3. Roll out the dough and cut into circles.\n4. Place shrimp filling in the center of each circle.\n5. Fold and pleat the wrapper to enclose the filling.\n6. Steam until cooked and serve with dipping sauce.',
    duration: 'Approximately 45-60 minutes.',
    ingredients: [
      'Shrimp',
      'Dumpling wrapper',
      'Seasonings',
      'Dipping sauce'
    ],
    cuisine: 'Chinese',
    image: 'https://img.freepik.com/free-photo/view-delicious-dumplings_23-2150777769.jpg?t=st=1696753486~exp=1696757086~hmac=654bc0c720a637a2e167eb66eaa04c8e0dc5612e2a7bb33480e57e54cdf994b7&w=1060'
  },
  {
    dishName: 'Peking Duck',
    description: 'Peking Duck is a famous Chinese dish known for its crispy duck skin and tender meat. Its traditionally served with thin pancakes, hoisin sauce, and sliced scallions.',
    makingProcess: '1. Season and air-dry the duck.\n2. Roast the duck until the skin is crispy.\n3. Serve with thin pancakes, hoisin sauce, and scallions.\n4. Assemble by wrapping duck, sauce, and scallions in a pancake.',
    duration: 'Approximately 3-4 hours (including drying time).',
    ingredients: [
      'Duck',
      'Thin pancakes',
      'Hoisin sauce',
      'Scallions'
    ],
    cuisine: 'Chinese',
    image: 'https://img.freepik.com/free-photo/view-delicious-dish-food_23-2150777691.jpg?t=st=1696753525~exp=1696757125~hmac=a7f32d178ced5465ab0996f26317b1cdf0a20d08e0d48876a602ba98ee843373&w=1060'
  },
  {
    dishName: 'Mapo Tofu',
    description: 'Mapo Tofu is a spicy Sichuan dish made with tofu cubes, ground pork, fermented black beans, and a flavorful sauce. Its known for its numbing and spicy taste.',
    makingProcess: '1. Brown ground pork in a wok.\n2. Add tofu cubes and simmer.\n3. Prepare a sauce with fermented black beans, soy sauce, and spices.\n4. Add the sauce to the wok and simmer until thickened.\n5. Serve hot with rice.',
    duration: 'Approximately 20-30 minutes.',
    ingredients: [
      'Tofu',
      'Ground pork',
      'Fermented black beans',
      'Soy sauce',
      'Spices',
      'Rice'
    ],
    cuisine: 'Chinese',
    image: 'https://img.freepik.com/free-photo/wakame-tofu-miso-soup-ceramic-bowl-generated-by-ai_188544-25986.jpg?t=st=1696753565~exp=1696757165~hmac=4abc5e549a81c399cd8ef43ffdbbdc832eedbe1de201b98a1ae29e4ec2200453&w=1380'
  },
  {
    dishName: 'Spring Rolls',
    description: 'Spring Rolls are a popular Chinese appetizer made with thin wrappers filled with vegetables, shrimp, and sometimes meat. They are typically served with dipping sauce.',
    makingProcess: '1. Prepare a filling with vegetables, shrimp, and seasonings.\n2. Roll the filling in thin spring roll wrappers.\n3. Seal the rolls and deep-fry until golden.\n4. Serve hot with dipping sauce.',
    duration: 'Approximately 30-45 minutes.',
    ingredients: [
      'Spring roll wrappers',
      'Vegetables',
      'Shrimp',
      'Seasonings',
      'Dipping sauce'
    ],
    cuisine: 'Chinese',
    image: 'https://img.freepik.com/free-photo/fresh-spring-rolls-with-pork-vegetables-served-with-sauce-generated-by-ai_188544-55919.jpg?t=st=1696753594~exp=1696757194~hmac=347eaba3c238ca4b7a22f8282a7fd5c83c87feb56b2e1ae9590335132ec6bab8&w=1380'
  },
  {
    dishName: 'Sweet and Sour Pork',
    description: 'Sweet and Sour Pork is a popular Chinese dish featuring crispy deep-fried pork pieces tossed in a sweet and tangy sauce with bell peppers and pineapple.',
    makingProcess: '1. Coat pork pieces in batter and deep-fry until crispy.\n2. Prepare a sweet and sour sauce with vinegar, sugar, ketchup, and soy sauce.\n3. Stir-fry bell peppers, pineapple, and garlic.\n4. Toss the fried pork in the sauce and serve.',
    duration: 'Approximately 30-40 minutes.',
    ingredients: [
      'Pork',
      'Batter',
      'Vinegar',
      'Sugar',
      'Ketchup',
      'Soy sauce',
      'Bell peppers',
      'Pineapple'
    ],
    cuisine: 'Chinese',
    image: 'https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535863.jpg?t=st=1696753622~exp=1696757222~hmac=ded0b71af79983172ded47b34e2a2d2145395ae86e7a957cfd02e800ba8c512f&w=1060'
  },
{
    dishName: 'Pad Thai',
    description: 'Pad Thai is a popular Thai stir-fried noodle dish known for its sweet, sour, and savory flavors. It typically includes rice noodles, shrimp, tofu, bean sprouts, peanuts, and lime.',
    makingProcess: '1. Soak rice noodles in warm water.\n2. Sauté shrimp and tofu in a pan.\n3. Add noodles, sauce, and bean sprouts.\n4. Toss until well-cooked.\n5. Serve with crushed peanuts and lime wedges.',
    duration: 'Approximately 15-20 minutes.',
    ingredients: [
      'Rice noodles',
      'Shrimp',
      'Tofu',
      'Bean sprouts',
      'Peanuts',
      'Lime'
    ],
    cuisine: 'Thai',
    image: 'https://img.freepik.com/free-photo/plate-pad-thai-with-shrimps-vegetables_188544-24767.jpg?t=st=1696753732~exp=1696757332~hmac=e29efed91d45d8143c79956b08f40ebda4e6a0c57c14a59ea90fff4556ae54d0&w=1380'
  },
  {
    dishName: 'Green Curry',
    description: 'Green Curry is a Thai curry dish known for its vibrant green color and spiciness. It typically contains chicken or vegetables, coconut milk, green curry paste, and Thai herbs.',
    makingProcess: '1. Sauté green curry paste in coconut milk.\n2. Add chicken or vegetables.\n3. Simmer until cooked.\n4. Stir in Thai herbs.\n5. Serve with rice.',
    duration: 'Approximately 30-40 minutes.',
    ingredients: [
      'Green curry paste',
      'Coconut milk',
      'Chicken or vegetables',
      'Thai herbs',
      'Rice'
    ],
    cuisine: 'Thai',
    image: 'https://img.freepik.com/free-photo/view-delicious-dish-food_23-2150777767.jpg?t=st=1696753937~exp=1696757537~hmac=578ff22e393e1e8522a5c11beb6b6ffaee671f7d2a8f961acc7c3b2339db6817&w=1060'
  },
  {
    dishName: 'Tom Yum Goong',
    description: 'Tom Yum Goong is a famous Thai hot and sour soup with shrimp. Its known for its bold flavors, including lemongrass, lime leaves, galangal, and chili.',
    makingProcess: '1. Boil water and add lemongrass, lime leaves, and galangal.\n2. Add shrimp and mushrooms.\n3. Season with fish sauce, lime juice, and chili paste.\n4. Serve hot.',
    duration: 'Approximately 15-20 minutes.',
    ingredients: [
      'Lemongrass',
      'Lime leaves',
      'Galangal',
      'Shrimp',
      'Mushrooms',
      'Fish sauce',
      'Lime juice',
      'Chili paste'
    ],
    cuisine: 'Thai',
    image: 'https://img.freepik.com/free-photo/stir-fried-prawn-vegetable-lunch-bowl-generated-by-ai_188544-24698.jpg?t=st=1696754019~exp=1696757619~hmac=2d737916735bf7dafd0f3de2b49235d80831233c672f2b3967ac6407194c0c6e&w=1380'
  },
  {
    dishName: 'Massaman Curry',
    description: 'Massaman Curry is a mild and aromatic Thai curry known for its use of peanuts and potatoes. It typically contains beef or chicken, coconut milk, and Massaman curry paste.',
    makingProcess: '1. Sauté Massaman curry paste in coconut milk.\n2. Add beef or chicken and potatoes.\n3. Simmer until cooked.\n4. Serve with rice or roti.',
    duration: 'Approximately 40-50 minutes.',
    ingredients: [
      'Massaman curry paste',
      'Coconut milk',
      'Beef or chicken',
      'Potatoes',
      'Rice or roti'
    ],
    cuisine: 'Thai',
    image: 'https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?w=1060&t=st=1696754744~exp=1696755344~hmac=82596986e5bc30107fd04f7fc16bc97233483016e8b333096577325850ea909e'
  },
  {
    dishName: 'Som Tum (Green Papaya Salad)',
    description: 'Som Tum is a popular Thai salad made with shredded green papaya, cherry tomatoes, chili, lime, fish sauce, and peanuts. Its known for its refreshing and spicy flavors.',
    makingProcess: '1. Shred green papaya and cherry tomatoes.\n2. Pound chili, garlic, and peanuts in a mortar and pestle.\n3. Mix all ingredients with fish sauce, lime juice, and sugar.\n4. Serve as a salad.',
    duration: 'Approximately 15-20 minutes.',
    ingredients: [
      'Green papaya',
      'Cherry tomatoes',
      'Chili',
      'Lime',
      'Fish sauce',
      'Peanuts',
      'Sugar'
    ],
    cuisine: 'Thai',
    image: 'https://img.freepik.com/free-photo/thai-food-som-tum-papaya-salad_1150-35488.jpg?size=626&ext=jpg&ga=GA1.2.2133721988.1669475027&semt=ais'
  },
  {
    dishName: 'Panang Curry',
    description: 'Panang Curry is a rich and creamy Thai curry known for its slightly sweet and nutty flavor. It typically contains beef or chicken, coconut milk, Panang curry paste, and kaffir lime leaves.',
    makingProcess: '1. Sauté Panang curry paste in coconut milk.\n2. Add beef or chicken.\n3. Simmer until cooked.\n4. Stir in kaffir lime leaves.\n5. Serve with rice.',
    duration: 'Approximately 30-40 minutes.',
    ingredients: [
      'Panang curry paste',
      'Coconut milk',
      'Beef or chicken',
      'Kaffir lime leaves',
      'Rice'
    ],
    cuisine: 'Thai',
    image: 'https://img.freepik.com/free-photo/chicken-red-curry-bowl-with-dried-chilies-basil-cucumber-long-beans_1150-27059.jpg?w=1060&t=st=1696754809~exp=1696755409~hmac=59c51674c8b1d07359e741cb879f6c4c81504d3b4645afc300493fac35e0f420'
  }

]

    const [categorizedArray, setCategorizedArray] = useState([])
    const [lines,setlines]=useState([])
     useEffect(() => {
        const categorizedData = data.filter((item) => {
            const image = item.image.toLowerCase();
            return image === props.imageurl.toLowerCase();
        });
        setCategorizedArray(categorizedData);
        setlines(categorizedData[0]?.makingProcess.split('\n'))
        
    }, [props.imageurl]);

   
   

    return (
        <div>
            <div className='flex flex-col gap-y-2 m-[50px]'>
                <div className='text-center'>
                    <h3>{categorizedArray[0]?.dishName}</h3>
                </div>
                <div className='w-full flex justify-center'>
                <div className='w-[600px] h-[350px] m-[50px] '>
                    <img src={`${categorizedArray[0]?.image}`} className='w-full h-full object-cover'></img>
                </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                <div>
                    <h4>Description</h4>
                    <p className=''>{categorizedArray[0]?.description}</p>
                </div>
                <div>
                    <h4>Cooking Time</h4>
                    <p>Preparation Time : {categorizedArray[0]?.duration}</p>
                </div>
                <div>
                    <h4>Ingredients</h4>
                    {
                        categorizedArray[0]?.ingredients.map((ing, ind) => (
                            <p> {ing}</p>
                        ))
                    }
                </div>
                <div>
                {console.log("lines is",lines)}
                    <h4>Directions</h4>
                    {
                     
                       lines?.map((line,ind)=>(
                        <p>{line}</p>
                       ))
                        }
                </div>
                </div>
            </div>
        </div>
    )
}

export default RecipieDetails