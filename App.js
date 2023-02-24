import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SettingsView } from './views/settings';

import { SafeAreaView } from 'react-native-safe-area-context';


const Tab=createMaterialTopTabNavigator()


const ros=[require('./assets/icons/home_active.png'),require('./assets/icons/acc_active.png'),require('./assets/icons/home_inactive.png'),require('./assets/icons/acc_inactive.png')]


export default function App() {
  return (
    <NavigationContainer
    >
    <Tab.Navigator tabBarPosition='bottom'
    
    tabBar={props => <MyTabBar {...props}/>} 
    >
      
    <Tab.Screen name="home" component={Home}></Tab.Screen>
    <Tab.Screen name="setttings" component={SettingsView}></Tab.Screen>
      
    
    </Tab.Navigator>
    </NavigationContainer>
  );
}
import { Animated, TouchableOpacity } from 'react-native';
import store from './store';

 
function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ 
      flexDirection: 'row' ,
      justifyContent:'center',
      paddingBottom:25,
      backgroundColor:store.getState().themes.bgColor
      }}>
        
      <View
      style={{
        borderWidth:2,
        width:70,
        justifyContent:'space-between',
        borderColor:store.getState().themes.accent1,
        flexDirection:'row',
        borderRadius:50
      }}>
      
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ 
              justifyContent:'center',
              margin:6,
              
              
          }}
          >
            <Image 
            source={isFocused?ros[index]:ros[index+2]} />
           
          </TouchableOpacity> 
        );
      })}
      </View>
    </View>
  );
}

// ...

  

const Home=()=>{
  return(
    <SafeAreaView
    style={{
      flex:1,
      backgroundColor:store.getState().themes.bgColor
    }}>
       
      <Text>ola2
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
