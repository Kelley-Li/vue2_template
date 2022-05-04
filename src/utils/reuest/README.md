## 使用方法
###### 在api/modules/**.js中引入http   // modules 下的文件问api多模块
    
    import http from '../../http.js'
    const  url = 'xxxxx'

    const XXX = function (params) {
        return http.post(url, params)
    }
   
    export default {
        XXX,
    }

###### 在api/index.js中导出api
    mport api from './modules/api'
    const url = { ...api}
    export default url

###### 在main.js中挂载api    
    import * as api from './utils/reuest/api'
    Vue.prototype.$api = api.default

###### 在文件中使用
    getXXX() {
        let params = {
            form: {
                reportTime: this.reportTime,
            },
        };
        this.$api.XXX(params)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    },

