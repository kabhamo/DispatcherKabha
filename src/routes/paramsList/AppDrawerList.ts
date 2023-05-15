import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProfileDrawerParamList = {
    Profile: undefined;
    Settings: undefined;
    Terms: undefined;
    Logout: undefined;
}

export type TapNavProps<T extends keyof ProfileDrawerParamList> = {
    navigation: NativeStackNavigationProp<ProfileDrawerParamList, T>
    route:  RouteProp<ProfileDrawerParamList,T>
};