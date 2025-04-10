import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const escudos = [
  {
    ano: '1902',
    descricao: 'Primeiro escudo com as iniciais M, C e F entrelaçadas em azul escuro.',
    imagem: 'https://i.pinimg.com/474x/1a/19/d4/1a19d412b57e8d1d569eb8e7f81f35ca.jpg',
  },
  {
    ano: '1920',
    descricao: 'Adição da coroa real após o título de "Real" concedido pelo rei Alfonso XIII.',
    imagem: 'https://i.pinimg.com/736x/c2/84/b4/c284b43f46ea9b28651d2d70b6f69ff9.jpg',
  },
  {
    ano: '1931',
    descricao: 'Remoção da coroa durante a Segunda República e adição da faixa roxa representando Castela.',
    imagem: 'https://www.futbox.com/img/v1/40b/d8d/bb3/5ab/f97194312968a71ec412_zoom.png',
  },
  {
    ano: '2001',
    descricao: 'Versão modernizada com ajustes nas cores e design para o século XXI.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpvh5UQ2r7kjx2twdfAYJ7--Ka4cnnYXF5Q&s',
  },
];

export default function EscudoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Evolução dos Escudos do Real Madrid</Text>
      {escudos.map((escudo, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: escudo.imagem }} style={styles.image} />
          <Text style={styles.ano}>{escudo.ano}</Text>
          <Text style={styles.descricao}>{escudo.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  ano: {
    fontSize: 18,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});
