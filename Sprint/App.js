import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import imagem from "./assets/pngwing.com.png"

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{flex:1}}>.</Text>
      <View style={{flex:3}}>
        <ImageBackground style={styles.image}source={imagem} resizeMode='cover'></ImageBackground>
        <Text style={styles.texto}>Seja Bem-Vindo !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ef4023',
  },
  image:{
    width:200,
    height:200,
    margin:10
  },

  texto:{
    textAlign:'center',
    fontSize:50,
    fontWeight:'bold',
    color:'#ffff',
    fontFamily:'Montserrat_400Regular'
    

  }
});
