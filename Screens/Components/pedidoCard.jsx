
import React, {useContext, useEffect, useState} from 'react';
import { View,  StyleSheet, Alert,Dimensions } from 'react-native';
import { Card,Text} from 'react-native-paper';
import Ioicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../authContext';
import { useNavigation } from '@react-navigation/native';

const {width , height} = Dimensions.get('screen');


const PedidoCard = () => {
    const [pedidos, setPedidos] = useState([]);
    const {clienteId} = useContext(AuthContext);
    const {jwtToken, isExpired} = useContext(AuthContext)

    const navigation = useNavigation();

    const checkIfIsExpired = () => {
      if(isExpired()){
            Alert.alert("Sesión Expirada", "Por favor vuelva a iniciar sesión")
            navigation.navigate('welcome')
        }
    }
  
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
          const data = await response.json();    
          setPedidos(data);
          console.log("Pedidos Data", data)
        } catch(err){
          Alert.alert('Error','Ocurrio un error en el sistema, por favor intenta refrescar la aplicacion')
        }

        checkIfIsExpired();
      }
    
      useEffect(() => {
        if(jwtToken && typeof jwtToken === "string"){  
          fetchPedidos(); 
        }
      },[jwtToken]);

    return(
    <View style = {styles.container}>
        {pedidos !== undefined ? pedidos.map((pedido, index) => (
            <Card style = {styles.Card} key={index}>
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

  Card : {
    backgroundColor : 'white',
    marginTop : 20,
    height : height * 0.085,
    width : width * 0.85,
    position: 'relative',
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