import AuthLayout from "@/components/layouts/auth-layout";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";

export default function Signup() {
  const router = useRouter();

  return (
    <AuthLayout>
      <Text>Signup Page</Text>
      <Button
        title="Go to Login"
        onPress={() => router.replace("/(auth)/login")}
      />
    </AuthLayout>
  );
}
