import react from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function HeaderTabs(){
    return (
        <View style = {{flexDirection:"row", alignSelf: "center"}}>
            <HeaderButton text = "Delivery" btnColor = "black" textColor = "white"/>
            <HeaderButton text = "Pick Up" btnColor = "white" textColor = "black"/>
            
        </View>
    );
}

const HeaderButton = (porps) => (
    <View>
        <TouchableOpacity style = {{
            backgroundColor: porps.btnColor,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}>

        <Text style={{ 
            color:porps.textColor,
            fontSize: 15,
            fontWeight: '900' 
            }}>{porps.text}</Text>
            
        </TouchableOpacity>
        
    </View>

)
