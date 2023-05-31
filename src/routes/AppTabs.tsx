import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import type { BottomTabsParamList } from './types/navigationTypes';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { ProfileScreen } from '../screens/ProfileStackScreens/ProfileScreen';
import { colors } from '../util/colors';
import Icon from 'react-native-vector-icons/Feather';
import ProfileStackScreens from './TabsStackNavigation/ProfileStackNav';


const Tab = createBottomTabNavigator<BottomTabsParamList>();

function AppTabs(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.primaryBlack,
                    height: '10%'
                }
            }}
        >
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStackScreens}
                options={{
                    tabBarIcon: (e) => (
                        <Icon
                            name="user"
                            size={28}
                            color={e.focused ? colors.white : colors.grayDark}
                        />
                    )
                }} />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: (e) => (
                        <Icon
                            name="home"
                            size={28}
                            color={e.focused ? colors.white : colors.grayDark}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: (e) => (
                        <Icon
                            name="star"
                            size={28}
                            color={e.focused ? colors.white : colors.grayDark}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default AppTabs;