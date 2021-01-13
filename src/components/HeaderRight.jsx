import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HeaderRight = (props) => {
       
return <TouchableOpacity onPress= {props.onRightPress}>
<Feather name = {props.iconName} style = {styles.icon}/>
</TouchableOpacity>
}

const styles = StyleSheet.create({ 
    icon: {
        fontSize: 25,
        color: 'white',
        padding: 10
    }
})
export default HeaderRight;