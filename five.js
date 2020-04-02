function cakes(recipe, available) {
    let countCakes = [];
    let recipeItems = [];

    for (let el in recipe) {
        recipeItems.push(el);
    }

    for (let i = 0; i < recipeItems.length; i++) {
        if (!available.hasOwnProperty(recipeItems[i])) {
            return 0;
        }
    }

    for (let el in recipe) {
        countCakes.push(Math.floor(available[el] / recipe[el]));
    }

    return Math.min(...countCakes);
}
