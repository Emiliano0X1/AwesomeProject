import React ,{useState}from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'


const [order,setOrder] = useState([ // useState es un hook de react que sive para mostrar y actualizar el estado de un componente
   {name: 'expresso', precio : 20 , size : 'regular',id : 1, checked : ''},
   {name: 'americano', precio : 26 , size : 'regular',id : 2, checked : ''},
   {name: 'chocolate', precio : 30 , size : 'regular',id : 3, checked : ''},
   {name: 'capuchino', precio : 36 , size : 'regular', id : 4, checked : ''},
   {name: 'vainilla', precio : 39, size : 'regular', id : 5, checked : ''},
   {name: 'caramelo', precio : 39 , size : 'regular', id : 6, checked : ''},
   {name: 'amaretto', precio : 39 , size : 'regular', id : 7, checked : ''},
   {name: 'latte', precio : 36 , size : 'regular', id : 8, checked : ''},
   {name: 'mocca', precio : 39 , size : 'regular', id : 9, checked : ''},
   {name: 'chocolate blanco', precio : 20 , size : 'regular', id : 10, checked : ''},
   {name: 'crema irlandesa', precio : 20 , size : 'regular', id : 11, checked : ''},
   {name: 'chai latte', precio : 20 , size : 'regular', id : 12, checked : ''},
   {name: 'matcha latte', precio : 20 , size : 'regular', id : 13, checked : ''},
   {name: 'taro', precio : 20 , size : 'regular', id : 14, checked : ''},
   {name: 'caramelo latte', precio : 20 , size : 'regular', id : 15, checked : ''},
   {name: 'vainilla latte', precio : 20 , size : 'regular', id : 16, checked : ''},
]);

const milks = [
    {label : 'Entera', value : 'entera', price : 0},
    {label : 'Deslactosada',value : 'deslactosada', price : 6},
    {label : 'Almendras', value : 'almendras', price : 3},
    {label : 'Linaza', value : 'linaza',price : 3},
    {label : 'Avena', value : 'avena',price : 6},
]


const Menu = () => {
  
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

      <Text style = {styles.title}>Bebidas Calientes</Text>
        <View style = {styles.containerCards}>
        
        
        <Card elevation={5} style = {styles.card}>
          
            <Text style = {styles.cardTitle}>Latte</Text>
            <Text style = {styles.cardSubtitle}> $ 36 pesos</Text>

            <Text style = {styles.cardText}>Tipo Leche</Text>

            <View style = {styles.CheckboxConatiner}>

    
              <Checkbox
                  color = 'black'
                  status={checked === 'entera' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('entera')}
              />

              <Text style = {styles.CheckboxText}>Entera</Text>
              
              
              <Checkbox
                  color = 'black'
                  status={checked === 'almendras' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('almendras')}
              />

              <Text style = {styles.CheckboxText}>Almendras +$6</Text>
              
              <Checkbox
                  color = 'black'
                  status={checked === 'deslactosada' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('deslactosada')}
              />

              <Text style = {styles.CheckboxText}>Deslactosada +$3</Text>
              
              
              <Checkbox
                  color = 'black'
                  status={checked === 'linaza' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('linaza')}
              />

              <Text style = {styles.CheckboxText}>Linaza</Text>
              
              <Checkbox
                  color = 'black'
                  status={checked === 'avena' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('avena')}
              />

              <Text style = {styles.CheckboxText}>Avena</Text>
              


            </View>
           

            <View style = {styles.cardButton}>
            <Button
              title = 'Añadir al Carrito'
              onPress= {() => Alert.alert('Cannot press this one')}
              color = 'black'
              >
            </Button>

            </View>
        </Card>

        <Card elevation={5} style = {styles.card}>
          
            <Text style = {styles.cardTitle}>Chocolate</Text>
            <Text style = {styles.cardSubtitle}> $ 30 pesos</Text>

            <Text style = {styles.cardText}>Tipo Leche</Text>

            <View style = {styles.CheckboxConatiner}>

    
              <Checkbox
                  color = 'black'
                  status={checked === 'entera' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('entera')}
              />

              <Text style = {styles.CheckboxText}>Entera</Text>
              
              
              <Checkbox
                  color = 'black'
                  status={checked === 'almendras' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('almendras')}
              />

              <Text style = {styles.CheckboxText}>Almendras +$6</Text>
              
              <Checkbox
                  color = 'black'
                  status={checked === 'deslactosada' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('deslactosada')}
              />

              <Text style = {styles.CheckboxText}>Deslactosada +$3</Text>
              
              
              <Checkbox
                  color = 'black'
                  status={checked === 'linaza' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('linaza')}
              />

              <Text style = {styles.CheckboxText}>Linaza</Text>
              
              <Checkbox
                  color = 'black'
                  status={checked === 'avena' ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked('avena')}
              />

              <Text style = {styles.CheckboxText}>Avena</Text>
              


            </View>
           

            <View style = {styles.cardButton}>
            <Button
              title = 'Añadir al Carrito'
              onPress= {() => Alert.alert('Cannot press this one')}
              color = 'black'
              >
            </Button>

            </View>
        </Card>

        </View>

      </ScrollView>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create ({

  container : {
      flex : 1,
      backgroundColor : '#f5f5f5',
  },

  title : {
    fontSize : 30 ,
    paddingLeft : 20,
    paddingTop : 30,
    fontWeight : 'bold',
    color : 'black',
  },

  containerCards : {
    padding: 10,
    marginHorizontal : 30,
    
  },

  card : {
    backgroundColor : 'white',
    marginTop : 25,
    height: 350,
  },

  cardTitle : {
    fontSize : 24,
    color : 'black',
    paddingLeft : 15,
    fontWeight : 'bold',
    paddingTop : 10,
  },

  cardSubtitle : {
    fontSize : 16,
    paddingLeft : 15,
    
  },

  cardText : {
    fontSize : 18,
    color : 'black',
    paddingLeft : 15,
    paddingTop : 30,
  },

  cardButton : {
    marginTop : 25,
    marginHorizontal : 50,
    borderBottomWidth : 0.7,
 
  },

  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  CheckboxConatiner : {
    flexDirection: 'column',
    alignItems: 'left',
    padding: 10,
  },

  CheckboxText : {
    fontSize : 16,
    color: 'gray',
    marginLeft: 40,
    marginTop : -30,
  }


});

export default Menu;