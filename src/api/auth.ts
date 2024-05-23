import { QUERY_PATHS } from "../utils/constants";
import { StorageKeys, storeDataInStorage } from "../utils/storage";
import { ApiReq } from "./init";

interface AgentSignupBody {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  role: string;
}

interface ClientSignupBody {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

interface LoginBody {
  email: string;
  password: string;
}

export async function signUpAgent(body: AgentSignupBody) {
  console.log(body);
  const { data } = await ApiReq.post(QUERY_PATHS.SIGNUP_AGENT, {
    ...body,
  });
  console.log(data);

  if (data?.token) {
    storeDataInStorage(StorageKeys.TOKEN, data?.token);
  }
  return data?.data || {};
}

export async function signUpClient(body: ClientSignupBody) {
  console.log(body);
  const { data } = await ApiReq.post(QUERY_PATHS.SIGNUP_CLIENT, {
    ...body,
  });

  if (data?.token) {
    storeDataInStorage(StorageKeys.TOKEN, data?.token);
  }
  return data?.data || {};
}

export async function loginUser({ email, password }: LoginBody) {
  const { data } = await ApiReq.post(QUERY_PATHS.LOGIN, {
    email,
    password,
  });
  console.log(data?.data);

  if (data?.data?.token) {
    storeDataInStorage(StorageKeys.TOKEN, data?.data?.token);
  }
  return data?.data || {};
}

export async function sendPhoneCode(body: { phone_number: string }) {
  const { data } = await ApiReq.post(QUERY_PATHS.VERIFY_PHONE_OTP, {
    ...body,
  });
  return data?.data || {};
}

export async function verifyPhoneCode(body: {
  phone_number: string;
  otp: string;
}) {
  const { data } = await ApiReq.post(QUERY_PATHS.VERIFY_PHONE_OTP, {
    ...body,
  });
  console.log(data);
  return data?.data || {};
}
