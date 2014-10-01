'use strict';

var Handlebars = require('handlebars'),
    fs = require('fs');

module.exports = function (data) {
    fs.writeFile(__dirname + '/index.html', Handlebars.compile(fs.readFileSync(__dirname + '/index.html.hb', 'utf8'))(data), 'utf8');
}
