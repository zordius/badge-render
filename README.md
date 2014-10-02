badge-render
============

A Node.js + PhantomJS based solution to generate browser testing results badge


LOGO images from https://github.com/substack/browser-badge

Install
-------

```
npm install badge-render
```

Commandline Usage
-----------------

**Generate your badge by badge json**

```sh
badge-render examples/all_browsers_pass.json lib/index.html
```

* The input JSON: <a href="examples/all_browsers_pass.json">examples/all_browsers_pass.json</a>
* The output HTML: <a href="lib/index.html">lib/index.html</a>
* The output PNG: <a href="lib/index.html.png">lib/index.html.png</a>

**Options: Output png with another name**
```sh
badge-render examples/all_browsers_pass.json lib/index.html --png test.png
```

**Options: Scale the html and png**

This feature is supported by updating CSS in template.

```sh
badge-render examples/all_browsers_pass.json lib/index.html --png example/scale.png --scale 0.75
```


**Options: Change the rendered image size**

This feature is supported by changing PhantomJS viewport size. Default viewport size is 500x320

```sh
badge-render examples/all_browsers_pass.json lib/index.html --width 300 --height 500
```
