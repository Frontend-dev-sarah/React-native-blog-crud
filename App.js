import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlogListScreen from './src/screens/BlogListScreen';
import BlogShowScreen from './src/screens/BlogShowScreen';
import BlogCreateScreen from './src/screens/BlogCreateScreen';
import BlogEditScreen from './src/screens/BlogEditScreen';
import HeaderRight from './src/components/HeaderRight';
import { Provider as BlogProvider } from './src/context/BlogContextAxios';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = 'Blog List' 
        component = {BlogListScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Blogs',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <HeaderRight iconName = 'plus' onRightPress = {() => navigation.navigate('Blog Create')}/>
          ),
        })}
        />
        <Stack.Screen 
        name = 'Blog Show' 
        component = {BlogShowScreen}
        options = {({navigation, route}) => ({
          headerTitle: 'Blog Details',
          headerStyle: {
            backgroundColor: 'orange'
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => (
            <HeaderRight iconName = 'edit-3' onRightPress = {() => navigation.navigate('Blog Edit', {id: route.params.id})}/>
          )
        })}
        />
        <Stack.Screen 
        name = 'Blog Create' 
        component = {BlogCreateScreen}
        options = {{
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'orange'
          }
        }}
        />
        <Stack.Screen 
        name = 'Blog Edit' 
        component = {BlogEditScreen}
        options = {{
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'orange'
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider>
    <App/>
    </BlogProvider>
}