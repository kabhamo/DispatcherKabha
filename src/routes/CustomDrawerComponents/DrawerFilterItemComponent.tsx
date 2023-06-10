import { DrawerItem } from "@react-navigation/drawer";
import { useState, useEffect } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { DrawerListItem, CompositeCurrentOptionType } from "../../util/types";
import { colors } from "../../util/colors";

type DrawerItemComponentProps = {
    item: DrawerListItem,
    chosenOption: CompositeCurrentOptionType,
    onPress: (filter: string) => void
}
const DrawerFilterItemComponent: React.FC<DrawerItemComponentProps> = ({ item, onPress, chosenOption }) => {
    const [option, setOption] = useState<CompositeCurrentOptionType>('All');

    useEffect(() => {
        //check if the current drawerItem containes the updated option 
        if (item.drawerOptions.some(option => option === chosenOption)) {
            // update the drawerItem with the new option
            item.currentOptionState = chosenOption;
            //rerender the component item
            setOption(item.currentOptionState)
        }
    }, [chosenOption])

    return (
        <>
            <View style={styles.drawerItemsContainer}>
                <DrawerItem
                    style={styles.drawerItem}
                    labelStyle={{ fontSize: 17 }}
                    label={item.drawer.label}
                    onPress={() => onPress(item.drawer.label)}
                />
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.drawerStateText}
                >
                    {item.drawer.label === 'Search in' && 'Everything'}
                    {/*{currentOption.length > 0 && currentOption}*/}
                    {item.currentOptionState.length > 0 && item.currentOptionState}
                </Text>
            </View>
            <View style={styles.line}></View>
        </>

    );
}

const styles = StyleSheet.create({
    drawerItemsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    drawerItem: {
        flex: 5,
    },
    drawerStateText: {
        flex: 2,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500',
        color: colors.grayDark,
        opacity: 0.8,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    line: {
        backgroundColor: colors.gray,
        width: '100%',
        height: 2,
        marginTop: '3%',
    },
})

export default DrawerFilterItemComponent;