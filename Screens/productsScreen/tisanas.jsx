import React ,{useContext} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../context';

const Tisana= ({navigation}) => {

  const {addProduct,productosMain} = useContext(OrderContext) ;

  /*
  const productos = [
    {name : 'Blue Eyes', precio : 25,id: 'B31' , extra : 'defaultExtra',type : 'Tisana'},
    {name : 'Paraíso Exótico', precio : 25, id : 'B32', extra : 'defaultExtra',type : 'Tisana'},
    {name : 'Amaretto', precio : 25, id : 'B33', extra : 'defaultExtra',type : 'Tisana'},
    {name : 'Fresa-Kiwi', precio : 25, id : 'B34', extra : 'defaultExtra',type : 'Tisana'}
  ];

  */

  const Tisanas = productosMain.filter(producto => producto.type === "Tisana")

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };


  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Tisanas </Text>

        <View style = {styles.containerCards}>

        {Tisanas.map((producto) => ( 

        <TouchableOpacity
              key = {producto.id}
              onPress={()=> agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'kettle-steam-outline' color = 'black' size = {70}/>
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
    height: 220,
    width : 160,
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
export default Tisana;