import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur'; // For blur effect

export default function Carousel() {
    const screenWidth = Dimensions.get('window').width;

    const carouselContent = [
        {
            id: 1,
            icon: require('../../assets/carousel/juggling.gif'),
            name: 'PARTY AND FUN',
            subscription: true,
        },
        {
            id: 2,
            icon: require('../../assets/carousel/burger.gif'),
            name: 'FOOD',
            subscription: true,
        },
        {
            id: 3,
            icon: require('../../assets/carousel/couple.gif'),
            name: 'RELATIONSHIP',
            subscription: false,
        },
        {
            id: 4,
            icon: require('../../assets/carousel/popcorn.gif'),
            name: 'ENTERTAINMENT',
            subscription: false,
        },
        {
            id: 5,
            icon: require('../../assets/carousel/soon.gif'),
            name: 'Coming Soon',
        },
        {
            id: 6,
            icon: require('../../assets/carousel/soon.gif'),
            name: 'Coming Soon',
        },
        {
            id: 7,
            icon: require('../../assets/carousel/soon.gif'),
            name: 'Coming Soon',
        },
    ];

    const renderItem = ({ item }) => {
        const hasSubscription = typeof item.subscription !== 'undefined';
        const imageStyle = item.subscription === true ? styles.largeImage : styles.smallImage;
        const containerStyle = item.subscription === true ? styles.largeImageContainer : styles.smallImageContainer;

        return (
            <View style={styles.cardContainer}>
                {/* Card Image */}
                {item.subscription === false ? (
                    <BlurView intensity={50} style={containerStyle}>
                        <Image source={item.icon} style={imageStyle} />
                    </BlurView>
                ) : (
                    <BlurView intensity={50} style={containerStyle}>
                    <Image source={item.icon} style={imageStyle} />
                    </BlurView>
                )}

                {/* Card Name */}
                <Text style={styles.cardName}>{item.name}</Text>

                {/* Buttons */}
                {hasSubscription ? (
                    item.subscription === false ? (
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buttonText}>BUY NOW</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.playButton}>
                            <Text style={styles.buttonText}>PLAY NOW</Text>
                        </TouchableOpacity>
                    )
                ) : (
                    null
                )}
            </View>
        );
    };

    return (
        <View style={styles.carouselContainer}>
            <FlatList
                data={carouselContent}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={true}
                snapToAlignment="center"
                decelerationRate="fast"
                snapToInterval={screenWidth * 0.4} // Width for each card (ensures snapping to each item)
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    cardContainer: {
        width: Dimensions.get('window').width * 0.5, // Adjust card width based on screen size
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
       
        borderRadius: 10,
        padding: 10,
    },
    largeImageContainer: {
        width: '100%',
        height: 150, // Larger size for subscription:true
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    smallImageContainer: {
        width: '80%',
        height: 150, // Smaller size for subscription:false
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    largeImage: {
        width: '100%',
        height: '100%',
    },
    smallImage: {
        width: '100%',
        height: '100%',
        
    },
    cardName: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 16, // Adjust font size for better visibility
    },
    playButton: {
        backgroundColor: '#4CAF50', // Green for Play Now
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginVertical: 5,
    },
    buyButton: {
        backgroundColor: '#FF6347', // Red for Buy Now
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },

});



