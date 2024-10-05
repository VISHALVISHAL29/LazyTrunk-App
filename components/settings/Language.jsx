//language.jsx
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Language() {
  return (
    <TouchableOpacity style={{
      width: '100%',
      height: 80,
      borderRadius: 12,
      backgroundColor: '#77DD77',
      flexDirection:'row',
      justifyContent: 'space-between', // Center vertically
      alignItems:'center',
      paddingHorizontal: 20, // Add left padding for spacing from the edge
    }}>
      <Text style={{
        textAlign: 'left', // Align text to the left
        fontSize: 20, 
        fontWeight:'bold',
        color: '#000', 
      }}>
        Languages
      </Text>
      <View style={{
        flexDirection:'row', //align Right side item in a row
        alignItems:'center' //align Vertically in the center
      }}
      >
      <Text style={{
        fontSize:15,
        fontWeight:'bold',
        marginRight:10,
      }}>Eng(US)</Text>
      <Image style={{
        width:30,
        height:30,
        marginRight:10,
      }}
      source={require('../../assets/devImage/united-states.png')}/>
      <AntDesign name="caretright" size={24} color="black" />
      </View>

    </TouchableOpacity>
  );
}
