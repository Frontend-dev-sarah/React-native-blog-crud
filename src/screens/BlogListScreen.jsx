import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity, Dimensions, Text, FlatList, StyleSheet } from 'react-native';
import { Context as BlogContext} from '../context/BlogContextAxios';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

const WIN_WIDTH = Dimensions.get('window').width;

const BlogList = ({navigation}) => {
    const data = useContext(BlogContext);
    const isFocused = useIsFocused()

    useEffect(() => {data.actions.fetchBlog()}, [isFocused])
    
    const renderItem = ({item, index}) => {
        if (item && item.title) {
        return <View key = {item.id} style = {styles.blogLine}>
            <TouchableOpacity onPress = {() => navigation.navigate("Blog Show", {id: item.id})}>
        <Text style = {styles.title}>{item.title} - {item.id}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = { () => data.actions.deleteBlog(item.id)}>
            <Feather name = "trash" style = {styles.icon}/>
            </TouchableOpacity>
        </View>
    }}

    return (
        <View style = {styles.container}>
            {/* <TouchableOpacity style = {styles.button} onPress = {() => data.actions.addBlog()}>
                <Text>Add one blog +</Text>
            </TouchableOpacity> */}
            <FlatList
                style = {styles.blogList}
                data = {data.state}
                keyExtractor = {(item) => item.id}
                renderItem = { ({item, index}) => renderItem({item, index})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'lightgreen',
        padding: 5,
        marginBottom: 10,
        borderRadius: 5
    },
    blogLine: {
        flexDirection: 'row',
        width: WIN_WIDTH - 30,
        justifyContent: 'space-between',
        marginVertical: 5
    },
    title: {
        fontSize: 20
    },
    icon: {
        fontSize: 20
    }
})
export default BlogList;