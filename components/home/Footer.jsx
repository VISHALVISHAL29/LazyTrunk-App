import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Footer() {
  
  const onClick = () => {
    Linking.openURL('https://www.instagram.com/lazytrunk_games/'); // Open the URL
  };
  
  return (
    <View style={styles.footerContainer}>
      {/* Left Side: Follow Us Button */}
      <View style={styles.footerItem}>
        <Fontisto name="rocket" size={24} color="white" />
        <TouchableOpacity style={styles.button} onPress={onClick}>
          <Text style={styles.buttonText}>FOLLOW US</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side: More Games Button */}
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
    position: 'absolute',  // Stick it to the bottom
    bottom: 20,            // Adjusted so it's visible
    left: 0,
    right: 0,
    backgroundColor: 'transparent',  // Transparent background
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
    borderRadius: 30,
  },
});

