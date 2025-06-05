import React from 'react';
import { View,TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Text } from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign'
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

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

        <HeaderHome></HeaderHome>

        <Slider data = {ImagesSlider}></Slider> 

        <View> 
          <Button mode='outlined' textColor='black'>Hacer mi Pedido</Button>
        </View>

        <View>
          <Text variant='headlineMedium'>Pedido Mas Reciente</Text>
          <MoreRecentPedido></MoreRecentPedido>
        </View>

        <View>

          <Text variant='headlineMedium'>Somos Caffeto</Text>

          <Text variant='bodyLarge' > 
            Hola, somos Caffeto una cafeteria en donde no te puedes perder los magnificos sabores que tenemos para ti
            que esperas para ordenar.
          </Text>

        </View>


        <View>
            <Icons
              style = {styles.Icons}
              name = 'clockcircle'
              size = {35}
              color = 'black'            
            />

            <Text style= {styles.subtext1}> Horarios : 6- 10 pm todos los dias</Text>

            <Icons2
              style = {styles.Icons2}
              name = 'location-pin'
              size = {45}
              color = 'black' 
            />

            <Text style= {styles.subtext2}> Ubicacion : Yehualtepec, Puebla, Mexico</Text>

        </View>

        <FooterHome></FooterHome>
        
      </ScrollView>
      
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

  container : {
    backgroundColor : '#f5f5f5',
    flex : 1,
  },
  title : {
    marginTop : 25,
    fontSize : 50,
    color: 'black',
    textAlign : 'center',
    fontWeight : 'bold',
  },

  button : {
    marginLeft : 100,
    width: '50%',
    height : 40,
    backgroundColor : 'black',
    alignItems : ' center',
    justifyContent : 'center',
  },

  buttonText : {
      fontSize : 18,
      color : 'white',
      textAlign : 'center',
      
  },


  containerCards : {
    padding: 10,
    backgroundColor : 'white',
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 25,
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
  },

  cardButton : {
      width : '25%',
      position : 'absolute',
      backgroundColor : 'black',
      marginLeft : '70%',
      marginTop : '50%', 
  },

  cardTitle : {
    paddingLeft : 18,
    fontSize : 18,
    paddingBottom : 5,
  },

  cardText : {
    paddingLeft : 18,
    fontSize : 18,
    paddingBottom : 18,
  },

  Icons : {
      flex: 1,
      paddingLeft: 60,
      paddingTop : 25,
  },

  Icons2 : {
    flex: 1,
    paddingLeft: 55,
    paddingTop : 25,
  },

  subtext1 : {
      position: 'absolute',
      fontSize : 13,
      marginTop : 35,
      marginLeft : 100,
      color: 'black',
  },

  subtext2 : {
    position: 'absolute',
    fontSize : 13,
    marginTop : 100,
    marginLeft : 100,
    color: 'black',
}


});

export default Home;