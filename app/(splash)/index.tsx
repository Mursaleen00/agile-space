import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, ImageBackground, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.token);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) router.replace("/home");
      else router.replace("/(auth)/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, router]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ImageBackground
        source={require("@/assets/images/logo-home.jpg")}
        className="w-full h-full max-w-[400px] max-h-[400px] items-center justify-center"
        resizeMode="contain"
      >
        <View className="flex flex-col items-center gap-y-6 mt-28">
          <Image
            source={require("@/assets/images/logo.png")}
            className="max-w-[244px] max-h-[60px]"
          />
          <Image
            source={require("@/assets/images/loader-icons.png")}
            className="max-w-[228px] max-h-[76px]"
          />
        </View>
      </ImageBackground>
    </View>
  );
}
