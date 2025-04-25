import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen'; // Corrigido aqui

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#8B0000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
        <Stack.Screen name="Detalhes" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
