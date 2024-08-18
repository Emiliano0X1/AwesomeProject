import React ,{useState,useContext} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import { OrderContext } from '../context';

const Smoothies = ({navigation}) => {

  const {productosMain} = useContext(OrderContext)

  /*

  const productos = [
    {name : 'Piña Colada', precio : 42,id: 'B35' , description : 'Piña, leche de coco y yogurt', extra : 'defaultExtra',type : 'Smoothie'},
    {name : 'Plátano-Café', precio : 38, id : 'B36', description : 'Plátano, cacao, café y leche de almendras', extra : 'withMilk',type : 'Smoothie'},
    {name : 'Kiwi', precio : 45, id : 'B37', description : 'Kiwi, plátano, yogurt, leche de almendras', extra : 'withMilk',type : 'Smoothie'},
    {name : 'Manzana', precio : 50, id : 'B38',description : 'Manzana, yogurt, avena, crema de almendras, leche de almendras', extra : 'withMilk',type : 'Smoothie'},
    {name : 'Frutos Rojos', precio : 50, id : 'B39', description : 'Fresa, moras, frambuesa y chía' ,extra : 'withMilk',type : 'Smoothie'},
    {name : 'Durazno', precio : 45, id : 'B40', description : 'Durazno, manzana, avena y leche de almendras', extra : 'withMilk',type : 'Smoothie'},
  ];

  */

  const Smoothies = productosMain.filter(producto => producto.type === "Smoothie")


  console.log(Smoothies)
  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };


  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Smoothies (16 onzas)</Text>

        <View style = {styles.containerCards}>

        {Smoothies.map((producto)=> ( 

        <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
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

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})
export default Smoothies;