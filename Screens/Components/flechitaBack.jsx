import { IconButton } from "react-native-paper";
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ArrowBack({navigation}){

     const handleNavigation = () => {
        navigation.goBack();
     }

    return(
        <View style = {styles.container}>
            <IconButton
                icon={() => <Ionicons name = 'arrow-back-circle-outline' size = {35} style = {{color : 'black'}}></Ionicons>}
                size={35}
                onPress={handleNavigation}
            >
            </IconButton>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'flex-start',
        justifyContent : 'flex-start'
    }
})