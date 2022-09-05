import React from 'react'
import {View, Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Icon from 'react-native-ionicons'
import AntDesign from  'react-native-vector-icons/AntDesign'

export default function SearchBar(){


    return (
        <View style={{marginTop: 15, flexDirection: "row"}}>
            <GooglePlacesAutocomplete value = "Search" styles={{    
                textInput: {
                
                    backgroundColor:"#eee",
                    borderRadius: 10,
                    fontWeight: '700',
                    marginTop: 7,
                },
                textInputContainer: {
                    backgroundColor:"#eee",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: 'center',
                    marginRight: 10,
                },
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