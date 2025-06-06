import React from 'react';
import { View,TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Text } from 'react-native-paper';
import Icons2 from 'react-native-vector-icons/Entypo'
import notifee from '@notifee/react-native';
import HeaderHome from './Components/header';
import Slider from './Components/slider';
import { ImagesSlider } from "../Screens/Data/imagesSlide";
import MoreRecentPedido from './Components/pedidoReciente';
import FooterHome from './Components/footerHome';

const Home = ({navigation}) => {

  async function displayNotifications(){

    const channelId = await notifee.createChannel({ //Channels are required for Android
      id: 'default',
      name : 'Default Channel'
    })

    await notifee.displayNotification({
      title : 'Notification : DAY ONE',
      body :'Estas navegando a Frappes',
      android : {
        channelId,
        color: 'blue'
      },
    });

    navigation.navigate('Frappes')
}

const handlePedidoNavigation = () => {
  navigation.navigate('MainMenu')
}

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

        <HeaderHome></HeaderHome>

        <Slider data = {ImagesSlider}></Slider> 

        <View style = {styles.buttonContainer}> 
          <Button mode='outlined' textColor='black' onPress={handlePedidoNavigation}>Hacer mi Pedido</Button>
        </View>

        <View>
          <Text variant='headlineMedium' style = {{textAlign : 'center'}}>Pedido Mas Reciente</Text>
          {/*<MoreRecentPedido></MoreRecentPedido>*/}
        </View>

        <View>

        <View style = {styles.textContainer}>
          <Text variant='headlineMedium' style = {{textAlign : 'center'}}>Somos Caffeto</Text>
          <Text variant='bodyLarge' style = {{textAlign : 'center' , marginTop : 10 , width : 350}} > 
            Hola, somos Caffeto una cafeteria en donde no te puedes perder los magnificos sabores que tenemos para ti
            que esperas para ordenar.
          </Text>
        </View>

        </View>

        <View style = {styles.iconsContainer}>

          <View style = {styles.iconStyle}>
            <Icons2
              name = 'clock'
              size = {35}
              color = 'black'            
            />

            <Text variant='labelLarge'> Horarios : 6- 10 pm todos los dias</Text>
            </View>

          <View style = {styles.iconStyle}>
            <Icons2
              name = 'location-pin'
              size = {45}
              color = 'black' 
            />

            <Text variant='labelLarge'> Ubicacion : Yehualtepec, Puebla, Mexico</Text>
          </View>


        </View>

        <Text>Siguenos en Nuestras Redes Sociales</Text>
        <FooterHome></FooterHome>
        
      </ScrollView>
      
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

  container : {
    backgroundColor : '#FBF5E8',
    flex : 1,
  },

  buttonContainer : {
    alignItems : 'center',
    justifyContent : 'center',
    padding : 10
  },

  textContainer : {
    display : 'flex',
    marginTop : 10,
    marginVertical : 20,
    alignItems : 'center',
    justifyContent : 'center',
    padding : 5
  },

  iconsContainer : {
    display : 'flex',
    justifyContent : 'center',
    flexDirection : 'column'
  },

  iconStyle : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection : 'row',
    gap : 10
  }


});

export default Home;