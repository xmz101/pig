/**
 * Storage封装
 * 使用的是ES6语法  common规范？？--对于webpack使用，vue.config.js
 * 通过json操作
 * module_name 模块的属性名字 user  模块对象
 * key 指的是userName
 */
const STORAGE_KEY = 'pink';
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage(); // 获取所有的值
            val[key] = value; // 与user同级
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 获取某一模块下面的属性user下面的userName
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    // 获取浏览器中的缓存信息  从JSON字符串转换为JS对象，使用 JSON.parse() 方法
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');

    },
    // 清空
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        // 删除后将值重新写入
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}