import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <LinearGradient colors={['#ff6f61', '#de6262']} style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Carregando categorias...</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#ff6f61', '#de6262']} style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Produtos', { categoria: item })}
          >
            <Avatar.Icon size={40} icon="tag" style={styles.avatar} color="#fff" />
            <Text style={styles.cardText}>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 15,
  },
  avatar: {
    backgroundColor: '#ff6f61',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;