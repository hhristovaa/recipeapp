
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecipeScreen from '../screens/CategoryRecipeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import { HeaderButtons } from 'react-navigation-header-buttons';
import HeaderAppButton from '../components/HeaderAppButton';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ComingSoon from '../screens/ComingSoon';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RecipeDrawerNavigation = () => {
    return (

        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: Colors.secondaryColor }}>
            <Drawer.Screen
                name="Home" component={CategoriesScreen}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.secondaryColor
                }}
            />
            <Drawer.Screen
                name="Filters"
                component={FiltersScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.secondaryColor,
                    headerRight: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={HeaderAppButton}>
                                <MaterialIcons title='Save'
                                    name="save"
                                    size={25}
                                    color={Colors.grayColor} />
                            </HeaderButtons>)
                    }
                }} />
            <Drawer.Screen
                name="Contacts"
                component={ComingSoon}
                options={{
                    title: 'Contacts',
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.secondaryColor
                }}
            />
        </Drawer.Navigator>
    );
};

const RecipeNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.secondaryColor,
                }
                }>
                <Stack.Screen
                    name='Home'
                    component={RecipeDrawerNavigation}
                    options={{
                        title: 'Recipe App',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Categories"
                    component={CategoryRecipeScreen}
                />
                <Stack.Screen
                    name='Recipe'
                    component={RecipeDetailScreen}
                    options={{
                        headerRight: () => {
                            return (
                                <HeaderButtons HeaderButtonComponent={HeaderAppButton}>
                                    <MaterialIcons title='Favorite'
                                        name="favorite"
                                        size={25}
                                        color={Colors.accentColor}
                                        onPress={() => {
                                            console.log('mark as fav');
                                        }} />
                                </HeaderButtons>)
                        }
                    }}
                />
                <Stack.Screen
                    name='Filters'
                    component={FiltersScreen}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )

};



export default RecipeNavigator; 