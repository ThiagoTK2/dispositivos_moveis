import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const novoJogo = [];
    while (novoJogo.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novoJogo.includes(numero)) {
        novoJogo.push(numero);
      }
    }
    novoJogo.sort((a, b) => a - b);
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  const renderItem = ({ item, index }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>Jogo {jogosMegaSena.length - index}</Title>
        <View style={styles.numbersContainer}>
          {item.map((num) => (
            <View key={num} style={styles.numberCircle}>
              <Text style={styles.numberText}>{num}</Text>
            </View>
          ))}
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={gerarJogo}
        icon={() => <MaterialCommunityIcons name="dice-multiple" size={20} color="white" />}
        style={styles.button}
        labelStyle={{ fontSize: 16 }}
      >
        Gerar Jogo
      </Button>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  button: {
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical: 6,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  numberCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
