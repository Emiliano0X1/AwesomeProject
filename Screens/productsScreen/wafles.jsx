import React ,{useContext, useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../context';

const Wafles = ({navigation}) => {

  const {productosMain} = useContext(OrderContext)

   const Waffles = productosMain.filter(producto => producto.type === "Waffle")
   const WafflesNutella = productosMain.filter(producto => producto.type === "Waffle-Nutella")

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Waffles </Text>

        <View style = {styles.containerCards}>
        {Waffles.map((producto) => ( 
        producto.active ? (
          <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}  
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>{producto.description}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>
          ) : (
            <Card style = {styles.Card} key={producto.id}>
              <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>No esta disponible</Text>
            </Card>
          )
          ))}

          </View>

          <Text style = {styles.subtitle}> Nutella + fruta </Text>

          <View style = {styles.containerCards}>

            {WafflesNutella.map((producto) => (

          <TouchableOpacity
            key={producto.id}
            onPress={() => agregarProductoFinal(producto)}
   
            >
            <Card style = {styles.Card}>
            <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
              <Text style = {styles.cardTitle}>{producto.name}</Text>
              <Text style = {styles.cardSubtitle}>{producto.description}</Text>
              <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
            </Card>
          </TouchableOpacity>

            ))}
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container : {
      backgroundColor : '#f5f5f5',
      flex : 1,
  },

  containerCards : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent : 'space-evenly',
    padding: 10,
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 25,
    height: 230,
    width : 150,
    marginHorizontal : 10,
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
      height : 70,
      width : 70,
      alignSelf: 'center',
      marginTop: 20,
  },

  cardTitle : {
    fontSize : 18,
    paddingBottom : 5,
    color : 'black',
    fontWeight : 'bold',
    textAlign: 'center',
  },

  cardSubtitle : {
    fontSize : 14,
    paddingBottom : 5,
    textAlign: 'center',
    color : 'gray',

  },

  title : {
    marginTop : 25,
    fontSize : 35,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontWeight : 'bold',
  },

  subtitle : {
    marginTop : 25,
    fontSize : 25,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontWeight : 'bold',
  },

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})
export default Wafles;