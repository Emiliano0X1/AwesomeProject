import React from 'react';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');  // Navegar a la pantalla del tab navigator
  }

  return (
  
    <View style={styles.container}>

        <ImageBackground 
        source={require('./Image-Source/fondoChilo.png')} 
        resizeMode="cover" 
        style={styles.img}
        
       >

        <View style = {styles.coloray}/>

          <View style = { styles.content}>

          <Image
          style={styles.logo}
          source={require( './Image-Source/Loho.png')}
      />

                <Text style = {styles.title}> CAFFETO </Text>
                <Text style = {styles.text}> El aroma del pueblo</Text>
                

                <View style = {styles.button}>

                    <TouchableOpacity
                       onPress= {handlePress}
                    >
                    <Text style = {styles.buttonText}> Continuar </Text>

                    </TouchableOpacity>

                </View>

          </View>

        </ImageBackground>

        {showNavBar && <NavigationBar />}

      </View>

  );
};

//Sirve para hacer los estilos como en css
const styles = StyleSheet.create({

  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img : {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
    height : '100%',
    
  },

  coloray : {
    ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 105.5,
    
  },

  button : {
    padding : 5,
    borderRadius : 5,
    backgroundColor : 'black',
    borderColor : "white",
    alignItems : 'center',
    width : 200,
    height : 40,
  
  },

  buttonText : {
    color : 'white',
    fontFamily : 'Iniria Serif-LightItalic',
    fontSize : 18,
  },

  text : {
    marginVertical: 20,
    color: 'black',
    fontSize: 18,
    fontFamily : 'Roboto',
  },

  title : {
    marginVertical: 20,
    color: 'black',
    fontSize: 46,
    fontFamily : 'Roboto',
    fontWeight : 'bold',
    marginTop : 100,
  },

  logo : {
    position: 'absolute',
    alignItems : 'center',
    top: -250,
    width: 700,
    height: 700,
    marginBottom : 50,

  }


});

export default Welcome ;