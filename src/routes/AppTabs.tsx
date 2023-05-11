import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { AppParamList } from './paramsList/AppParamList';

type AppTabsProp = {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProp> = ({ }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
}