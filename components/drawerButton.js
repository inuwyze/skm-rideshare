import { TouchableOpacity,Text } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
export const DrawerButton=()=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        style={{
            width:50,
            marginLeft:20,
            borderWidth:2,
            padding:11
        }}
         onPress={() => navigation.openDrawer()} >
            <Icon
            name='navicon'
            type='evilicon'
            color='#517fa4'
            />
            </TouchableOpacity>
    )
}