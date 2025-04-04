import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import Time from './componentes/Time';

export default function App() {
  const listaTimesJogadores = [
    {
      nome: 'Flamengo',
      anoFundacao: 1895,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHQ_LDytdMYvYHlpTbdpPgj2Uk4E2Ec8YOQ&s',
      mascote: 'https://static.gazetaesportiva.com/uploads/imagem/2020/11/18/Masconte-Fla-2.png',
      descricao: 'Um dos clubes mais populares do Brasil, com uma história rica e uma torcida apaixonada.',
      jogadores: [
        { nome: 'Gabriel Barbosa', numero: 9, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQE49eKaHbbiUfjKRdWE1FJsO0YIvINLJZkQ&s' },
        { nome: 'Arrascaeta', numero: 14, imagem: 'https://i.pinimg.com/736x/24/96/b6/2496b6c530a2b159498771b63a650558.jpg' },
        { nome: 'Pedro', numero: 21, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVA-HJbDUtdcEB_-g-sA7GVGQB1Doig5YxA&s' },
        { nome: 'Everton Ribeiro', numero: 7, imagem: 'https://conteudo.imguol.com.br/c/esporte/e8/2022/02/06/everton-ribeiro-durante-classico-flamengo-x-fluminense-pelo-cariocao-1644177275839_v2_3x4.jpg' },
        { nome: 'Bruno Henrique', numero: 27, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bruno_Henrique.2019.jpg/230px-Bruno_Henrique.2019.jpg' }
      ]
    },
    {
      nome: 'Palmeiras',
      anoFundacao: 1914,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFnoOD5XHkO3h-lW2Q8injohha5r7fRhwkg&s',
      mascote: 'https://s2-ge.glbimg.com/CUWfWhi_982NpJ-pBkuR_nf4lHY=/0x0:2000x1264/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2015/03/07/palmeiras_bragantino-rib-7.jpg',
      descricao: 'Maior campeão nacional, o Palmeiras tem tradição e títulos no futebol brasileiro e sul-americano.',
      jogadores: [
        { nome: 'Endrick', numero: 9, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Endrick-Palmeiras-Liverpool-abr24.jpg/800px-Endrick-Palmeiras-Liverpool-abr24.jpg' },
        { nome: 'Rony', numero: 10, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ygXYY17rWpweYv6u3ckBQu__RQRYoseOgQ&s' },
        { nome: 'Raphael Veiga', numero: 23, imagem: 'https://i0.statig.com.br/bancodeimagens/0k/rh/ac/0krhaci8nbr4khu6fkarmyg2l.jpg' },
        { nome: 'Gustavo Gómez', numero: 15, imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/gomez_palmeiras-e1735920967523.jpg' },
        { nome: 'Zé Rafael', numero: 8, imagem: 'https://conteudo.imguol.com.br/c/esporte/2b/2023/02/10/ze-rafael-durante-palmeiras-x-inter-de-limeira-1676054850120_v2_1149x1500.jpg' }
      ]
    },
    {
      nome: 'São Paulo',
      anoFundacao: 1930,
      imagem: 'https://vetores.org/wp-content/uploads/sao-paulo-futebol-clube.png',
      mascote: 'https://conteudo.imguol.com.br/c/esporte/b1/2022/07/08/santo-paulo-mascote-do-sao-paulo-1657320200563_v2_3x4.jpg',
      descricao: 'Um dos clubes mais vitoriosos do Brasil, conhecido por sua tradição na Libertadores e Mundial.',
      jogadores: [
        { nome: 'Calleri', numero: 9, imagem: 'https://conteudo.imguol.com.br/c/esporte/bb/2022/05/28/calleri-jogador-do-sao-paulo-comemora-o-gol-contra-o-ceara-pelo-brasileirao-1653776849319_v2_3x4.jpg' },
        { nome: 'Lucas Moura', numero: 7, imagem: 'https://conteudo.imguol.com.br/c/esporte/ff/2025/03/11/lucas-moura-do-sao-paulo-no-jogo-contra-o-palmeiras-pela-semi-do-paulistao-1741674358875_v2_450x600.jpg' },
        { nome: 'Luciano', numero: 11, imagem: 'https://s2-ge.glbimg.com/2ANPTb4Z0IS0QNvOQw49OFhGL0k=/0x0:2126x2795/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/N/Y/5ckvlSTTWHpHGkAdUoMw/54325192712-0927e48bcd-3k.jpg' },
        { nome: 'Alisson', numero: 12, imagem: 'https://conteudo.imguol.com.br/c/esporte/60/2023/05/24/alisson-do-sao-paulo-comemora-gol-sobre-o-puerto-cabello-em-jogo-da-sul-americana-1684900388033_v2_4x3.jpg' },
        { nome: 'Rafinha', numero: 13, imagem: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Rafinha-Sao-Paulo-Juventude-jun-2022-2.jpg' }
      ]
    }
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text variant='displaySmall'>Times de Futebol</Text>

        <FlatList
          data={listaTimesJogadores}
          keyExtractor={(item) => `${item.nome}-${item.anoFundacao}`}
          renderItem={({ item }) => (
            <Time
              nome={item.nome}
              anoFundacao={item.anoFundacao}
              descricao={item.descricao}
              imagem={item.imagem}
              mascote={item.mascote}
              jogadores={item.jogadores}
            />
          )}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE9E9',
    paddingTop: 40,
  },
});
