import React ,{useContext, useState} from 'react';
import {StyleSheet, Text, ScrollView, View,TouchableOpacity,Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import { OrderContext } from '../context';
import ArrowBack from '../Components/flechitaBack';
const {width , height} = Dimensions.get('screen');

const Postres = ({navigation}) => {

  const {productosMain} = useContext(OrderContext)
  
  const Postres = productosMain.filter(producto => producto.type === "Postre")
  const Rebanadas = productosMain.filter(producto => producto.type === "Rebanadas")
  const Muffins = productosMain.filter(producto => producto.type === "Muffin")
  const Minis = productosMain.filter(producto => producto.type === "Mini")
  const Galletas = productosMain.filter(producto => producto.type === "Galletas")

  //console.log(Rebanadas);

  const agregarProductoFinal = (producto) => {
    navigation.navigate(producto.extraType,{producto});
  };

  return (
    <SafeAreaView style = {styles.container} >
      <ScrollView>

        <ArrowBack navigation={navigation}></ArrowBack>

        <Text style = {styles.title}> Postres </Text>

        <View style = {styles.containerCards}>

          {Postres.map((producto) => ( 

          
        producto.active ? (
        <TouchableOpacity
             key = {producto.id}
             onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
                <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>

          ):(
            <Card style = {styles.Card} key={producto.id}>
              <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>No esta disponible</Text>
            </Card>
          )
          ))}

        </View>

        <Text style = {styles.subtitle}>Rebanadas</Text>

        <View style = {styles.containerCards}>

          {Rebanadas.map((producto) => (

            <>

          {producto.active ? (

         <TouchableOpacity
              key={producto.id}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>

          ) : (
              <Card style = {styles.Card} key = {producto.id}>
                <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>No esta disponible</Text>
              </Card>
          )}
            </>
          ))}
        </View>

        <Text style = {styles.subtitle}>Muffins</Text>

        <View style = {styles.containerCards}>

          {Muffins.map((producto) => ( 
            <>
            {producto.active === true ? (
          <TouchableOpacity
              key = {producto.id}
              onPress={() => agregarProductoFinal(producto)}
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}> {producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>
            ) : (
              <Card style = {styles.Card} key = {producto.id}>
                <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>No esta disponible</Text>
              </Card>
            )}
            </>
          ))}

        </View>

        <Text style = {styles.subtitle}>Mini (Orden)</Text>
          
        <View style = {styles.containerCards}>

          {Minis.map((producto) => (
            <>
            {producto.active  ? (

         <TouchableOpacity
              key={producto.id}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>

            ) : (
                <Card style = {styles.Card} key = {producto.id}>
                  <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                      <Text style = {styles.cardTitle}>{producto.name}</Text>
                      <Text style = {styles.cardSubtitle}>No esta disponible</Text>
                </Card>
            )}
          
            </>
          ))}
        </View>

        <Text style = {styles.subtitle}>Galletas</Text>

        <View style = {styles.containerCards}>

          {Galletas.map((producto) => (
            <>
            {producto.active ? (

         <TouchableOpacity
              key={producto.id}
              onPress={() => agregarProductoFinal(producto)}
             
            >
              <Card style = {styles.Card}>
              <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/muffinIcon.png')} />
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>${producto.price} pesos</Text>
              </Card>
           </TouchableOpacity>
            ) : (
              <Card style = {styles.Card} key={producto.id}>
                <Image style={styles.cardImg} resizeMode='cover' source={require('./Icons/noExist.png')}/>
                  <Text style = {styles.cardTitle}>{producto.name}</Text>
                  <Text style = {styles.cardSubtitle}>No esta disponible</Text>
              </Card>
            )}
            </>
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
    height: height * 0.28,
    width : width * 0.4,
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
    fontSize : 15,
    paddingBottom : 5,
    textAlign: 'center',
    color : 'gray',
    fontFamily : 'BricolageGrotesque-Regular'

  },

  title : {
    fontSize : 35,
    textAlign : 'left',
    marginLeft : 20,
    color: 'black',
    fontFamily : 'BricolageGrotesque-Bold'
  },

  subtitle : {
    marginTop : 25,
    fontSize : 25,
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
export default Postres;