/**
 * methods: deepClone 深拷贝 深度复制
 * @param {object || Array} obj
 * */
const deepClone = function (obj) {
  //可传入对象 或 数组
  //  判断是否为 null 或 undefined 直接返回该值即可,
  if (obj === null || !obj) return obj;
  // 判断 是要深拷贝 对象 还是 数组
  if (Object.prototype.toString.call(obj) === "[object Object]") { //对象字符串化的值会为 "[object Object]"
    let target = {}; //生成新的一个对象
    const keys = Object.keys(obj); //取出对象所有的key属性 返回数组 keys = [ ]
    //遍历复制值, 可用 for 循环代替性能较好
    keys.forEach(key => {
      if (obj[key] && typeof obj[key] === "object")
        //如果遇到的值又是 引用类型的 [ ] {} ,得继续深拷贝
        target[key] = deepClone(obj[key]);//递归
      else
        target[key] = obj[key];

    })
    return target  //返回新的对象
  } else if (Array.isArray(obj)) {
    // 数组同理
    let arr = [];
    obj.forEach((item, index) => {
      if (item && typeof item === "object")
        arr[index] = deepClone(item);
      else
        arr[index] = item;
    })
    return arr
  }
}
export default deepClone
