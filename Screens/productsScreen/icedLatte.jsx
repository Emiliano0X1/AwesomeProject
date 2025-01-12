import React,{useContext} from "react";
import {StyleSheet, Text, ScrollView, View,Button,Alert, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../context';

const IcedLatte = ({navigation}) => {

    const{productosMain}= useContext(OrderContext);

    const icedLatte = productosMain.filter(producto => producto.type === 'Iced Latte');

    const agregarProductoFinal = (producto) =>{
        navigation.navigate(producto.extraType,{producto})
    };

    return(
        <SafeAreaView style = {styles.container}>
              <ScrollView>
            
                <Text style = {styles.title}> Iced Latte </Text> 
        
                <View style = {styles.containerCards}>
                  {icedLatte.map((producto) => (

                  producto.active ? (
                    <TouchableOpacity
                      key = {producto.id}
                      onPress={() => agregarProductoFinal(producto)}
                    >
                      <Card style = {styles.Card}>
                         <Image style = {styles.cardImg} resizeMode='cover' source={require('./Icons/icedLatteIcon.jpg')} />
                          <Text style = {styles.cardTitle}> {producto.name} </Text>
                          <Text style = {styles.cardSubtitle}> ${producto.price} pesos</Text>
                      </Card>
                   </TouchableOpacity>

                    ):(
                        <Card style = {styles.Card} key = {producto.id}>
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
  
  
  });
  

export default IcedLatte;