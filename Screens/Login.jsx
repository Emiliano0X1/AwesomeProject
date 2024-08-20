
import React from 'react';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';

const Loggin = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Main');  // Navegar a la pantalla del tab navigator
  }

  const [password, setPassword] = React.useState('');
  const [shown, setShown] = React.useState(false); // Estado para mostrar/ocultar contraseña

  const onChange = (text) => setPassword(text);


  return (
  
    <View style={styles.container}>

        <ImageBackground 
        source={require('./Image-Source/fondoChilo.png')} 
        resizeMode="cover" 
        style={styles.img}
        
       >

        <Text style = {styles.title}>CAFFETO</Text>

        <View style = {styles.coloray}/>

              <View style = {styles.containerCards}>

                <Card style = {styles.Card}>

        
                <Text style={styles.text}>Ingrese su correo electronico</Text>
                <TextInput style ={styles.textInput}/>
                <Text style={styles.text}>Ingrese su contraseña</Text>
                <TextInput style ={styles.textInput} onChange={onChange} secureTextEntry={!shown} value = {password}/>

                <View style = {styles.button}>

                    <TouchableOpacity 
                       onPress= {handlePress}
                    >
                    <Text style = {styles.buttonText}> Iniciar Sesión </Text>

                    </TouchableOpacity>


                    </View>

                </Card>


          </View>

        </ImageBackground>

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

  containerCards : {
    padding: 10,
    marginHorizontal : 30,
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 10,
    height: 450,
    width : 350,
    
  },

  button : {
    padding : 5,
    borderRadius : 5,
    backgroundColor : 'black',
    borderColor : "white",
    alignItems : 'center',
    marginTop : 60,
    width : 200,
    height : 40,
    marginLeft : 75,
  
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
    paddingLeft : 20,
    marginTop : 30,
  },

  title : {
    marginVertical: 20,
    color: 'black',
    fontSize: 46,
    fontFamily : 'Roboto',
    fontWeight : 'bold',
    marginTop : 30,
  },

  textInput : {
    marginTop : 20,
    width : 300,
    backgroundColor: '#f5f5f5',
    marginLeft : 18,
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

export default Loggin;