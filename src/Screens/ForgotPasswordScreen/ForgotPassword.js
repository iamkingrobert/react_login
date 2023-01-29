import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';


const ForgotPassword = () => {
    const [username, setUsername] = useState('');

    const onSendPressed = () => {
      navigation.navigate('HomeScreen');
    };
   
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };
  
    const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.root}>
    <Text style={Styles.tittle}>Reset Password</Text>
 
      <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
      
      <CustomButton text='Send' onPress={onSendPressed}/>
      
      <CustomButton text="Back to Sign In" onPress={onSignInPressed} type='SECONDARY'/>
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

export default ForgotPassword