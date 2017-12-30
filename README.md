#simulatedData
> 轻量的模拟后台数据的小插件

##使用

修改cinfig.js

	var config = {
	    routes: [
	        {
	            path: '/',
	            data: {
	                name: 'zhangsan'
	            }
	        },
	        {
	            path: '/hello',
	            data: [1, 2, 3, 4]
	        }
	    ],
	    port: 3000
	}
	
	module.exports = config

| 属性名 | 内容 | 类型 |
|-------|-----|------|
| routes | 放入路由对象 | 数组|
| path | 请求的url | 字符串 |
| data | 返回的数据 |  |
| port | 端口号(默认3000)| 数字 |

控制台启动:
	
	node app.js

