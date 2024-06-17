import React ,{useState}from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'


const componentes = {
  name : 'Caffeto',
}

const milks = [
    {label : 'Entera', value : 0},
    {label : 'Deslactosada', value : 3},
    {label : 'Almendras', value : 6},
    {label : 'Linaza', value : 0},
    {label : 'Avena', value : 0},
]


const Menu = () => {
  const [value, setValue] = useState(null);

  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>

      <Text style = {styles.title}>Bebidas Calientes</Text>
        <View style = {styles.containerCards}>
        
        
        <Card elevation={5} style = {styles.card}>
          
            <Text style = {styles.cardTitle}>Expresso</Text>
            <Text style = {styles.cardSubtitle}> $ 20 pesos</Text>

            <Text style = {styles.cardText}>Leche</Text>

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={milks}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
              setValue(item.value);
               }}
               renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />

          <Checkbox
            style = {styles.CheckboxText}
            label = 'Crema Extra'
            title = 'Crema Extra'
            checked={isChecked}
            onValueChange={handleToggle}
          />

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
    height: 300,
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
    marginTop : 40,
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

  CheckboxText : {
    fontSize : 18,
    color: 'black',
  }


});

export default Menu;