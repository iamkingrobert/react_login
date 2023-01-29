import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';


const ConfirmEmail = () => {
    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
      navigation.navigate('HomeScreen');
    };
   
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };
    const onResendPressed = () => {
      console.warn('Resend Works Fine');
    };
    const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.root}>
    <Text style={Styles.tittle}>Confrim your Email</Text>
 
      <CustomInput placeholder='Enter Confirmation Code' value={code} setValue={setCode}/>
      
      <CustomButton text='Confirm' onPress={onConfirmPressed}/>
      
      <CustomButton text="Back to Sign In" onPress={onSignInPressed} type='SECONDARY'/>
       <CustomButton text="Resend Code" onPress={onResendPressed} type='TERTIARY'/>
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

export default ConfirmEmail