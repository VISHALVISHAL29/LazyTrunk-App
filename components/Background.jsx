//Background.jsx
import { ImageBackground,StyleSheet} from 'react-native'
import React, { Children } from 'react'
import Home from '../app/(tabs)/Home'

export default function Background({children}) {
  return (
    <ImageBackground 
      source={require('../assets/devImage/background2.jpg')}
      style={styles.imageStyle}
    >
        {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    imageStyle : {
       flex:1,
       resizeMode:'cover',
    }
})