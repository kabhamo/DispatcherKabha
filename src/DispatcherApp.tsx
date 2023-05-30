import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { useAppSelector } from "./hooks/reduxHooks";
import AuthStack from "./routes/AuthStack";
import AppDrawer from './routes/AppDrawer';
import type { RootStackParamList } from "./routes/types/navigationTypes";
import { OnBoarding } from "./screens/OnBoardingScreen";
import { colors } from "./util/colors";
import { getLocalData, storeLocalData } from './services/asyncStorage';
import { AsyncLocalStorageKeysType } from './util/enums';



const RootStack = createNativeStackNavigator<RootStackParamList>();

function DispatcherApp(): JSX.Element {
    const [isOnBoarding, setIsOnBoarding] = useState<boolean>(false);


    // todo: check the onBoarding logics condition - first Auth or OnBoarding ? 
    useEffect(() => {
        async function onBoarding() {
            try {
                const appData = await getLocalData(AsyncLocalStorageKeysType.OnBoardingKey);
                if (appData) {
                    setIsOnBoarding(true);
                    storeLocalData(AsyncLocalStorageKeysType.OnBoardingKey, false);
                } else {
                    setIsOnBoarding(false);
                }

            } catch (ex) {
                console.log(ex)
            }
        }
        onBoarding();
    }, [isOnBoarding])

    1
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <RootStack.Navigator
                    initialRouteName='Drawer'//{isOnBoarding ? "OnBoarding" : "Auth"}
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