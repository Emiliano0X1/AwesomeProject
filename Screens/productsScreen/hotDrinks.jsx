
import React ,{useContext} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../context';

const HotDrinks = ({navigation}) => {

  const {addProduct} = useContext(OrderContext);

  const productos = [
    {name: 'Expresso', precio : 20 , size : 'regular',id : 1, extra : 'defaultExtra'},
   {name: 'Americano', precio : 26 , size : 'regular',id : 2,extra : 'defaultExtra'},
   {name: 'Chocolate', precio : 30 , size : 'regular',id : 3,extra : 'withMilk'},
   {name: 'Capuchino', precio : 36 , size : 'regular', id : 4, extra : 'defaultExtra'},
   {name: 'Vainilla', precio : 39, size : 'regular', id : 5, extra : 'defaultExtra'},
   {name: 'Caramelo', precio : 39 , size : 'regular', id : 6, extra : 'defaultExtra'},
   {name: 'Amaretto', precio : 39 , size : 'regular', id : 7, extra : 'defaultExtra'},
   {name: 'Latte', precio : 36 , size : 'regular', id : 8, extra : 'withMilk'},
   {name: 'Mocca', precio : 39 , size : 'regular', id : 9, extra : 'defaultExtra'},
   {name: "Chocolate Blanco", precio : 39 , size : 'regular', id : 10, extra : 'withMilk'},
   {name: "Crema Irlandesa", precio :  39, size : 'regular', id : 11,extra : 'defaultExtra'},
   {name: "Chai Latte", precio : 42 , size : 'regular', id : 12, extra : 'withMilk'},
   {name: "Matcha Latte", precio : 45 , size : 'regular', id : 13, extra : 'withMilk'},
   {name: "Taro", precio : 45 , size : 'regular', id : 14, extra : 'withMilk'},
   {name: "Caramelo Latte", precio : 40 , size : 'regular', id : 15, extra : 'withMilk'},
   {name: "Vainilla Latte", precio : 40 , size : 'regular', id : 16, extra : 'withMilk'},
  ];

  const agregarProductoFinal = (producto) => {
      addProduct(producto);
      navigation.navigate(producto.extra);
  };

  return (

    <SafeAreaView style = {styles.container}>
          <ScrollView>
    
          <Text style = {styles.title}> Bebidas Calientes </Text> 

        <View style = {styles.containerCards}>
        {productos.map((producto,index) => 
           <TouchableOpacity
              key = {index}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  {console.log(producto.name)}
                  <Text style = {styles.cardSubtitle}>${producto.precio} pesos</Text>
                  {console.log(producto.precio)}
              </Card>
           </TouchableOpacity>

          )};

           
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
