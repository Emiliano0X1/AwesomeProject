import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { ImagesSlider } from "../Data/imagesSlide";
import SliderItem from "./sliderItem";

const Slider = ({data}) => {
    return(
        <View>
            <FlatList data={data} 
                renderItem={({item,index}) => 
                <SliderItem item={item} index={index}></SliderItem>}
                horizontal
                showsHorizontalScrollIndicator = {false}
                pagingEnabled
                >
            
            </FlatList>
        </View>
    )
}

export default Slider;