import React ,{useContext} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import { OrderContext } from '../context';

const Frappes = ({navigation}) => {

  const {addProduct} = useContext(OrderContext);
  

  const productos = [
    {name: "Capuchino", precioMed : 43 ,precioGde :46 ,id : 'B17', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Chaí", precioMed : 47 ,precioGde : 50 ,id : 'B18', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Chocolate Blanco", precioMed : 46 ,precioGde :49 ,id : 'B19', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Fresa", precioMed : 47 ,precioGde : 50 ,id : 'B20', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Matcha", precioMed : 47 ,precioGde : 50,id : 'B21', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Mazapan", precioMed : 46 ,precioGde : 49 ,id : 'B22', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Mocca", precioMed : 45 ,precioGde : 48 ,id : 'B23', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Nutella", precioMed : 47 ,precioGde : 50,id : 'B24', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Oreo", precioMed : 46 ,precioGde :49 ,id : 'B25', extra : 'frappeExtra',type : 'Frappe'},
    {name: "Taro", precioMed : 47 ,precioGde :50 ,id : 'B26', extra : 'frappeExtra',type : 'Frappe'},
  
  
  ];

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extra,{producto});
  };

  return (
     <SafeAreaView  style = {styles.container}>
      <ScrollView>

        <Text style = {styles.title}> Frappes</Text>

        <View style = {styles.containerCards}>
        {productos.map((producto) => ( 
        <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}> Med : ${producto.precioMed} pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : ${producto.precioGde} pesos</Text>
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


export default Frappes;