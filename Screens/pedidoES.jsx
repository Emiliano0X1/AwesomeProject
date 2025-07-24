import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,Dimensions} from 'react-native';
import { Card, IconButton, TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderContext } from './context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AuthContext } from './authContext';
const {width ,height} = Dimensions.get('screen');


const Pedidos = ({navigation}) => {

  const fechaActual = new Date();
  const fechaRenderizada = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${fechaActual.getDate().toString().padStart(2, '0')} ${fechaActual.getHours().toString().padStart(2, '0')}:${fechaActual.getMinutes().toString().padStart(2, '0')}:${fechaActual.getSeconds().toString().padStart(2, '0')}`;

  const {productos,total} = useContext(OrderContext);
  const {clienteId} = useContext(AuthContext)
  const {eliminarProducto,setProductos} = useContext(OrderContext);
  const {jwtToken,isExpired} = useContext(AuthContext)


  const Pedido = {
      status : 'EN REVISION',
      data : fechaActual,
      total : total,
      producto : 
        productos.map((productoPedido) => ({
          cantidad : productoPedido.cantidad,
          size : productoPedido.type === 'Frappe' ? productoPedido.size : 'Regular',
          producto : {id : productoPedido.id},
          extras : Array.isArray(productoPedido.extras) && productoPedido.extras.length > 0 ? productoPedido.extras
          .filter((extraPP) => extraPP && extraPP !== undefined && typeof extraPP.id === 'number')
          .map((extraPP) => ({id : extraPP.id}))
          : [],
    }))
  }

  const checkIfIsExpired = () => {
    if(isExpired(jwtToken)){
      Alert.alert("Sesión Expirada", "Por favor vuelva a iniciar sesión")
      navigation.navigate('welcome')
    }
  }

  const postOrder = async() => {

    try{
      //console.log("Antes de enviar el pedido")
      //console.log(clienteId)
      //console.log(JSON.stringify(Pedido, null, 2));
      const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/cliente/${clienteId}`,{
      method : 'POST',
      headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${jwtToken}`
      },

      body: JSON.stringify(Pedido),
    });

    console.log('Response Status:', response.status);

        if (!response.ok) {

          const errorData = await response.json();
          if (response.status === 500 && errorData.message === 'Este cliente ya existe') {
            Alert.alert('Error del Sistema','No se encontro el usuario. Por favor, use otro.');
            return false
          } else {
            Alert.alert('Error en Envio de Orden','Ha ocurrido un error al procesar su solicitud.');
            return false
          }
        } else {
            Alert.alert('Envio de orden','Se ha enviado el pedido con Exito');
            console.log('si jalo')
            return true
        }

      }catch(error){
          Alert.alert('Error del Servidor',"Hubo un error fatal en el sistema")
      }

      checkIfIsExpired()

    }

    
    const eliminarProductoaDespuesdePostear = (productos) => {
        setProductos([]);
    }


    const postearDefinitivamente = (productos) => {
      postOrder();
      eliminarProductoaDespuesdePostear(productos);
    }

    const disableButtonSend = () => {
      const date = new Date();
      date.setHours(date.getHours() - 6)
      //console.log(date.getHours())

      if(date.getHours() < 18 || date.getHours() > 23){
         return true;
      }

      return false;
    }

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

        <Text style = {styles.title}> Mi Carrito </Text>

          {productos.map((producto,index) => (

          <View key = {index} style = {styles.containerCards}>
              <Card style = {styles.Card}>

              <TouchableOpacity 
              onPress = {() => eliminarProducto(index)} 
              style = {styles.cardButton}>
                  <AntDesign name = 'delete' color = 'red' size = {35}/>
              </TouchableOpacity>

                   <Text style = {styles.cardTitle}>Producto # {index + 1}</Text>
                   <Text style = {styles.cardTextSeparator}>-------------</Text>
                   <Text style = {styles.cardText}>{producto.type} </Text>
                   <Text style = {styles.cardText}>{producto.name}</Text>
                   <Text style = {styles.cardTextSeparator}>-------------</Text>
                   <Text style = {styles.cardText}>Total : ${(producto.price * producto.cantidad)} pesos</Text>
                   <Text style = {styles.cardTextSeparator}>-------------</Text>
                   <Text style = {styles.cardText}>Numero de Productos : {producto.cantidad}</Text>
                   <Text style = {styles.cardTextSeparator}>-------------</Text>

              { producto.extras && producto.extras.length > 0 ? (
                <>
                  {console.log('Extras de toda la orden:', producto.extras)}

                  <Text style={styles.cardText}>Extras:</Text>

                  {producto.extras.map((extra,Index) => (
                    
                    <View key={Index}>

                      {extra ? ( 

                      Array.isArray(extra) ? (
                        
                        extra.map((singleExtra, i) => (
                          
                          <Text key={i} style={styles.cardText}>
                            {singleExtra.label !== 'undefined' ? `+ ${singleExtra.label}` : ''}
                            {singleExtra.price !== 'undefined' ? `+ $${singleExtra.price}` : ''}
                            </Text>
                        ))
                      ) : (
                        <Text style={styles.cardText}> 
                        {extra.label !== 'undefined' ? `+ ${extra.label}` : ''}
                        {extra.price !== 'undefined' ? `+ $${extra.price}` : ''}
                        </Text>
                      )
                      
                    ) : (
                        <Text style={styles.cardText}>No hay extras disponibles</Text>
                      )}
                    </View>
                  ))}
                </>
              ): (

                <Text style={styles.cardText}>No hay extras disponibles</Text>
              )}
            </Card>
          </View>
        ))}

      <View style = {styles.containerCards}>
        
        <Card style = {styles.CardTotal}>
          <Text style = {styles.totalTittle}>Total</Text>
          {productos.length != 0 ? (
            <Text style ={styles.cardText} > $ {total} pesos </Text>
          ) : (
            <Text style ={styles.cardText} > $ 0 pesos </Text>
          )}
        </Card>
      </View>

      <View style = {styles.buttonsContainer}>

        <TouchableOpacity style ={styles.button} onPress={postearDefinitivamente}>
          <Text style = {styles.buttonText}>Enviar Pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button2} onPress={() => navigation.navigate('Menu')}>
          <Text style = {styles.buttonText}>Volver al Menú</Text>
        </TouchableOpacity>

      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {

  container : {
      flex : 1,
      backgroundColor: '#FBF5E8',
  },

  containerCards : {
    padding: 10,
    backgroundColor : '#FBF5E8',
    alignItems: 'center',
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 25,
    height : height * 0.5,
    width : width * 0.74,
    position: 'relative',
  },

  CardTotal : {
    backgroundColor : 'white',
    marginTop : 25,
    height : 110,
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
      marginLeft : '75%',
      marginTop : '12%', 
      zIndex: 1,
  },

  cardTitle : {
    marginTop: 20,
    paddingLeft : 18,
    color : 'black',
    fontSize : 20,
    paddingBottom : 5,
    fontFamily : 'BricolageGrotesque-Bold'
  },

  cardText : {
    paddingLeft : 18,
    fontSize : 17,
    color : 'gray',
    paddingBottom : 5,
    fontFamily : 'BricolageGrotesque-Regular'
  },

  cardIcon : {
    marginLeft: 220,
    marginTop : 20,
  },

  title : {
    marginTop : 25,
    fontSize : 50,
    color: 'black',
    textAlign : 'center',
    fontFamily : 'BricolageGrotesque-Bold'
  },
  button : {
    marginTop : 20,
    backgroundColor: 'black',
    width : width * 0.75,
    height: height * 0.06,
    borderRadius : 15,
},

button2 : {
    marginTop : 20,
    backgroundColor: '#393939',
    width : width * 0.75,
    height: height * 0.06,
    borderRadius : 15,
},

buttonText : {
    color : 'white',
    fontSize: 16,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop : 10,
    fontFamily : 'BricolageGrotesque-SemiBold'
},

buttonsContainer : {
  marginTop : -10,
  flexDirection : 'column',
  alignItems : 'center',
  alignSelf : 'left',
  padding: 10,
  justifyContent : 'space-evenly',
},

  totalTittle : {
    paddingLeft : 18,
    marginTop: 20,
    color: 'black',
    fontSize : 24,
    fontFamily : 'BricolageGrotesque-Bold'
  },

  cardTextSeparator : {
    marginLeft : 18,
    fontSize : 16,
    letterSpacing : 10,
    fontFamily : 'BricolageGrotesque-Regular',
    color : 'gray',
  }
  
});

export default Pedidos;