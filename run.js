const nodemon = require('nodemon');

nodemon({
    script: './app.js',
    ext: 'js,json',
})

nodemon
    .on('start', () => {
        console.log('nodemon is start!');
    })
    .on('quit', () => {
        console.log('nodemon is quit!');
    })
    .on('restart', (files) => {
        console.log('App is restarted due to: ', files);
    });


