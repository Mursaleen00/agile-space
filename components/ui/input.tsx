import { cn } from "@/lib/utils";
import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  type TextInputProps,
} from "react-native";
interface IProps {
  label?: string;
  error?: string;
  required?: boolean;
}

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps & IProps
>(
  (
    {
      placeholderClassName,
      secureTextEntry,
      className,
      required,
      label,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(secureTextEntry);

    useEffect(() => setShowPassword(secureTextEntry), [secureTextEntry]);

    return (
      <View className="flex flex-col gap-y-1 items-start w-full">
        {label && (
          <Text className={cn("text-gray-800 text-sm font-semibold")}>
            {label} {required && <Text className="text-warning">*</Text>}
          </Text>
        )}

        <View className="w-full relative">
          <TextInput
            secureTextEntry={showPassword}
            ref={ref}
            className={cn(
              "web:flex w-full border border-outline bg-background px-3 py-4 rounded-xl lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring text-xs web:focus-visible:ring-offset-2 text-text",
              props.editable === false && "opacity-50 web:cursor-not-allowed",
              className,
              secureTextEntry && "pr-16"
            )}
            placeholderClassName={cn(
              "text-text-light text-xs",
              placeholderClassName
            )}
            {...props}
          />

          {secureTextEntry && (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-[#074D48]"
            >
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                color="#074D48"
                size={22}
              />
            </TouchableOpacity>
          )}
        </View>

        {error && <Text className="text-warning text-sm">{error}</Text>}
      </View>
    );
  }
);

Input.displayName = "Input";

export { Input };
