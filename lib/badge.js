'use strict';

var Handlebars = require('handlebars'),
    fs = require('fs');

module.exports = function (data, opts) {
    var file = (opts && opts.file) ? opts.file :  __dirname + '/index.html',
        hbfile = (opts && opts.hbfile) ? opts.hbfile : file + '.hb',
        cssfile = (opts && opts.cssfile) ? opts.cssfile : null,

        template = (opts && opts.template) ? opts.template : '',
        css = (opts && opts.css) ? opts.css : '';

    if (hbfile) {
        template = fs.readFileSync(hbfile, 'utf8')
    }

    if (cssfile) {
        css = fs.readFileSync(cssfile, 'utf8');
    }

    if (css !== '') {
        data.extracss = css;
    }

    if (opts && opts.title) {
        data.title = opts.title;
    }

    fs.writeFile(file, Handlebars.compile(template)(data), 'utf8');
}
