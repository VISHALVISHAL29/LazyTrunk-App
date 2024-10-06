// Deck.jsx
import { View, Text, Pressable, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Explore from '../../components/deck/Explore';
import { useFonts } from 'expo-font';
import Filter from '../../components/deck/Filters';
import { useRouter } from 'expo-router';
import Background from '@/components/Background';
import Carousel from '../../components/deck/Carousel';

export default function Deck() {
    const [loaded] = useFonts({
        'Kanit-Regular': require('../../assets/fonts/Kanit-Regular.ttf'),
    });
    const router = useRouter();

    if (!loaded) {
        return <ActivityIndicator size="large" color="#00ff00" />;
    }

    const onClick = () => {
        router.push('/(tabs)/Setting');
    };

    return (
        <Background>
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <View style={styles.container}>
                    <View style={styles.innContainer}>
                        <Pressable onPress={onClick}>
                            <Ionicons name="settings-sharp" size={35} color="white" />
                        </Pressable>
                        <Pressable>
                            <Ionicons name="information-circle-sharp" size={38} color="white" />
                        </Pressable>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>C H O O S E   D E C K</Text>
                    </View>

                    <View style={styles.carouselContainer}>
                        <Carousel />
                    </View>

                    <View style={styles.exploreFilterContainer}>
                        <Explore />
                        <Filter />
                    </View>
                </View>
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    scrollContentContainer: {
        flexGrow: 1, // Ensures the content can grow in the ScrollView
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    innContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
        marginTop: 40,
    },
    text: {
        fontSize: 30,
        fontFamily: 'Kanit-Regular',
        color: '#fff',
        textAlign: 'center',
    },
    textContainer: {
        paddingVertical: 20,
        alignSelf: 'center',
    },
    carouselContainer: {
        flex: 1, // Take up remaining space for carousel
        justifyContent: 'center',
    },
    exploreFilterContainer: {
        flex: 1, // Take up remaining space for Explore and Filter
    },
});

