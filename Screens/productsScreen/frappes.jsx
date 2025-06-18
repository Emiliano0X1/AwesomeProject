import React ,{useContext,useState,useEffect} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import { OrderContext } from '../context';

const Frappes = ({navigation}) => {

  const {productosMain} = useContext(OrderContext);

  const Frappes = productosMain.filter(producto => producto.type === "Frappe")

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };

  return (
     <SafeAreaView  style = {styles.container}>
      <ScrollView>

        <Text style = {styles.title}> Frappes </Text>

        <View style = {styles.containerCards}>
        {Frappes.map((producto) => ( 
         
          producto.active ? (
            <TouchableOpacity
                key = {producto.id}
                onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}> Med : ${producto.medPrice} pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : ${producto.gdePrice} pesos</Text>
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
    height: 180,
    width : 155,
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
    fontSize : 17,
    paddingBottom : 5,
    color : 'black',
    textAlign: 'center',
    fontFamily : 'BricolageGrotesque-SemiBold'
  },

  cardSubtitle : {
    fontSize : 14,
    textAlign: 'center',
    color : 'gray',
    fontFamily : 'BricolageGrotesque-Regular'

  },

  title : {
    marginTop : 25,
    fontSize : 35,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontFamily : 'BricolageGrotesque-Bold'
  },

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})


export default Frappes;