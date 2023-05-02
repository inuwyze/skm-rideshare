import { Image, StyleSheet, View } from 'react-native';
import { Text ,Card,} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SqBlocks } from '../components/squareBlocks';
import store from '../store';
import { DrawerButton } from '../components/drawerButton';

export const SettingsView=()=>{
    return (
        <SafeAreaView
        style={{
            padding:30,
            paddingTop:0,
            flex:1,
            backgroundColor:store.getState().themes.bgColor
        }}>
            <DrawerButton />
            <View 
            style={{
                marginTop:100,
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                marginBottom:20,
                }}>
                <Image
                style={{
                    borderRadius:10,
                    borderWidth:2,
                    height:80,
                    width:80,
                    borderColor:store.getState().themes.accent2
                }}
                source={require('../assets/icons/Dp.png')}/>
                <Text
                style={style.name}>
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
           
            }}>
                <Text
                style={style.settingsText}
                >
                    Ola
                </Text>
                <Text
                style={style.settingsText}>
                    Ola
                </Text>
            </View>
            
        </SafeAreaView>
    )
}

const style=StyleSheet.create({
    name:{
        fontSize:20,
        fontWeight:'800',
        marginLeft:30,
    },
    settingsText:{
        fontSize:25,
        fontFamily:'Roboto',
        fontWeight:'800',
        
    }
})