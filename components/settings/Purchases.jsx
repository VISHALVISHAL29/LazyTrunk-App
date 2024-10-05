//purchases.jsx
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Language() {
  return (
    <TouchableOpacity style={{
      width: '80%',
      height: 80,
      borderRadius: 12,
      backgroundColor: '#1ecaff',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
      paddingHorizontal: 20,
      marginRight:57
    }}>
      <FontAwesome5 name="file-invoice-dollar" size={24} color="black" />  
      <Text style={{
        textAlign: 'left', 
        fontSize: 20, 
        fontWeight:'bold',
        color: '#000', 
      }}>
        Purchases
      </Text>
      <View style={{
        flexDirection:'row', 
        alignItems:'center' 
      }}
      >
      <AntDesign name="caretright" size={24} color="black" />
      </View>

    </TouchableOpacity>
  );
}
