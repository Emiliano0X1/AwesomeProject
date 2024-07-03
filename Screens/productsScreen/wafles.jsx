import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Wafles = () => {
  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Waffles </Text>

        <View style = {styles.containerCards}>

        <TouchableOpacity
              name = 'BananaMix'
             
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Banana Mix</Text>
                  <Text style = {styles.cardSubtitle}>Cajeta, plátano, nuez y lechera</Text>
                  <Text style = {styles.cardSubtitle}>$50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'CreamCheese'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Cream Chesse</Text>
                  <Text style = {styles.cardSubtitle}>Queso philadelphia, durazno y
                  lechera</Text>
                  <Text style = {styles.cardSubtitle}>$50 pesos</Text>
              </Card>
           </TouchableOpacity>
        

        <TouchableOpacity
              name = 'Silvestre'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Silvestre</Text>
                  <Text style = {styles.cardSubtitle}>Queso philadelphia, mermelada,
                  fresa y lechera</Text>
                  <Text style = {styles.cardSubtitle}>$52 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Napolitano'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Napolitano</Text>
                  <Text style = {styles.cardSubtitle}>Nutella, fresa, queso
                  philadelphia y lechera</Text>
                  <Text style = {styles.cardSubtitle}>$60 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Sanisimo'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Sanísimo</Text>
                  <Text style = {styles.cardSubtitle}>Yogurt natural, kiwi, maple y
                  granola</Text>
                  <Text style = {styles.cardSubtitle}>$55 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Tropical'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Tropical</Text>
                  <Text style = {styles.cardSubtitle}>Durazno, fresa, kiwi, plátano,
                  maple, granola y yogurt</Text>
                  <Text style = {styles.cardSubtitle}>$72 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Premium'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Premium</Text>
                  <Text style = {styles.cardSubtitle}>Helado de fresa, cereza,
                  fresa, moras y crema batida</Text>
                  <Text style = {styles.cardSubtitle}>$77 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Ice'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Ice</Text>
                  <Text style = {styles.cardSubtitle}>Helado de vainilla, dulce de
                  leche, plátano y frutillas</Text>
                  <Text style = {styles.cardSubtitle}>$52 pesos</Text>
              </Card>
           </TouchableOpacity>


           

        </View>

        <Text style = {styles.subtitle}>Nutella + Fruta</Text>

        <View style = {styles.containerCards}>

          <TouchableOpacity
              name = 'NutellaFresa'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Fresa</Text>
                  <Text style = {styles.cardSubtitle}>$48 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'NutellaPlatano'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Plátano</Text>
                  <Text style = {styles.cardSubtitle}>$45 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'NutellaDurazno'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Durazno</Text>
                  <Text style = {styles.cardSubtitle}>$50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'NutellaKiwi'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/waffleIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Kiwi</Text>
                  <Text style = {styles.cardSubtitle}>$50 pesos</Text>
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
    height: 230,
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
export default Wafles;