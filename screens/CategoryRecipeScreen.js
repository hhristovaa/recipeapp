import React from 'react';
import { CATEGORIES, RECIPES } from '../data/recipe-mock-data';
import RecipeList from '../components/RecipeList';

const CategoryRecipeScreen = props => {
    const { categoryId } = props.route.params;
    const matchingRecipes = RECIPES.filter(recipe => recipe.categoryId.indexOf(categoryId) >= 0);
    const selectedCat = CATEGORIES.find(cat => cat.id === categoryId);

    return (
        <RecipeList listData={matchingRecipes} navigation={props.navigation} />
    )
};

export default CategoryRecipeScreen;