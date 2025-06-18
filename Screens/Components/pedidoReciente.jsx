import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Ioicons from 'react-native-vector-icons/Ionicons'

//Obtener Query del backend para calcular el tiempo de espera estimado

export default function MoreRecentPedido({navigation}){

    const[timeWait,setTimeWait] = useState('')

    const calculateTimeOfWait = (time, initialTime) => {
        const now = new Date()
        now.setHours(now.getHours() - 6)

        const totalMinutes = now.getMinutes() + time
        const hour = now.getHours() + Math.floor(totalMinutes/60)
        console.log("Hora actual" ,hour)
        console.log("Minutos", minutes)

        const minutes = totalMinutes % 60;

        const formatedHour = hour % 12 || 12;
        const formatedMinutes = minutes.toString().padStart(2,"0")
        const ampm = hour >= 12 ? "pm" : "am"
        setTimeWait(`${formatedHour} : ${formatedMinutes} ${ampm}`)
    }

    useEffect(() => {
        calculateTimeOfWait(20,11)
    },[])

    const handleNavigationStatus = () => {
        navigation.navigate('Estatus')
    }

    return(
        <View style = {styles.container}>
            <Card style = {styles.cardStyle} onPress={handleNavigationStatus}>
                <View style = {styles.cardInsideContainer}>

                    <View>
                        <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>Pedido #1 </Text>
                    </View>

                    <View style = {styles.rightView}>
                        <Ioicons name = 'timer-outline' size = {30}></Ioicons>
                        <Text variant="labelLarge" style = {{fontFamily : 'BricolageGrotesque-SemiBold'}}>{timeWait}</Text>
                    </View>
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
        width : 350,
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