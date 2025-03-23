import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StatusBar as AppStatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  console.log({ loaded });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <AppStatusBar backgroundColor="#ffffff" animated />
      <View style={styles.container}>
        <Slot />
      </View>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: StatusBar.currentHeight,
  },
});
