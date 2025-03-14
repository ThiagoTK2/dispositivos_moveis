// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// Componente principal
// Ele deve retornar o que será renderizado na tela (Template feito com JSX)
export default function App() {
  // Lógica do meu componente
  const nome = "Gustavo"

  function alerta() {
    alert("Você clicou no botão")
  }

  // Retorno com JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Comentário dentro do template JSX */}
      {/* Código javascript */}
      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>
      <Text>Meu aplicativo RODANDO!!! Vai Flamengo!!!</Text>

      <Button title='Alerta' onPress={alerta} ></Button>

      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/47/e7/fd/47e7fd39f8e5a44877234f1d3c7bf1dc.jpg' }}
        style={{
          height: 300,
          width: 300
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
