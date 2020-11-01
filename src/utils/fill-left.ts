/**
 * 将字符串前面补值，直到达到指定的长度
 */
export function fillLeft(str: any, length: number, fillStr = "0"): string {
  str = str.toString();
  while (str.length < length) {
    str = `${fillStr}${str}`;
  }
  return str;
}
