<html>
<body>
<head>
<style>
html, body{margin:0;padding:0}
image {display:inline}
p {margin:0;color:#484;text-align:left}
i {display:block;color:#844;text-align:left}
div{display:inline-block;width:100px;padding:4px;text-align:center;font-size:20px}
</style>
</head>
{{#each .}}
<div>
<image src="../browser-badge/static/{{@key}}.png" />
{{#each .}}
{{#if .}}<p>&#x2713;{{@key}}</p>{{else}}<i>&#x2717;{{@key}}</i>{{/if}}
{{/each}}
</div>
{{/each}}
</body>
</html>