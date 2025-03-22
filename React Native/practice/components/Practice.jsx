import {
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";

// Component life cycles methods -> Component Mount, Component update, Compnoent Unmount

const Practice = () => {
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);
  // const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log("Component Mounted...");
    return () => {
      console.log("Component Un-mounted...");
    };
  }, [name]); // Dependency Array

  const handleRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to React Native</Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
          }}
          width={300}
          height={200}
        />
        <TouchableOpacity
          onPress={() => {
            //   alert("Pressed..");
          }}
        >
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              backgroundColor: "blue",
              color: "white",
              marginTop: 20,
              width: 100,
            }}
          >
            Press me
          </Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={(value) => {
            setName(value);
          }}
          style={{ marginTop: 20, borderWidth: 0.5, paddingHorizontal: 20 }}
        />

        <View style={styles.imagesWrapper}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            }}
            width={100}
            height={100}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            }}
            width={100}
            height={100}
            style={[styles.image, { alignSelf: "flex-end" }]}
          />
        </View>
        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        <View style={styles.box}>
          <View style={styles.innerBox} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: StatusBar.currentHeight },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: Platform.OS === "ios" ? "red" : "blue",
    textAlign: "left",
    borderWidth: 1,
    borderColor: "dodgerblue",
    paddingHorizontal: 15,
    paddingVertical: 7,
    // textDecorationLine: "underline",
    textShadowColor: "yellow",
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 },
  },
  imagesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 15,
    marginTop: 20,
  },
  image: {
    // flexGrow: 1,
  },
  box: {
    width: "100%",
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "lightblue",
    position: "relative",
  },
  innerBox: {
    width: 140,
    height: 140,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: "-50%" },
      { translateY: "-50%" },
      // { rotateX: "60deg" },
      // { rotateY: "60deg" },
      { rotate: "60deg" },
      // { scaleY: 1 },
      // { scaleX: 1.6 },
    ],
  },
});
