import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppParamList = {
    Home: undefined;
    ProfileTab: undefined;
    Favorite: undefined;
}

export type TapNavProps<T extends keyof AppParamList> = {
    navigation: NativeStackNavigationProp<AppParamList, T>
    route:  RouteProp<AppParamList,T>
};