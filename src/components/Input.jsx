import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({label, value, onChangeText, multiline}) => {
    return <View style = {styles.container}>
        <Text style = {styles.title}>{label}</Text>
        <TextInput 
        style = {styles.input}
        value = {value}
        onChangeText = {onChangeText}
        multiline = {multiline}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 8
    }
})
export default Input;