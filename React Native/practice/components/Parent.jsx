import { useState } from "react";
import { Button, Text } from "react-native";

const Parent = (props) => {
  const { data } = props;
  const [state, setState] = useState("Hello World");

  const handleChange = () => {
    setState(state == "Hello World" ? "Hello React Native" : "Hello World");
  };

  return (
    <>
      <Text>{data}</Text>
      <Text>{state}</Text>
      <Button title="Press to change the state" onPress={handleChange} />
    </>
  );
};

export default Parent;
