import React ,{useState}from 'react';
import { View, Text,TouchableOpacity, StyleSheet, ScrollView,Button,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox, TextInput} from 'react-native-paper';

const DefaultExtra = () => {

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

                <TouchableOpacity
                 style = {styles.button}
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
      marginBottom : 25,
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

    text : {
        fontSize : 20,
        textAlign : 'center',
        alignItems : 'left',
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
    marginTop : 40,
    flexDirection : 'row',
    alignSelf : 'left',
    padding: 20,
    justifyContent : 'space-evenly',
  }
  
  
  })

export default DefaultExtra;