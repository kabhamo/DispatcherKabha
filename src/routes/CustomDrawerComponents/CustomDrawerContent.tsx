import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../util/colors';
import { drawerItemsContent } from '../../util/constants';
import { CompositeCurrentOptionType } from '../../util/types';
import DrawerFilterItemComponent from './DrawerFilterItemComponent';
import DrawerFilterItemOptionComponent from './DrawerFilterItemOptionComponent';
import Icon from 'react-native-vector-icons/Feather';


type CustomDrawerContentProps = {
    props: DrawerContentComponentProps
}

export const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ props }) => {
    const [filter, setFilter] = useState<string>('');
    const [chosenOptionState, setChosenOptionState] = useState<CompositeCurrentOptionType>('All');
    const [showOptions, setShowOptions] = useState<boolean>(true);

    const onFilterPressHandler = (filter: string) => {
        // hide filters and render filter's options
        setShowOptions(!showOptions);
        // update the chosen filter
        setFilter(filter);
    }

    const onInnerOptionPressHandler = (chosenFilterOption: CompositeCurrentOptionType) => {
        // hide the options and render filters
        setShowOptions(!showOptions);
        // update the option state
        setChosenOptionState(chosenFilterOption);
        // clean the filter state to show FILTERS label
        setFilter('');
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerContainer}>
                {filter.length > 0 ?
                    <TouchableOpacity
                        style={{ width: '25%', alignItems: 'center' }}
                        onPress={() => {
                            setShowOptions(!showOptions);
                            setFilter('');
                        }}>
                        <Icon name='arrow-left' size={27} color={colors.primaryBlackThree} />
                    </TouchableOpacity>
                    : null
                }
                <Text style={styles.title}>{filter.length > 0 ? filter : 'FILTERS'}</Text>
            </View>

            {drawerItemsContent.map((item, index) => (
                <View key={index}>
                    {showOptions ?
                        <DrawerFilterItemComponent
                            item={item}
                            chosenOption={chosenOptionState}
                            onPress={onFilterPressHandler}
                        />
                        :
                        item.drawerOptions.map((option, index) => (
                            item.drawer.label === filter ? (
                                <View key={index}>
                                    <DrawerFilterItemOptionComponent
                                        optionItem={option}
                                        onPress={onInnerOptionPressHandler}
                                    />
                                </View>
                            ) : null
                        ))
                    }
                </View>
            ))}
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.primaryBlackThree,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
})