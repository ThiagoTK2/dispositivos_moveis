import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const titulos = [
  {
    nome: "La Liga",
    anos: [
      1931, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964,
      1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980,
      1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007,
      2008, 2012, 2017, 2020, 2022, 2024
    ],
    imagem: 'https://w7.pngwing.com/pngs/920/249/png-transparent-award-trophy-la-liga-award-education-science-trophy.png',
  },
  {
    nome: "Copa do Rei",
    anos: [
      1905, 1906, 1907, 1908, 1917, 1934, 1936, 1947, 1948, 1962,
      1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023
    ],
    imagem: 'https://e7.pngegg.com/pngimages/395/973/png-clipart-spain-sport-2017-18-copa-del-rey-world-cup-trophy-trophy.png',
  },
  {
    nome: "Supercopa da Espanha",
    anos: [
      1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017,
      2020, 2022, 2024
    ],
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgid6VD_Wyex52G_Xxzoug4qhsSxBjN-zM0ydR-8i4zXsstmEjvGETU8M1napc0NMEt2n4lyMIpFpZfa3P0BbOtaCU50jVpIJf-d4PYxV7tT2a1EXXU7txKiuNHSEfbbNO5ZOSFsx5QxPc/s1600/Supercopa+da+Espanha+Supercopa+de+Espa%25C3%25B1a.jpeg',
  },
  {
    nome: "Liga dos Campeões da UEFA",
    anos: [
      1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014,
      2016, 2017, 2018, 2022, 2024
    ],
    imagem: 'https://s2-ge.glbimg.com/7FsVpbggigQiY5EsFyxXssTYqSU=/0x566:6240x5328/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Y/b/tLrBZETECzuJI3VfhJKw/gettyimages-1244576378.jpg',
  },
  {
    nome: "Supercopa da UEFA",
    anos: [2002, 2014, 2016, 2017, 2022, 2024],
    imagem: 'https://i.pinimg.com/originals/cf/b6/09/cfb60907caff30a528c6321b7bd0a879.jpg',
  },
  {
    nome: "Copa do Mundo de Clubes da FIFA",
    anos: [2014, 2016, 2017, 2018, 2022],
    imagem: 'https://s2-ge.glbimg.com/hFpv2oFX5umyBIQLQ_WHz8vhKB0=/0x0:683x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/X/x/L4Ba2vS6CCYSDfpUow4A/gettyimages-2188404557.jpg',
  },
  {
    nome: "Copa Intercontinental",
    anos: [1960, 1998, 2002],
    imagem: 'https://s2-oglobo.glbimg.com/4iYgCoBCA3d1hwM5UThxpfMQ2jI=/0x0:680x680/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/C/l/GBj4E6QAeUOHvxX0w5AA/gebxlcbwyaazwc4.png',
  }
];

export default function TitulosScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.titulo}>{item.nome}</Text>
        <Text style={styles.anos}>Anos: {item.anos.join(', ')}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Títulos do Real Madrid</Text>
      <FlatList
        data={titulos}
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
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
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
    backgroundColor: '#f1f1f1',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagem: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  anos: {
    fontSize: 14,
    color: '#555',
  },
});
