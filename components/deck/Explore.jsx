import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Explore() {
  return (
    <View>
      <Image source={require('../../assets/devImage/explore.jpg')}
        style={{
         borderRadius:30,
         width:'auto',
         height:100,
         marginLeft:15,
         marginRight:15,
        }}
      />
      <TouchableOpacity style={{
        backgroundColor:'#f55d42',
        width:70,
        borderRadius:12,
        marginTop:15,
        marginRight:25,
        alignSelf:'flex-end',
        borderColor:'#fff',
        borderWidth:2
      }}>
        <Text style={{
            textAlign:'center',
            color:'#fff'
        }}>Explore</Text>
      </TouchableOpacity>
    </View>
  )
}