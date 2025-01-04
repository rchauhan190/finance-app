import { StyleSheet, Text, View , FlatList,ListRenderItem,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from "@/constants/Colors";
import {IncomeType} from "@/types"
import {Dollaricon,WalletCardIcon,WalletAddMoneyIcon} from "@/constants/Icons.tsx"
import {Feather} from '@expo/vector-icons';

const IncomeBlock = ({incomeList}:{incomeList:IncomeType[]}) => {
    const renderItem:ListRenderItem<IncomeType>=({item})=>{
      let icon =<Dollaricon width={22} height={22} color={Colors.white}/>
      if( item.name == 'Freelancing'){
        icon = <WalletCardIcon width={22} height={22} color={Colors.white}/>
      }else if(item.name=="Interest"){
        icon = <WalletAddMoneyIcon width={22} height={22} color={Colors.white}/>
    
      }

      let amount = item.amount.split(".")
        return(
            <View style={{backgroundColor:Colors.blue,padding:20,borderRadius:20,marginRght:15,marginHorizontal:5,width:120,gap:15}}>

              <View style={{flexDirection:"row",justifyContent:"space-betwe"}}>
              <View style={{
                borderColor: "#666",
                borderWidth:1,
                borderRadius:50,
                padding: 5,
                alignSelf:"flex-start"
              }}>
              {icon}
              </View>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={Colors.white}/>
              </TouchableOpacity>


                </View>
                <Text style={{color:Colors.white}}>{item.name}</Text>
                <Text style={{ color: Colors.white, fontSize:18,fontWeight: "600"}}>
                ${amount[0]}.
                <Text style={{fontSize:12, fontWeight: '400'}}>{amount[1]}</Text>
                </Text>
            </View>
        )

    }
  return (
    <View>
      <Text style={{color:Colors.white, fontSize:16,marginBottom:20}}>My <Text style={{fontWeight:700}}>Income</Text></Text>
      <FlatList data={incomeList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default IncomeBlock

const styles = StyleSheet.create({})