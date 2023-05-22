import { useState, useEffect } from "react";
import { View } from "react-native";
import { colors } from "../util/colors";
import { Bar, BarPropTypes } from 'react-native-progress';

type DispatcherBarProps = {
    activeIndex: number
}


export const ProgressBar: React.FC<DispatcherBarProps> = ({ activeIndex }) => {
    //const [progressState, setProgress] = useState<number>(0);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    console.log(activeIndex)

    return (
        <View style={{ margin: '2%' }}>
            <Bar
                progress={activeIndex ? ((activeIndex + 1) / 3) : 1 / 3}
                indeterminate={indeterminate}
                width={240}
                height={10}
                color={colors.error}
                borderColor={colors.primaryBlackThree}
                unfilledColor={colors.primaryBlackThree}
            />
        </View>
    );
}