import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { DrawerScreenProps } from "@react-navigation/drawer";

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthParamList>;
    Drawer: NavigatorScreenParams<DrawerParamList>;
    OnBoarding: undefined;
};

export type OnBoardingScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>

//export type NewBoardingScreenNavigationProp = CompositeScreenProps<
//    NativeStackScreenProps<RootStackParamList, 'OnBoarding'>,

//    >

export type AuthParamList = {
    Login: undefined;
    Signup: undefined;
};


export type LoginScreenNavigationProp = CompositeScreenProps<
    NativeStackScreenProps<AuthParamList,'Login'>,
    NativeStackScreenProps<RootStackParamList>
    >;

export type SignupScreenNavigationProp = CompositeScreenProps<
    NativeStackScreenProps<AuthParamList,'Signup'>,
    NativeStackScreenProps<RootStackParamList>
    >;    

export type DrawerParamList = { 
    SearchIn: NavigatorScreenParams<BottomTabsParamList>; //tabs
    Sources: undefined;
    Language: undefined;
    Dates: undefined;
}

export type BottomTabsParamList = {
    Home: undefined;
    ProfileTab: undefined;
    Favorite: undefined;
}

export type HomeScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList, 'Home'>,
    CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>,
    NativeStackScreenProps<RootStackParamList>
    >>;

export type ProfileScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList,'ProfileTab'>,
    NativeStackScreenProps<RootStackParamList>
    >;  

export type FavoriteScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList,'Favorite'>,
    NativeStackScreenProps<RootStackParamList>
    >; 




