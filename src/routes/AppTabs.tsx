import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { colors } from '../util/colors';
import HomeStackNavigator from './TabsStackNavigation/HomeStackNavigator';
import ProfileStackNavigator from './TabsStackNavigation/ProfileStackNavigator';
import type { BottomTabsParamList } from './types/navigationTypes';


const Tab = createBottomTabNavigator<BottomTabsParamList>();

function AppTabs(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='HomeStack'
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
                component={ProfileStackNavigator}
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
                name="HomeStack"
                component={HomeStackNavigator}
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