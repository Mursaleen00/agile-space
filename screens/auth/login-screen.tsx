import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInSchema } from "@/schema/sign-in.schema";
import { useLoginMutation } from "@/services/react-query/auth/login-mutation";
import { useAuthStore } from "@/store/authStore";
import { Fontisto } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useFormik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const { push } = useRouter();
  const { mutateAsync } = useLoginMutation();
  const { setUser } = useAuthStore((state) => state);

  const { handleChange, isSubmitting, handleSubmit, errors, touched, values } =
    useFormik({
      validationSchema: SignInSchema,
      initialValues: { email: "", password: "" },
      onSubmit: async (payload) => {
        try {
          const res = await mutateAsync(payload);
          setUser(res);
          push("/home");
        } catch (error) {
          console.log("🚀 ~ Login ~ error:", error);
        }
      },
    });

  return (
    <SafeAreaView>
      <View className="flex-col justify-between h-full">
        <View className="p-6 flex-col gap-y-6">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[111px] h-[27px]"
          />

          <Text className="text-text font-semibold text-3xl">Log In</Text>

          <View className="w-full flex-col gap-y-6">
            <Input
              error={touched.email ? errors.email : undefined}
              onChangeText={handleChange("email")}
              placeholder="e.g.johndoe@gmail.com"
              label="Email Address"
              value={values.email}
              required
            />

            <Input
              error={touched.password ? errors.password : undefined}
              onChangeText={handleChange("password")}
              placeholder="Enter your password"
              value={values.password}
              secureTextEntry={true}
              label="Password"
              required
            />

            <Link href={"/signup"} className="self-end border-b border-text">
              <Text className="font-semibold text-sm text-text">
                Forgot password?
              </Text>
            </Link>

            <Button
              text="Log in"
              onPress={handleSubmit}
              disabled={isSubmitting}
              isPending={isSubmitting}
            />

            <Button
              isOutline
              text="Sign up with Google"
              icon={<Fontisto size={24} name="google" color={"#0FA6A2"} />}
            />
          </View>
        </View>

        <View className="flex-row w-fit self-center mb-6 gap-2">
          <Text className="text-[#4A5055]">Don’t have an account?</Text>

          <Link
            href={"/signup"}
            className="font-semibold text-[#161616] text-center border-b border-[#161616]"
          >
            Sign up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
