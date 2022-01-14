import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons  } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const HeaderAppButton = props => {
    return (
        <HeaderButton
            {...props}
            iconComponent={MaterialIcons }
            iconSize={25}
            color={Colors.primaryColor}
        />
    );

};

export default HeaderAppButton;