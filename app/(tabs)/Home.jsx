import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import ScreenText from '../../components/home/ScreenText';
import Pressables from '../../components/home/Pressables';
import Ionicons from '@expo/vector-icons/Ionicons';
import Footer from '../../components/home/Footer';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  
  const onClick = () => {
    router.push('/(tabs)/Setting');
  };

  return (
    <View style={styles.container}>
      {/* Settings Icon */}
      <Pressable 
        style={styles.settingsIcon}
        onPress={onClick}
      >
        <Ionicons name="settings-sharp" size={40} color="white" />
      </Pressable>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ScreenText />
        <Pressables />
      </View>

      {/* Footer at Bottom */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  mainContent: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: '60%', // Pushes the ScreenText and Pressables downward
  },
  footerContainer: {
    flex: 0.1,
    marginBottom: 30, // Lift the footer a little bit upwards
  },
});
