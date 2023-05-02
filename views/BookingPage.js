import { View ,Text, TouchableOpacity} from "react-native"
import { Icon } from 'react-native-elements'
import { SafeAreaView } from "react-native-safe-area-context"
import CustomTextInput from '../components/cTextInput';
import store from '../store';
import CustomModal from '../components/cModal'
import { useNavigation } from "@react-navigation/native";
import MapScreen from '../components/map';
import { TravelInput } from "../components/travelInput";

export const BookingPage=()=>{
    const nav=useNavigation()
    return(
        <View
        style={{
            backgroundColor:store.getState().themes.bgColor,
            borderWidth:1,      
            flex:1,  
            position:'relative'
        }}>
            
            <TravelInput/>
        </View>
    )
}