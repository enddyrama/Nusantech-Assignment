import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
    operator: string;
    onPress: any;
    status: boolean;
}

const { height, width } = Dimensions.get('screen')

const Button = ({ operator, onPress, status }: Props) => {

    const handle = ()=>{
        onPress(operator)
    }
    return (
        <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: status ? '#6E6BF3' : 'grey' }]} onPress={onPress}>
                <Text style={styles.text}>{operator}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        width: width / 8,
        height: height / 20,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})