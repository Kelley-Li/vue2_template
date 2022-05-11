/**
 * @method 立即执行防抖函数
 * @param {Function} fun
 * @param {Number} wait
 * @param {Boolean} immediate  true:表示立即执行，false:表示非立即执行
 * */
const debounce = function (fun, wait, immediate) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer !== null) clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) fun()
    } else {
      timer = setTimeout(() => {
        fun.apply(context, args)
      }, wait)
    }
  }
}

export default debounce


