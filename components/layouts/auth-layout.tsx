import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  children: ReactNode;
  className?: string;
}

const AuthLayout: FC<IProps> = ({ children, className }) => {
  return (
    <SafeAreaView className={cn("p-6", className)}>{children}</SafeAreaView>
  );
};

export default AuthLayout;
