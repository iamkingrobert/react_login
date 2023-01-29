import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ActionSheetIOS } from 'react-native'
import React, {useState} from 'react'
import HomeKey from '../../../assets/images/HomeKey.png'; 
import Home from '../../../assets/images/Home.jpg'; 

const HomeScreen = () => {
    const {height} = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.root}>
      <Image source={HomeKey} style={[Styles.logo, {height: height * 0.3}]} 
      resizeMethod='contain'/>
      <Image source={Home} style={{
          width: 390, height: 450, borderBottomLeftRadius: 190, marginTop:40, marginBottom: 23, borderTopRightRadius: 150 }}/>
          <Text style={{fontSize: 20, fontWeight: '900', color: 'black', marginTop: 40}}>WELCOME HOME</Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'black', marginTop: 5, fontStyle: 'italic'}}>Home Sweet Home</Text>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
  logo: {
    width: '70%',
    maxWidth: 110,
    maxHeight: 110,
    marginBottom: 20,
  }
})

export default HomeScreen