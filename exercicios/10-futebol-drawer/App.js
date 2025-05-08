import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons'; // ou 'react-native-vector-icons/Ionicons'

import EscudoScreen from './src/screens/EscudoScreen';
import JogadoresScreen from './src/screens/JogadoresScreen';
import TitulosScreen from './src/screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Escudo">
          <Drawer.Screen 
            name="Escudo" 
            component={EscudoScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="shield-outline" size={size} color={color} />
              )
            }}
          />
          <Drawer.Screen 
            name="Jogadores" 
            component={JogadoresScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="people-outline" size={size} color={color} />
              )
            }}
          />
          <Drawer.Screen 
            name="Títulos" 
            component={TitulosScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="trophy-outline" size={size} color={color} />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

