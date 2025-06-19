import React ,{useContext} from 'react';
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../context';

const Tisana= ({navigation}) => {

  const {productosMain} = useContext(OrderContext) ;

  const Tisanas = productosMain.filter(producto => producto.type === "Tisana")

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };


  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <Text style = {styles.title}> Tisanas </Text>

        <View style = {styles.containerCards}>

        {Tisanas.map((producto) => ( 
        
        producto.active ? (
          <TouchableOpacity
              key = {producto.id}
              onPress={()=> agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
                <MaterialCommunityIcons style = {styles.iconStyle} name = 'kettle-steam-outline' color = 'black' size = {70}/>
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
    height: 235,
    width : 160,
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
export default Tisana;