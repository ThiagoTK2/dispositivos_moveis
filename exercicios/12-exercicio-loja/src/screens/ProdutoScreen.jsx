import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const ProdutoScreen = ({ route }) => {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <LinearGradient colors={['#ff6f61', '#de6262']} style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#ff6f61', '#de6262']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: produto.thumbnail }} style={styles.image} />
        <Text style={styles.title}>{produto.title}</Text>
        <Text style={styles.description}>{produto.description}</Text>
        <Text style={styles.price}>R$ {produto.price}</Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProdutoScreen;