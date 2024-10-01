// import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './login'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './Register';
import FoodDetail from '../components/FoodDetail';
import Setting from '../components/Setting';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Cart from '../components/Cart';
import Favourite from '../components/Favourite';
import Contact from '../components/Contact';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                borderRadius: 10,
                backgroundColor: 'rgba(162, 165, 162, 0.8)'
            },
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'HomeTab') {
                    return <Icon2 name='home' size={size} color={focused ? 'rgba(161, 240, 90, 0.8)' : '#676767'} />
                } else if (route.name === 'Cart') {
                    return <Icon name='shopping-cart' size={size} color={focused ? 'rgba(161, 240, 90, 0.8)' : '#676767'} />
                } else if (route.name === 'Setting') {
                    return <Icon3 name='settings-sharp' size={size} color={focused ? 'rgba(161, 240, 90, 0.8)' : '#676767'} />
                } else if (route.name === 'Favourite') {
                    return <Icon name='heart' size={size} color={focused ? 'rgba(161, 240, 90, 0.8)' : '#676767'} />
                }
            },
        })}>
            <Tab.Screen name="HomeTab" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Setting" component={Setting} />


        </Tab.Navigator>
    );
}

const MenuComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="FoodDetail" component={FoodDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MenuComponent;

const styles = StyleSheet.create({});
