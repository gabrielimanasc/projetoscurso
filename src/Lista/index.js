import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

function Lista(props) {


  const [feed, setFeed] = setState(props.data);
  

  function carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  };

  function like(){

    if(feed.likeada === true){
      setFeed({
        feed:{
          ...feed, /// operador spread para nao 'setar' o state apenas para essas duas curtidas, mas sim, deixar o que ja estava, padrão e mudar apenas o 'likeada' e os 'likers'.
          likeada: false,
          likers: feed.likers - 1,
        }
      })
    }else{
      setFeed({
        feed:{
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        }
      })
    }
  }

  function mostraLikes(likers){
    

    if(feed.likers <= 0){
      return;
    }

    return(
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
    
  }
    return(
      <View style={styles.areaFeed}>

        <View style={styles.viewPerfil}>
          <Image 
            source={{uri: feed.imgperfil}}
            style={styles.fotoPerfil}
          />

          <Text style={styles.nomeUsuario}> {feed.nome} </Text>

        </View>

        <Image
        resizeMode='cover'
        style={styles.fotoPublicacao}
        source={{uri: feed.imgPublicacao}}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={like}>
            <Image
            source={carregaIcone(feed.likeada)}
            style={styles.iconeLike}
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnSend}>
            <Image
            source={require('../img/send.png')}
            style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>
        
        {mostraLikes(feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {feed.nome}
          </Text>

          <Text style={styles.descRodape}>
            {feed.descricao}
          </Text>
        </View>

      </View>
    );

}

const styles = StyleSheet.create({
  areaFeed:{

  },
  nomeUsuario:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000000'
  },
  fotoPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,

  },
  fotoPublicacao:{
    flex:1,
    height: 400,
    alignItems: 'center'
  },
  viewPerfil:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8, 
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike:{
    width: 30,
    height: 30
  },
  btnSend:{
    marginLeft: 10,
  },
  viewRodape:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape:{
    marginLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight:'bold',
    color:'#000',
    paddingLeft:5,
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,

  }


});

export default Lista;