import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Practice from "./components/Practice";
import List from "./components/List";
import Counter from "./components/counter/Counter";
import Sections from "./components/Sections";

export default function App(props) {
  const data = "Welcome to React Native";
  return (
    <View>
      {/* <Parent data={data} /> */}
      {/* <Counter /> */}
      {/* <Practice /> */}
      {/* <List /> */}
      <Sections />
      <StatusBar style="auto" backgroundColor="lightblue" animated={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
