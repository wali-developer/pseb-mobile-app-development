import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "../../base/constants";
import { colors } from "../../base/theme";

export const Tabs = ({ setSelected, selected }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Your Tasks</Text>
      <View style={styles.tabsWrapper}>
        <TouchableOpacity
          style={
            selected === "InProgress" ? styles.buttonActive : styles.button
          }
          onPress={() => {
            setSelected("InProgress");
          }}
        >
          <Text
            style={
              selected === "InProgress"
                ? styles.buttonTextActive
                : styles.buttonText
            }
          >
            In Progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selected === "todo" ? styles.buttonActive : styles.button}
          onPress={() => {
            setSelected("todo");
          }}
        >
          <Text
            style={
              selected === "todo" ? styles.buttonTextActive : styles.buttonText
            }
          >
            Todo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selected === "completed" ? styles.buttonActive : styles.button}
          onPress={() => {
            setSelected("completed");
          }}
        >
          <Text
            style={
              selected === "completed"
                ? styles.buttonTextActive
                : styles.buttonText
            }
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.poppinsSemibold,
  },
  tabsWrapper: {
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },
  button: {
    flexGrow: 1,
    height: 36,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: "lightgray",

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "gray",
    fontSize: 12,
    fontFamily: fonts.poppinsMedium,
  },
  buttonActive: {
    flexGrow: 1,
    height: 36,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextActive: {
    color: colors.background,
    fontSize: 12,
    fontFamily: fonts.poppinsMedium,
  },
});
