import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

export default function CustomButtons() {
  const router = useRouter();
  
  const buttonData = [
    {
      id: 1,
      name: 'Play',
      icon: require('../../assets/devImage/play-button.png'),
      bgColor: '#90ee90',  // Light green
      textColor: '#000',
      route: '/(tabs)/Deck',  // Navigation route for "Play"
    },
    {
      id: 2,
      name: 'Multiplayer',
      icon: require('../../assets/devImage/multiple-users-silhouette.png'),
      bgColor: '#ff6f61',  // Light red
      textColor: '#000',
    },
    {
      id: 3,
      name: 'How To Play',
      icon: require('../../assets/devImage/game-console.png'),
      bgColor: '#ffeb3b',  // Yellow
      textColor: '#000',
    }
  ];

  // Handle navigation only for the "Play" button
  const handlePress = (route) => {
    if (route) {
      router.push(route);  // Navigate to the provided route
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={buttonData}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: item.bgColor }]} 
            onPress={() => item.route && handlePress(item.route)}  // Only trigger for "Play"
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={[styles.buttonText, { color: item.textColor }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    width: 240,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,  // Takes up remaining space to center the text
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});


