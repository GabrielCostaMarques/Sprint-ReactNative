import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Home from './assets/Home.png';
import Arrow from'./assets/arrow.png'
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
{/*O CÓDIGO ABAIXO FOI ESCRITO BASEADO NA TELA DO ANDROID STUDIO, FOI FEITO UM TESTE NO EXPO (WEB) E O LAYOUT QUEBRA, PORÉM SE COLOCAR NO "ANDROID" FICA CERTO*/}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default function App() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const handleDotPress = (index) => {
    setActiveDotIndex(index);
  };

  const dots = ['dot 1', 'dot 2', 'dot 3'];

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Home} />
      <Text style={styles.titulo}>Seja Bem - Vindo !</Text>
      <Text style={styles.subtitulo}>
        Somos a Byte Wizards. Aqui está uma prévia da ferramenta que estamos desenvolvendo...
      </Text>
      <TouchableOpacity style={styles.button}><Image style={styles.arrow}source={Arrow}/></TouchableOpacity>
      
      <View style={styles.container}></View>
      <View style={styles.dotsContainer}>
        {dots.map((dot, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              activeDotIndex === index && styles.activeDot
            ]}
            onPress={() => handleDotPress(index)}
          ></TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef4023',
  },
  logo: {
    marginTop:"30%",
    marginBottom:50,
    width: 260,
    height: 260,
    opacity: 0.7,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {

    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    width: 350,
    lineHeight: 25,
  },
  dotsContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor:'rgba(0,0,0,0.5)',
    marginHorizontal: 15,
  },
  activeDot: {
    backgroundColor: 'white',
  },

  button:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingHorizontal: 25,
    borderRadius: 30,
    position:'absolute',
    top:600,
    left:250
  },
  
  arrow:{
    width:50,
    height:50,
  }
});
