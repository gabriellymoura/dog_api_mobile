import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { showMessage } from 'react-native-flash-message';


function App(){

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => {response.json().then( data => setData(data))})
          .catch(e=>console.log("erro: " +e.message))
  }, [])

  const setData = ({
      message,
      status
  }) => {
      setMessage(message);
      setStatus(status);
  };

  const getDog = () =>{
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => {response.json().then( data => setData(data))})
          .catch(e=>console.log("erro: " +e.message))
  }

  return(
    <>
      <StatusBar barStyle='light-content'ranslucent backgroundColor="#c53030"/>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Doguinhos.com</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} 
          onPress= {getDog}>
          <Text style={styles.buttonText}>Mê dê um doguinho</Text>
        </TouchableOpacity>
        <View style={styles.containerImage}>
          <Image style={styles.image} 
          source={{
            uri: `${message}`
          }} 
          alt='Buscando o melhor doguinho'/>
        </View>
        
      </SafeAreaView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  header:{
    color: '#E7CBD6',
    backgroundColor: '#c53030',
    fontSize: 30,
    textAlign: 'center',
    padding: 15,
    fontWeight:'bold'
  },
  button:{
    backgroundColor:'#C53030',
    alignContent: 'stretch',
    padding: 18,
    margin: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
  containerImage:{
    alignItems: 'center',
  },
  image:{
    width: 350,
    height: 350,
    resizeMode: 'contain',
  }

})