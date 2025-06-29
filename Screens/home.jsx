import React from 'react';
import { View,TouchableOpacity, StyleSheet, Image, ScrollView , Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Text } from 'react-native-paper';
import Icons2 from 'react-native-vector-icons/Entypo'
import notifee from '@notifee/react-native';
import HeaderHome from './Components/header';
import Slider from './Components/slider';
import { ImagesSlider } from "../Screens/Data/imagesSlide";
import MoreRecentPedido from './Components/pedidoReciente';
import FooterHome from './Components/footerHome';
const {width , height} = Dimensions.get('screen');

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
  navigation.navigate('Menu')
}

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

        <HeaderHome></HeaderHome>

        <Slider data = {ImagesSlider}></Slider> 

        <View style = {styles.buttonContainer}> 
          <Button mode='outlined' textColor='black' onPress={handlePedidoNavigation} labelStyle = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>Hacer mi Pedido</Button>
        </View>

        <View>
          <Text variant='headlineMedium' style = {{textAlign : 'center', fontFamily : 'BricolageGrotesque-Bold'}}>Pedido Más Reciente</Text>
          <MoreRecentPedido navigation={navigation}></MoreRecentPedido>
        </View>

        <View>

          <View style = {styles.textContainer}>
            <Text variant='headlineMedium' style = {{textAlign : 'center', fontFamily : 'BricolageGrotesque-Bold'}}>Somos Caffeto</Text>
            <Text variant='bodyLarge' style = {{textAlign : 'center' , marginTop : 10 , width : width * 0.85, fontFamily : 'BricolageGrotesque-Regular'}} > 
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
            <Icons2
              name = 'location-pin'
              size = {40}
              color = 'black' 
            />
            </View>

          <View style = {styles.iconStyle}>
            <Text variant='labelLarge' style = {{marginBottom : 18, fontFamily : 'BricolageGrotesque-SemiBold'}}> Horarios : 6- 10 pm todos los dias</Text>
            <Text variant='labelLarge' style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}> Ubicación : Yehualtepec, Puebla, Mexico</Text>
          </View>
        </View>

        <View style = {styles.imageContainer}>
          <Image
            source={require("../Screens/Image-Source/ubi.png")}
            style = {styles.image}
          >
          </Image>
        </View>

        <View style = {styles.footerContainer}>
          <Text variant='headlineSmall' style = {{textAlign : 'center', fontFamily : 'BricolageGrotesque-Bold'}}>Siguenos en Nuestras Redes Sociales</Text>
          <FooterHome></FooterHome>
        </View>
        
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
    padding : 14
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
    flexDirection : 'row'
  },

  iconStyle : {
    display : 'flex',
    alignItems : 'flex-start',
    justifyContent : 'center',
    flexDirection : 'column',
    gap : 10,
    padding : 8
  },

  imageContainer : {
    alignItems : 'center',
    justifyContent : 'center'
  },

  image: {
    width : width * 0.85, 
    height : height * 0.35,
    marginTop :  10,
    alignItems : 'center',
    borderRadius : 12,
    elevation : 16,
    shadowOffset : {width : 0, height : 4},
    shadowOpacity : 0.25,
    shadowRadius : 6
  },

  footerContainer : {
    marginTop : 30,
    padding : 5
  }

});

export default Home;