/**
 * @description: 方法说明 节流函数
 * @method 方法名 throttle
 * @param {Function}  fn  参数名 参数说明
 * @param {Number}  wait 参数名 参数说明
 * @return { Function } 返回值说明
 */
function throttle (fn, delay) {
  let timer = null
  let startTime = Date.now()
  return function () {
    let curTime = Date.now() // 当前时间
    let remaining = delay - (curTime - startTime) // 从上次到现在，还剩下多少多余时间
    let context = this
    let args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(fn, remaining)
    }
  }
}
export default throttle
