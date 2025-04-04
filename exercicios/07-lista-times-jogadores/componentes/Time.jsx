import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Jogador from './Jogador'; 

export default function Time(props) {
  const { nome, anoFundacao, imagem, mascote, descricao, jogadores } = props;

  return (
    <Card style={styles.card}>
      <Card.Title title={nome}/>
      <Card.Content>
        <Text style={styles.texto}>Fundado em {anoFundacao}</Text>
        <Text style={styles.descricao}>{descricao}</Text> {/* Corrigido */}
      </Card.Content>
      
      
      <Card.Cover source={{ uri: imagem }} style={styles.imagem}/>

      {/* Exibir Mascote */}
      <View style={styles.mascoteContainer}>
        <Text style={styles.texto}>Mascote:</Text> 
        <Image source={{ uri: mascote }} style={styles.mascoteImagem} />
      </View>

      {/* Lista de jogadores */}
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} imagem={item.imagem} numero={item.numero} />
          )}
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor:'#CAE1FF',
    borderRadius: 10
  },
  texto: {
    fontSize: 17,
    color: 'bold',
  },
  descricao: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
  },
  mascoteContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  mascoteImagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagem: {
    margin: 5
  },
});