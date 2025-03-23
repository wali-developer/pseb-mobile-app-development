import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../base/theme";
import { fonts } from "../../base/constants";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export const Task = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.flexRow}>
        <View>
          <Text style={styles.cat}>{item?.type}</Text>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity>
            <Feather name="edit" size={18} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="delete" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 5, marginVertical: 7 }}>
        <Feather name="calendar" size={15} color={colors.primary} />
        <Text style={styles.date}>{item?.createdAt}</Text>
      </View>
      <View style={styles.periority}>
        <Text style={styles.periorityText}>{item?.periority}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 11,
    padding: 12,
    marginBottom: 15,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cat: {
    color: colors.primary,
    fontSize: 12,
    fontFamily: fonts.poppinsMedium,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontFamily: fonts.poppinsSemibold,
    maxWidth: 250,
  },
  date: {
    fontSize: 12,
    color: "gray",
    fontFamily: fonts.poppinsMedium,
  },
  periority: {
    backgroundColor: colors.primary,
    height: 26,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    maxWidth: 80,
    marginLeft: "auto",
  },
  periorityText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.background,
    fontSize: 12,
  },
});
