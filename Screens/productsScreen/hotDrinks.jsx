
import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HotDrinks = ({navigation}) => {

  return (

    <SafeAreaView style = {styles.container}>
          <ScrollView>
    
          <Text style = {styles.title}> Bebidas Calientes </Text> 

        <View style = {styles.containerCards}>

           <TouchableOpacity
              name = 'Expresso'
              onPress={() => navigation.navigate('defaultExtra')}
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Expresso</Text>
                  <Text style = {styles.cardSubtitle}>$20 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Americano'
              onPress={() => navigation.navigate('defaultExtra')}
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Americano</Text>
                  <Text style = {styles.cardSubtitle}>$26 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Chocolate'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Chocolate</Text>
                  <Text style = {styles.cardSubtitle}>$30 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Capuchino'
              onPress={() => navigation.navigate('defaultExtra')}
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Capuchino</Text>
                  <Text style = {styles.cardSubtitle}>$36 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Vainilla'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Vainilla</Text>
                  <Text style = {styles.cardSubtitle}>$39 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Caramelo'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Caramelo</Text>
                  <Text style = {styles.cardSubtitle}>$39 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Ameretto'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Ameretto</Text>
                  <Text style = {styles.cardSubtitle}>$39 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Latte'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Latte</Text>
                  <Text style = {styles.cardSubtitle}>$36 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Mocca'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Mocca</Text>
                  <Text style = {styles.cardSubtitle}>$39 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'ChocolateBlanco'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Chocolate Blanco</Text>
                  <Text style = {styles.cardSubtitle}>$39 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'CremaIrlandesa'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Crema Irlandesa</Text>
                  <Text style = {styles.cardSubtitle}>$39 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'ChaiLatte'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Chai Latte</Text>
                  <Text style = {styles.cardSubtitle}>$42 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MatchaLatte'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Matcha Latte</Text>
                  <Text style = {styles.cardSubtitle}>$45 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'Taro'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Taro</Text>
                  <Text style = {styles.cardSubtitle}>$45 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'VainillaLatte'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Vainilla Latte</Text>
                  <Text style = {styles.cardSubtitle}>$40 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'CarameloLatte'
             
            >
              <Card style = {styles.Card}>
                <Ionicons style = {styles.iconStyle} name = 'cafe-outline' color = 'black' size = {70}/>
                  <Text style = {styles.cardTitle}>Caramelo Latte</Text>
                  <Text style = {styles.cardSubtitle}>$40 pesos</Text>
              </Card>
           </TouchableOpacity>

          

           </View>


        </ScrollView>

    </SafeAreaView>
  );
};



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
    height: 150,
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


export default HotDrinks;
