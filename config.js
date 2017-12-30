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
    port : 8080
}

module.exports = config;