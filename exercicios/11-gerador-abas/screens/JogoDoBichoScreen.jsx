import React, { useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { Button, Card } from 'react-native-paper';

const animais = [
  { numero: 1, nome: 'Avestruz', imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg' },
  { numero: 2, nome: 'Águia', imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg' },
  { numero: 3, nome: 'Burro', imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg' },
  { numero: 4, nome: 'Borboleta', imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg' },
  { numero: 5, nome: 'Cachorro', imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg' },
  { numero: 6, nome: 'Cabra', imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg' },
  { numero: 7, nome: 'Carneiro', imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg' },
  { numero: 8, nome: 'Camelo', imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg' },
  { numero: 9, nome: 'Cobra', imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg' },
  { numero: 10, nome: 'Coelho', imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg' },
];

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const gerarAnimal = () => {
    setCarregando(true);
    setAnimalGerado(null);
    setNumeroSorteado(null);

    setTimeout(() => {
      const numero = Math.floor(Math.random() * 10) + 1;
      const animal = animais.find(a => a.numero === numero);
      setNumeroSorteado(numero);
      setAnimalGerado(animal);
      setCarregando(false);
    }, 1000); // animação de 1 segundo
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E9F5F2', padding: 20, justifyContent: 'center' }}>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#2E7D32',
      }}>
        🎯 Jogo do Bicho
      </Text>

      <Button
        mode="contained"
        onPress={gerarAnimal}
        style={{
          backgroundColor: '#43A047',
          borderRadius: 12,
          paddingVertical: 10,
          marginBottom: 20,
          alignSelf: 'center',
          width: 200,
        }}
        labelStyle={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}
      >
        Sortear
      </Button>

      {carregando && (
        <ActivityIndicator size="large" color="#43A047" style={{ marginTop: 20 }} />
      )}

      {!carregando && animalGerado && (
        <Card
          style={{
            padding: 20,
            borderRadius: 16,
            elevation: 8,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18, color: '#555' }}>Número sorteado:</Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#1B5E20', marginBottom: 10 }}>
            {numeroSorteado}
          </Text>

          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#2E7D32',
            marginBottom: 12,
          }}>
            {animalGerado.nome}
          </Text>

          <Image
            source={{ uri: animalGerado.imagem }}
            style={{ width: 220, height: 220, borderRadius: 16 }}
            resizeMode="cover"
          />
        </Card>
      )}
    </View>
  );
}
