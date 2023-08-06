import {
  AuthProvider,
  browserPopupRedirectResolver,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../config";

export const signInWithProvider = async (provider: AuthProvider) => {
  return await signInWithPopup(auth, provider, browserPopupRedirectResolver);
};
