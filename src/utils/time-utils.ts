import { fillLeft } from "./fill-left";

/**
 * 日期格式化器
 * @param {Date} date 要格式化的日期
 * @param {string} template 模版。默认：'YYYY-MM-dd'。可使用的值：YYYY,MM,dd,HH,mm,ss
 */
export function dateFilter(date: Date, template = "YYYY-MM-dd") {
  const YYYY = date.getFullYear().toString();
  let MM = (date.getMonth() + 1).toString();
  MM = fillLeft(MM, 2);
  let dd = date.getDate().toString();
  dd = fillLeft(dd, 2);
  let HH = date.getHours().toString();
  HH = fillLeft(HH, 2);
  let mm = date.getMinutes().toString();
  mm = fillLeft(mm, 2);
  let ss = date.getSeconds().toString();
  ss = fillLeft(ss, 2);
  let result = template;
  result = result.replace(/YYYY/g, YYYY);
  result = result.replace(/MM/g, MM);
  result = result.replace(/dd/g, dd);
  result = result.replace(/HH/g, HH);
  result = result.replace(/mm/g, mm);
  result = result.replace(/ss/g, ss);
  return result;
}
