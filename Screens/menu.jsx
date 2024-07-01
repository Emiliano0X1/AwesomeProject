import React ,{useState}from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert, TouchableOpacity ,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox} from 'react-native-paper';


const MainMenu = ({navigation}) => {
    
    return (
        <SafeAreaView style = {styles.container}>
          <ScrollView>
          
            <Text style = {styles.title}>Menú</Text>
          
            <View style = {styles.containerCards}>

            
            <TouchableOpacity
                onPress= {() => navigation.navigate('Home')}
              >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Bebidas Calientes</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/frappe.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Frappes</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Tés </Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Tisanas</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Smoothies</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Sodas Italianas</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Refrescantes</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/wafles.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Wafles</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Postres</Text>
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
        padding: 10,
        marginHorizontal : 30,
      },
    
      Card : {
        backgroundColor : 'white',
        marginTop : 25,
        height: 250,
        
      },
    
      cardImg : {
          padding: 18,
          backgroundColor : 'white',
      },
    
      cardTitle : {
        paddingLeft : 18,
        fontSize : 18,
        paddingBottom : 5,
        color : 'black',
        fontWeight : 'bold',
      },

      title : {
        marginTop : 25,
        fontSize : 35,
        textAlign : 'left',
        marginLeft : 20,
        color: 'black',
        fontWeight : 'bold',
      },
    
    
    })
  
  
  export default MainMenu;