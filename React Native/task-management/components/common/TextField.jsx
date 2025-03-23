import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { fonts } from "../../base/constants";
import { colors } from "../../base/theme";

export const TextField = ({ label, placeholder, ...rest }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
  },
  input: {
    width: "100%",
    height: 44,
    backgroundColor: colors.placeholderBg,
    paddingHorizontal: 15,
    marginTop: 4,
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
  },
});
