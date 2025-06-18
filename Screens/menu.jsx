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
                onPress= {() => navigation.navigate('HotDrinks')}
              >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/latteMenu.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Clásicos</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
                onPress= {() => navigation.navigate('IcedLatte')}
              >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/xd.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Iced Latte</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Frappes')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/frappe.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Frappes</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Tes')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/te.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Tés </Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Tisanas')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/tisana.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Tisanas</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Smoothies')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/Smothies.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Smoothies</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('SodasItalianas')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/sodasItalianas.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Sodas Italianas</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Refrescantes')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/te-frio.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Refrescantes</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Wafles')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/wafles.jpg')}
                  />
                  <Text style = {styles.cardTitle}>Wafles</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => navigation.navigate('Postres')}
            >
                <Card style = {styles.Card}>
                <Card.Cover
                  style = {styles.cardImg}
                  source={require('./Image-Source/muffin2.jpg')}
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
          backgroundColor : '#FBF5E8',
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
        fontFamily : 'BricolageGrotesque-Bold'
      },

      title : {
        marginTop : 25,
        fontSize : 35,
        textAlign : 'left',
        marginLeft : 20,
        color: 'black',
        fontFamily : 'BricolageGrotesque-Bold'
      },
    
    
    })
  
  
  export default MainMenu;