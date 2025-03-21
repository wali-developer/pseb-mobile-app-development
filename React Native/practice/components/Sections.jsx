import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Sections = () => {
  return (
    <View style={{ marginTop: 60, paddingHorizontal: 10 }}>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => <ListItem title={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 25, fontWeight: 700 }}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default Sections;

const ListItem = (props) => {
  const { title } = props;
  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: 100,
        justifyContent: "center",
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
