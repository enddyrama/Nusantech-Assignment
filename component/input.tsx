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
    Dimensions
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
    placeholder: string;
    value: any;
    setBox: any;
    checked: any;
    // onChangeText: (text: string) => void;
    // secureTextEntry?: boolean;
    // route: any;
    //   CheckBox: any
}

const { height, width } = Dimensions.get('screen')

const input = ({ placeholder, value, setBox, checked }: Props) => {
    const failInput = () => {
        setBox('')
        alert('Input number only')
    }

    const handleInputChange = (text) => {
        if (/^[0-9]+$/.test(text) || text === '') {
            setBox(text)
        } else failInput()
    }
    return (
        <View style={styles.input}>
            <TextInput
                placeholder={placeholder}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(text)}
                value={value}
                style={{width: width/1.6}}
            />
            <BouncyCheckbox
                size={25}
                fillColor="#6E6BF3"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "#6E6BF3" }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={()=>checked()}
            />
        </View>
    );
};

export default input;

const styles = StyleSheet.create({
    input: {
        width: width / 1.4,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
})