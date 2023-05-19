import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import type { BottomTabsParamList } from './types/navigationTypes';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { ProfileScreen } from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator<BottomTabsParamList>();

function AppTabs(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="ProfileTab" component={ProfileScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

export default AppTabs;