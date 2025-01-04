import { StyleSheet, Text, View, FlatList, ListRenderItem,TouchableOpacity} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import {Feather} from '@expo/vector-icons';

export default function ExpenseBlock({
  expenseList
}: {
  expenseList: ExpenseType[];
}) {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item,index }) => {
    if(index==0){
        return(
            <TouchableOpacity onPress={()=>{}}>
                <View
                style={{
                    flex: 1,
                    borderWidth:2,
                    borderColor:"#666",
                    borderStyle:"dashed",
                    borderRadius:10,
                    marginRight:20,
                    padding: 20,
                    justifyContent:'center', 
                    alignItems:"center"
                }}
                >
                <Feather name="plus" size={22} color={"#ccc"} />
                </View>

            </TouchableOpacity>
        )
    }
    let amount = item.amount.split(".")
    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name == "Food"
                ? Colors.blue
                : item.name == "Saving"
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockTxt,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockTxt2,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          ${amount[0]}.
          <Text style={styles.expenseBlockTxtSpan}>{amount[1]}</Text>
        </Text>
        <View style={styles.expenseBlock3View}>
          <Text
            style={[
              { color: "white" },
              {
                color:
                  item.name == "Food"
                    ? Colors.black
                    : item.name == "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };
  const staticItem = [{ name: "Add item" }]
  return (
    <View style={{paddingVertical:20}}>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  expenseBlockTxt: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 600,
  },
  expenseBlockTxtSpan: {
    fontWeight: "400",
    fontSize: 14,
  },

  expenseBlock3View: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
})
