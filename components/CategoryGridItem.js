import { View, Text, StyleSheet, TouchableOpacity, ImageBackground  } from 'react-native';

const CategoryGridItem = props => {
    return(
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={styles.container}>
            <ImageBackground
            source={{uri: props.img}}
            style={styles.categoryImg}>    
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </ImageBackground>
            </View>    
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 250,
        borderRadius: 10

    },
    container: {
        flex: 1,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 3,
        paddingHorizontal: 15,
        color: 'white'
    },
    categoryImg: {
        height: 250,
        width: '100%'
       
    }
});

export default CategoryGridItem;
