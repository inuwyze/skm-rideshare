import { StyleSheet } from "react-native"
import { View } from "react-native"
import CustomTextInput from "./cTextInput"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import store from "../store"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { Text } from "react-native"
import { Pressable } from "react-native"


export const PickupInput=()=>{
    const nav=useNavigation()
    
    return(
        <View
        style={style.container}>
            
            
            <TouchableOpacity
                style={style.Icon}
                onPress={() => nav.dispatch(DrawerActions.toggleDrawer())}
                >
                <Icon
                name='menu'
                type='entypo'
                size={30}
                
                color={store.getState().themes.accent2}
                />
            </TouchableOpacity>
            
            <View
            
            style={style.Inputcontainer}>
                {/* <CustomTextInput
                value={'ola'}
                
                placeholder='amigo'
                /> */}
                
                <Pressable
                onPress={()=>nav.navigate('LocationModal')}
                style={{
                    backgroundColor: 'white',
                    opacity:50,
                    borderRadius: 10,
                    paddingVertical: 6,
                    paddingHorizontal: 8,
                    color: store.getState().themes.accent2,
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    height:45,
                    elevation:15,
                    borderColor:store.getState().themes.accent2+'95',
                }}>
                    <Icon
                    name='dot-single'
                    type='entypo'
                    color={'green'}
                    size={34}
                    
                    />
                    <Text
                    style={{
                        fontSize: 15,
                        fontWeight:'500',
                    }}>
                        Current Location
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        position:'absolute',
        zIndex:2,
        height:50,
        backgroundColor:'transparent',

        top:35,
        left:0,
        right:0,
        margin:10,

        flexDirection:'row',

    },


    Icon:{
        backgroundColor:'white',
        borderRadius:10,

        borderColor:store.getState().themes.accent2+'90',
        elevation:15,

        height:37,
        width:45,

        justifyContent:'center',
        marginLeft:15,
        
    },

    Inputcontainer:{
        flex:6,
        marginLeft:15,
        
    },

    Nav:{
        flex:1,
        borderWidth:1,
    }
})