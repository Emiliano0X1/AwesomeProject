import React from 'react';
import {StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from './Components/slider';
import { Button, Text } from 'react-native-paper';
import { ImagesSlider } from "../Screens/Data/imagesSlide";

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
    
      <View style = {styles.sliderContainer}>
        <Slider data={ImagesSlider}></Slider>
      </View>

      <View style = {styles.buttonsContainer}>
        <Button mode='elevated' onPress={handlePressLogin} textColor='white' labelStyle = {{fontSize : 16, fontFamily : 'BricolageGrotesque-SemiBold'}} buttonColor='black'>
            Iniciar Sesión
        </Button>

        <Button mode='outlined' onPress={handlePressRegister} textColor='black' labelStyle = {{fontSize : 16 , fontFamily : 'BricolageGrotesque-SemiBold'}}>
          Crear Cuenta
        </Button>
      </View>
      </View>

  );
};

//Sirve para hacer los estilos como en css
const styles = StyleSheet.create({

  container : {
    flex : 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : '#FBF5E8',
    paddingVertical : 140
  },

  textMainContainer : {
      position : 'absolute',
      marginTop : 70,
      alignItems : 'center',
      justifyContent : 'flex-start',
  },

  sliderContainer : {
    marginVertical : 20,
    marginBottom : 80,
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


});

export default Welcome ;