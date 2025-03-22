import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Header</Text>
      </View>
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text>Column 1</Text>
        </View>
        <View style={styles.box}>
          <Text>Column 2</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    gap: 10,
  },
  section: {
    height: 80,
    backgroundColor: "#d5d5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  boxes: { flexDirection: "row", gap: 10, height: 500 },
  box: {
    height: 500,
    flexGrow: 1,
    backgroundColor: "#d5d5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});
