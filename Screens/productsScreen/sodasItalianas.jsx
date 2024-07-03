import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const SodasItalianas = () => {
  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Sodas Italianas </Text>

        <View style = {styles.containerCards}>

        <TouchableOpacity
              name = 'GreenApple'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'bottle-soda-classic-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Manzana Verde</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'BlueBerry'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'bottle-soda-classic-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Mora Azul</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Cereza'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'bottle-soda-classic-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Cereza</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'CuracaoAzul'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'bottle-soda-classic-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Curacao Azul</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Mango'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'bottle-soda-classic-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Mango</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container : {
      backgroundColor : '#f5f5f5',
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
    height: 170,
    width : 150,
    marginHorizontal : 10,
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
  },

  cardTitle : {
    fontSize : 18,
    paddingBottom : 5,
    color : 'black',
    fontWeight : 'bold',
    textAlign: 'center',
  },

  cardSubtitle : {
    fontSize : 14,
    textAlign: 'center',
    color : 'gray',

  },

  title : {
    marginTop : 25,
    fontSize : 35,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontWeight : 'bold',
  },

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})
export default SodasItalianas;