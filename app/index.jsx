// index.jsx
import Background from '@/components/Background';
import Home from './(tabs)/Home';
import Deck from './(tabs)/Deck'

export default function Index() {
  return(
    <Background>
      <Home/>
    </Background>
  )
}
