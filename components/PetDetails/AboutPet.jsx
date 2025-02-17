import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import Colors from '../../app/constants/Colors'


export default function AboutPet({pet}) {
    const[readMore,setReadMore]=useState(false);
    return (
        <View style={{
            padding:20,

        }}>
          <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}> About{pet?.name} </Text>
          <Text numberOfLines={readMore?3:20} style ={{
            fontFamily:'outfit',
            fontSize:14,
            // color:Colors.GRAY
          }}> {pet.about} </Text>
         {  readMore && 
         <Pressable onPress={() => setReadMore(false)}>
            <Text style={{
                fontFamily: 'outfit-medium',
                 fontSize:14,
                color:Colors.SECONDARY
     }}> Read More </Text>
        </Pressable> })
  </View>
)
}

  
 
  

