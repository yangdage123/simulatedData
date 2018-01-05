var config = {
    routes: [
        {
            path: '/',
            data: {
                name: 'zhangsan'
            },
            method: 'get'
        },
        {
            path: '/hello',
            data: [1, 2, 3, 4],
        }
    ],
    port : 8080,
    defaultMethod: 'get'
}

module.exports = config;
