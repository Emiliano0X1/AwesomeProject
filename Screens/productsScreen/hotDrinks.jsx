
import React ,{useContext, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../context';

const HotDrinks = ({navigation}) => {

  const {productosMain,addProduct} = useContext(OrderContext);

  /*
  const productos = [
  {name: "Expresso", precio : 20 , size : 'regular',id : 'B1', extra : 'defaultExtra',type : 'Bebida Caliente'},
   {name: "Americano", precio : 26 , size : 'regular',id : 'B2',extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Chocolate", precio : 30 , size : 'regular',id : 'B3',extra : 'withMilk', type : 'Bebida Caliente'},
   {name: "Capuchino", precio : 36 , size : 'regular', id : 'B4', extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Vainilla", precio : 39, size : 'regular', id : 'B5', extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Caramelo", precio : 39 , size : 'regular', id : 'B6', extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Amaretto", precio : 39 , size : 'regular', id : 'B7', extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Latte", precio : 36 , size : 'regular', id : 'B8', extra : 'withMilk',type : 'Bebida Caliente'},
   {name: "Mocca", precio : 39 , size : 'regular', id : 'B9', extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Chocolate Blanco", precio : 39 , size : 'regular', id : 'B10', extra : 'withMilk', type: 'Bebida Caliente'},
   {name: "Crema Irlandesa", precio :  39, size : 'regular', id : 'B11',extra : 'defaultExtra', type : 'Bebida Caliente'},
   {name: "Chai Latte", precio : 42 , size : 'regular', id : 'B12', extra : 'withMilk', type : 'Bebida Caliente'},
   {name: "Matcha Latte", precio : 45 , size : 'regular', id : 'B13', extra : 'withMilk', type : 'Bebida Caliente'},
   {name: "Taro", precio : 45 , size : 'regular', id : 'B14', extra : 'withMilk', type: 'Bebida Caliente'},
   {name: "Caramelo Latte", precio : 40 , size : 'regular', id : 'B15', extra : 'withMilk', type : 'Bebida Caliente'},
   {name: "Vainilla Latte", precio : 40 , size : 'regular', id : 'B16', extra : 'withMilk', type : 'Bebida Caliente'},
  ];

  */

  const hotDrinks = productosMain.filter(producto => producto.type === "Bebida Caliente"); 

  const agregarProductoFinal = (producto) => {
      navigation.navigate(producto.extraType,{producto});
  };

  return (

    <SafeAreaView style = {styles.container}>
      <ScrollView>
    
        <Text style = {styles.title}> Bebidas Calientes </Text> 

        <View style = {styles.containerCards}>
          {hotDrinks.map((producto) => (
            <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}> {producto.name} </Text>
                  <Text style = {styles.cardSubtitle}> ${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>

          ))}
           </View>
           


        </ScrollView>

    </SafeAreaView>
  );
};



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
    height: 150,
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


export default HotDrinks;
