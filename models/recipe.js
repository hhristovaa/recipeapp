class Recipe {
    constructor
        (
            id,
            categoryId,
            title,
            difficulty,
            imgUrl,
            ingredients,
            instructions,
            isGlutenFree,
            isVegan,
            isVegetarian,
            isLactoseFree

        ) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.difficulty = difficulty;
        this.imgUrl = imgUrl;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Recipe;

