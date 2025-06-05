import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function HeaderHome(){

    return(
    <View style = {styles.container}>
        <Text variant="titleSmall">CAFFETO</Text>
        
        <IconButton
            icon={() => <AntDesign name= 'user' size = {40}></AntDesign>}
            onPress={() => console.log("Profile")}
        >
        </IconButton>
    </View>

    )
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 20
    }
})