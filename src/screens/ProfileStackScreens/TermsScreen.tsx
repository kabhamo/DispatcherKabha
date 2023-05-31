import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type TermsScreenProps = {

}
export const TermsScreen: React.FC<TermsScreenProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>TermsScreenScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})