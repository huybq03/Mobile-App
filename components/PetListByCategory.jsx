import { View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import {collection,getDocs, query,where} from 'firebase/firestore'; 
import { db } from '../config/FirebaseConfig';

export default function PetListByCategory() {
    
    const[petList,setPetList]=useState([]);
    const [loader,setLoader]=useState(false);
    useEffect(()=>{
            GetPetList('Dogs' )
},[])
    /**
     * 
     * 
        @param {*} category
     */
    const GetPetList=async (category)=>{
        setLoader(true)
        setPetList ([]);
        const q=query(collection(db,'Pets'),where('category','==',category?category:'Dogs'));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach(doc=> {
            // console.log(doc.data());
            setPetList( petList=>[...petList,doc.data()])
        })
        setLoader(false);
    }

    return (
        <View>
            <Category category={(value)=> GetPetList(value)}/>

                <FileList
                data={petList}
                style={{marginTop:10}}
                horizontal  ={true}
                refreshing={loader}
                onRefresh={ ()=>GetPetList('Dogs')}
                renderItem={({item,index})=>(
                    <PetListItem pet={item} />
                )}
                />
        </View>
    )
}
