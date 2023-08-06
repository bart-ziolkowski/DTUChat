import { signOut } from "firebase/auth";
import { auth } from "../config";

export const logout = async () => {
  return await signOut(auth);
};
