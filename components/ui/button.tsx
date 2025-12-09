import { cn } from "@/lib/utils";

import React, { FC, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

interface IProps {
  textClassName?: string;
  onPress?: () => void;
  isOutline?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  text: string;
}

const Button: FC<IProps> = ({
  text,
  icon,
  onPress,
  disabled,
  isOutline,
  className,
  textClassName,
}) => {
  return (
    <TouchableOpacity
      className={cn(
        isOutline ? "border border-outline" : "bg-primary-default",
        "flex-row items-center justify-center gap-x-2.5 rounded-xl py-3.5 px-2.5",
        className
      )}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        className={cn(
          "text-lg font-semibold",
          isOutline ? "text-text" : "text-white",
          textClassName
        )}
      >
        {text}
      </Text>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
