import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContextAxios';
import { useRoute } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const BlogShow = () => {
    //pass { route } as arg in BlogShow(),  const { id } = route.params;
    const route = useRoute();
    const data = useContext(BlogContext);
    const blog = data.state.find((blog) => blog.id === route.params.id)

   

    
return (
    <View style = {styles.container}>
        <Text style = {{ fontWeight: 'bold', marginBottom: 10}}>{blog.title}</Text>
        <Text>{blog.content}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center'
    }
})

export default BlogShow;