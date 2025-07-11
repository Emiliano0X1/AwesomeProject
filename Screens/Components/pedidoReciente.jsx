import { useEffect, useState, useContext } from "react";
import { StyleSheet, View,Dimensions, Alert } from "react-native";
import { Card, Text } from "react-native-paper";
import Ioicons from 'react-native-vector-icons/Ionicons'
import { OrderContext } from '../context';
import { AuthContext } from "../authContext";
import { useNavigation } from "@react-navigation/native";
const {width , height} = Dimensions.get('screen');

//Obtener Query del backend para calcular el tiempo de espera estimado

export default function MoreRecentPedido(){

    const navigation = useNavigation() 

    const[ pedido , setPedido] = useState(null);
    const {clienteId, jwtToken, isExpired} = useContext(AuthContext);

    const checkIfIsExpired = () => {
        if(isExpired()){
            Alert.alert("Sesion Expirada", "Por favor vuelva a iniciar sesion")
            navigation.navigate('welcome')
        }
    }

    const fetchPedido = async () => {
        try{
            const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/first/${clienteId}`, {
                headers : {
                    Authorization : `Bearer ${jwtToken}`
                }
            })
            
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setPedido(data)
            //console.log(data)

        } catch(error){
            console.log("No funciona el fetch", error)
        }

        checkIfIsExpired();
    } 

    useEffect(() => {
        if(jwtToken && typeof jwtToken === 'string'){
            fetchPedido()
        }
    },[jwtToken])

    const handleNavigationStatus = () => {
        navigation.navigate('Estatus')
    }

    return(
        <View style = {styles.container}>
            <Card style = {styles.cardStyle} onPress={handleNavigationStatus}>
                <View style = {styles.cardInsideContainer}>
                    {pedido  ? (
                        <>

                        <View>
                            <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>Pedido #{pedido.pedido_id} </Text>
                        </View>

                        <View style = {styles.rightView}>
                            <Ioicons name = 'timer-outline' size = {30}></Ioicons>
                            <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>{pedido.status}</Text>
                        </View>

                    </>

                    ) : (
                        <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>"Maybe Tomorrow is a new Day"</Text>
                    )}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    
    cardStyle :{
        width : width * 0.85,
        height : 70,
        backgroundColor : 'white',
    },
    cardInsideContainer : {
        display : 'flex',
        padding : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    rightView : {
        display :'flex',
        flexDirection : 'row',
        gap : 8,
        alignItems : 'center'
    }

    

})