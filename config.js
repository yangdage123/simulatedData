var config = {
    routes: [
        {
            path: '/',
            data: {
                name: 'zhangsan'
            },
            method: 'get',
            statusCode: 302,
        },
        {
            path: '/nihao',
            data: '123',
            method: 'get'
        },
        {
            path: '/hello',
            data: [1, 2, 3, 4, 5],
        }
    ],
    port : 8080,
    defaultMethod: 'get'
}

module.exports = config;
