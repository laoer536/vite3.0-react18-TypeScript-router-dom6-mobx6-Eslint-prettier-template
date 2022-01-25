/**文档说明
 * @Description: 这里是前端加密配置可以用于axios请求拦截和响应拦截  如果你的项目不需要 那么只需要删除该文件夹以及对应的'crypto-js'和'jsencrypt'依赖
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/12/22 21:20
 */
import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt";

interface SecretTool {
  aesEncrypt(plaintext: string, randomKey: string): string;
  aesDecrypt(ciphertext: string, randomKey: string): string;
  rsaEncrypt(plaintext: string, publicKey: string): string | false;
  rsaDecrypt(ciphertext: string, privateKey: string): string | false;
  randomStr(len: number): string;
  genUUID(): string;
}

const aesOpt = {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7,
};

//用于放置服务器给予的公钥和私钥进行加密和解密操作
const _publicKey =
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const _privateKey =
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

/**
 * AES 加密
 * @param plaintext 需要加密的明文
 * @param randomKey 加密的Key
 * @returns {string} 加密后的字符串
 * @private
 */
function _aesEncrypt(plaintext: string, randomKey: string): string {
  return CryptoJS.AES.encrypt(
    plaintext,
    CryptoJS.enc.Utf8.parse(randomKey),
    aesOpt
  ).toString();
}

/**
 * AES 解密
 * @param ciphertext 需要解密的密文
 * @param randomKey 解密的Key
 * @returns {string} 解密后的字符串
 * @private
 */
function _aesDecrypt(ciphertext: string, randomKey: string): string {
  return CryptoJS.enc.Utf8.stringify(
    CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(randomKey), aesOpt)
  ).toString();
}

/**
 * 生成随机字符串
 * @param len 字符串长度，默认是 16
 * @returns {string} 随机字符串
 * @private
 */
function _randomStr(len: number): string {
  len = len || 16;
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const maxPos = $chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 生成UUID
 */
function _genUUID(): string {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.lastIndexOf("/") + 1);
}

/**
 * RSA加密
 * @param plaintext 需要加密的明文
 * @param publicKey RSA 公钥，一般是服务端公钥
 * @returns {string} 加密后的字符串
 * @private
 */
function _rsaEncrypt(plaintext: string, publicKey: string) {
  publicKey = publicKey || _publicKey;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(plaintext);
}

/**
 * RSA 解密
 * @param ciphertext 需要解密的密文
 * @param privateKey RSA 私钥， 一般是客户端私钥
 * @returns {string} 解密后的字符串
 * @private
 */
function _rsaDecrypt(ciphertext: string, privateKey: string) {
  privateKey = privateKey || _privateKey;
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  return decrypt.decrypt(ciphertext);
}

const secretTool: SecretTool = {
  aesEncrypt: _aesEncrypt,
  aesDecrypt: _aesDecrypt,
  rsaEncrypt: _rsaEncrypt,
  rsaDecrypt: _rsaDecrypt,
  genUUID: _genUUID,
  randomStr: _randomStr,
};

export default secretTool;
