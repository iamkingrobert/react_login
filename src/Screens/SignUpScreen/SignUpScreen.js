import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
      navigation.navigate('ConfirmEmailScreen');
    };
   
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };
    const onTermsOfUsePressed = () => {
      console.warn('Terms Of Use Works Fine');
    };
    const onPrivacyPolicyPressed = () => {
      console.warn('Privacy Policy Works Fine');
    };
    const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.root}>
    <Text style={Styles.tittle}>Create Account</Text>
 
      <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
      <CustomInput placeholder='Email' value={email} setValue={setEmail}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomInput placeholder='Repeat Password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
      

      <CustomButton text='Register' onPress={onRegisterPressed}/>
      <Text style={Styles.text} onPress={onTermsOfUsePressed}>By registering, you confirm that you accept our <Text style={Styles.link} onPress={onPrivacyPolicyPressed}>Terms of Use </Text>and <Text style={Styles.link}>Privacy Policy</Text></Text>
      
      <SocialSignInButtons/>
      
       <CustomButton text="Have an account? Sign In" onPress={onSignInPressed} type='TERTIARY'/>
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
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text:{
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075'
  }
})

export default SignUpScreen