import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Postres = () => {
  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Postres </Text>

        <View style = {styles.containerCards}>

        <TouchableOpacity
              name = 'Donitas'
             
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Orden Donitas</Text>
                  <Text style = {styles.cardSubtitle}>$27 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Volcan'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Volcán de Chocolate</Text>
                  <Text style = {styles.cardSubtitle}>$40 pesos</Text>
              </Card>
           </TouchableOpacity>
      

        </View>

        <Text style = {styles.subtitle}>Muffins</Text>

        <View style = {styles.containerCards}>

          <TouchableOpacity
              name = 'MuffinChispas'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}> Chispas </Text>
                  <Text style = {styles.cardSubtitle}>$26 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MuffinBlueBerry'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Mora Azul</Text>
                  <Text style = {styles.cardSubtitle}>$26 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MuffinChocolate'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Chocolate</Text>
                  <Text style = {styles.cardSubtitle}>$26 pesos</Text>
              </Card>
           </TouchableOpacity>

          
        </View>

        <Text style = {styles.subtitle}>Mini (Orden)</Text>

        <View style = {styles.containerCards}>
        <TouchableOpacity
              name = 'MiniRoles'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Roles</Text>
                  <Text style = {styles.cardSubtitle}>$18 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MiniBrownies'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Brownies</Text>
                  <Text style = {styles.cardSubtitle}>$18 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MiniMuffin'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Muffin</Text>
                  <Text style = {styles.cardSubtitle}>$18 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MiniOrejitas'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Orejitas</Text>
                  <Text style = {styles.cardSubtitle}>$18 pesos</Text>
              </Card>
           </TouchableOpacity>

        </View>

        <Text style = {styles.subtitle}>Galletas</Text>

        <View style = {styles.containerCards}>
        <TouchableOpacity
              name = 'elmo'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>Elmo Gigantes</Text>
                  <Text style = {styles.cardSubtitle}>$15 pesos</Text>
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
      height : 70,
      width : 70,
      alignSelf: 'center',
      marginTop: 20,
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
    paddingBottom : 5,
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

  subtitle : {
    marginTop : 25,
    fontSize : 25,
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
export default Postres;