import AuthLayout from "@/components/layouts/auth-layout";
import { Link } from "expo-router";
import React from "react";

const EmailVerify = () => {
  return (
    <AuthLayout>
      <Link href="/(auth)/login">login</Link>
      <Link href="/(auth)/signup">signup</Link>
    </AuthLayout>
  );
};

export default EmailVerify;
