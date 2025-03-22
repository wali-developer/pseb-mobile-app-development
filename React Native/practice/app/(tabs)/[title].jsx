import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ListDetailsPage = () => {
  const { title } = useLocalSearchParams();
  console.log({ title });
  return (
    <View style={{ marginTop: 50 }}>
      <View
        style={{
          backgroundColor: "yellow",
          height: 100,
          justifyContent: "center",
          marginBottom: 20,
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
    </View>
  );
};

export default ListDetailsPage;

const styles = StyleSheet.create({});
