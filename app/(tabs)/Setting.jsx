import Background from '@/components/Background';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Language from '../../components/settings/Language';
import Modes from '../../components/settings/Modes';
import Purchases from '../../components/settings/Purchases'

export default function Setting() {
  return (
    <Background>
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 80, 
      }}>
        {/* Settings Header */}
        <View style={{
          width: '100%',
          backgroundColor: "#041738",
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
          <Ionicons name="settings-sharp" size={30} color="white" />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{
              color: "#fff",
              fontSize: 30, 
              fontWeight: 'bold' 
            }}>
              SETTINGS
            </Text>
          </View>
        </View>

        {/* Icons Section */}
        <View style={{
          marginTop: 30, 
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%', 
        }}>
          {/* Music Icon */}
          <TouchableOpacity style={{
            backgroundColor: '#041738', 
            width: 40, 
            height: 40,
            borderRadius: 30, 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Ionicons name="musical-notes-sharp" size={20} color="white" />
          </TouchableOpacity>

          {/* Information Icon */}
          <TouchableOpacity style={{
            backgroundColor: '#041738', 
            width: 40, // Width and height to make it a circle
            height: 40,
            borderRadius: 30, // Half of width/height for circular shape
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Ionicons name="information-circle-sharp" size={30} color="white" />
          </TouchableOpacity>
        </View>
        {/* Component import*/}
        <View style={{
            marginTop: '20%',
            alignItems: 'center',
            width: '100%'
        }}>
          {/* Language Component */}
          <View style={{
            width: '90%',
            alignItems: 'center'
          }}>
            <Language />
          </View>
        </View>
        {/* Spacer with flex for centering Mode */}
        <View style={{
            marginTop: '10%',
            alignItems: 'center',
            width: '100%' 
        }}>
          <View style={{
            width: '90%',
            alignItems: 'center'
          }}>
            <Modes/>
          </View>
        </View>
        {/* purchase component */}
        <View style={{
            marginTop: '10%', 
            alignItems: 'center',
            width: '100%'
        }}>
          <View style={{
            width: '90%',
            alignItems: 'center'
          }}>
            <Purchases/>
          </View>
        </View>
      </View>
    </Background>
  );
}
