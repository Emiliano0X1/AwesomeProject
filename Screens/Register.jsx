
import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';
import { Controller } from 'react-hook-form';

const Register = () => {

  const {control, handleSubmit , formState : {errors}} = useForm();

  /*
  const [name,setName] = useState('');
  const [location,setLocation] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState('');

  const [password, setPassword] = useState('');

  */

  const [shown, setShown] = useState(false); // Estado para mostrar/ocultar contraseña

  const navigation = useNavigation();

  const handlePress = () => {

  try{

    if(name == null || name === ''){
      throw new Error('No existe el nombre');
    }

    else if(email == null || email === ''){
      throw new Error('No existe el nombre');
    }

    else if(phoneNumber == null || phoneNumber === ''){
      throw new Error('No existe el nombre');
    }

    else if(password == null || password === ''){
      throw new Error('No existe el nombre');
    }

    else if(location == null || location === ''){
      throw new Error('No existe el nombre');
    }

    else{

      console.log('antes del posteo del json')

      postClienteFinal();
      
      console.log('despues del posteo')

      navigation.navigate('welcome');

    }
    
  } catch (error){
      Alert.alert("Ingrese los campos faltantes")
  }

}


 // const onChange = (text) => setPassword(text);


  const postClienteFinal = async () => {
    console.log({ name, location, phoneNumber, email, password });

    try {
        const response = await fetch("http://ID:8080/api/v1/cliente", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phoneNumber, location, email, password }),
        });

        console.log('Response Status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 500 && errorData.message === 'Este cliente ya existe') {

            Alert.alert('El email ya está registrado. Por favor, use otro.');
          } else {
            Alert.alert('Ha ocurrido un error al procesar su solicitud.');
          }
        } else {
          // Procesar respuesta exitosa
          const data = await response.json();
          console.log('Si jalo, OMG',data)
          Alert.alert('La cuenta se ha creado con exito.');
          // Manejar datos recibidos
        }
      } catch (error) {
        // Manejar errores de red
        setError('Error de red. Por favor, intente de nuevo más tarde.');
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

                  <Controller 
                    control={control}
                    name = 'name'
                    rules = {{
                      required : 'Ingrese su Nombre Completo',
                      minLength : {
                        value : 1,
                        message : 'Por favor ingrese su nombre'
                      }
                    }}
                    

                    render = {({field : {onChange,onBlur, value}}) => (
                       <>
                       <TextInput style = {styles.textInput}
                        placeholder='Ingrese su Nombre Completo'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}


                       />

                        {errors.name && <Text>{errors.name.message}</Text>}
                       </>
                    )
                  
                  
                  }
                  
                  
                  />


                  <Controller 
                    control={control}
                    name = 'phoneNumber'
                    rules = {{
                      required : 'Ingrese su Numero Telefonico (10 digitos)',
                      minLength : {
                        value : 10,
                        message : 'Por favor ingrese un numero telefonico valido'
                      }
                    }}
                    

                    render = {({field : {onChange,onBlur, value}}) => (
                       <>
                       <TextInput style = {styles.textInput}
                        placeholder='Ingrese su numero de telefono'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}


                       />

                        {errors.phoneNumber && <Text>{errors.phoneNumber.message}</Text>}
                       </>
                    )
                  
                  
                  }
                  
                  
                  />


                    <Controller
                      control={control}
                      name='email'
                      rules = {{
                            required : 'Por favor ingrese su email',
                            pattern : {
                                value : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message : 'Email Invalido'
                            }
                        }
                      }

                      render={({ field : {onChange, onBlur, value}}) => (

                        <>
                        <TextInput style = {styles.textInput} 
                            placeholder='Ingrese su Email'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                           
                        />

                        {errors.email && <Text>{errors.email.message}</Text>}
                        </>

                      )
                    }

                  />

                    <Controller
                      control={control}
                      name='password'
                      rules = {{
                            required : 'Por favor ingrese su contraseña',
                            minLength :{
                              value : 4,
                              message : 'La contraseña debe contener mas de 4 caracteres'
                            }
                        }
                      }

                      render={({ field : {onChange, onBlur, value}}) => (

                        <>
                        <TextInput style = {styles.textInput} 
                            placeholder='Ingrese su Contraseña'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!shown} 
                         
                        />

                        {errors.password && <Text>{errors.password.message}</Text>}
                        </>

                      )
                    }

                    />


                  

                <View style = {styles.button}>

                    <TouchableOpacity 
                       onPress= {handleSubmit(postClienteFinal)}
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