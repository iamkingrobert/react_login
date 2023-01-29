import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ActionSheetIOS } from 'react-native'
import React, {useState} from 'react'
import Meqasa from '../../../assets/images/Meqasa.png'; 
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const onSignInPressed = () => {
        navigation.navigate('HomeScreen');
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    };
    const onSignUpPressed  = () => {
        navigation.navigate('SignUpScreen')
    };

    const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.root}>
      <Image source={Meqasa} style={[Styles.logo, {height: height * 0.3}]} 
      resizeMethod='contain'/>
 
      <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
      

      <CustomButton text='Sign In' onPress={onSignInPressed}/>
      <CustomButton text='Forgot Password?' onPress={onForgotPasswordPressed} type='TERTIARY'/>
      <SocialSignInButtons/>
       <CustomButton text="Don't have account? Create one" onPress={onSignUpPressed} type='TERTIARY'/>
    </View>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 70,
    },
  logo: {
    width: '70%',
    maxWidth: 110,
    maxHeight: 110,
    marginBottom: 40,
  }
})

export default SignInScreen