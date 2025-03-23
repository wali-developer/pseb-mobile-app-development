import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AddTaskForm from "../components/tasks/AddTaskForm";
import { colors } from "../base/theme";
import { fonts } from "../base/constants";

const AddTaskPage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.back} onPress={() => router.back()}>
            <Ionicons name="arrow-back-sharp" size={22} color="black" />
          </TouchableOpacity>
          <Text style={styles.heading}>Add Task</Text>
        </View>
        <AddTaskForm />
      </View>
    </View>
  );
};

export default AddTaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: 8,
    justifyContent: "space-between",
    padding: 20,
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.poppinsSemibold,
    color: colors.text,
    textAlign: "center",
    flex: 1,
    marginRight: 35,
  },
  bottomText: {
    fontSize: 12,
    fontFamily: fonts.poppinsMedium,
    textAlign: "center",
    marginBottom: 50,
  },
  signup: { color: colors.primary, fontFamily: fonts.poppinsSemiBold },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    width: 39,
    height: 39,
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    borderRadius: 39,
    justifyContent: "center",
    alignItems: "center",
  },
});
