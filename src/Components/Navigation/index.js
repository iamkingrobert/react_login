import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SignInScreen from '../../Screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../Screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from '../../Screens/ConfirmEmailScreen/ConfirmEmail';
import ForgotPassword from '../../Screens/ForgotPasswordScreen/ForgotPassword';
import NewPassword from '../../Screens/NewPasswordScreen/NewPassword';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignInScreen" component={SignInScreen}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmail}/>
    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword}/>
    <Stack.Screen name="NewPasswordScreen" component={NewPassword}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation