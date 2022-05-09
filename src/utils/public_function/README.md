### 全局挂载
    在main.js中挂载
    import publicFunction from './utils/public_function/index'
    Vue.prototype.$publicFunction = publicFunction
### 使用方法
    this.$publicFunction.XXX
    XXX:代表modules文件夹下.js中的 export default XXX
### 文件说明
    ├── public_function                        
        ├── modules                  # 存放公共函数的文件夹
        │     ├── deepClone.js       # 深拷贝 深度复制
        │     ├── formatTime.js      # 时间格式化
        │     ├──           
        │     └── 
        │ 
        │ 
        └── index.js                 # 统一导出公共函数

### 函数说明

###### deepClone 深拷贝 深度复制
    可传入对象或数组   返回新的对象或新的数组
    使用方法：new_Object || new_Array = this.$publicFunction.deepClone(old_Object || old_Array)

###### formatTime 时间格式化
    使用方法：
    this.$publicFunction.formatTime('YYYY-mm-dd', ‘2022-02-1’, '0');
    this.$publicFunction.formatTime('YYYY-mm-dd', ‘2022-02-1’);

###### download_stream_files 下载后端返回的流文件
    使用方法
    this.$publicFunction.download_stream_files(res)
    res 为 download 请求后返回的参数
