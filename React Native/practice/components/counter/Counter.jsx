import { Link } from "expo-router";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const { width, height } = useWindowDimensions();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
      }}
      resizeMode="cover"
      resizeMethod="resize"
      style={{ height }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 15,
          marginTop: 100,
        }}
      >
        <Minus onPress={decrement} />
        <Text style={{ fontSize: 22, fontWeight: "700", color: "white" }}>
          {count}
        </Text>
        <Plus onPress={increment} />
      </View>
      <Link href={"/list"} style={{ marginTop: 20, textAlign: "center" }}>
        <Text style={{ textDecorationLine: "underline", color: "blue" }}>
          Go to list
        </Text>
      </Link>
    </ImageBackground>
  );
};

const Plus = (props) => {
  return <Button title="Plus" onPress={props.onPress} color={"green"} />;
};
const Minus = (props) => {
  return <Button title="Minus" onPress={props.onPress} color={"red"} />;
};

export default Counter;
