import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { AppParamList } from './paramsList/AppParamList';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

type AppTabsProp = {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProp> = ({ }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="ProfileTab" component={ProfileScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>


    );
}