//ScreenText.jsx
import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function ScreenText() {
    const[ loaded ]=  useFonts({
        'Kanit-Regular' : require('../../assets/fonts/Kanit-Regular.ttf'),
        'Kanit-SemiBold' : require('../../assets/fonts/Kanit-SemiBold.ttf'),
        'Kanit-Medium' : require('../../assets/fonts/Kanit-Medium.ttf')
    })
    
    if(!loaded){
        return <ActivityIndicator  size="large" color="#00ff00"  />
    }

  return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
        }}>
          <Text style={{
              fontSize: 50,
              fontFamily: 'Kanit-SemiBold',
              textAlign: 'center',
              color: '#b9f505',
          }}> NEVER </Text>
          <Text style={{
              fontSize: 50,
              fontFamily: 'Kanit-SemiBold',
              textAlign: 'center',
              color: '#fff',
          }}> HAVE I </Text>
          <Text style={{
              fontSize: 50,
              fontFamily: 'Kanit-SemiBold',
              textAlign: 'center',
              color: '#f56905',
              textDecorationLine:'underline'
          }}
          > EVER </Text>
        </View>
  )
}