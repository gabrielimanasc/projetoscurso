import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Switch,
  Picker,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useState } from 'react/cjs/react.production.min';

import Lista from './src/Lista'

//import Slider from '@react-native-community/slider';

export default function App (props) {

    const [feed, setFeed] = useState([
      {
        id: '1',
        nome: 'Chrys zika do bayle',
        descricao: 'Caralho o tamanho dos',
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
        likeada: false,
        likers: 0
      },
      {
        id: '2',
        nome: 'Matheus',
        descricao: 'Isso sim é ser raiz!!!!!',
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
        likeada: false,
        likers: 0
      },
      {
        id: '3',
        nome: 'Jose Augusto',
        descricao: 'Bora trabalhar Haha',
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
        likeada: false,
        likers: 3
      },
      {
        id: '4',
        nome: 'Gustavo Henrique',
        descricao: 'Isso sim que é TI!',
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
        likeada: false,
        likers: 1
      },
      {
        id: '5',
        nome: 'Guilherme',
        descricao: 'Boa tarde galera do insta...',
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false,
        likers: 32
      }
    ]);
    

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor ={ (item) => item.id}
        data={feed}
        renderItem={ ({item})=> <Lista data={item} /> }
        />


      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 45,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    aligntItems: 'center',
    justifyContent: 'space-between',
    padding: 9,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 5,

  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,

  },
});
