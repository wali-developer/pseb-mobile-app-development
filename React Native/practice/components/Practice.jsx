import {
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Practice = () => {
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <View>
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

      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
          }}
          width={100}
          height={100}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
          }}
          width={100}
          height={100}
        />
      </View>
      <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
