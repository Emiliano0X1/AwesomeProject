import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../context';

const Postres = ({navigation}) => {

  const productos = [
    {name : 'Orden Donitas', precio : 27,id: 'P63' , extra : 'defaultExtra',type : 'Postre'},
    {name : 'Volcán de Chocolate', precio : 40, id : 'P64', extra : 'defaultExtra',type : 'Postre'},
    {name : 'Chispas', precio : 26, id : 'P65', extra : 'defaultExtra',type : 'Muffin'},
    {name : 'Mora Azul', precio : 26, id : 'P66', extra : 'defaultExtra',type : 'Muffin'},
    {name : 'Chocolate', precio : 26, id : 'P67', extra : 'defaultExtra',type : 'Muffin'},
    {name : 'Roles', precio : 18, id : 'P68', extra : 'defaultExtra',type : 'Mini'},
    {name : 'Brownies', precio : 18, id : 'P69', extra : 'defaultExtra',type : 'Mini'},
    {name : 'Muffin', precio : 18, id : 'P70', extra : 'defaultExtra',type : 'Mini'},
    {name : 'Orejitas', precio : 28, id : 'P71', extra : 'defaultExtra',type : 'Mini'},
    {name : 'Elmo Gigantes', precio : 15, id : 'P72', extra : 'defaultExtra',type : 'Galletas'},
  ];

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extra,{producto});
  };

  const end1 = 2;
  const start1 = 2;
  const end2 = 5;
  const start2 = 5;
  const end3 = 9;
  const start3 = productos.length-1;

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Postres </Text>

        <View style = {styles.containerCards}>

          {productos.slice(0,end1).map((producto) => ( 

        <TouchableOpacity
             key = {producto.id}
             onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.precio}pesos</Text>
              </Card>
           </TouchableOpacity>

          ))}

        </View>

        <Text style = {styles.subtitle}>Muffins</Text>

        <View style = {styles.containerCards}>

          {productos.slice(start1,end2).map((producto) => ( 
          <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}> {producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.precio} pesos</Text>
              </Card>
           </TouchableOpacity>

          ))}

        </View>

        <Text style = {styles.subtitle}>Mini (Orden)</Text>
          
        <View style = {styles.containerCards}>

          {productos.slice(start2,end3).map((producto) => (

         <TouchableOpacity
              key={producto.id}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.precio} pesos</Text>
              </Card>
           </TouchableOpacity>

          ))}
        </View>

        <Text style = {styles.subtitle}>Galletas</Text>

        <View style = {styles.containerCards}>

          {productos.slice(start3).map((producto) => (

         <TouchableOpacity
              key={producto.id}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
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
export default Postres;