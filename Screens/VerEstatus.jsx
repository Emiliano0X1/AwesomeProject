import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, NativeAppEventEmitter } from 'react-native';
import { Card, IconButton, TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderContext } from './context';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Estatus = ({navigation}) => {

  const {productos,extras,total} = useContext(OrderContext);
  const {eliminarProducto} = useContext(OrderContext);



  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

        <Text style = {styles.title}>Estatus del Pedido #1</Text>

        <Text style = {styles.subtitle}> Orden </Text>

        <View style = {styles.containerCards}>
          <Card style = {styles.Card}>
            <Text style = {styles.cardText}>Producto : </Text>
            <Text style = {styles.cardText}>Precio : </Text>
            <Text style = {styles.cardText}>Extras: </Text>
          </Card>
        </View>

        <Text style = {styles.subtitle}>Status : ACEPTADO</Text>
        <Text style = {styles.subtitle}>Tiempo : 20 minutos</Text>
        <Text style = {styles.subtitle}>Recoger : En sucursal</Text>

        <View style = {styles.buttonsContainer}>

        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style = {styles.buttonText}>Cancelar Pedido</Text>
        </TouchableOpacity>


      </View>

      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create( {

  container : {
      flex : 1,
      backgroundColor: 'white',
  },

  containerCards : {
    padding: 10,
    backgroundColor : 'white',
    alignItems: 'center',
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 25,
    height : 365,
    width : 300,
    position: 'relative',
  },

  CardTotal : {
    backgroundColor : 'white',
    marginTop : 25,
    height : 250,
    width : 300,
    position: 'relative',
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
  },

  cardButton : {
    position: 'absolute',
      width : '15%',
      backgroundColor : 'white',
      marginLeft : '70%',
      marginTop : '15%', 
      zIndex: 1,
  },

  cardTitle : {
    marginTop: 20,
    paddingLeft : 18,
    fontSize : 20,
    paddingBottom : 5,
  },

  cardText : {
    paddingLeft : 18,
    fontSize : 18,
    paddingBottom : 5,
  },

  cardIcon : {
    marginLeft: 220,
    marginTop : 20,
  },

  title : {
    marginTop : 25,
    fontSize : 30,
    color: 'black',
    textAlign : 'center',
    fontWeight : 'bold',
  },

  subtitle : {
      marginLeft : 20,
      marginTop : 25,
      fontSize : 20,
      color: 'black',
      fontWeight : 'bold',
  },
  button : {
    marginTop : 70,
    backgroundColor: 'black',
    width : 180,
    height: 50,
    borderRadius : 25,
},

buttonText : {
    color : 'white',
    fontSize: 18,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop : 10,
},

buttonsContainer : {
  marginTop : -10,
  flexDirection : 'row',
  alignSelf : 'left',
  padding: 20,
  justifyContent : 'space-evenly',
},

  totalTittle : {
    paddingLeft : 18,
    marginTop: 20,
    color: 'black',
    fontWeight : 'bold',
    fontSize : 24,
  },

  textInput : {
    marginTop : 20,
    width : 220,
    backgroundColor: '#f5f5f5',
    marginLeft : 18,
  },

  cardTextSeparator : {
    marginLeft : 18,
    fontSize : 16,
    letterSpacing : 10
  }

});
export default Estatus;