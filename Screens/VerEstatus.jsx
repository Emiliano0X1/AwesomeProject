import React, {useContext, useEffect, useState} from 'react';
import { View,StyleSheet, ScrollView, TouchableOpacity, Alert, NativeAppEventEmitter, Image } from 'react-native';
import { Text} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import PedidoInfoCard from './Components/cardInfoPedido';
import PedidoCard from './Components/pedidoCard';

const Estatus = () => {

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <Text style = {styles.title}>Resumen del Pedido</Text>
          <View style = {styles.itemContainer}>
            <Image source={require("../Screens/Image-Source/pCaff-005.jpg")} style = {styles.imagesStyle}></Image>
          </View>
          <View>
             <PedidoInfoCard></PedidoInfoCard>
          </View>
          <View style = {styles.cardPedidoContainer}>
            <Text variant='headlineSmall' style = {styles.textTitle}>Pedidos Anteriores</Text>
            <PedidoCard></PedidoCard>
          </View>
        <Text style={styles.subtitle}>Puede pasar a recoger sus productos en un tiempo entre 15 a 25 Minutos</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {

  container : {
      flex : 1,
      backgroundColor: '#FBF5E8',
  },

  cardPedidoContainer : {
    justifyContent : 'center',
    alignContent : 'center'
  },

  itemContainer : {
    marginBottom : 15,
    justifyContent: 'center',
    alignItems : 'center',
    gap	: 20,
  },

    imagesStyle :{
        width : 360,
        height: 340,
        borderRadius : 20
    },

  textTitle : {
    fontFamily :  'BricolageGrotesque-Bold',
    textAlign : 'center',
    marginTop : 20
  },

  containerCards : {
    padding: 5,
    backgroundColor : '#FBF5E8',
    alignItems: 'center',
  },


  Card : {
    backgroundColor : 'white',
    marginTop : 20,
    height : 125,
    width : 320,
    position: 'relative',
  },

  CardTotal : {
    backgroundColor : 'white',
    marginTop : 25,
    height : 250,
    width : 300,
    position: 'relative',
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
  },

  cardButton : {
    position: 'absolute',
      width : '15%',
      backgroundColor : 'white',
      marginLeft : '70%',
      marginTop : '15%', 
      zIndex: 1,
  },

  cardTitle : {
    marginTop: 20,
    paddingLeft : 18,
    fontSize : 20,
    paddingBottom : 5,
  },

  cardText : {
    marginTop : 10,
    paddingLeft : 18,
    fontSize : 18,
    paddingBottom : 5,
    fontFamily : 'BricolageGrotesque-Regular'
  },

  cardIcon : {
    marginLeft: 220,
    marginTop : 20,
  },

  title : {
    marginTop : 25,
    fontSize : 30,
    color: 'black',
    textAlign : 'center',
    fontFamily : 'BricolageGrotesque-Bold'
  },

  subtitle : {
      marginLeft : 20,
      marginRight : 20,
      marginTop : 25,
      fontSize : 20,
      textAlign : 'center',
      color: 'black',
      fontFamily : 'BricolageGrotesque-Regular'
  },
  button : {
    marginTop : 20,
    marginLeft : 100,
    backgroundColor: 'black',
    width : 220,
    height: 42,
    borderRadius : 25,
},

buttonText : {
    color : 'white',
    fontSize: 18,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop : 10,
    fontFamily : 'BricolageGrotesque-SemiBold'
},

buttonsContainer : {
  marginTop : -10,
  flexDirection : 'row',
  alignSelf : 'left',
  padding: 20,
  justifyContent : 'space-evenly',
},

  totalTittle : {
    paddingLeft : 18,
    marginTop: 20,
    color: 'black',
    fontSize : 24,
    fontFamily : 'BricolageGrotesque-SemiBold'
  },

  textInput : {
    marginTop : 20,
    width : 220,
    backgroundColor: '#f5f5f5',
    marginLeft : 18,
  },

  cardTextSeparator : {
    marginLeft : 18,
    fontSize : 16,
    letterSpacing : 10
  }

});
export default Estatus;