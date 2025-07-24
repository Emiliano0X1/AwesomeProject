
import React, { useContext, useEffect } from 'react';
import {useForm,Controller} from 'react-hook-form';
import {StyleSheet, Text, View,Button,Alert, TouchableOpacity, PermissionsAndroid, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';
import { OrderContext } from '../Screens/context'

import messaging from '@react-native-firebase/messaging';
import { AuthContext } from './authContext';

const {width , height} = Dimensions.get('screen');

const Loggin = () => {

  const {setProductos} = useContext(OrderContext);
  const {clienteId,storeClienteId} = useContext(AuthContext)
  const {jwtToken,login} = useContext(AuthContext)
  const {control, handleSubmit , formState : {errors}} = useForm(); // Usare use form para la creacion del login

  const OnSubmit = async (data) => { // Aqui estara toda la logica del login
      try{

        console.log("Datos antes de enviar el login", data)
        const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/cliente/login`, {
          method : 'POST',
          headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify({
            email : data.email,
            password : data.password
        })
      });

        console.log('Response Status:', response.status);
        if (response.status !== 200) {
          if (response.status === 403) {
            Alert.alert('Credenciales incorrectas', 'El correo o la contraseña son incorrectas, por favor vuelva a intentarlo');
          } else {
            Alert.alert('Error del Servidor','Ha ocurrido un error al procesar su solicitud, vuelva a intentarlo');
          }
        } else {

          const data = await response.json();

          const responseToken = Object.keys(data)[0];
          const tokenStart = responseToken.indexOf("token=") + 6;
          const tokenEnd = responseToken.indexOf(")",tokenStart);
          const token = responseToken.substring(tokenStart,tokenEnd)
          const clienteId = data[responseToken];

         // console.log("JWT TOEKN" , token)

          //console.log('Si jalo, OMG',data)
          
          Alert.alert('Inicio de Sesión','Se ha iniciado sesión con xito');
          //console.log("Aignacion del email", clienteId)
          
          login(token) //Guarda el token en el contexto global
          storeClienteId(clienteId);
          setProductos([]);
          handlePress();
        }
      } catch(error){
          console.log(error)
          Alert.alert('Error de Red',"Hubo un error fatal en el sistema")
      }
  };

  const requestUserPermission =async () => {
    const granted = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      console.log("Notifcation permission granted")
    }

    else{
      console.log("Notification permission denied")
    }
  }
  
  const generateToken = async () => { //This gets the device token for the push notifications
    try {
      const token = await messaging().getToken();
      if (token) {
        console.log('Token:', token);
        return token
      } else {
        console.log('No se pudo obtener el token');
        return null
      }
    } catch (error) {
      console.log('Error al obtener el token:', error);
    }
  };

  useEffect(() => {
    requestUserPermission()

    if(jwtToken && clienteId){
      console.log("JWT TOKEN antes de mandarlo al patch", jwtToken)
      updateToken(clienteId)
    }

  },[jwtToken,clienteId])

  const updateToken = async(cliente_id) => { //In this function we update the token for the client in the current device
    try{
      const token = await generateToken()
      console.log("Tipo de token:", typeof token);
      const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/cliente/${cliente_id}/token?token=${token}`, {
        method : 'PATCH',
        headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json',
          Authorization : `Bearer ${jwtToken}`
        },
        credentials : 'include',
      })
      console.log('Repsonse status : ' , response.status)

      if(!response.ok){
        const errorData = await response.json()
        console.log("No funciono correctamente", errorData)
      }

      else{
        console.log('Funciona correctamente');
      }

  }catch(error){
    console.log("Hubo un error fatal", error)
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
        <View>
          <Text style = {styles.title}>Bienvenido a CAFETTO, inicia sesión</Text>
        </View>

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
                       onPress= {handleSubmit(OnSubmit)}
                    >
                    <Text style = {styles.buttonText}> Iniciar Sesión </Text>

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
    backgroundColor : '#FBF5E8',
    padding : 8
  },

   textError : {
    marginLeft : 18,
    color : 'gray',
    fontFamily : 'BricolageGrotesque-Regular'
  },

  img : {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
    height : '100%',
    
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
    height: height * 0.4,
    width : width * 0.8,
    alignSelf : 'center'
  },

  button : {
    padding : 5,
    borderRadius : 5,
    backgroundColor : 'black',
    borderColor : "white",
    alignItems : 'center',
    marginTop : 60,
    width : '60%',
    height : 40,
    marginLeft : 60,
  },

  buttonText : {
    color : 'white',
    fontFamily : 'BricolageGrotesque-Regular',
    fontSize : 18,
  },

  text : {
    marginVertical: 20,
    color: 'black',
    fontSize: 18,
    fontFamily : 'BricolageGrotesque-Regular',
    paddingLeft : 20,
  },

  title : {
    marginVertical: 30,
    color: 'black',
    fontSize: 46,
    marginTop : 5,
    fontFamily : 'BricolageGrotesque-Bold'
  },

  textInput : {
    marginTop : 20,
    width : width * 0.68,
    backgroundColor: '#f5f5f5',
    marginLeft : 18,
    fontFamily : 'BricolageGrotesque-Regular'
  },
});

export default Loggin;