import { URL } from "@/services/base-url";
import { IError } from "@/types/error";
import { User } from "@/types/user";
import { errorFn } from "@/utils/error-fn";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Toast from "react-native-toast-message";

interface IPayload {
  password: string;
  email: string;
}

export interface IRes extends IError {
  user: User;
  token: string;
}

export const useLoginMutation = () => {
  const mutationFn = async (payload: IPayload): Promise<IRes> => {
    const { data } = await axios.post(URL.LOGIN, payload);
    return data;
  };

  return useMutation<IRes, AxiosError<IError>, IPayload>({
    mutationFn,
    onError: errorFn,
    onSuccess: () => {
      Toast.show({ type: "success", text1: "Logged in successfully!" });
    },
  });
};
