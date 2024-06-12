

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
      <Text style = {styles.title}>
        CAFFETO
        </Text> 

      <Text style = {styles.text}> 
        Hola, somos Caffeto una cafeteria donde no te puedes perder los amgnificos sabores que tenemos para ti
        que esperas para ordenar.
      </Text>

      <Image
        style = {styles.img}
        resizeMode='cover'
        source={require('./Image-Source/cafe-home.jpg')}
        >
      </Image>


      <View style = {styles.containerCards}>

      </View>

      </ScrollView>
      
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

  container : {
    backgroundColor : '#f5f5f5',
    flex : 1,
    alignItems : 'center',
  },
  text : {
    padding: 20,
    fontSize : 24,
    color : '#6b7280',
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    marginRight: 10,
    marginLeft: 10,
    
  },
  title : {
    marginTop : 25,
    fontSize : 50,
    color: 'black',
    textAlign : 'center',
    fontWeight : 'bold',

  },

  img : {
      width : '100%',
      height : undefined,
      alignItems : 'center',
      justifyContent : 'center',
      textAlign : 'center',
      marginTop : 20,
      aspectRatio: 1, 
      
  },

  containerCards : {

  },


});

export default Home;