import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";

export function decrypt(encryptedMsg: string, secretKey: string): string {
    return AES.decrypt(encryptedMsg, secretKey).toString(CryptoJS.enc.Utf8);
}
