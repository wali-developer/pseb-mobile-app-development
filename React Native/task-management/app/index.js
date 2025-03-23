import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Search } from "../components/tasks/Search";
import { Tabs } from "../components/tasks/Tabs";
import { Task } from "../components/tasks";
import { useEffect, useState } from "react";
import { axiosInstance } from "../base/utils";
import { colors } from "../base/theme";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { routes } from "../base/constants";

export default function HomePage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("todo");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("/todo/list", {
        params: { status: selected },
      })
      .then((response) => setData(response.data.body))
      .catch((err) => console.log("Erorr getting tasks: ", err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [selected]);

  return (
    <View style={styles.container}>
      <Search />
      <Tabs selected={selected} setSelected={setSelected} />

      {isLoading ? (
        <ActivityIndicator size={"large"} color={colors.primary} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Task item={item} />}
          keyExtractor={(item) => item._id}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push(routes.addTask)}
      >
        <AntDesign name="plus" size={24} color={colors.background} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  addButton: {
    width: 53,
    height: 53,
    borderRadius: 53,
    backgroundColor: colors.primary,
    position: "absolute",
    bottom: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
