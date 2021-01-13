import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({buttonName, onPress}) => {
       
return <TouchableOpacity style = {styles.container} onPress= {onPress}>
<Text style = {styles.text}>{buttonName}</Text>
</TouchableOpacity>
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: 'orange',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        color: 'white',
        padding: 10
    }
})
export default Button;