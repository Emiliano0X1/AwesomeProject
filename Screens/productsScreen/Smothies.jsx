import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Smoothies = () => {
  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Smoothies (16 onzas)</Text>

        <View style = {styles.containerCards}>

        <TouchableOpacity
              name = 'PinaColada'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
                  <Text style = {styles.cardTitle}>Piña Colada</Text>
                  <Text style = {styles.cardSubtitle}>(Piña, leche de coco y yogurt)</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'PlatanoCafe'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
                  <Text style = {styles.cardTitle}>Plátano-Café</Text>
                  <Text style = {styles.cardSubtitle}>(Plátano, cacao, café y leche de
                    almendras)</Text>
                  <Text style = {styles.cardSubtitle}>$38 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Kiwi'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
                  <Text style = {styles.cardTitle}>Kiwi</Text>
                  <Text style = {styles.cardSubtitle}>(Kiwi, plátano, yogurt, leche de
                    almendras)</Text>
                  <Text style = {styles.cardSubtitle}>$45 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Manzana'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
                  <Text style = {styles.cardTitle}>Manzana</Text>
                  <Text style = {styles.cardSubtitle}>(Manzana, yogurt, avena, crema
                      de almendras, leche de almendras)</Text>
                  <Text style = {styles.cardSubtitle}>$50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'FrutosRojos'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
                  <Text style = {styles.cardTitle}>Frutos Rojos</Text>
                  <Text style = {styles.cardSubtitle}>(Fresa, moras, frambuesa y chía)</Text>
                  <Text style = {styles.cardSubtitle}>$50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Durazno'
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/SmothieIcon.png')} />
                  <Text style = {styles.cardTitle}> Durazno </Text>
                  <Text style = {styles.cardSubtitle}>(Durazno, manzana, avena y leche
                    de almendras)</Text>
                  <Text style = {styles.cardSubtitle}>$45 pesos</Text>
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

  iconStyle : {
    alignSelf: 'center',
    marginTop: 20,
  }


})
export default Smoothies;