import React ,{useContext} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../context';

const Tes = ({navigation}) => {

  const {addProduct,productosMain} = useContext(OrderContext);

  /*
  const productos = [
    {name : 'Relax', precio : 25,id: 'B27' , extra : 'defaultExtra',type : 'Te'},
    {name : 'Té Verde', precio : 25, id : 'B28', extra : 'defaultExtra',type : 'Te'},
    {name : 'Rooibos Chocomenta', precio : 25, id : 'B29', extra : 'defaultExtra',type : 'Te'},
    {name : 'Rooibos Mango', precio : 25, id : 'B30', extra : 'defaultExtra',type : 'Te'}
  ];

  */

  const Tes = productosMain.filter(producto => producto.type === "Té")

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
};

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Tés</Text>

        <View style = {styles.containerCards}>

        {Tes.map((producto) => ( 
        <TouchableOpacity
              key={producto.id}
              onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'tea-outline' color = 'black' size = {70}/>
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

export default Tes;