import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInSchema } from "@/schema/sign-in.schema";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <View className="flex-col justify-between h-full">
        <View className="p-6 flex-col gap-y-6">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[111px] h-[27px]"
          />

          <Text className="text-text font-semibold text-3xl">Log In</Text>

          <Formik
            validationSchema={SignInSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log("🚀 ~ Login ~ values:", values)}
          >
            {({
              handleChange,
              isSubmitting,
              submitForm,
              errors,
              touched,
              values,
            }) => (
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

                <Link
                  href={"/signup"}
                  className="self-end border-b border-text"
                >
                  <Text className="font-semibold text-sm text-text">
                    Forgot password?
                  </Text>
                </Link>

                <Button
                  text="Log in"
                  onPress={submitForm}
                  disabled={isSubmitting}
                />

                <Button
                  isOutline
                  text="Sign up with Google"
                  icon={<Fontisto size={24} name="google" color={"#0FA6A2"} />}
                />
              </View>
            )}
          </Formik>
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
}
