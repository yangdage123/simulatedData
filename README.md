# simulatedData
> 轻量的模拟后台数据的小插件(使用了express)
## 使用

修改config.js

	var config = {
	    routes: [
	        {
	            path: '/',
	            data: {
	                name: 'zhangsan'
	            },
	            method: 'get',
	        },
            {
                path: '/nihao',
                data: 'error',
                method: 'get',
                statusCode: 403
            },
	        {
	            path: '/hello',
	            data: [1, 2, 3, 4]
	        }
	    ],
	    port: 3000,
	    defaultMethod: 'get'
	}
	
	module.exports = config

| 属性名 | 内容 | 类型 |
|-------|-----|------|
| routes | 放入路由对象 | 数组|
| path | 请求的url | 字符串 |
| data | 返回的数据 |  |
| statusCode | response的状态码 |  |
|method| 请求方式 | 字符串 |
| port | 端口号(默认3000)| 数字 |
|defaultMethod|默认请求方式|字符串|

> `routes`里对象没有`method`默认使用`defaultMethod`

控制台启动:
	
	npm start

