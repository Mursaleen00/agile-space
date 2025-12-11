import { cn } from "@/lib/utils";

import React, { FC, Fragment, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Bounce } from "react-native-animated-spinkit";

interface IProps {
  textClassName?: string;
  onPress?: () => void;
  isPending?: boolean;
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
  isPending,
  textClassName,
}) => {
  return (
    <TouchableOpacity
      className={cn(
        isOutline ? "border border-outline" : "bg-primary",
        "flex-row items-center justify-center gap-x-2.5 rounded-xl py-3.5 px-2.5",
        className
      )}
      onPress={onPress}
      disabled={disabled}
    >
      {isPending ? (
        <Bounce size={25} color={isOutline ? "#0FA6A2" : "white"} />
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </TouchableOpacity>
  );
};

export default Button;
