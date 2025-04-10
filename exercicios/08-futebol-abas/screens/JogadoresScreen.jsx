import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const jogadores = [
  {
    nome: 'Kylian Mbappé',
    numero: 9,
    imagem: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250076574.webp',
  },
  {
    nome: 'Vinícius Júnior',
    numero: 7,
    imagem: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250121533.webp',
  },
  {
    nome: 'Jude Bellingham',
    numero: 5,
    imagem: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250128377.webp',
  },
  {
    nome: 'Rodrygo Goes',
    numero: 11,
    imagem: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250132829.webp',
  },
  {
    nome: 'Eduardo Camavinga',
    numero: 6,
    imagem: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250128270.webp',
  },
];

export default function JogadoresScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.numero}>Camisa {item.numero}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogadores do Real Madrid</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  lista: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
  },
  numero: {
    fontSize: 14,
    color: '#555',
  },
});
