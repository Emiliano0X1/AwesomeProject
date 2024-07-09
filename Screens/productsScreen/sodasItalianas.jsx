import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const SodasItalianas = ({navigation}) => {

  const productos = [
    {name : 'Manzana Verde', precio : 42,id: 'B41' , extra : 'defaultExtra',type : 'Soda Italiana'},
    {name : 'Mora Azul', precio : 42, id : 'B42', extra : 'defaultExtra',type : 'Soda Italiana'},
    {name : 'Cereza', precio : 42, id : 'B43', extra : 'defaultExtra',type : 'Soda Italiana'},
    {name : 'Curacao Azul', precio : 42, id : 'B44', extra : 'defaultExtra',type : 'Soda Italiana'},
    {name : 'Mango', precio : 42, id : 'B45',extra : 'defaultExtra',type : 'Soda Italiana'},
  ];

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extra,{producto});
  };

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Sodas Italianas </Text>

        <View style = {styles.containerCards}>
        {productos.map((producto) => ( 

        <TouchableOpacity
              key = {producto.id}
              onPress = {() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'bottle-soda-classic-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.precio} pesos</Text>
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
    height: 170,
    width : 150,
    marginHorizontal : 10,
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
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
export default SodasItalianas;