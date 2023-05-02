import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList,StatusBar, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../components/cTextInput";
import { useEffect } from "react";
import { useRef } from "react";

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
const SearchItem = ({item, onPress, }) => (
  <Pressable onPress={onPress} style={[styles.item, ]}>
    
    <Text style={[styles.title,]}>{item.description}</Text>
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
  const handleSearch = async () => {
    setSearchResults([])
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${pickupLocation}&components=country:IN&components=administrative_area:SK&key=AIzaSyA_yoHJ6hSP8JZozCY71JeJE2Q_KAladyE`
      );
      const data = await response.json();
      const { predictions } = data;
      console.log(predictions)

      // Filter results for Sikkim
      const sikkimResults = predictions.filter((result) =>
        result.description.toLowerCase().includes('sikkim')
      );
      console.log(sikkimResults)
      setSearchResults(sikkimResults);
    } catch (error) {
      console.log('Autocomplete Error:', error);
      // Handle the error
    }
  };
  const renderSearchItem = ({item}) => {
    
    
  
    return (
      <SearchItem
        item={item}
        onPress={() => setSelectedId(item.id)}
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
        <SafeAreaView style={{ flex: 1, }}>
          
          <View
          style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            // borderWidth:1,
            paddingHorizontal:10
          }}>
            <View
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
          </View>
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
            // borderWidth:2,
            backgroundColor:'white'
          }}>
            
             
          <CustomTextInput
                ref={inputRef}
                value={pickupLocation}
                dotColor='green'
                onChangeText={txt=>{setPickupLocation(txt);handleSearch()}}
                placeholder='enter pickup location'
                setOnpickup={()=>setOnpickup(true)}
                clearInput={clearPickup}
                />
          <CustomTextInput
                
                value={dropLocation}
                dotColor='red'
                setOnpickup={()=>setOnpickup(false)}
                onChangeText={txt=>setDropLocation(txt)}
                placeholder='enter drop location'
                clearInput={clearDrop}
                />

          
          <View>
          
          
          </View>
          </View>
          <View>
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
          <Text style={styles.favorites}>no results</Text>
          {/* <FlatList
            
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
          <Button onPress={() => nav.goBack()} title="setLocation" /> */}
            </View>}
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // display:'flex',
    flexDirection:'row',
    alignItems:'center',
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