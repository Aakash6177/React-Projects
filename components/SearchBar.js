import React from 'react'
import {View, Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Icon from 'react-native-ionicons'
import AntDesign from  'react-native-vector-icons/AntDesign'

export default function SearchBar(){


    return (
        <View style={{marginTop: 15, flexDirection: "row"}}>
               <GooglePlacesAutocomplete
      ref={ref}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
   
            
            

            renderLeftButton = {() => {
                <View>
                    <Icon name = 'location-sharp' size = {24}/>
                </View>
            }}

            renderRightButton = {() => {
                <View style={{
                    flexDirection: "row",

                }}>
                    <AntDesign name= "clockcircle" size={11}/>
                    <Text>Search</Text>
                </View>
            }}
            />
        </View>
        );
}