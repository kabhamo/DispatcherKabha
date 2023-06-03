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
}

export type BottomTabsParamList = {
    Home: undefined;
    ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
    Favorite: undefined;
}

export type HomeScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList, 'Home'>,
    CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>,
    NativeStackScreenProps<RootStackParamList>
    >>;

export type FavoriteScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList,'Favorite'>,
    NativeStackScreenProps<RootStackParamList>
    >; 


export type ProfileStackParamList = {
    Settings: undefined;
    Terms: undefined;
    Profile: undefined;
    MyProfile: undefined;

}
export type ProfileNavigationProp =
    CompositeScreenProps<
        NativeStackScreenProps<ProfileStackParamList, 'Profile'>,
        CompositeScreenProps<
            BottomTabScreenProps<BottomTabsParamList>,
            NativeStackScreenProps<RootStackParamList>
        >
    >    

export type TermsNavigationProp =
    CompositeScreenProps<
        NativeStackScreenProps<ProfileStackParamList, 'Terms'>,
        CompositeScreenProps<
            BottomTabScreenProps<BottomTabsParamList>,
            NativeStackScreenProps<RootStackParamList>
        >
    >    
    
export type SettingsNavigationProp =
    CompositeScreenProps<
        NativeStackScreenProps<ProfileStackParamList, 'Settings'>,
        CompositeScreenProps<
            BottomTabScreenProps<BottomTabsParamList>,
            NativeStackScreenProps<RootStackParamList>
        >
    >    

export type MyProfileNavigationProp =
CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParamList, 'MyProfile'>,
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabsParamList>,
        NativeStackScreenProps<RootStackParamList>
    >
>   

