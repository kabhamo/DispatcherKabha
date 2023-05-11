import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { AppParamList } from './paramsList/AppParamList';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

type AppTabsProp = {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProp> = ({ }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}