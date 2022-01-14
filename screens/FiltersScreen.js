import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';
import Colors from '../constants/Colors';


const FiltersScreen = props => {
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filter by Dietary Restriction</Text>
            <View style={styles.filter}>
                <Text style={styles.filterName}>Vegan</Text>
                <Switch
                    value={isVegan}
                    onValueChange={newValue => setIsVegan(newValue)}
                    trackColor={{ true: Colors.primaryColor, false: Colors.grayColor }}
                />
            </View>
            <View style={styles.filter}>
                <Text style={styles.filterName}>Vegetarian</Text>
                <Switch
                    value={isVegetarian}
                    onValueChange={newValue => setIsVegetarian(newValue)}
                    trackColor={{ true: Colors.primaryColor, false: Colors.grayColor }}
                />
            </View>
            <View style={styles.filter}>
                <Text style={styles.filterName}>Lactose-free</Text>
                <Switch
                    value={isLactoseFree}
                    onValueChange={newValue => setIsLactoseFree(newValue)}
                    trackColor={{ true: Colors.primaryColor, false: Colors.grayColor }}
                />
            </View>
            <View style={styles.filter}>
                <Text style={styles.filterName}>Gluten-free</Text>
                <Switch
                    value={isGlutenFree}
                    onValueChange={newValue => setIsGlutenFree(newValue)}
                    trackColor={{ true: Colors.primaryColor, false: Colors.grayColor }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'ce,nter',
        width: '80%',
        margin: 10
    },
    filterName: {
        fontSize: 22
    }
})

export default FiltersScreen;