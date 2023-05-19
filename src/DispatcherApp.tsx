import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { useAppSelector } from "./hooks/reduxHooks";
import AuthStack from "./routes/AuthStack";
import AppDrawer from './routes/AppDrawer';
import type { RootStackParamList } from "./routes/types/navigationTypes";
import { OnBoarding } from "./screens/OnBoardingScreen";
import { colors } from "./util/colors";



const RootStack = createNativeStackNavigator<RootStackParamList>();

function DispatcherApp(): JSX.Element {
    const user = useAppSelector(state => state.user.value)

    useEffect(() => {
        SplashScreen.hide();
    })

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <RootStack.Navigator
                    initialRouteName="Auth"
                    screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }}>
                    <RootStack.Screen name="Auth" component={AuthStack} />
                    <RootStack.Screen name="Drawer" component={AppDrawer} />
                    <RootStack.Screen name="OnBoarding" component={OnBoarding} />
                </RootStack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default DispatcherApp;