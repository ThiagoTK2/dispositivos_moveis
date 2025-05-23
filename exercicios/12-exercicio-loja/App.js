import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


import HomeScreen from './src/screens/HomeScreen';
import ListaProdutosScreen from './src/screens/ListaProdutosScreen';
import ProdutoScreen from './src/screens/ProdutoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Produtos" component={ListaProdutosScreen} />
          <Stack.Screen name="Produto" component={ProdutoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}