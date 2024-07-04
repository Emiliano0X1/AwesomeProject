import React ,{useState} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Frappes = ({navigation}) => {
  return (
     <SafeAreaView  style = {styles.container}>
      <ScrollView>

        <Text style = {styles.title}> Frappes</Text>

        <View style = {styles.containerCards}>
        <TouchableOpacity
              name = 'CapuchinoF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Capuchino</Text>
                  <Text style = {styles.cardSubtitle}> Med : $43 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $46 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'ChaiF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Chaí</Text>
                  <Text style = {styles.cardSubtitle}> Med : $47 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'ChocolateBlancoF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Chocolate Blanco</Text>
                  <Text style = {styles.cardSubtitle}> Med : $46 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $49 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'FresaF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Fresa</Text>
                  <Text style = {styles.cardSubtitle}> Med : $47 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MatchaF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Matcha</Text>
                  <Text style = {styles.cardSubtitle}> Med : $47 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MazapanF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Mazapan</Text>
                  <Text style = {styles.cardSubtitle}> Med : $46 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $49 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'MoccaF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Mocca</Text>
                  <Text style = {styles.cardSubtitle}> Med : $45 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $48 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'NutellaF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Nutella</Text>
                  <Text style = {styles.cardSubtitle}> Med : $47 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $50 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'OreoF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Oreo</Text>
                  <Text style = {styles.cardSubtitle}> Med : $46 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $49 pesos</Text>
              </Card>
           </TouchableOpacity>

           <TouchableOpacity
              name = 'TaroF'
              onPress={() => navigation.navigate('withMilk')}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/frappeIcon.jpg')} />
                  <Text style = {styles.cardTitle}>Taro</Text>
                  <Text style = {styles.cardSubtitle}> Med : $47 pesos</Text>
                  <Text style = {styles.cardSubtitle}> Gde : $50 pesos</Text>
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


export default Frappes;