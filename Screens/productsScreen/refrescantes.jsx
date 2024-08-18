import React ,{useContext, useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { OrderContext } from '../context';

const Refrescantes = ({navigation}) => {

  const{productosMain} = useContext(OrderContext)
  /*
  const productos = [
    {name : 'Té Helado', precio : 30,id: 'B46' , extra : 'defaultExtra',type : 'Refrescantes'},
    {name : 'Té Rojo', precio : 25, id : 'B47', extra : 'defaultExtra',type : 'Refrescantes'},
    {name : 'Botella De Agua', precio : 12, id : 'B48', extra : 'defaultExtra',type : 'Refrescantes'},
    {name : 'Latte En las Rocas', precio : 36, id : 'B49', extra : 'withMilk',type : 'Refrescantes'},
    {name : 'Affogato', precio : 36, id : 'B50',extra : 'defaultExtra',type : 'Refrescantes'},
  ];

  */

  const Resfrescantes = productosMain.filter(producto => producto.type === "Refrescante")


  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Refrescantes </Text>

        <View style = {styles.containerCards}>
        {Resfrescantes.map((producto) =>( 
        <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/refreIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
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
    height: 180,
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
    marginTop : 10,
    paddingBottom : 5,
    color : 'black',
    fontWeight : 'bold',
    textAlign: 'center',
  },

  cardSubtitle : {
    fontSize : 14,
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

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})
export default Refrescantes;