import React ,{useState}from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox, TextInput} from 'react-native-paper';



const Milks = () => {

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

  const [checked, setChecked] = useState('');

  const checkCheked = (value) => {
    setChecked(value);
  };


    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>

                <Text style = {styles.title}>Cantidad de Bebidas</Text>

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

                <Text style = {styles.title}> Tipo de Leche </Text>

            <View style = {styles.CheckboxConatiner}>

              <Checkbox
                color = 'black'
                status={checked === 'entera' ? 'checked' : 'unchecked'}
                onPress={() => checkCheked('entera')}
              />

              <Text style = {styles.CheckboxText}>Entera</Text>
              
              
              <Checkbox
                  color = 'black'
                  status={checked === 'almendras' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('almendras')}
              />

              <Text style = {styles.CheckboxText}>Almendras +$6</Text>
              
              <Checkbox
                  color = 'black'
                  status={checked === 'deslactosada' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('deslactosada')}
              />

              <Text style = {styles.CheckboxText}>Deslactosada +$3</Text>
              
              
              <Checkbox
                  color = 'black'
                  status={checked === 'linaza' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('linaza')}
              />

              <Text style = {styles.CheckboxText}>Linaza + $3</Text>
              
              <Checkbox
                  color = 'black'
                  status={checked === 'avena' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('avena')}
              />

              <Text style = {styles.CheckboxText}>Avena + $6</Text>
              

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

export default Milks;