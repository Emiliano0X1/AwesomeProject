import { Text } from "react-native-paper";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const {width} = Dimensions.get('screen')
 
const SliderItem = ({item,index}) => {
    return(
        <View style = {styles.itemContainer}>
            <Image source={item.image} style = {styles.imagesStyle}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer : {
        marginBottom : 15,
        justifyContent: 'center',
        alignItems : 'center',
        gap	: 20,
        width : width
    },

    imagesStyle :{
        width : 360,
        height: 440,
        borderRadius : 20
    },

    backgroundStyle : {
        position : 'absolute',
        height: 400,
        width : 360,
        padding : 20,
        borderRadius : 20
    }
})

export default SliderItem;
