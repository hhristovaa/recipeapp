import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const RecipeItem = props => {
    return (
        <View style={styles.recipeCard}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{ ...styles.recipeInfo, ...styles.recipeHeader }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            style={styles.recipeImg}>
                            <Text style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.recipeInfo, ...styles.recipeDetail }}>
                        <Text style={styles.difficulty}>{props.difficulty.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeCard: {
        height: 220,
        backgroundColor: '#f5f5f5',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    recipeInfo: {
        flexDirection: 'row',


    },
    recipeHeader: {
        height: '90%'

    },
    recipeDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'

    },
    recipeImg: {
        height: 180,
        width: '100%',
        justifyContent: 'flex-end'

    },
    title: {
        fontSize: 22,
        fontWeight: 'medium',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 3,
        paddingHorizontal: 15,
        textAlign: 'center'
    },
    difficulty: {
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: '2%',
        fontWeight: 'bold'
    }


});

export default RecipeItem;