import { View, Text, FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import {collection,getDocs} from 'firebase/firestore' 
import { db } from '../config/FirebaseConfig';
import Colors from '../app/constants/Colors';

export default function Category({category}) {

    const [categoryList,setCategortList]=useState([]);
    const [selectedCategory,setSelectedategory]=useState('Dogs');
    useEffect(()=>{
        GetCategories();
    },[])
    
    const GetCategories=async( )=> {
        setCategortList([]);
        const snapshot=await getDocs(collection(db,'Category'));
        snapshot.forEach((doc) => {
         setCategoryList(categoryList => [...categoryList, doc.data()]);
        })

    }
// Container
    return (
        <View style={{
            marginTop:20,

        }}>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
            }}> Category </Text>

            <FlatList 
            data={categoryList}
            renderItem={({item,index}) =>(
                <TouchableOpacity 
                     onPress={() =>{
                         setSelectedategory(item.name);
                        category=(item.name)

                        }}
                style={{
                    flex:1
                }}>
                    <View style ={[styles.conatiner,
                    selectedCategory==item.name && styles.selectedCategoryContainer]}>
                        <Image source={{uri:item?.imageUrl}}
                        style ={{
                            with:40,
                            height:40
                        }}
                        />
                    </View>
                    <Text style ={{
                        textAlign:'center',
                        fontFamily:'outfit'
                    }}>{item?.name}</Text>
                </TouchableOpacity>
            )}
            />

        </View>
    )
}

const styles =StyleSheet.create({
    conatiner :{
        backgroundColor:Colors.LIGHT_PRIMARY,
        padding:15,
        alignItems:'center',
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.PRIMARY,
        margin:5
    },
    selectedCategoryContainer:{
        backgroundColor:Colors.SECONDARY,
        borderColor:Colors.SECONDARY

    }
})