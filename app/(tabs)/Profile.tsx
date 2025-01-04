import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from "expo-router"

import Colors from "@/constants/Colors"

const Profile = () => {
  return (
    <>
    <Stack.Screen options={{headerShown:false}}/>
    <View style={styles.container}>
      
      <Text style={styles.item}>Profile</Text>
    </View>
    </>
  )
}

export default Profile 

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.black


  },
  item:{
    color:Colors.white
  }
})