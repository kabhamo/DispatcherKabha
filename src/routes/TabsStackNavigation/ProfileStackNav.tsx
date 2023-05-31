import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ProfileStackParamList } from '../types/navigationTypes';
import { TermsScreen } from '../../screens/ProfileStackScreens/TermsScreen';
import { SettingsScreen } from '../../screens/ProfileStackScreens/SettingsScreen';
import { ProfileScreen } from '../../screens/ProfileStackScreens/ProfileScreen';
import { MyProfileScreen } from '../../screens/ProfileStackScreens/MyProfileScreen';
import { colors } from '../../util/colors';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackScreens(): JSX.Element {

    return (
        <ProfileStack.Navigator
            screenOptions={
                {
                    headerStyle: { backgroundColor: colors.primaryBlack },
                    headerTintColor: colors.white
                }}>
            <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
            <ProfileStack.Screen name='Settings' component={SettingsScreen} />
            <ProfileStack.Screen name='Terms' component={TermsScreen} />
            <ProfileStack.Screen name='MyProfile' component={MyProfileScreen} />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreens