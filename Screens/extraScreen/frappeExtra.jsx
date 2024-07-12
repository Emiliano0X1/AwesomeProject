import React ,{useContext, useState}from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card ,Checkbox, TextInput} from 'react-native-paper';
import ButtonMultiselect, { ButtonLayout } from 'react-native-button-multiselect';
import { OrderContext } from '../context';

const FrappeExtra = ({navigation,route}) => {

  const milks = [
    {label : 'Entera', value : 'entera', price : 0, id : 'M1'},
    {label : 'Deslactosada',value : 'deslactosada', price : 6 , id: 'M2'},
    {label : 'Almendras', value : 'almendras', price : 3 , id : 'M3'},
    {label : 'Linaza', value : 'linaza',price : 3 , id : 'M4'},
    {label : 'Avena', value : 'avena',price : 6 , id : 'M5'},
];

  const cremas = [
  { label: 'Con Crema',value: true, price: 5 ,id : 'C1'},
  { label : 'Sin Crema',value: false, price: 0, id : 'C2' }
  ];

  //La eleccion de la leche
  const [size,setSize] = useState('');
  const [selectedMilk, setSelectecMilk] = useState ('');

  const {addProduct, addExtra} = useContext(OrderContext);
  const {producto} = route.params;

  const [checked, setChecked] = useState('');

  const checkCheked = (value) => {
    setChecked(value);
  };

  const añadirExtra = () => {
    const milkCheked = milks.find( milk => milk.value === checked);
    return milkCheked;
  };

  
  const agregarExtraFinal = () => {
    const precioFinal = getSize(producto);
    const milkData = añadirExtra();
    const cremaData = añadirCrema();

    const extras = [milkData,cremaData]
    addProduct(producto,cantidad,extras);
    navigation.navigate('Mi-Pedido');
  };


  //Las elecciones de tamaño

  const buttons = [
    {label : 'Mediano', value : 'mediano'},
    {label: 'Grande' , value : 'grande'},
  ];

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonSelected = (selectedValues) => {
    setSelectedButtons(selectedValues);
  };

  const getSize = (producto) => {
    console.log(producto.precio);
    
    if(selectedButtons.includes('mediano')){
      producto.precio = producto.precioMed;
    }
    else{
      producto.precio = producto.precioGde;
    }
    console.log(producto.precio);
  }

  //El contador 
  const [cantidad, setCantidad] = useState(1);

  const aumentarCant = () => {
    setCantidad( prevCant => cantidad + 1)
  };

  const disminuirCant = () => {
      setCantidad(prevCant => {

        if(prevCant > 1){
          return prevCant -1;
        }

        return prevCant;

      });
  };

  //Para la crema extra

  const [checked2,setCheked2] = useState(false);

  const checkExtra = (value) => {
    setCheked2(value)
  };

  const añadirCrema = () => {
    const cream = cremas.find(creamm => creamm.value === checked2);
    return cream;
  };


    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>

                <Text style = {styles.title}>Cantidad de Bebidas</Text>

                <View style = {styles.counterContainer}>

                 {/* Aqui empiezan los bootnes para poder hacer las acciones correxpondientes */}
                <Button 
                  title = ' -'
                  onPress={disminuirCant}
                  color = 'black'
                  />

                  <Text style = {styles.text}>{cantidad}</Text>

                  <Button
                    title = ' + '
                    onPress={aumentarCant}
                    color = 'black'
                  />


                </View>

                <Text style = {styles.title}> Tamaño </Text>
                
                <View style = {styles.buttonsContainer}>
                <ButtonMultiselect 

                  layout={ButtonLayout.GRID}
                  buttons={buttons}
                  selectedButtons={selectedButtons}
                  onButtonSelected={handleButtonSelected}
                />

              </View>

                <Text style = {styles.title}> Tipo de Leche </Text>
              
              <View style = {styles.CheckboxConatiner}>
                {milks.map((milk)=> (

                  <View key = {milk.id}>
                <Checkbox
                  color = 'black'
                  status={checked === milk.value ? 'checked' : 'unchecked'}
                  onPress={() => checkCheked(milk.value)}
                />
                <Text style = {styles.CheckboxText}> {milk.label}  + {milk.price}</Text>
                </View>
              ))}

              <Text style= {styles.title}> Extras : </Text>

              <View style = {styles.CheckboxConatiner}>
                {cremas.map((crema) => (
                  
                <View key = {crema.id}>
                <Checkbox
                  color = 'black'
                  status={checked2 === crema.value ? 'checked' : 'unchecked'}
                  onPress={() => checkExtra(crema.value)}
                />
                <Text style = {styles.CheckboxText}> {crema.label}  + {crema.price}</Text>
                  </View>
              ))}
        
                </View>
            
              

              <View style = {styles.buttonsContainer}>

                <TouchableOpacity
                    style = {styles.button}
                    onPress={agregarExtraFinal}
                >
                   <Text style={styles.buttonText}>Agregar al Carrito</Text>

                </TouchableOpacity>

                </View>

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

    title : {
      marginTop : 45,
      fontSize : 25,
      textAlign : 'left',
      marginLeft : 20,
      color: 'black',
      fontWeight : 'bold',
    },

    counterContainer : {
        flexDirection : 'row',
        alignSelf : 'left',
        padding: 20,
        justifyContent : 'space-evenly',

    },

    button : {
        marginTop : 30,
        backgroundColor: 'black',
        width : 180,
        height: 50,
        borderRadius : 25,
    },

    buttonText : {
        color : 'white',
        fontSize: 18,
        alignContent: 'center',
        alignSelf: 'center',
        marginTop : 10,
    },

    text : {
        fontSize : 20,
        textAlign : 'center',
        alignItems : 'left',
    },

    CheckboxConatiner : {
      flexDirection: 'column',
      alignItems: 'left',
      padding: 20,
      paddingBottom : 10,
    },
  
    CheckboxText : {
      fontSize : 16,
      color: 'gray',
      marginLeft: 40,
      marginTop : -30,
    },

    buttonsContainer : {
      flexDirection : 'row',
      alignSelf : 'left',
      padding: 20,
      justifyContent : 'space-evenly',
    }
  
  
  })

export default FrappeExtra;