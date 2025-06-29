import React ,{useState,useContext}from 'react';
import { View, Text,TouchableOpacity, StyleSheet, ScrollView,Button,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox, TextInput} from 'react-native-paper';
import { OrderContext } from '../context';
import ArrowBack from '../Components/flechitaBack';

const DefaultExtra = ({navigation,route}) => {

  //Este es la funcion que utilizare para poder agregar el extra al total

  const {addProduct} = useContext(OrderContext);
  const {producto} = route.params;
  const [cantidad, setCantidad] = useState(1); // se inicializa en 1


  const agregarExtraFinal = () => {
      addProduct(producto,cantidad);
      navigation.navigate('Mi-Pedido');
  }

  //Lo sigueinte es la logica para poder Aumentar el contador de cantidad

  const aumentarCant = () => { // este es el emtodo para aumentar
    setCantidad( prevCant => cantidad + 1)
  } ;


  const disminuirCant = () => { // Y este es el para disminuir
      setCantidad(prevCant => {

        if(prevCant > 1){
          return prevCant -1;
        }

        return prevCant;

      });
  };

    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>

              <ArrowBack navigation={navigation}></ArrowBack>

                <Text style = {styles.title}>Cantidad de Bebidas</Text>

                <View style = {styles.counterContainer}>
                <Button 
                  style = {styles.button}
                  title = ' -'
                  onPress={disminuirCant}
                  color = 'black'
                  />

                  <Text style = {styles.text}>{cantidad}</Text>

                  <Button
                    style = {styles.button} 
                    title = ' + '
                    onPress={aumentarCant}
                    color = 'black'
                  />


                </View>

                
              <View style = {styles.buttonsContainer}>

                <TouchableOpacity style = {styles.button}  onPress = {agregarExtraFinal}>
                  <Text style={styles.buttonText}>Agregar al Carrito</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    container : {
        backgroundColor : '#FBF5E8',
        flex : 1,
    },

    title : {
      marginBottom : 25,
      fontSize : 25,
      textAlign : 'left',
      marginLeft : 20,
      color: 'black',
      fontFamily : 'BricolageGrotesque-Bold'
    },

    counterContainer : {
        flexDirection : 'row',
        alignSelf : 'left',
        padding: 20,
        justifyContent : 'space-evenly',

    },

    text : {
        fontSize : 20,
        textAlign : 'center',
        alignItems : 'left',
        color : 'gray',
        fontFamily : 'BricolageGrotesque-Regular'
    },

    button : {
      marginTop : 70,
      backgroundColor: 'black',
      width : 190,
      height: 50,
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
    marginTop : 40,
    flexDirection : 'row',
    alignSelf : 'left',
    padding: 20,
    justifyContent : 'space-evenly',
  }
  
  
  })

export default DefaultExtra;