
import React, { useContext } from 'react';
import {useForm,Controller} from 'react-hook-form';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';
import { OrderContext } from '../Screens/context'

const Loggin = () => {

  const {getClienteId} = useContext(OrderContext);

  const {control, handleSubmit , formState : {errors}} = useForm(); // Usare use form para la creacion del login

  const OnSubmit = async (data) => { // Aqui estara toda la logica del login
      try{

        console.log("Datos antes de enviar el login", data)

        const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/cliente/login?email=${data.email}&password=${data.password}`, {

          method : 'POST',
          headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json',
          },

        });

        console.log('Response Status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 500 && errorData.message === 'Este cliente ya existe') {

            Alert.alert('No se encontro el usuario. Por favor, use otro.');
          } else {
            Alert.alert('Ha ocurrido un error al procesar su solicitud.');
          }
        } else {
    
          const data = await response.json();
          console.log('Si jalo, OMG',data)
          Alert.alert('Se ha iniciado sesion con exito');
          console.log("Aignacion del email", data.id)
          getClienteId(data.id);
          handlePress();
    
        }

      
      }catch(error){
          Alert.alert("Hubo un error fatal en el sistema")
      }
  }


  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Main');  // Navegar a la pantalla del tab navigator
  }


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
                       onPress= {handleSubmit(OnSubmit)}
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
    height: 300,
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