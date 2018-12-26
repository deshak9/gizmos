require('babel-register');

const router = require('./app/index').default;
const Sitemap = require('./').default;

(
    new Sitemap(router)
        .build('http://www.gadgetclues.com')
        .save('./sitemap.xml')
);