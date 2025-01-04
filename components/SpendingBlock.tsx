import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from "@/constants/Colors";
import { SpendingType } from "@/types";
import {Dollaricon,ShoopingCartIcon,SportifyIcon,AmazonIcon,AirbnbIcon,NetflixIcon} from "@/constants/Icons"

const SpendingBlock = ({spendingList}:{spendingList:SpendingType[]}) => {
    let icon = <Dollaricon width={22} height={22} color={"white"}/>
    
  return (
    <View style={{marginVertical:20,alignItems:"flex-start"}}>
      <Text style={{color: Colors.white,fontSize: 16,marginBottom:20 }}>July <Text style={{fontWeight: '700'}}>Spending</Text>
</Text>
{spendingList.map((item)=>{
    if( item.name == 'AirBnB Rent'){
            icon = <AirbnbIcon width={22} height={22} color={Colors.white}/>
          }else if(item.name=="Netflix"){
            icon = <NetflixIcon width={22} height={22} color={Colors.white}/>
        
          }else if(item.name=="Netflix"){
            icon = <NetflixIcon width={22} height={22} color={Colors.white}/>
        
          }else if(item.name=="Spotify"){
            icon = <SportifyIcon width={22} height={22} color={Colors.white}/>
        
          }else if(item.name=="Amazon"){
            icon = <AmazonIcon width={22} height={22} color={Colors.white}/>
        
          }else if(item.name=="Spotify"){
            icon = <SportifyIcon width={22} height={22} color={Colors.white}/>
        
          }else if(item.name=="Online Shopping"){
            icon = <ShoopingCartIcon width={22} height={22} color={Colors.white}/>
        
          }
    return(
        <View  style={{flexDirection:"row", alignItems:"center" ,marginVertical:10}} key={item.id}>
            <View style={{backgroundColor:Colors.white,padding:15,borderRadius:50,marginRight:10}}>
               
               {icon}
            </View>
            <View style={{ flex:1,flexDirection:"row",justifyContent:"space-between"}}>

            <View style={{gap:5}}>

            <Text style={{color:Colors.white}}>{item.name}</Text>
            <Text style={{color:Colors.white,fontSize:16,fontWeight:"600"}}>{item.date}</Text>
             </View>
            <Text style={{color:Colors.white}}>{item.amount}</Text>
            </View>
            </View>

    )
})}
    </View>
  )
}

export default SpendingBlock

const styles = StyleSheet.create({})