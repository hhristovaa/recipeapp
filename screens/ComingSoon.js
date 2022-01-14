import React from 'react';
import {Image, View, Text, Button, StyleSheet } from 'react-native';

const ComingSoon = ({navigation}) => {
        return (
            <View style={styles.screen}>
                <Text style={styles.bigTitle}>Coming Soon</Text>
                <Image style={styles.image}
                source={'https://image.freepik.com/free-vector/stay-tuned-coming-soon-banner-design_1017-26693.jpg'}/>
                <Button 
                title="Home" 
                styles={styles.button}
                color= '#6B2737'
                onPress={() => navigation.navigate('Home')}/>
            </View>
        )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 20,

    },
    bigTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6B2737',
        margin: 10
    },
    image: {
        height: 250,
        width: '100%',
        margin: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 3,
        paddingHorizontal: 15

    },
    button: {
        margin: 20,
        padding: 10,
      
    }
})

export default ComingSoon;