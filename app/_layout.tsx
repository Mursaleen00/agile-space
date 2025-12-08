import "@/styles/global.css";

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

SplashScreen.setOptions({
  duration: 5000,
  fade: true,
});

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(splash)/index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="home" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
