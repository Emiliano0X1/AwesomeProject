

import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Image, ScrollView,Alert,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign'
import Icons2 from 'react-native-vector-icons/Entypo'

const Home = ({navigation}) => {

  const componentes = {
    name : 'Caffeto',
  }
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
      <Text style = {styles.title}>
        CAFFETO
        </Text> 

      <Text style = {styles.text}> 
        Hola, somos Caffeto una cafeteria donde no te puedes perder los amgnificos sabores que tenemos para ti
        que esperas para ordenar.
      </Text>

      <View style = {styles.button}>

      <TouchableOpacity
                       onPress= {() => navigation.navigate('Menu')}
                    >
                    <Text style = {styles.buttonText}> Hacer mi Pedido </Text>

                    </TouchableOpacity>

      </View>

      <Image
        style = {styles.img}
        resizeMode='cover'
        source={require('./Image-Source/cafe-home.jpg')}
        >
      </Image>

      <View style = {styles.containerCards}>

      <Text style = {styles.title}>LO MAS AUTENTICO DE CAFETTO</Text>

        <Card elevation={4} style = {styles.Card}>
            <Card.Cover
              key = {componentes.name}
              style = {styles.cardImg}
              source={require('./Image-Source/frappe.jpg')}
            />
            <Text style = {styles.cardTitle}>Frappuchino de Mocha</Text>
            <Text style = {styles.cardText}> $ 50 pesos</Text>

          <View style = {styles.cardButton}>
            <Button
              title = 'Ordenar Ahora'
              onPress= {() => navigation.navigate('Frappes')}
              color = 'black'
              >
            </Button>

            </View>

        </Card>

        <Card elevation={4} style = {styles.Card}>
            <Card.Cover
              style = {styles.cardImg}
              source={require('./Image-Source/latte.jpg')}
            />
            
            <Text style = {styles.cardTitle}>Latte</Text>
            <Text style = {styles.cardText}> $ 40 pesos</Text>

            <View style = {styles.cardButton}>
            <Button
              title = 'Ordenar Ahora'
              onPress= {() => navigation.navigate('HotDrinks')}
              color = 'black'
              >
            </Button>

            </View>
        </Card>

        <Card elevation={4} style = {styles.Card}>
            <Card.Cover
              style = {styles.cardImg}
              source={require('./Image-Source/wafles.jpg')}
            />
            
            <Text style = {styles.cardTitle}>Wafles</Text>
            <Text style = {styles.cardText}> $ 40 pesos</Text>

            <View style = {styles.cardButton}>
            <Button
              title = 'Ordenar Ahora'
              onPress= {() => navigation.navigate('Wafles')}
              color = 'black'
              >
            </Button>

            </View>

        </Card>

      </View>

      <View style = {styles.container}>

        <Text style = {styles.title}>VIVE UNA EXPERIENCIA UNICA</Text>

        <Text style = {styles.text}> This is a new experience that has never exist in Puebla, even in the whole Country. Cafetto has a great atmosphere, good drinks and most important an excellent service </Text>

      <View>
        <Icons
          style = {styles.Icons}
          name = 'clockcircle'
          size = {35}
          color = 'black'            
  />

        <Text style= {styles.subtext1}> Horarios : 6- 10 pm todos los dias</Text>

        <Icons2
          style = {styles.Icons2}
          name = 'location-pin'
          size = {45}
          color = 'black' 
      />

      <Text style= {styles.subtext2}> Ubicacion : Yehualtepec, Puebla, Mexico</Text>

      </View>

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
  text : {
    padding: 20,
    fontSize : 24,
    color : '#6b7280',
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    marginRight: 10,
    marginLeft: 10,
    
  },
  title : {
    marginTop : 25,
    fontSize : 50,
    color: 'black',
    textAlign : 'center',
    fontWeight : 'bold',
  },

  img : {
      width : '100%',
      height : undefined,
      alignItems : 'center',
      justifyContent : 'center',
      textAlign : 'center',
      marginTop : 20,
      aspectRatio: 1, 
      
  },

  button : {
    marginLeft : 100,
    width: '50%',
    height : 40,
    backgroundColor : 'black',
    alignItems : ' center',
    justifyContent : 'center',
  },

  buttonText : {
      fontSize : 18,
      color : 'white',
      textAlign : 'center',
      
  },


  containerCards : {
    padding: 10,
    backgroundColor : 'white',
  },

  Card : {
    backgroundColor : 'white',
    marginTop : 25,
  },

  cardImg : {
      padding: 18,
      backgroundColor : 'white',
  },

  cardButton : {
      width : '25%',
      position : 'absolute',
      backgroundColor : 'black',
      marginLeft : '70%',
      marginTop : '50%', 
  },

  cardTitle : {
    paddingLeft : 18,
    fontSize : 18,
    paddingBottom : 5,
  },

  cardText : {
    paddingLeft : 18,
    fontSize : 18,
    paddingBottom : 18,
  },

  Icons : {
      flex: 1,
      paddingLeft: 60,
      paddingTop : 25,
  },

  Icons2 : {
    flex: 1,
    paddingLeft: 55,
    paddingTop : 25,
  },

  subtext1 : {
      position: 'absolute',
      fontSize : 13,
      marginTop : 35,
      marginLeft : 100,
      color: 'black',
  },

  subtext2 : {
    position: 'absolute',
    fontSize : 13,
    marginTop : 100,
    marginLeft : 100,
    color: 'black',
}


});

export default Home;