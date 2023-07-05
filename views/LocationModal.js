import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, Pressable, StyleSheet } from "react-native";

import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect } from "react";
import { useRef } from "react";
import useDebounce from "../util/debounce";
import LocationSearch from "../components/locationSearch";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, }) => (
  <Pressable onPress={onPress} style={[styles.item, ]}>
    <Icon
    name="heart"
    type='antdesign'
    color={'grey'}
    size={14}/>
    <Text style={[styles.title,]}>{item.title}</Text>
  </Pressable>
);
const SearchItem = ({item, onPress }) => (
  <Pressable onPress={onPress} style={[styles.item, ]}>
    
    <Text style={[styles.mainTxt,]}>{item.structured_formatting.main_text}</Text>
    <Text style={[styles.scndryTxt]}>{item.structured_formatting.secondary_text}</Text>
  </Pressable>
);


export const LocationModal=()=>{
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [onPickup,setOnpickup]=useState(true)

  const nav=useNavigation()
  const [pickupLocation,setPickupLocation]=useState(null)
  const clearPickup=()=>{
    setPickupLocation(null)
  }
  const [dropLocation,setDropLocation]=useState(null)
  const clearDrop=()=>{
    setDropLocation(null)
  }
  const [selectedId, setSelectedId] = useState();

  const [searchResults, setSearchResults] = useState([]);
  
  
  const renderSearchItem = ({item}) => {
    return (
      <SearchItem
        key={item.place_id}
        item={item}
        onPress={() => {setSelectedId(item.place_id);setPickupLocation(item.structured_formatting.main_text)}}
      />
    );
  };
  const renderItem = ({item}) => {
    
    
  
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  
    return (
        <SafeAreaView style={{ flex: 1  }}>
          
          <View
          style={{
            
            display:'flex',
            
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:10
          }}>
            <Pressable
            onPress={()=>{nav.goBack()}}
            style={{
              elevation:10,      
              borderRadius:10,
            }}>
            <Icon
            name='arrow-left'
            type='feather'
            style={{
              padding:10,
              borderRadius:10,
              backgroundColor:'white'
              }}
          size={24}
          />
          </Pressable>
          <Text
          style={{
            marginLeft:30,
            fontSize:20,
            fontWeight:'600',
          }}>
            {onPickup?'Pick-up':'Destination'}
          </Text>
          </View>
          <View
          style={{
            margin:10,
            borderRadius:10,
            elevation:10,
            backgroundColor:'white'
          }}>
            
             
          <LocationSearch
                ref={inputRef}
                value={pickupLocation}
                dotColor='green'
                onChangeText={txt=>{setPickupLocation(txt)}}
                placeholder='enter pickup location'
                setOnpickup={()=>setOnpickup(true)}
                setSearchResults={setSearchResults}
                clearInput={clearPickup}
                />
        

          
          <View>
          
          
          </View>
          </View>
          <View
          style={{flex:1}}>
          {searchResults.length?
          <View>
            <FlatList
            
            style={styles.favoritesContainer}
            data={searchResults}
            renderItem={renderSearchItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            />
          </View>:
          <View>
          <Text style={styles.favorites}>favorites</Text>
          <FlatList
            
            style={styles.favoritesContainer}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            />
          
          <Text style={styles.favorites}>Recent</Text>
          <FlatList
            
            style={styles.favoritesContainer}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            />
          <View
          style={{
            flex:1
          }}>

          </View>
            </View>}
          </View>
          <Pressable 
          style={{
            padding:10,
            backgroundColor:'lightblue',
            display:'flex',
            alignItems:'center'
          }}
          onPress={() => nav.goBack()}>
          <Text
          style={{
            fontSize:16,
            fontWeight:'600'
            }}>
            Set Location
          </Text>
          </Pressable>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    display:'flex',

    flexDirection:'column',
    // alignItems:'center',
    padding: 14,
    // marginVertical: 8,
    // marginHorizontal: 16,
    borderBottomWidth:1,
    borderColor:'lightgrey'
  },
  title: {
    fontSize: 18,
    marginLeft:20,
  },
  mainTxt: {
    fontSize: 18,
    marginLeft:20,
  },
  scndryTxt: {
    color:'grey',
    fontSize: 12,
    marginLeft:20,
  },
  input:{
    borderWidth:2,
    bborderRadius:10,
    height:50,
  },
  favorites:{
    marginTop:10,
    marginLeft:40,
    fontSize:20,
    fontWeight:'600'
  },
  favoritesContainer:{
    flexGrow: 0,
    flexShrink:0,
    borderRadius:10,
    elevation:10,
    backgroundColor:'white',
    margin:14,

  }
});