import { Dimensions } from "react-native";

export const ROUTES = {
  BASE: "Base",
  MAIN: "Main",
  HOME: "Home",
  CHAT: "Chat",
  GIGGZ: "Giggz",
  WALLET: "Wallet",
  SIGNUP: "Signup",
  LOGIN: "Login",
  DISPUTES: "Disputes",
  PROFILE: "Profile",
  SETTINGS: "Settings",
  NOTIFICATIONS: "Notifications",
  SAVED_ARTISANS: "SavedArtisans",
  LEGAL: "Legal",
  HELP_SUPPORT: "HelpSupport",
  ACCOUNT_TYPE: "AccountType",
  DASHBOARD: "Dashboard",
  FORGOT_PASSWORD: "ForgotPassword",
  SIGNUP_OFFER: "SignupOffer",
  SELECT_SKILL: "SelectSkill",
  WELCOME: "Welcome",
  UPLOAD_PROFILE_PIC: "UploadProfilePic",
  VERIFICATION: "Verification",
  VERIFY_IDENTITY: "VerifyIdentity",
  VERIFY_PHONE: "VerifyPhone",
  VERIFY_CODE: "VerifyCode",
  VERIFY_HOME_ADDRESS: "VerifyHomeAddress",
  VERIFY_KYC: "VerifyKyc",
  NEW_PASSWORD: "NewPassword",
  ARTISANS_LIST: "ArtisansList",
};

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

export const QUERY_PATHS = {
  LOGIN: "/login",
  REQUEST_PASSWORD_RESET: "/password-reset/request",
  PASSWORD_RESET: "/password-reset",
  CHANGE_PASSWORD: "/users/change-password",
  SIGNUP_AGENT: "/agent/register",
  SIGNUP_CLIENT: "/register",
  USER: "/user",
  VERIFY_LOGIN_OTP: "/login/verify",
  RESEND_VERIFY_EMAIL: "/verify-email/resend",
  VERIFY_EMAIL: "/verify-email",
  VERIFY_PHONE_OTP: "/verify-phone/send",
  VERIFY_PHONE: "/verify-phone",
  ENABLE_2FA: "/twoFA",
  DISABLE_2FA: "/twoFA/disable",
};
