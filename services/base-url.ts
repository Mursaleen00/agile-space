const isLive = true;

const apiUrl = `https://key-vista-be.vercel.app`;
const localhost = "localhost:8000";

const baseUrl = isLive ? apiUrl : localhost;

export const URL = {
  //  ================== Auth ==================== //
  LOGIN: `${baseUrl}/auth/login`,
  REGISTER: `${baseUrl}/auth/register`,
  VERIFY_OTP: `${baseUrl}/auth/verify-otp`,
  RESEND_OTP: `${baseUrl}/auth/resend-otp`,
  RESET_PASSWORD: `${baseUrl}/auth/reset-password`,
  FORGOT_PASSWORD: `${baseUrl}/auth/forgot-password`,
  //  =========================================== //
};
