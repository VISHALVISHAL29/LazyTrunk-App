//Deck.jsx
import { View, Text, Pressable, StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Explore from '../../components/deck/Explore'
import { useFonts } from 'expo-font';
import Filter from '../../components/deck/Filters'
import { useRouter } from 'expo-router';
import Background from '@/components/Background';

export default function Deck() {
    const[ loaded ]=  useFonts({
        'Kanit-Regular' : require('../../assets/fonts/Kanit-Regular.ttf'),
    })
    const router = useRouter();
    
    if(!loaded){
        return <ActivityIndicator  size="large" color="#00ff00"  />
    }
    const onClick = () => {
        router.push('/(tabs)/Setting')
       }
    return (
        <Background>
        <View style={styles.container}>
            <View style={styles.innContainer}>
                <Pressable onPress={onClick}>
                    <Ionicons name="settings-sharp" size={35} color="white" />
                </Pressable>
                <Pressable>
                    <Ionicons name="information-circle-sharp" size={38} color="white" />
                </Pressable>
            </View>

            <View  style={styles.textContainer}>
                <Text style={styles.text}>
                    C H O O S E   D E C K
                </Text>
            </View>
        <Explore/>
        <Filter/>
        </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'centre',
    },
    innContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        marginTop:40,
    },
    text:{
        fontSize:30,
        fontFamily:'Kanit-Regular',
        color:'#fff'   
    },
    textContainer:{
        padding:20,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 30,
    }
})