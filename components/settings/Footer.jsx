import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="game-controller" size={24} color="white" />
                    <Text style={styles.buttonText}>MORE GAMES</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Fontisto name="rocket" size={24} color="white" />
                    <Text style={styles.buttonText}>FOLLOW US</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',  // Centers the buttons together
        alignItems: 'center',
        padding: 20,
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: "#041738",
        width: 130,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation:10,
        marginHorizontal: 20,  // Adds space between the two buttons
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        marginLeft: 8,  // Adds space between the icon and text
    },
});

