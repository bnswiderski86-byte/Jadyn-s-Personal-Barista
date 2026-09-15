/* ============================================================
   Jadyn's Personal Barista — drink data + app logic
   ============================================================ */

const DRINKS = {
  hot: [
    {
      name: "Gold Rush Latte",
      source: "Inspired by Red Leaf",
      tag: "Caramel + white chocolate, topped with a caramel drizzle",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Caramel syrup", "3 pumps (~0.75 oz)"],
        ["White chocolate / white mocha syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Caramel drizzle", "for topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the caramel and white chocolate syrups and stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Finish with a caramel drizzle.",
      ],
    },
    {
      name: "Snickers Latte",
      source: "Inspired by Red Leaf",
      tag: "Chocolate, caramel, and hazelnut — the classic candy-bar combo",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Hazelnut syrup", "1 pump (~0.25 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Whipped cream + drizzle", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the chocolate, caramel, and hazelnut syrups and stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: top with whipped cream and a drizzle.",
      ],
    },
    {
      name: "Golden Eagle",
      source: "Inspired by Dutch Bros",
      tag: "Vanilla and caramel breve, topped with caramel drizzle",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
        ["Whipped cream + caramel drizzle", "for topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the vanilla and caramel syrups and stir to combine.",
        "Warm and froth half and half (or milk of choice) until steaming.",
        "Pour into the cup and top with whipped cream and a caramel drizzle.",
      ],
      notes: "A \u201cbreve\u201d just means it's made with half and half instead of milk, for extra richness.",
    },
    {
      name: "Caramelizer",
      source: "Inspired by Dutch Bros",
      tag: "A rich caramel mocha",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Caramel drizzle", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the chocolate and caramel syrups and stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: finish with a caramel drizzle.",
      ],
    },
    {
      name: "Annihilator",
      source: "Inspired by Dutch Bros",
      tag: "Chocolate and hazelnut breve (a nutty spin on the macadamia original)",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Hazelnut syrup", "2 pumps (~0.5 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the chocolate and hazelnut syrups and stir to combine.",
        "Warm and froth half and half (or milk of choice) until steaming.",
        "Pour into the cup and serve.",
      ],
    },
    {
      name: "Cocomo",
      source: "Inspired by Dutch Bros",
      tag: "A tropical coconut mocha",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Coconut syrup", "3 pumps (~0.75 oz)"],
        ["Chocolate / mocha syrup or sauce", "1 pump (~0.25 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the coconut and chocolate syrups and stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
      ],
    },
    {
      name: "Cinnamon Dolce Latte",
      source: "Inspired by Starbucks",
      tag: "Cinnamon, brown sugar, and a hint of vanilla",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Cinnamon syrup (or brown sugar syrup)", "3 pumps (~0.75 oz)"],
        ["Vanilla syrup", "1 pump (~0.25 oz)"],
        ["Ground cinnamon", "a pinch, plus a dusting on top"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Whipped cream", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the cinnamon and vanilla syrups plus a pinch of cinnamon, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: top with whipped cream and a dusting of cinnamon.",
      ],
    },
    {
      name: "White Chocolate Mocha",
      source: "Inspired by Starbucks",
      tag: "Sweet and creamy, a white chocolate take on the classic mocha",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["White chocolate / white mocha syrup or sauce", "3 pumps (~0.75 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Whipped cream", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the white chocolate syrup and stir until fully combined.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: top with whipped cream.",
      ],
    },
    {
      name: "Snickerdoodle Latte",
      source: "Coffee-stand classic",
      tag: "Cinnamon and brown sugar, like the cookie in a cup",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Brown sugar (or cinnamon) syrup", "3 pumps (~0.75 oz)"],
        ["Ground cinnamon", "a pinch, plus a dusting on top"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the syrup and a pinch of cinnamon, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Dust the top with cinnamon.",
      ],
    },
    {
      name: "Kicker",
      source: "Inspired by Dutch Bros",
      tag: "A creamy Irish-cream-flavored breve (non-alcoholic)",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Irish cream flavored syrup (non-alcoholic)", "3 pumps (~0.75 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the Irish cream syrup and stir to combine.",
        "Warm and froth half and half (or milk of choice) until steaming.",
        "Pour into the cup and serve.",
      ],
      notes: "Look for a non-alcoholic \u201cIrish cream\u201d flavored syrup (Torani and DaVinci both make one) \u2014 no alcohol involved.",
    },
    {
      name: "Brown Sugar Oat Latte",
      source: "Inspired by Starbucks / Red Leaf",
      tag: "Brown sugar and cinnamon with steamed oat milk",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Brown sugar syrup", "3 pumps (~0.75 oz)"],
        ["Ground cinnamon", "a pinch, plus a dusting on top"],
        ["Milk of choice (oat milk recommended)", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the brown sugar syrup and a pinch of cinnamon, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Finish with a light dusting of cinnamon.",
      ],
    },
    {
      name: "Matcha Latte",
      source: "Inspired by Starbucks",
      tag: "Ceremonial-grade matcha whisked smooth with steamed milk",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Vanilla syrup", "2 pumps (~0.5 oz), optional"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Sift the matcha powder into the bottom of a 16 oz cup to break up clumps.",
        "Add the hot water and whisk briskly in a zig-zag motion until smooth and frothy, with no dry clumps left.",
        "Stir in the vanilla syrup if using.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup and stir gently to combine.",
      ],
      notes: "No espresso in this one \u2014 matcha has its own caffeine kick. Sifting the powder first is the difference between smooth and clumpy.",
    },
    {
      name: "Strawberry Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Matcha and sweet strawberry, blended warm",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Strawberry syrup or pur\u00e9e", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Sift the matcha powder into a small cup, add the hot water, and whisk until smooth.",
        "Add the strawberry syrup to the serving cup.",
        "Froth milk of choice until steaming, pour into the cup with the strawberry syrup, and stir.",
        "Pour the whisked matcha on top and stir gently to combine (or leave it slightly swirled for a marbled look).",
      ],
      notes: "This one's usually served iced with the layers left unstirred for the pink-to-green gradient \u2014 see the Iced Strawberry Matcha Latte for that version.",
    },
    {
      name: "Banana Bread Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Matcha with banana bread spice \u2014 banana, brown sugar, cinnamon, and nutmeg",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Banana syrup", "2 pumps (~0.5 oz)"],
        ["Brown sugar syrup", "1 pump (~0.25 oz)"],
        ["Ground cinnamon + a pinch of nutmeg", "a pinch each"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Sift the matcha powder into a cup, add the hot water, and whisk until smooth.",
        "Stir in the banana syrup, brown sugar syrup, cinnamon, and nutmeg.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup and stir gently to combine.",
        "Finish with a light dusting of cinnamon.",
      ],
      notes: "No banana syrup on hand? Muddle a couple of thin slices of very ripe banana with the brown sugar syrup, then strain it into the cup before adding the matcha.",
    },
    {
      name: "Coconut Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Matcha with a tropical coconut twist",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Coconut syrup", "3 pumps (~0.75 oz)"],
        ["Milk of choice (coconut milk recommended)", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Sift the matcha powder into a cup, add the hot water, and whisk until smooth.",
        "Stir in the coconut syrup.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup and stir gently to combine.",
      ],
    },
    {
      name: "Honey Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Simple matcha, sweetened with real honey",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Honey", "1 tbsp (or to taste)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Sift the matcha powder into a cup, add the hot water, and whisk until smooth.",
        "Stir the honey into the warm matcha until fully dissolved.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup and stir gently to combine.",
      ],
    },
    {
      name: "Honey Cinnamon Latte",
      source: "Coffee-stand classic",
      tag: "A lightly sweet, cozy latte with real honey",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Honey", "1 tbsp (or to taste)"],
        ["Ground cinnamon", "a pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Stir the honey into the hot espresso until fully dissolved, then add the cinnamon.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Finish with a light dusting of cinnamon.",
      ],
    },
    {
      name: "Cookie Butter Latte",
      source: "Coffee-stand classic",
      tag: "Biscoff-style cookie butter syrup with a touch of cinnamon",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Cookie butter / Biscoff syrup", "3 pumps (~0.75 oz)"],
        ["Ground cinnamon", "a small pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Crushed cookie or drizzle", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the cookie butter syrup and cinnamon, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: top with a crushed cookie or a drizzle of extra cookie butter syrup.",
      ],
    },
    {
      name: "Salted Caramel Mocha",
      source: "Coffee-stand classic",
      tag: "Chocolate and caramel with a pinch of flaky salt",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Flaky sea salt", "a pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Whipped cream + caramel drizzle", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the chocolate and caramel syrups, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Top with whipped cream, a caramel drizzle, and a pinch of flaky salt.",
      ],
    },
    {
      name: "Mexican Mocha",
      source: "Coffee-stand classic",
      tag: "Chocolate, cinnamon, and vanilla \u2014 warm and a little spiced",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "3 pumps (~0.75 oz)"],
        ["Vanilla syrup", "1 pump (~0.25 oz)"],
        ["Ground cinnamon (plus a pinch of cayenne, optional)", "a pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the chocolate and vanilla syrups plus the cinnamon, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Dust the top with a little extra cinnamon (add a tiny pinch of cayenne for a spicy kick).",
      ],
    },
    {
      name: "Toasted Marshmallow Mocha",
      source: "Coffee-stand classic",
      tag: "Chocolate and marshmallow, like a coffee s'more",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Toasted marshmallow syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Mini marshmallows or whipped cream", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the chocolate and marshmallow syrups, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: top with mini marshmallows or whipped cream.",
      ],
    },
    {
      name: "Birthday Cake Latte",
      source: "Coffee-stand classic",
      tag: "Vanilla and almond, sweet and festive",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Almond syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Whipped cream + sprinkles", "optional topping"],
      ],
      steps: [
        "Pull 2 shots of espresso directly into a 16 oz cup.",
        "Add the vanilla and almond syrups, stir to combine.",
        "Froth milk of choice until steaming with light foam.",
        "Pour the milk into the cup, holding back the foam, then top with the foam.",
        "Optional: top with whipped cream and a few sprinkles.",
      ],
    },
    {
      name: "Caramel Macchiato",
      source: "Inspired by Starbucks",
      tag: "Vanilla milk marked with espresso, finished with caramel",
      ingredients: [
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Espresso", "2 shots (double)"],
        ["Caramel drizzle", "for topping"],
      ],
      steps: [
        "Add the vanilla syrup to the bottom of a 16 oz cup.",
        "Froth milk of choice until steaming with light foam, then pour it into the cup over the syrup.",
        "Pull 2 shots of espresso and slowly pour them over the top of the milk (this is the \u201cmark\u201d).",
        "Finish with a caramel drizzle over the foam.",
      ],
      notes: "Traditionally the espresso sits on top rather than being stirred in first, so it \u201cmarks\u201d the milk.",
    },
  ],

  iced: [
    {
      name: "Brown Sugar Oat Latte",
      source: "Inspired by Starbucks / Red Leaf",
      tag: "Brown sugar, cinnamon, and oat milk, shaken over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Brown sugar syrup", "3 pumps (~0.75 oz)"],
        ["Ground cinnamon", "a pinch, plus a dusting on top"],
        ["Milk of choice (oat milk recommended)", "to fill (~10-11 oz)"],
        ["Ice", "for the shaker and the cup"],
      ],
      steps: [
        "Fill a shaker or cup with ice.",
        "Add the 2 hot shots of espresso, brown sugar syrup, and a pinch of cinnamon.",
        "Shake or stir vigorously for about 10 seconds, until foamy and chilled.",
        "Strain into a 16 oz cup filled with fresh ice.",
        "Top with milk of choice and a light dusting of cinnamon.",
      ],
    },
    {
      name: "Sugar Daddy",
      source: "Inspired by Red Leaf",
      tag: "Caramel and hazelnut, sweet and nutty over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Caramel syrup", "3 pumps (~0.75 oz)"],
        ["Hazelnut syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the caramel and hazelnut syrups.",
        "Pull 2 shots of espresso and pour over the ice and syrup, stir to combine.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Iced Golden Eagle",
      source: "Inspired by Dutch Bros",
      tag: "Vanilla and caramel over ice, with a caramel drizzle",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
        ["Caramel drizzle", "for topping"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the vanilla and caramel syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with half and half (or milk of choice) and finish with a caramel drizzle.",
      ],
    },
    {
      name: "Iced Caramelizer",
      source: "Inspired by Dutch Bros",
      tag: "Caramel mocha over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the chocolate and caramel syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Double Torture",
      source: "Inspired by Dutch Bros",
      tag: "Vanilla mocha with an extra shot for a bigger kick",
      ingredients: [
        ["Espresso", "3 shots (\u201cdouble torture\u201d uses an extra shot)"],
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the vanilla and chocolate syrups.",
        "Pull 3 shots of espresso and pour over the ice, stir to combine.",
        "Top with half and half (or milk of choice) and stir gently.",
      ],
      notes: "Feel free to use 2 shots instead of 3 if you'd rather keep the caffeine more moderate.",
    },
    {
      name: "Iced White Chocolate Mocha",
      source: "Inspired by Starbucks",
      tag: "Sweet white chocolate mocha over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["White chocolate / white mocha syrup or sauce", "3 pumps (~0.75 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
        ["Whipped cream", "optional topping"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the white chocolate syrup.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently. Add whipped cream if desired.",
      ],
    },
    {
      name: "Iced Cinnamon Dolce Latte",
      source: "Inspired by Starbucks",
      tag: "Cinnamon and vanilla over ice, finished with cinnamon",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Cinnamon syrup (or brown sugar syrup)", "3 pumps (~0.75 oz)"],
        ["Vanilla syrup", "1 pump (~0.25 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
        ["Whipped cream + cinnamon dusting", "optional topping"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the cinnamon and vanilla syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently. Add whipped cream and a cinnamon dusting if desired.",
      ],
    },
    {
      name: "Iced Salted Caramel Mocha",
      source: "Coffee-stand classic",
      tag: "Chocolate and caramel with a pinch of flaky salt, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Flaky sea salt", "a pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
        ["Whipped cream + caramel drizzle", "optional topping"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the chocolate and caramel syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice, stir gently, and finish with whipped cream, caramel drizzle, and a pinch of salt.",
      ],
    },
    {
      name: "Iced Mexican Mocha",
      source: "Coffee-stand classic",
      tag: "Chocolate, cinnamon, and vanilla, warm spice over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "3 pumps (~0.75 oz)"],
        ["Vanilla syrup", "1 pump (~0.25 oz)"],
        ["Ground cinnamon", "a pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the chocolate and vanilla syrups plus a pinch of cinnamon.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently. Dust with a little extra cinnamon.",
      ],
    },
    {
      name: "Iced Kicker",
      source: "Inspired by Dutch Bros",
      tag: "Irish-cream-flavored breve over ice (non-alcoholic)",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Irish cream flavored syrup (non-alcoholic)", "3 pumps (~0.75 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the Irish cream syrup.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with half and half (or milk of choice) and stir gently.",
      ],
    },
    {
      name: "Iced Matcha Latte",
      source: "Inspired by Starbucks",
      tag: "Matcha whisked smooth and poured over milk and ice",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Vanilla syrup", "2 pumps (~0.5 oz), optional"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Sift the matcha powder into a small cup or bowl.",
        "Add the hot water and whisk briskly until smooth and frothy, with no dry clumps.",
        "Fill a 16 oz cup with ice, add the vanilla syrup if using, and pour in milk of choice.",
        "Pour the whisked matcha over the top and stir gently, or leave it layered for a two-tone look.",
      ],
    },
    {
      name: "Iced Strawberry Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Layered strawberry milk and matcha \u2014 the pink-to-green drink",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Strawberry syrup or pur\u00e9e", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Sift the matcha powder into a small cup, add the hot water, and whisk until smooth. Set aside to cool slightly.",
        "Fill a 16 oz cup with ice. Add the strawberry syrup and milk of choice, and stir.",
        "Slowly pour the whisked matcha over the back of a spoon on top of the milk so it sits in its own layer.",
        "Stir just before drinking, or sip through the layers for the full pink-to-green effect.",
      ],
    },
    {
      name: "Iced Banana Bread Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Matcha with banana bread spice, over ice",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Banana syrup", "2 pumps (~0.5 oz)"],
        ["Brown sugar syrup", "1 pump (~0.25 oz)"],
        ["Ground cinnamon + a pinch of nutmeg", "a pinch each"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Sift the matcha powder into a small cup, add the hot water, and whisk until smooth.",
        "Fill a 16 oz cup with ice. Add the banana syrup, brown sugar syrup, cinnamon, and nutmeg, then the milk of choice, and stir.",
        "Pour the whisked matcha over the top and stir gently.",
        "Finish with a light dusting of cinnamon.",
      ],
    },
    {
      name: "Iced Coconut Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Matcha with a tropical coconut twist, over ice",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Coconut syrup", "3 pumps (~0.75 oz)"],
        ["Milk of choice (coconut milk recommended)", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Sift the matcha powder into a small cup, add the hot water, and whisk until smooth.",
        "Fill a 16 oz cup with ice. Add the coconut syrup and milk of choice, and stir.",
        "Pour the whisked matcha over the top and stir gently.",
      ],
    },
    {
      name: "Iced Honey Matcha Latte",
      source: "Coffee-stand classic",
      tag: "Simple matcha, sweetened with real honey, over ice",
      ingredients: [
        ["Matcha green tea powder", "1.5 tsp, sifted"],
        ["Hot water (175\u00b0F, not boiling)", "2 oz"],
        ["Honey", "1 tbsp (or to taste)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Sift the matcha powder into a small cup, add the hot water, and whisk until smooth.",
        "Stir the honey into the warm matcha until fully dissolved.",
        "Fill a 16 oz cup with ice and pour in milk of choice.",
        "Pour the sweetened matcha over the top and stir gently.",
      ],
    },
    {
      name: "Iced Honey Cinnamon Latte",
      source: "Coffee-stand classic",
      tag: "A lightly sweet, cozy latte with real honey, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Honey", "1 tbsp (or to taste)"],
        ["Ground cinnamon", "a pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Stir the honey into the hot espresso until fully dissolved, then add the cinnamon.",
        "Fill a 16 oz cup with ice.",
        "Pour the espresso mixture over the ice.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Iced Cookie Butter Latte",
      source: "Coffee-stand classic",
      tag: "Biscoff-style cookie butter syrup, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Cookie butter / Biscoff syrup", "3 pumps (~0.75 oz)"],
        ["Ground cinnamon", "a small pinch"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the cookie butter syrup and cinnamon.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Iced Toasted Marshmallow Mocha",
      source: "Coffee-stand classic",
      tag: "Chocolate and marshmallow, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Toasted marshmallow syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the chocolate and marshmallow syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Iced Birthday Cake Latte",
      source: "Coffee-stand classic",
      tag: "Vanilla and almond, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Almond syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the vanilla and almond syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Iced Caramel Macchiato",
      source: "Inspired by Starbucks",
      tag: "Vanilla milk marked with espresso over ice, finished with caramel",
      ingredients: [
        ["Vanilla syrup", "2 pumps (~0.5 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
        ["Espresso", "2 shots (double)"],
        ["Caramel drizzle", "for topping"],
      ],
      steps: [
        "Add the vanilla syrup to the bottom of a 16 oz cup filled with ice.",
        "Pour in milk of choice.",
        "Pull 2 shots of espresso and slowly pour them over the top so they mark the milk.",
        "Finish with a caramel drizzle.",
      ],
    },
    {
      name: "Iced Annihilator",
      source: "Inspired by Dutch Bros",
      tag: "Chocolate and hazelnut breve, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Hazelnut syrup", "2 pumps (~0.5 oz)"],
        ["Half and half (or milk of choice)", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the chocolate and hazelnut syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with half and half (or milk of choice) and stir gently.",
      ],
    },
    {
      name: "Iced Cocomo",
      source: "Inspired by Dutch Bros",
      tag: "Tropical coconut mocha, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Coconut syrup", "3 pumps (~0.75 oz)"],
        ["Chocolate / mocha syrup or sauce", "1 pump (~0.25 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the coconut and chocolate syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice and stir gently.",
      ],
    },
    {
      name: "Iced Snickers Latte",
      source: "Inspired by Red Leaf",
      tag: "Chocolate, caramel, and hazelnut, over ice",
      ingredients: [
        ["Espresso", "2 shots (double)"],
        ["Chocolate / mocha syrup or sauce", "2 pumps (~0.5 oz)"],
        ["Caramel syrup", "2 pumps (~0.5 oz)"],
        ["Hazelnut syrup", "1 pump (~0.25 oz)"],
        ["Milk of choice", "to fill (~10-11 oz)"],
        ["Ice", "fill the cup"],
        ["Whipped cream + drizzle", "optional topping"],
      ],
      steps: [
        "Fill a 16 oz cup with ice.",
        "Add the chocolate, caramel, and hazelnut syrups.",
        "Pull 2 shots of espresso and pour over the ice, stir to combine.",
        "Top with milk of choice, stir gently, and add whipped cream and a drizzle if desired.",
      ],
    },
  ],
};

/* ============================================================
   Rendering
   ============================================================ */

const listEl = document.getElementById("drink-list");
const tabs = document.querySelectorAll(".tab");
const modal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("modal-title");
const modalTag = document.getElementById("modal-tag");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSteps = document.getElementById("modal-steps");
const modalNotes = document.getElementById("modal-notes");
const modalClose = document.getElementById("modal-close");
const modalOverlay = document.getElementById("modal-overlay");

let currentCategory = "hot";

function renderList(category) {
  currentCategory = category;
  listEl.innerHTML = "";
  DRINKS[category].forEach((drink) => {
    const item = document.createElement("button");
    item.className = "drink-item";
    item.type = "button";
    item.textContent = drink.name;
    item.addEventListener("click", () => openRecipe(category, drink));
    listEl.appendChild(item);
  });
}

function openRecipe(category, drink) {
  modalTitle.textContent = drink.name;
  modalTag.textContent = `${drink.source} \u2014 ${drink.tag}`;

  modalIngredients.innerHTML = "";
  drink.ingredients.forEach(([ing, amt]) => {
    const row = document.createElement("div");
    row.className = "ing-row";
    row.innerHTML = `<span class="ing-name">${ing}</span><span class="ing-amt">${amt}</span>`;
    modalIngredients.appendChild(row);
  });

  modalSteps.innerHTML = "";
  drink.steps.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = s;
    modalSteps.appendChild(li);
  });

  if (drink.notes) {
    modalNotes.textContent = drink.notes;
    modalNotes.style.display = "block";
  } else {
    modalNotes.style.display = "none";
  }

  modal.classList.add("open");
  modalOverlay.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeRecipe() {
  modal.classList.remove("open");
  modalOverlay.classList.remove("open");
  document.body.classList.remove("modal-open");
}

modalClose.addEventListener("click", closeRecipe);
modalOverlay.addEventListener("click", closeRecipe);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeRecipe();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderList(tab.dataset.category);
  });
});

renderList("hot");

/* ============================================================
   iOS "Add to Home Screen" hint
   ============================================================ */

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isInStandaloneMode() {
  return "standalone" in window.navigator && window.navigator.standalone;
}

if (isIos() && !isInStandaloneMode()) {
  const hint = document.getElementById("install-hint");
  hint.classList.add("show");
  document.getElementById("install-hint-close").addEventListener("click", () => {
    hint.classList.remove("show");
  });
}

/* ============================================================
   Service worker registration (safe no-op if file is missing)
   ============================================================ */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}
