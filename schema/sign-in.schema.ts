import { object, string } from "yup";

export const SignInSchema = object().shape({
  email: string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#^()_\-=+{}[\]|\\;:'",.<>/?]/,
      "Password must contain at least one special character"
    ),
});
