import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../base/theme";
import { Feather } from "@expo/vector-icons";

export const Search = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="gray" />
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    backgroundColor: colors.placeholderBg,
    borderRadius: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
  input: {
    flex: 1,
  },
});
