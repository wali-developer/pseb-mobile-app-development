import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../../base/theme";
import { fonts } from "../../base/constants";

export const AppButton = ({ title, style, isLoading, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator size={"small"} color={colors.background} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 44,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    color: colors.background,
  },
});
