import { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { OrderContext } from '../context';

export default function PedidoInfoCard(){

    const [ pedido , setPedido] = useState(null);
    const {clienteId} = useContext(OrderContext);

    const fetchPedido = async () => {
        try{
            const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/first/${clienteId}`)
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setPedido(data)
            //console.log(data)
        } catch(error){
            console.log("No funciona el fetch", error)
        }
    } 

    useEffect(() => {
        fetchPedido();
    },[])

    return(
        <View style = {styles.container}>
            <Card style = {styles.cardStyle}>
                {pedido ? (
                    <>
                      <View style = {styles.textContainer}>
                        <Text style = {styles.textTitleCard} variant="headlineMedium">Pedido #{pedido.pedido_id}</Text>
                        <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}>Total : ${pedido.total} pesos</Text>
                        <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}>Fecha : {pedido.date}</Text>
                        <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}>Hora : {pedido.date}</Text>
                        {pedido && pedido.status === 'EN PREPARACION' && (
                            <>
                                <Text variant="titleLarge" style = {{fontFamily : 'BricolageGrotesque-Regular'}}> Hora Estimada de Entrega : </Text>
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
        height : 250,
        width : 380,
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
    }



})