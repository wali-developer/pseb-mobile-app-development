import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color }) => (
            <AntDesign name="retweet" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list-ul" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sections"
        options={{
          title: "Sections",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="vector-intersection"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="[title]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
