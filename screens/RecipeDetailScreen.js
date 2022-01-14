import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { RECIPES } from '../data/recipe-mock-data';


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const RecipeDetailScreen = props => {
    const { recipeId } = props.route.params;
    const selectedRecipe = RECIPES.find(recipe => recipe.id === recipeId);

    return (
        <ScrollView>
            <View style={styles.details}>
                <Text style={styles.bigTitle}>{selectedRecipe.title}</Text>
                <Text style={styles.title}>{selectedRecipe.difficulty}</Text>
            </View>
            <Image
                source={{ uri: selectedRecipe.imgUrl }}
                style={styles.image}
            />
            <Text style={styles.mediumTitle}>Ingredients</Text>
            {selectedRecipe.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.mediumTitle}>Steps</Text>
            {selectedRecipe.instructions.map(instruction => (
                <ListItem key={instruction}>{instruction}</ListItem>
            ))}

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,

    },
    bigTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6B2737'

    },
    mediumTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6B2737'

    },
    image: {
        height: 250,
        width: '100%',
        marginVertical: 10

    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 3,
        paddingHorizontal: 15

    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderCollor: '#6B2737',
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        overflow: 'scroll'
    }
})

export default RecipeDetailScreen;