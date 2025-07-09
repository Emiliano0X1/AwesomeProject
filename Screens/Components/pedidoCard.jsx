
import React, {useContext, useEffect, useState} from 'react';
import { View,  StyleSheet, ScrollView,  Alert,Dimensions } from 'react-native';
import { Button, Card, IconButton, TextInput, Text} from 'react-native-paper';
import { OrderContext } from '../context';
import Ioicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../authContext';
import { useNavigation } from '@react-navigation/native';

const {width , height} = Dimensions.get('screen');


const PedidoCard = () => {
    const [pedidos, setPedidos] = useState([]);
    const {clienteId} = useContext(AuthContext);
    const {jwtToken, isExpired} = useContext(AuthContext)

    const navigation = useNavigation();

    
    console.log("Hola soy la pantalla Estatus",clienteId)
    
    const fetchPedidos = async() => {
        try{
          console.log("Antes del Fechear pedidos")
          const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/cliente/${clienteId}`, {
            headers : {
              Authorization : `Bearer ${jwtToken}`
            }
          });
          console.log("Despues de Fechar")
          console.log(response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          if(isExpired()){
            Alert.alert("Sesion Expirada", "Por favor vuelva a iniciar sesion")
            navigation.navigate('welcome')
          }

          const data = await response.json();    
          setPedidos(data);
          console.log("Pedidos Data", data)
        } catch(err){
          Alert.alert('Ocurrio un error en el sistema, por favor intenta refrescar la aplicacion')
        }
      }
    
      useEffect(() => {
        if(jwtToken && typeof jwtToken === "string"){  
          fetchPedidos();
        }
      },[jwtToken]);

    return(
    <View style = {styles.container}>
        {pedidos !== undefined ? pedidos.map((pedido, index) => (
            <Card style = {styles.cardStyle} key={index}>
                <View style = {styles.cardInsideContainer}>
                      {pedido  ? (
                          <>
                          <View>
                            <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>Pedido #{pedido.pedido_id} </Text>
                          </View>
            
                          <View style = {styles.rightView}>
                            <Ioicons name = 'timer-outline' size = {30}></Ioicons>
                            <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>{pedido.status}</Text>
                          </View>
            
                          </>
            
                            ) : (
                              <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>"Maybe Tomorrow is a new Day"</Text>
                        )}
                </View>
              </Card>
                    
                )) : <Text style = {styles.subtitle}>No hay pedidos registrados</Text>}
        </View>
    )
}

export default PedidoCard;


const styles = StyleSheet.create( {

  container : {
      flex : 1,
      backgroundColor: '#FBF5E8',
      marginTop : 10,
      alignItems : 'center'
  },

  containerCards : {
    padding: 5,
    backgroundColor : '#FBF5E8',
    alignItems: 'center',
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 20,
    height : height * 0.2,
    width : width * 0.85,
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
    fontFamily : 'BricolageGrotesque-Regular'
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
    fontFamily : 'BricolageGrotesque-Bold'
  },

  subtitle : {
      marginLeft : 20,
      marginRight : 20,
      marginTop : 25,
      fontSize : 20,
      textAlign : 'center',
      color: 'black',
      fontFamily : 'BricolageGrotesque-Regular'
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
    fontFamily : 'BricolageGrotesque-SemiBold'
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
    fontSize : 24,
    fontFamily : 'BricolageGrotesque-SemiBold'
  },

  cardTextSeparator : {
    marginLeft : 18,
    fontSize : 16,
    letterSpacing : 10
  },

   cardStyle :{
        width : 350,
        height : 70,
        backgroundColor : 'white',
        marginTop : 10,
    },
    cardInsideContainer : {
        display : 'flex',
        padding : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    rightView : {
        display :'flex',
        flexDirection : 'row',
        gap : 8,
        alignItems : 'center'
    }


});