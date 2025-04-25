import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{receita.nome}</Text>
      <Text style={styles.info}>Preparo: {receita.tempoPreparo} | Porções: {receita.porcoes}</Text>

      <Text style={styles.subtitulo}>Ingredientes:</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <Text style={styles.subtitulo}>Modo de Preparo:</Text>
      {receita.modoPreparo.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  imagem: { width: '100%', height: 200, borderRadius: 10 },
  nome: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  info: { fontSize: 16, marginBottom: 10 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
});
