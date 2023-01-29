import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const onSignInFacebook = () => {
    console.warn('Facebook Works Fine');
};
const onSignInGoogle = () => {
    console.warn('Google Works Fine');
};

const SocialSignInButtons = () => {
  return (
    <>
      <CustomButton text='Sign In With Facebook'
       onPress={onSignInFacebook}
        bgcolor="#4765A9" 
        fgcolor="#4765A9"/>
      <CustomButton text='Sign In With Google?'
       onPress={onSignInGoogle} 
       bgcolor="#db3236" 
       fgcolor="db3236"/>
    </>
  )
}

export default SocialSignInButtons