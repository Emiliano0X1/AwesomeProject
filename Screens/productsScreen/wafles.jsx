import React ,{useContext, useState} from 'react';
import {StyleSheet, Text, ScrollView, View,TouchableOpacity,Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import { OrderContext } from '../context';
import ArrowBack from '../Components/flechitaBack';
const {width ,height} = Dimensions.get('screen');


const Wafles = ({navigation}) => {

  const {productosMain} = useContext(OrderContext)

   const Waffles = productosMain.filter(producto => producto.type === "Waffle")
   const WafflesNutella = productosMain.filter(producto => producto.type === "Waffle-Nutella")

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <ArrowBack navigation={navigation}></ArrowBack>

        <Text style = {styles.title}> Waffles </Text>

        <View style = {styles.containerCards}>
        {Waffles.map((producto) => ( 
        producto.active ? (
          <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}  
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>{producto.description}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>
          ) : (
            <Card style = {styles.Card} key={producto.id}>
              <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>No esta disponible</Text>
            </Card>
          )
          ))}

          </View>

          <Text style = {styles.subtitle}> Nutella + fruta </Text>

          <View style = {styles.containerCards}>

            {WafflesNutella.map((producto) => (

          <TouchableOpacity
            key={producto.id}
            onPress={() => agregarProductoFinal(producto)}
   
            >
            <Card style = {styles.Card}>
            <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
              <Text style = {styles.cardTitle}>{producto.name}</Text>
              <Text style = {styles.cardSubtitle}>{producto.description}</Text>
              <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
            </Card>
          </TouchableOpacity>

            ))}
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container : {
      backgroundColor : '#FBF5E8',
      flex : 1,
  },

  containerCards : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent : 'space-evenly',
    padding: 10,
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 25,
    height: height * 0.3,
    width : width * 0.4,
    marginHorizontal : 10,
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
      height : 70,
      width : 70,
      alignSelf: 'center',
      marginTop: 20,
  },

  cardTitle : {
    fontSize : 18,
    paddingBottom : 5,
    color : 'black',
    textAlign: 'center',
    fontFamily : 'BricolageGrotesque-SemiBold'
  },

  cardSubtitle : {
    fontSize : 14,
    paddingBottom : 5,
    textAlign: 'center',
    color : 'gray',
    fontFamily : 'BricolageGrotesque-Regular'
  },

  title : {
    fontSize : 35,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontFamily : 'BricolageGrotesque-Bold'
  },

  subtitle : {
    marginTop : 25,
    fontSize : 25,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontFamily : 'BricolageGrotesque-SemiBold'
  },

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})
export default Wafles;