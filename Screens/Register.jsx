
import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';

const Register = () => {

  const [name,setName] = useState('');
  const [location,setLocation] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [shown, setShown] = useState(false); // Estado para mostrar/ocultar contraseña

  const navigation = useNavigation();

  const handlePress = () => {

  try{

    if(name == null){
      throw new Error('No existe el nombre');
    }

    postClienteFinal();

    navigation.navigate('welcome');
    
  } catch (error){
      Alert.alert("Ingrese los campos faltantes")
  }

}


  const onChange = (text) => setPassword(text);


  const postClienteFinal = async () => {
    console.log({ name, location, phoneNumber, email, password });

    try {
        const response = await fetch("http://192.168.1.72:8080/api/v1/cliente", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phoneNumber, location, email, password }),
        });

        console.log('Response Status:', response.status);

        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
        }

        if (response.status === 201) {
            console.log('Cliente creado exitosamente.');
        } else {
            const contentType = response.headers.get('Content-Type');
            console.log(contentType);
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Expected JSON, but got:', contentType);
            }
        }

    } catch (error) {
        console.error('Error:', error);
    }
};

  

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

                <Card elevation = {4} style = {styles.Card}>


                <Text style={styles.text}>Nombre Completo</Text>
                <TextInput style ={styles.textInput} placeholder='Ingresa tu nombre' onChangeText={(text) => setName(text)} />
                <Text style={styles.text}>Numero Telefonico </Text>
                <TextInput style ={styles.textInput} placeholder='Ingresa tu numero telefonico (10 DIGITOS)' onChangeText={(text) => setPhoneNumber(text)}/>
                <Text style={styles.text}>Ubicacion </Text>
                <TextInput style ={styles.textInput} placeholder='Ingresa tu Ubicacion' onChangeText={(text) => setLocation(text)}/>
                <Text style={styles.text}>Ingrese su correo electronico</Text>
                <TextInput style ={styles.textInput} placeholder='Ingresa tu correo' onChangeText={(text) => setEmail(text)}/>
                <Text style={styles.text}>Ingrese una nueva contraseña</Text>
                <TextInput style ={styles.textInput} placeholder = 'Ingresa una contraseña de 8 digitos' onChangeText={onChange} secureTextEntry={!shown} value = {password}/>

                <View style = {styles.button}>

                    <TouchableOpacity 
                       onPress= {handlePress}
                    >
                    <Text style = {styles.buttonText}> Crear Cuenta</Text>

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
    height: 550,
    width : 350,
    
  },

  button : {
    padding : 5,
    borderRadius : 5,
    backgroundColor : 'white',
    borderColor : "white",
    alignItems : 'center',
    marginTop : 60,
    width : 200,
    height : 40,
    marginLeft : 75,
  
  },

  buttonText : {
    color : 'black',
    fontFamily : 'Iniria Serif-LightItalic',
    fontSize : 18,
  },

  text : {
    marginVertical: 8,
    color: 'black',
    fontSize: 18,
    fontFamily : 'Roboto',
    paddingLeft : 20,
    marginTop : 10,
  },

  title : {
    color: 'black',
    fontSize: 46,
    fontFamily : 'Roboto',
    fontWeight : 'bold',
  },

  textInput : {
    marginTop : 2,
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

export default Register;