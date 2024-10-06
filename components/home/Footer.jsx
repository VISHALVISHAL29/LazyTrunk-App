import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      {/* Left side: Rocket icon and FOLLOW US button */}
      <View style={styles.footerItem}>
        <Fontisto name="rocket" size={24} color="white" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>FOLLOW US</Text>
        </TouchableOpacity>
      </View>

      {/* Right side: Game icon and MORE GAMES button */}
      <View style={styles.footerItem}>
        <Image 
          source={require('../../assets/devImage/game.png')} 
          style={styles.gameIcon} // Filled with white background
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MORE GAMES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',  // Sticks it to the bottom
    bottom: 0,
    left: 0,
    right: 0,
    
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 12,
    backgroundColor: "#041738",
    width: 100,
    borderColor: '#fff',
    borderWidth: 0.5,
    marginLeft: 5,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  gameIcon: {
    width: 24,  
    height: 24,  
    resizeMode: 'contain',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius:30  
  },
});
