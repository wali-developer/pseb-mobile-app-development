import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const users = [
  {
    id: 1,
    name: "Wali Ullah",
  },
  {
    id: 2,
    name: "Usama",
  },
  {
    id: 3,
    name: "Sameer",
  },
  {
    id: 4,
    name: "Sami",
  },
  {
    id: 5,
    name: "Wali Ullah",
  },
  {
    id: 6,
    name: "Usama",
  },
  {
    id: 7,
    name: "Sameer",
  },
  {
    id: 8,
    name: "Sami",
  },
];

const List = () => {
  return (
    <View style={{ marginTop: 70, paddingHorizontal: 20 }}>
      {/* <ScrollView>
        {users.map((user, index) => (
          <ListItem key={index} user={user} />
        ))}
      </ScrollView> */}
      <FlatList
        data={users}
        renderItem={({ item }) => <ListItem user={item} />}
        keyExtractor={(item) => item.id}
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

const styles = StyleSheet.create({});
