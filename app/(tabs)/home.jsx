
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import PetListByCategory from '../../components/PetListByCategory';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
export default function Home () {

    return (
        <View style ={{
          padding:20,marginTop:20
        }}>

          {/* HEader */}
          <Header>
          </Header>
          
          {/*Slider */}
        <Slider />
       {/*PetList + Category*/}
       <PetListByCategory/> 

          {/* Add New Pet Option */}
        <TouchableOpacity style={styles.addNewPetContainer}>
             <MaterialIcons name="pets" size={24} color={color.PRIMARY} />
             <Text style={{
            fontFamily:'outfit-medium',
            color:Colors.PRIMARY,
            fontSize:18
            
          }}>Add New Pet</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles=StyleSheet.create ({
  addNewPetContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    padding:20,
    backgroundColor:Colors.LIGHT_PRIMARY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:15,
    borderStyle:'dashed',
    justifyContent:'center'

  }
})
  
   
