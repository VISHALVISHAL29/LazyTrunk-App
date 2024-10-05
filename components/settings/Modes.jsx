import { View, Text, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function KidMode() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity style={{
      width: '89%',
      height: 80,
      borderRadius: 12,
      backgroundColor: '#FF9651',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      paddingHorizontal: 20,
      marginRight: 30,
      
    }}>
      <AntDesign name="star" size={24} color="black" />
      <Text style={{
        textAlign: 'left', 
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#000', 
      }}>
        Kid Mode
      </Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          marginRight: 10, 
        }}>
          {isEnabled ? 'ON' : 'OFF'}
        </Text>
        {/* Toggle Switch */}
        <Switch
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </TouchableOpacity>
  );
}

