import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { Context as BlogContext } from '../context/BlogContextAxios';

const BlogCreate = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { actions } = useContext(BlogContext);

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
        buttonName = 'Create One Blog'
        onPress = { () => actions.createBlog(title, content, title && content ? () => navigation.navigate('Blog List'): () => alert('Fill in the info'))}
        />
    </View>
}

export default BlogCreate;
