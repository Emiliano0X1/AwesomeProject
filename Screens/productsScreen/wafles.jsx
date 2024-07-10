import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../context';

const Wafles = ({navigation}) => {

  const productos = [
    {name : 'Banana Mix', precio : 50,id: 'W51' , description : 'Cajeta, plátano, nuez y lechera', extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Cream Chesse', precio : 50, id : 'W52', description : 'Queso philadelphia, durazno y lechera',extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Silvestre', precio : 52, id : 'W53', description : 'Queso philadelphia, mermelada,fresa y lechera', extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Napolitano', precio : 60, id : 'W54', description : 'Nutella, fresa, queso philadelphia y lechera', extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Sanísimo', precio : 55, id : 'W55', description : 'Yogurt natural, kiwi, maple y granola' ,extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Tropical', precio : 72, id : 'W56', description : 'Durazno, fresa, kiwi, plátano,maple, granola y yogurt', extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Premium', precio : 77, id : 'W57', description : 'Helado de fresa, cereza,fresa, moras y crema batida',extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Ice', precio : 52, id : 'W58', description: 'Helado de vainilla, dulce de leche, plátano y frutillas',extra : 'toppingExtra',type : 'Waffle'},
    {name : 'Fresa', precio : 48, id : 'W59', description: 'Nutella + Fruta',extra : 'toppingExtra',type : 'Waffle-Nutella'},
    {name : 'Plátano', precio : 45, id : 'W60',description: 'Nutella + Fruta' ,extra : 'toppingExtra',type : 'Waffle-Nutella'},
    {name : 'Durazno', precio : 50, id : 'W61',description: 'Nutella + Fruta' ,extra : 'toppingExtra',type : 'Waffle-Nutella'},
    {name : 'Kiwi', precio : 50, id : 'W62',description: 'Nutella + Fruta' ,extra : 'toppingExtra',type : 'Waffle-Nutella'},
  ];


  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extra,{producto});
  };

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Waffles </Text>

        <View style = {styles.containerCards}>
        {productos.map((producto) => ( 

        <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}  
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>{producto.description}</Text>
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