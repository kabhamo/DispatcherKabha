import { AuthStack } from "../routes/AuthStack";
import { AppTabs } from "../routes/AppTabs";
import { useAppSelector } from "../hooks/reduxHooks";
import { View } from "react-native";

function DispatcherApp(): JSX.Element {
    const user = useAppSelector(state => state.user.value)
    return (
        <View style={{ flex: 1 }}>
            {user && user.isLoggedIn ? <AppTabs /> : <AuthStack />}
        </View>
    );
}

export default DispatcherApp;

