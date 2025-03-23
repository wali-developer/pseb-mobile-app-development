import { Link, useRouter } from "expo-router";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/themeContext";

export default function HomePage() {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log({ theme });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#fff" : "#000" },
      ]}
    >
      <Text
        style={{
          fontSize: 17,
          fontWeight: 600,
          marginBottom: 20,
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Welcome to Mobile App Development!
      </Text>

      <Button title="Change theme" onPress={toggleTheme} />

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
    alignItems: "center",
    justifyContent: "center",
  },
});
