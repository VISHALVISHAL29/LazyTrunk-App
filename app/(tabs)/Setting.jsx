//Setting.jsx
import Background from '@/components/Background';
import { Text, View } from 'react-native';

export default function Setting() {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Hello user</Text>
      </View>
    </Background>
  );
}
