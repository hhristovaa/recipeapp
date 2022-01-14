import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/recipe-mock-data';
import CategoryGridItem from '../components/CategoryGridItem';


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridItem title={itemData.item.title}
                img={itemData.item.img}
                onSelect={() => {
                    props.navigation.navigate('Categories', { screen: 'Categories', categoryId: itemData.item.id });
                }}
            />
        )
    }
    
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default CategoriesScreen;