import { enableScreens } from 'react-native-screens';
import RecipeAppNavigator from './navigation/RecipeNavigator';

//for better performance
enableScreens();

export default function App() {
  return (
    <RecipeAppNavigator/>
  );
}


