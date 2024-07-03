import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tes = () => {
  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Tés</Text>

        <View style = {styles.containerCards}>

        <TouchableOpacity
              name = 'RelaxT'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'tea-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Relax</Text>
                  <Text style = {styles.cardSubtitle}>$25 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'GreenTea'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'tea-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Té Verde</Text>
                  <Text style = {styles.cardSubtitle}>$25 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'RooibosChoco'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'tea-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Rooibos Chocomenta</Text>
                  <Text style = {styles.cardSubtitle}>$25 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'RooibosMango'
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'tea-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Rooibos Mango</Text>
                  <Text style = {styles.cardSubtitle}>$25 pesos</Text>
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

export default Tes;