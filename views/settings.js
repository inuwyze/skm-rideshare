import { Image, View } from 'react-native';
import { Text ,Card,} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SqBlocks } from '../components/squareBlocks';
import store from '../store';

export const SettingsView=()=>{
    return (
        <SafeAreaView
        style={{
            padding:30,
            flex:1,
            backgroundColor:store.getState().themes.bgColor
        }}>
            <View 
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                marginBottom:20,
                }}>
                <Image
                style={{
                    borderRadius:20,
                    borderWidth:4,
                    borderColor:store.getState().themes.accent2
                }}
                source={require('../assets/icons/Dp.png')}/>
                <Text>
                    Lunhao
                </Text>
            </View>
            <View
            style={{
                display:'flex',
                flexDirection:'row',
               
                marginBottom:20,
            }}>
            <SqBlocks img={require('../assets/icons/wallet.png')}/>
            <SqBlocks img={require('../assets/icons/cab.png')}/>
            <SqBlocks img={require('../assets/icons/gear.png')}/>
            
            </View>
            <View
            style={{
                borderWidth:4,
                height:200,
                width:350,
                borderRadius:20,
                padding:20,
                borderColor:store.getState().themes.accent2,
                backgroundColor:store.getState().themes.accent3
            }}>
                <Text
                >
                    Ola
                </Text>
                <Text>
                    Ola
                </Text>
            </View>
            
        </SafeAreaView>
    )
}