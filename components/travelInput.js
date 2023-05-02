import { StyleSheet } from "react-native"
import { View } from "react-native"
import CustomTextInput from "./cTextInput"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import store from "../store"
import { useNavigation } from "@react-navigation/native"

export const TravelInput=()=>{
    const nav=useNavigation()
    return(
        <View
        style={style.container}>
            
            <View
            style={style.Nav}>
                <TouchableOpacity
                onPress={()=>nav.goBack()}>
                <Icon
                name='leftcircle'
                type='antdesign'
                size={30}
                color={store.getState().themes.accent2}
                />
                </TouchableOpacity>
            </View>
            
            <View
            style={style.Inputcontainer}>
                <CustomTextInput
                value={'ola'}
                placeholder='amigo'
                />
                <CustomTextInput
                value={'ola'}
                placeholder='amigo'
                />
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:2,
        height:130,
        backgroundColor:store.getState().themes.bgColor,

        top:10,
        left:0,
        right:0,
        margin:10,

        display:'flex',
        flexDirection:'row',
        
        padding:10,
        borderWidth:6,
        borderRadius:20,
        borderColor:store.getState().themes.accent1Tr
    },

    Inputcontainer:{
        flex:6,
        marginLeft:8,
        
    },

    Nav:{
        flex:1,
        paddingTop:12,
    }
})