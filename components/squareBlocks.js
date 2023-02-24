import { Image, Text } from "react-native"
import { Card } from "react-native-elements"
import store from "../store"

export const SqBlocks=props=>{
    props
    return(
       
        <Card
        containerStyle={{
            margin:0,
            marginRight:20,
            width:80,
            height:80,
            borderRadius:20,
            borderWidth:4,
            backgroundColor:store.getState().themes.accent3,
            borderColor:store.getState().themes.accent2,
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Image source={props.img}/>
        </Card>
           
    )
}