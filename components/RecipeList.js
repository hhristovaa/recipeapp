import { View, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './RecipeItem';

const RecipeList = props => {
    const renderRecipeItem = itemData => {
        return(
            <RecipeItem 
            title={itemData.item.title}
             difficulty={itemData.item.difficulty}
              image={itemData.item.imgUrl} 
              onSelect={() => {
                  props.navigation.navigate('Recipe', {    
                recipeId: itemData.item.id,
                  }); 
            }}
            />
        )

    };
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.listData}
                renderItem={renderRecipeItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RecipeList;