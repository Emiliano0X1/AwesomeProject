
import React ,{useContext, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../context';

const HotDrinks = ({navigation}) => {

  const {productosMain,addProduct} = useContext(OrderContext);

  const hotDrinks = productosMain.filter(producto => producto.type === "Clasico"); 

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
