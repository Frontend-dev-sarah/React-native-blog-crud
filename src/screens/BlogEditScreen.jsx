import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { Context as BlogContext } from '../context/BlogContextAxios';

const BlogEdit = ({navigation, route}) => {
    const { actions, state } = useContext(BlogContext);
    const blog = state.find((blog) => blog.id === route.params.id)

    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);
    

    return <View>
        <Input
          label = 'Blog title'
          value = {title}
          onChangeText = {(title) => setTitle(title)}  
        />
        <Input
          label = 'Blog content'
          value = {content}
          onChangeText = {(content) => setContent(content)} 
          multiline 
        />
        <Button
        buttonName = 'Save Changes'
        onPress = {() => actions.editBlog(blog.id, title, content, title && content ? () => navigation.pop(): () => alert('Fill in the info'))}
        />
    </View>
}

export default BlogEdit;
