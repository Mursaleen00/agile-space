import Providers from "@/Providers";
import "@/styles/global.css";

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.setOptions({ duration: 1000, fade: true });

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaProvider>
        <Providers>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(splash)/index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="home" />
          </Stack>
          <StatusBar style="auto" />
        </Providers>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
