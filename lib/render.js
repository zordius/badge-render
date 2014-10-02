var page = require('webpage').create(),
    system = require('system'),
    url = system.args[1],
    png = system.args[2] || (encodeURIComponent(url) + '.png');

// Open the Page, then save the png
page.open(url, function (status) {
    page.render(png);
    phantom.exit();
});
