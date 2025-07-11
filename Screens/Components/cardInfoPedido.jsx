import { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Dimensions, Alert } from "react-native";
import { Card, Text } from "react-native-paper";
import { OrderContext } from '../context';
import { AuthContext } from "../authContext";
import { useNavigation } from '@react-navigation/native';
const {width , height} = Dimensions.get('screen');


export default function PedidoInfoCard(){

    const [pedido , setPedido] = useState(null);
    const [dateEstimated, setDateEstimated] = useState('');
    const [dateString, setDateString] = useState('')
    const {clienteId} = useContext(AuthContext);
    const {jwtToken, isExpired} = useContext(AuthContext)

    const navigation = useNavigation();

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

    const calculateTimeOfReady =  () => {
        const date = new Date();
        date.setHours(date.getHours() - 6);

        const totalMinutes = date.getMinutes() + 15;
        const hours = date.getHours() + Math.floor(totalMinutes / 60)
        const minutes = totalMinutes % 60;
        
        const formatedHours = hours % 12 || 12;
        const formatedMinutes = minutes.toString().padStart(2,'0');
        const ampm = hours >= 12 ? 'pm' : 'am';
    
        setDateEstimated(`${formatedHours}: ${formatedMinutes} ${ampm}`)
    }

    const convertToTimeFormat =  () => {
        const dateString = pedido.date;
        const date = new Date(dateString)
        console.log(date.getHours())
        date.setHours(date.getHours() - 6);

        const totalMinutes = date.getMinutes();
        const hours = date.getHours() + Math.floor(totalMinutes / 60)
        const minutes = totalMinutes % 60;
        
        const formatedHours = hours % 12 || 12;
        const formatedMinutes = minutes.toString().padStart(2,'0');
        const ampm = hours >= 12 ? 'pm' : 'am';
    
        setDateString(`${formatedHours}: ${formatedMinutes} ${ampm}`)
    }

    useEffect(() => {
        if(jwtToken && typeof jwtToken === "string"){
           fetchPedido();
        }
    },[jwtToken])

    useEffect(() => {
        if(pedido) {
            calculateTimeOfReady();
            convertToTimeFormat();
        }
    },[pedido])

    return(
        <View style = {styles.container}>
            <Card style = {styles.cardStyle}>
                {pedido && pedido.date ? (
                    <>
                      <View style = {styles.textContainer}>
                        <Text style = {styles.textTitleCard} variant="headlineSmall">Pedido #{pedido.pedido_id}</Text>
                        <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}>Total : ${pedido.total} pesos</Text>
                        <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}>Fecha : {pedido.date.slice(0,10)}</Text>
                        <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}>Hora de Envio : {dateString}</Text>
                        {pedido && pedido.status === 'EN PREPARACION' && (
                            <>
                            <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular' , marginLeft : -6}}> Hora de Entrega: {dateEstimated} </Text>
                            </>
                        )}
                        <Text variant="headlineSmall" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>Estatus : {pedido.status}</Text>
                       </View>
                    </>
                ) : (
                    <Text variant="headlineSmall" style = {styles.textTitle}>No hay pedidos recientes</Text>
                )}
                
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center'
    },
    cardStyle : {
        backgroundColor : 'white',
        marginTop : 20,
        height : height * 0.4,
        width : width * 0.86,
        position: 'relative',
    },

    textTitleCard : {
        fontFamily :  'BricolageGrotesque-Bold',
        textAlign : 'center',
        marginBottom : 15
    },

    textTitle : {
        fontFamily :  'BricolageGrotesque-Bold',
        textAlign : 'center',
        marginTop : 20
    },

    textContainer : {
        padding : 30,
        marginVertical : 10

    }



})