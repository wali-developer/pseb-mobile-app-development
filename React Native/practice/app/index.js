import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 17, fontWeight: 600 }}>
        Welcome to Mobile App Development!
      </Text>

      <Link href={"/counter"} style={{ marginTop: 10 }}>
        <Text style={{ textDecorationLine: "underline", color: "blue" }}>
          Get started
        </Text>
      </Link>
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
