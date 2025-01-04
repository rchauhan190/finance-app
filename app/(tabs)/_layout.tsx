import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: "absolute",
            bottom: 40,
            justifyContent: "center",
            alignSelf: "center",
            height: 63,
            marginHorizontal: 100,

            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },

          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <SimpleLineIcons name="pie-chart" size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Transactions"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <AntDesign name="swap" size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <FontAwesome name="user-o" size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar/>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});