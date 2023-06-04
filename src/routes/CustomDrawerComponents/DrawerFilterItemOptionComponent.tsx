import { DrawerItem } from "@react-navigation/drawer"
import { StyleSheet, View } from "react-native"
import { colors } from "../../util/colors"
import { LanguageDrawerOptionsEnum, SourcesDrawerOptionsEnum } from "../../util/enums"
import { CompositeCurrentOptionType } from "../../util/types"

type InnerDrawerOptionListProps = {
    optionItem: SourcesDrawerOptionsEnum | LanguageDrawerOptionsEnum,
    onPress: (chosenFilterOption: CompositeCurrentOptionType) => void
}

const DrawerFilterItemOptionComponent: React.FC<InnerDrawerOptionListProps> = ({ optionItem, onPress }) => {

    return (
        <>
            <View style={styles.drawerItemsContainer}>
                <DrawerItem
                    style={styles.drawerItem}
                    labelStyle={{ fontSize: 17 }}
                    label={optionItem}
                    onPress={() => onPress(optionItem)}
                />
            </View>
            <View style={styles.line}></View>
        </>
    )
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
    line: {
        backgroundColor: colors.gray,
        width: '100%',
        height: 2,
        marginTop: '3%',
    },
});

export default DrawerFilterItemOptionComponent