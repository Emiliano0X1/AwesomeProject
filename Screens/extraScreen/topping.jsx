import React ,{useContext, useState}from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox, TextInput} from 'react-native-paper';
import { OrderContext } from '../context';

const Topping = ({navigation,route}) => {

  const {addProduct,extrasMain } = useContext(OrderContext);
  const {producto} = route.params;

  const toppings = extrasMain.filter(extra => extra.type === "Topping")

  /*
  const toppings = [
    {label : 'Oreo', value : 'oreo', price : 6,id : 'T1'},
    {label : 'Lunetas',value : 'lunetas', price : 6,id : 'T2'},
    {label : 'Frutas Extras', value : 'frutas extras', price : 6, id : 'T3'},
    {label : 'Almendras Fileteadas', value : 'almendras fileteadas',price : 6, id : 'T4'},
    {label : 'Crema Batida', value : 'crema batida',price : 6, id : 'T5'},
    {label : 'Bola de Helado', value : 'bola de helado',price : 6, id : 'T6'},
  ];

  */

  const [checked, setChecked] = useState('');

  const checkCheked = (value) => {
    setChecked(value);
  };

  const añadirExtra = () => {
    const topping = toppings.find( toppin => toppin.value === checked);
    return topping;
  };

  
  const agregarExtraFinal = () => {

    try{
      const toppinData = añadirExtra();

      if(!toppinData || toppinData.length == 0){
        throw new Error('No se ha seleccionado una casilla')
      }

      addProduct(producto,cantidad,toppinData);
      navigation.navigate('Mi-Pedido');

    } catch (error) {
      Alert.alert('Por favor selecciona una de las casillas faltantes')
    }
  };


  const [cantidad, setCantidad] = useState(1);

  const aumentarCant = () => {
    setCantidad( prevCant => cantidad + 1)
  } ;

  const disminuirCant = () => {
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

                <Text style = {styles.title}>Cantidad de Waffles</Text>

                <View style = {styles.counterContainer}>

                <Button 
                  title = ' -'
                  onPress={disminuirCant}
                  color = 'black'
                  />

                  <Text style = {styles.text}>{cantidad}</Text>

                  <Button
                    title = ' + '
                    onPress={aumentarCant}
                    color = 'black'
                  />


                </View>

                <Text style = {styles.title}> Topping </Text>

                <View style = {styles.CheckboxConatiner}>
                {toppings.map((toppin)=> (

                  <View key = {toppin.id}>
                <Checkbox
                  color = 'black'
                  status={checked === toppin.value ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked(toppin.value)}
                />
                <Text style = {styles.CheckboxText}> {toppin.label}  + ${toppin.price}</Text>
                </View>
              ))}

              </View>

              <View style = {styles.buttonsContainer}>

                <TouchableOpacity
                    style = {styles.button}
                    onPress={agregarExtraFinal}
                >
                   <Text style={styles.buttonText}>Agregar al Carrito</Text>

                </TouchableOpacity>



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

    title : {
      marginTop : 55,
      fontSize : 25,
      textAlign : 'left',
      marginLeft : 20,
      color: 'black',
      fontWeight : 'bold',
    },

    counterContainer : {
        flexDirection : 'row',
        alignSelf : 'left',
        padding: 20,
        justifyContent : 'space-evenly',

    },

    button : {
        marginTop : 30,
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

    text : {
        fontSize : 20,
        textAlign : 'center',
        alignItems : 'left',
    },

    CheckboxConatiner : {
      flexDirection: 'column',
      alignItems: 'left',
      padding: 20,
      paddingBottom : 10,
    },
  
    CheckboxText : {
      fontSize : 16,
      color: 'gray',
      marginLeft: 40,
      marginTop : -30,
    },

    buttonsContainer : {
      flexDirection : 'row',
      alignSelf : 'left',
      padding: 20,
      justifyContent : 'space-evenly',
    }
  
  
  })

export default Topping;