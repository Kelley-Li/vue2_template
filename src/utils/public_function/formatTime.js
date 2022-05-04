/**
 *  methods: 时间格式化
 *  @param {String} fmt 格式化后的格式： 'YYYY-mm-dd' 'YYYY年mm月dd'
 *  @param {String} date 需要格式化的时间
 *  @param {String} nums 格式化后的时间补几个0  '2022-02-02' /  ''2022-2-2'
 */
/**
 * 在main.js中挂载
 * import formatTime from './utils/formatTime.js'
 * Vue.prototype.$formatTime = formatTime
 * 使用方法：
 * this.formatTime('YYYY-mm-dd', ‘2022-02-1’, '0');
 * this.formatTime('YYYY-mm-dd', ‘2022-02-1’);
 * */
const formatTime = function (fmt, date, nums = '0') {
  date = new Date(date)
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, nums)))
    }
  }
  return fmt
}
export default formatTime


