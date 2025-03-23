import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AppButton, TextField } from "../common";
import { axiosInstance } from "../../base/utils";
import { useRouter } from "expo-router";
import { routes } from "../../base/constants";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [periority, setPeriority] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const payload = {
        title,
        type,
        periority,
      };

      setisLoading(true);
      const { data } = await axiosInstance.post("todo/add", payload);
      if (data?.Success === true) {
        setTitle("");
        setType("");
        setPeriority("");
        router.push(routes.tasks);
      }
    } catch (error) {
      console.log("Error posting task data:", error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        label="Title"
        placeholder="Enter task title"
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <TextField
        label="Type"
        placeholder="Enter task type (e.g design)"
        value={type}
        onChangeText={(value) => setType(value)}
      />
      <TextField
        label="Periority"
        placeholder="Enter periority (e.g High, low, or medium)"
        value={periority}
        onChangeText={(value) => setPeriority(value)}
      />

      <AppButton
        title={"Add task"}
        style={{ marginTop: 20 }}
        onPress={handleSubmit}
        isLoading={isLoading}
        disabled={isLoading}
      />
    </View>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 15,
    marginTop: 40,
  },
});
