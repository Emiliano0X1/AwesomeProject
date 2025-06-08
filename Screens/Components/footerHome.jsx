import { Linking, StyleSheet, View } from "react-native"
import { IconButton, Text } from "react-native-paper"
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5"

export default function FooterHome(){

    const openInstagram = async () => { //Esta tiene la misma funcion que la de abajo pero para instagram
        const urlWeb = 'https://www.instagram.com/cafetto.yh/';
        const urlApp = 'instagram://user?username=cafetto.yh';

        const supported = await Linking.canOpenURL(urlApp)

        if(supported){
            await Linking.openURL(urlApp)
        }

        else{
            await Linking.openURL(urlWeb)
        }

    }
    const openFacebook = async () => { //Estas funciones son para redirigir al usuario
        const urlWeb = 'https://www.facebook.com/CafettoYehualtepec';
        const urlApp = 'fb://page/CafettoYehualtepec';

        const supported = await Linking.canOpenURL(urlApp)
        if(supported){
            await Linking.openURL(urlApp)
        }
        else{
            await Linking.openURL(urlWeb)
        }
    }
    return (
        <View style = {styles.container}>

            <IconButton
                icon={() => <FontAwesome5Brands name = 'facebook' size = {40} brand></FontAwesome5Brands>}
                size = {40}
                onPress={() => openFacebook()}
            >
            </IconButton>

            <IconButton
                icon={() => <FontAwesome5Brands name = 'instagram' size = {40} brand></FontAwesome5Brands>}
                size={40}
                onPress={() => openInstagram()}
            >
            </IconButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    }
})