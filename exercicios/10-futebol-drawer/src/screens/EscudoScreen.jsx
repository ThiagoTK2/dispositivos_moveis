import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.image} />
      <View style={styles.infoBox}>
        <Text style={styles.info}><Text style={styles.label}>Fundação:</Text> {time.fundacao}</Text>
        <Text style={styles.info}><Text style={styles.label}>Estádio:</Text> {time.estadio}</Text>
        <Text style={styles.info}><Text style={styles.label}>Mascote:</Text> {time.mascote}</Text>
        <Text style={styles.info}><Text style={styles.label}>Cores:</Text> {time.cores.join(' e ')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  image: { width: 160, height: 160, marginBottom: 20 },
  infoBox: { backgroundColor: '#F5F5F5', padding: 16, borderRadius: 12, width: '100%' },
  info: { fontSize: 16, marginBottom: 8 },
  label: { fontWeight: 'bold' }
});
