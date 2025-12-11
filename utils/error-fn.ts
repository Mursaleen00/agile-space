import { IError } from "@/types/error";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";

export const errorFn = (error: AxiosError<IError>) => {
  const message = error?.response?.data?.message || "Some thing went wrong";
  Toast.show({ type: "error", text1: message });
  return message;
};
