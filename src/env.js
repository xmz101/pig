let baseURL;
// 在node中有一个`process.env.NODE_ENV`进程，可以取到环境变量中的参数
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break
}

export default {
    baseURL
}