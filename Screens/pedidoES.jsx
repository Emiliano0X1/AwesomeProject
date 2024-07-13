import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, NativeAppEventEmitter } from 'react-native';
import { Card, IconButton, TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderContext } from './context';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Pedidos = ({navigation}) => {

  const {productos,extras,total} = useContext(OrderContext);
  const {eliminarProducto} = useContext(OrderContext);



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
                   <Text style = {styles.cardText}>{producto.type} </Text>
                   <Text style = {styles.cardText}>{producto.name}</Text>
                   <Text style = {styles.cardText}>Total : ${(producto.precio * producto.cantidad)} pesos</Text>
                   <Text style = {styles.cardText}>Numero de Productos : {producto.cantidad}</Text>

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
          <Text style = {styles.totalTittle}>Ingrese su nombre</Text>
          <TextInput style = {styles.textInput}/>
          <Text style = {styles.totalTittle}>Total</Text>
          <Text style ={styles.cardText} > $ {total} pesos </Text>
        </Card>
      </View>

      <View style = {styles.buttonsContainer}>

        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style = {styles.buttonText}>Volvel al Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.button}>
          <Text style = {styles.buttonText}>Enviar Pedido</Text>
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
    height : 320,
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
    paddingBottom : 10,
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
  
});

export default Pedidos;