import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, NativeAppEventEmitter } from 'react-native';
import { Button, Card, IconButton, TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderContext } from './context';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Estatus = ({navigation}) => {

  const[pedidos, setPedidos] = useState([]);
  const {clienteId} = useContext(OrderContext);

  console.log("Hola soy la pantalla Estatus",clienteId)

  const fetchPedidos = async() => {
    try{
      console.log("Antes del Fechear pedidos")
      const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/${clienteId}`);
      console.log("Despues de Fechar")
      console.log(response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      
      setPedidos(data);
      console.log("Pedidos Data", data)
    } catch(err){
      Alert.alert('Ocurrio un error en el sistema, por favor intenta refrescar la aplicacion')
    }
  }

  useEffect(() => {
    fetchPedidos();
  },[]);

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

        <Text style = {styles.title}>Resumen del Pedido</Text>

        <Button style ={styles.button} onPress={fetchPedidos}>
          <Text style={styles.buttonText}>Actualizar Historial</Text>
        </Button>

        {pedidos !== undefined ? pedidos.map((pedido, index) => (

          <View key={index} style = {styles.containerCards}>
            
            <Text style = {styles.subtitle}>Pedido {pedido.id}</Text>

              <Card style = {styles.Card}>

                <Text style = {styles.cardText}> Estatus del pedido : {pedido.status}</Text>
                <Text style = {styles.cardText}> Total de la Orden : {pedido.total}</Text>
                <Text style = {styles.cardText}> Fecha : {pedido.data}</Text>

              </Card>

          </View>
          
          
        )) : <Text style = {styles.subtitle}>No hay pedidos registrados</Text>}

        
        <Text style={styles.subtitle}>Puede pasar a recoger sus productos en un tiempo entre 15 a 25 Minutos</Text>


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
    padding: 5,
    backgroundColor : 'white',
    alignItems: 'center',
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 20,
    height : 125,
    width : 320,
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
    marginTop : 10,
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
    marginTop : 20,
    marginLeft : 100,
    backgroundColor: 'black',
    width : 220,
    height: 42,
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