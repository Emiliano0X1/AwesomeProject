import React from 'react';
import {StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from './Components/slider';
import { Button, Text } from 'react-native-paper';

const Welcome = () => {

  const navigation = useNavigation();

  const handlePressLogin = () => {
    navigation.navigate('login');  // Navegar a la pantalla del tab navigator
  }

  const handlePressRegister = () => {
    navigation.navigate('register');  // Navegar a la pantalla del tab navigator
  }

  return (
  
    <View style={styles.container}>
      <View style = {styles.textMainContainer}>
        <Text variant='headlineLarge' style = {{textAlign : 'center'}}>Bienvenido a CAFFETO OFFICIAL APP</Text>
      </View>
      
      <View style = {styles.sliderContainer}>
        <Slider></Slider>
      </View>

      <View style = {styles.buttonsContainer}>
        <Button mode='elevated' onPress={handlePressLogin} textColor='black' >
            Iniciar Sesion
        </Button>

        <Button mode='outlined' onPress={handlePressRegister} textColor='black'>
          Crear Cuenta
        </Button>
      </View>

        {/*
          <View style = { styles.content}>
                <View style = {styles.button}>

                    <TouchableOpacity
                       onPress= {handlePressLogin}
                    >
                    <Text style = {styles.buttonText}> Iniciar Sesion </Text>

                    </TouchableOpacity>

                    </View>

                <View style = {styles.buttonWhite}>

                    <TouchableOpacity
                       onPress= {handlePressRegister}
                    >
                    <Text style = {styles.buttonTextWhite}> Registrarme </Text>

                    </TouchableOpacity>

                </View>

          </View>

        */}


      </View>

  );
};

//Sirve para hacer los estilos como en css
const styles = StyleSheet.create({

  container : {
    flex : 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : '#F4E8D0',
    paddingVertical : 140
  },

  textMainContainer : {
      position : 'absolute',
      marginTop : 70,
      alignItems : 'center',
      justifyContent : 'flex-start',
  },

  sliderContainer : {
    marginVertical : 20
  },

  buttonsContainer : {
    flexDirection : 'row',
    gap : 40,
    
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 105.5,
  },

  button : {
    padding : 5,
    marginBottom: 10,
    backgroundColor : 'black',
    alignItems : 'center',
    width : 200,
    height : 40,
  },

  buttonWhite : {
    backgroundColor : 'white',
    color : 'black'
  },

  buttonText : {
    color : 'white',
    fontFamily : 'Iniria Serif-LightItalic',
    fontSize : 18,
  },

  buttonTextWhite : {
    color : 'black',
    fontFamily : 'Iniria Serif-LightItalic',
    fontSize : 18,
  },

  text : {
    marginVertical: 20,
    color: 'black',
    fontSize: 18,
    fontFamily : 'Roboto',
  },

});

export default Welcome ;