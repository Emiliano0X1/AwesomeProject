
import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
const {width , height} = Dimensions.get('screen');

const Register = () => {

  const {control, handleSubmit , formState : {errors}} = useForm();
  const [shown, setShown] = useState(false); // Estado para mostrar/ocultar contraseña

  const navigation = useNavigation();

  const handlePress = () => {

  try{

    if(name == null || name === ''){
      throw new Error('No existe el nombre');
    }

    else if(email == null || email === ''){
      throw new Error('No existe el email');
    }

    else if(phoneNumber == null || phoneNumber === ''){
      throw new Error('No existe el numero telefonico');
    }

    else if(password == null || password === ''){
      throw new Error('No existe la contraseña');
    }

    else if(location == null || location === ''){
      throw new Error('No existe la locación');
    }

    else{
      //console.log('antes del posteo del json')
      postClienteFinal();
      //console.log('despues del posteo')
      navigation.navigate('welcome');
    }
    
  } catch (error){
      Alert.alert("Campos Faltantes","Ingrese los campos faltantes")
  }

}


 // const onChange = (text) => setPassword(text);


  const postClienteFinal = async (data) => {

    console.log('Datos enviados:', data); 

    try {
        const response = await fetch("https://cafettoapp-backend.onrender.com/api/v1/cliente/register", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log('Response Status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 500 && errorData.message === 'Este cliente ya existe') {
            Alert.alert('Esta cuenta ya existe','El email ya está registrado. Por favor, use otro.');
          } else {
            Alert.alert('Error en el servidor','Ha ocurrido un error al procesar su solicitud.');
          }
        } else {
          // Procesar respuesta exitosa
          const data = await response.json();
          //console.log('Si jalo, OMG',data)
          Alert.alert('Creación de Cuenta','La cuenta se ha creado con exito.');
          // Manejar datos recibidos
        }
      } catch (error) {
        // Manejar errores de red
       Alert.alert('Error de red' ,'Por favor, intente de nuevo más tarde.');
      }
    };


  return (
  
    <View style={styles.container}>
        <View style = {styles.containerText}>
          <Text style = {styles.title}>Registrate a nuestra aplicación</Text>
        </View>
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
                        {errors.name && <Text style = {styles.textError}>{errors.name.message}</Text>}
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

                        {errors.phoneNumber && <Text style = {styles.textError}>{errors.phoneNumber.message}</Text>}
                       </>
                    )
                  }
                  />
                      <Controller
                      control={control}
                      name='location'
                      rules = {{
                            required : 'Por favor ingrese su ubicación',
                        }
                      }

                      render={({ field : {onChange, onBlur, value}}) => (

                        <>
                        <TextInput style = {styles.textInput} 
                            placeholder='Ingrese su Ubicacion'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                           
                        />

                        {errors.location && <Text style = {styles.textError}>{errors.location.message}</Text>}
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

                        {errors.email && <Text style = {styles.textError}>{errors.email.message}</Text>}
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

                        {errors.password && <Text style = {styles.textError}>{errors.password.message}</Text>}
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
      </View>

  );
};

//Sirve para hacer los estilos como en css
const styles = StyleSheet.create({

  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#FBF5E8'
  },

  textError : {
    marginLeft : 18,
    fontFamily : 'BricolageGrotesque-Regular'
  },

  containerText : {
    marginTop : 10,
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
    height: height * 0.54,
    width : width * 0.85,
  },

  button : {
    padding : 5,
    borderRadius : 5,
    backgroundColor : 'white',
    borderColor : "white",
    alignItems : 'center',
    marginTop : 50,
    width : width * 0.45,
    height : 40,
    marginLeft : 80,
  
  },

  buttonText : {
    color : 'black',
    fontFamily : 'BricolageGrotesque-SemiBold',
    fontSize : 18,
  },

  text : {
    marginVertical: 8,
    color: 'black',
    fontSize: 18,
    fontFamily : 'BricolageGrotesque-Regular',
    paddingLeft : 20,
  },

  title : {
    color: 'black',
    fontSize: 36,
    fontFamily : 'BricolageGrotesque-Bold',
  },

  textInput : {
    marginTop : 15,
    width : width * 0.75,
    backgroundColor: '#f5f5f5',
    marginLeft : 18,
    fontFamily : 'BricolageGrotesque-SemiBold'
  },

});

export default Register;