//Home.jsx
import { View, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenText from '../../components/home/ScreenText'
import Pressables from '../../components/home/Pressables';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  
  const onClick = () =>  {
    router.push('/Setting');
  }
  return (
    <View style={{
      justifyContent: 'centre', 
      alignItems: 'centre', 
      padding: 60,  
    }}>
    <Pressable style={{
    position: 'absolute', 
    top: 20, 
    right: 20
   }} 
   onPress={onClick}
   >
   <Ionicons name="settings-sharp" size={40} color="white"/> 

    </Pressable>
    <ScreenText/>
    <Pressables/>
    </View>
  )
}