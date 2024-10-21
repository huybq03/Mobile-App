import React from "react";
import { View,Text } from "react-native";
import Colors from "../../app/constants/Colors";
import PetSubInfoCard from "./PetSubInfoCard";

export default function PetSubInfo (){
    return(
        <View style={{
            paddingHorizontal:20
        }}>
            <View style={{
                display:'flex',
                flexDirection:'row'
            }}>
              <PetSubInfoCard icon={require('./../../assets/Images/calendar.png') }
                  title={'Age'}
                  value={pet?.age+"Years"}
              />
              <PetSubInfoCard
              icon={require('./../../assets/Images/bone.png')}
              title={'Breed'}
              value={pet?.breed}
              />
                </View>
                
            <View style={{
                display:'flex',
                flexDirection:'row'
            }}>
              <PetSubInfoCard icon={require('./../../assets/Images/sex.png') }
                  title={'Sex'}
                  value={pet?.sex}
              />
             {/*Đoạn này thêm vào firebase 2:15:03 */}
              <PetSubInfoCard
              icon={require('./../../assets/Images/weight.png')}
              title={'Breed'}
              value={pet?.weight}
              />
                </View>
            </View>
    
    )
}

