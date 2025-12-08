import { Input } from "@/components/ui/input";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  // const router = useRouter();
  // const login = useAuthStore((state) => state.login);

  // const handleLogin = () => {
  //   login();
  //   router.replace("/home");
  // };

  return (
    <SafeAreaView className="p-6 flex flex-col gap-y-6">
      <Image
        source={require("@/assets/images/logo.png")}
        className="w-[111px] h-[27px]"
      />

      <Text className="text-text font-semibold text-3xl">Log In</Text>
      <View className="w-full">
        <Input placeholder="Email" />
      </View>
    </SafeAreaView>
  );
}
