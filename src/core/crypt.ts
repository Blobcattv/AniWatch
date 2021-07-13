import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";

export function decrypt(encryptedMsg: string): string {
    return AES.decrypt(encryptedMsg, "dKsABJ9qVfHPR3").toString(
        CryptoJS.enc.Utf8
    );
}
