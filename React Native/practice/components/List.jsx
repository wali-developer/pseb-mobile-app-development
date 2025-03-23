import { Button, FlatList, Pressable, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import { ThemeContext } from "../context/themeContext";

// APIs integrations -> GET, POST, PATCH, PUT, DELETE

const List = () => {
  const [data, setData] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((err) => console.log("Error getting list data: ", err));
  }, []);

  return (
    <View
      style={{
        marginTop: 70,
        paddingHorizontal: 20,
        backgroundColor: theme === "light" ? "#fff" : "#000",
      }}
    >
      {/* <ScrollView>
        {users.map((user, index) => (
          <ListItem key={index} user={user} />
        ))}
      </ScrollView> */}
      <Button title="Change theme" onPress={toggleTheme} />
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem user={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default List;

const ListItem = (props) => {
  const { user } = props;
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push(`/${user.name}`);
      }}
      style={{
        backgroundColor: "yellow",
        height: 100,
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        {user.name}
      </Text>
    </Pressable>
  );
};
