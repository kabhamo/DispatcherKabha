import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyProfileScreen } from '../../screens/ProfileStackScreens/MyProfileScreen';
import { ProfileScreen } from '../../screens/ProfileStackScreens/ProfileScreen';
import { SettingsScreen } from '../../screens/ProfileStackScreens/SettingsScreen';
import { TermsScreen } from '../../screens/ProfileStackScreens/TermsScreen';
import { colors } from '../../util/colors';
import type { ProfileStackParamList } from '../types/navigationTypes';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackNavigator(): JSX.Element {

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

export default ProfileStackNavigator