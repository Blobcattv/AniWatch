import { UserData } from "./types";
import CryptoJS from "crypto-js";

const KEY = "aniwatch";

export function exportUserData(data: UserData): string {
  const json = JSON.stringify(data);
  return CryptoJS.AES.encrypt(json, KEY).toString();
}

export function importUserData(userDataJSON: string): UserData {
  const bytes = CryptoJS.AES.decrypt(userDataJSON, KEY);
  return JSON.parse(bytes.toString());
}