
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';


export default function App() {
  
  function alerta() {
    alert("GOOOOOOOOOLLLLL DO REAL MADRID!");
  }

  const imagens = [
    'https://static.brusheezy.com/system/resources/previews/000/014/339/non_2x/real-madrid-logo-photoshop-psds.jpg',
    'https://f.i.uol.com.br/fotografia/2025/01/23/173765006667926f928ae79_1737650066_3x2_md.jpg',
    'https://s2-oglobo.glbimg.com/dtskVyp7ilZ9Tqv-6WEu0-4-QpI=/0x0:5568x3712/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/s/b/HRVCKjQtisaEuJA2lZww/107153016-topshot-real-madrids-spanish-defender-06-nacho-fernandez-c-and-real-madrids-players-l.jpg',
    'https://assets.goal.com/images/v3/blt90c2c8238fb521e1/Real%20Madrid',
    'https://i.pinimg.com/736x/b1/42/4b/b1424b8869aa7534b71d5ded4cffe494.jpg'
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.textogrande}>Real Madrid</Text>
        <Text style={styles.title}>Jogadores Titulares</Text>

        <Text style={styles.text}><Text style={styles.bold}>Goleiro:</Text> Thibaut Courtois</Text>
        <Text style={styles.text}><Text style={styles.bold}>Defensores:</Text> Dani Carvajal, Éder Militão, Antonio Rüdiger, Fran García</Text>
        <Text style={styles.text}><Text style={styles.bold}>Meio-Campistas:</Text> Eduardo Camavinga, Jude Bellingham, Federico Valverde</Text>
        <Text style={styles.text}><Text style={styles.bold}>Atacantes:</Text> Vinícius Júnior, Kylian Mbappé, Rodrygo</Text>

        {imagens.map((url, index) => (
          <Image key={index} source={{ uri: url }} style={styles.image} />
        ))}

        <Button onPress={alerta} title="Gol" color="#27408B" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#CAE1FF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textogrande: {
    fontSize: 35,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#27408B',
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    height: 310,
    width: 330,
    margin: 10,
    borderRadius: 10,
  },
});

