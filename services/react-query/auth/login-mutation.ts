import { URL } from "@/services/base-url";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Toast from "react-native-toast-message";

interface IPayload {
  password: string;
  email: string;
}

export interface IRes {
  user: User;
  token: string;
}

export const useLoginMutation = () => {
  const mutationFn = async (payload: IPayload): Promise<IRes> => {
    const { data } = await axios.post(URL.LOGIN, payload);
    return data;
  };

  return useMutation({
    mutationFn,
    onError: () => Toast.show({ type: "error", text1: "Login Failed!" }),
    onSuccess: () => {
      Toast.show({ type: "success", text1: "Logged in successfully!" });
    },
  });
};
