Package.describe({
  name:    'msavin:jetsetter',
  summary: 'Visual Get/Set Tool for Sessions',
  version: '1.0.19',
  git:     'https://github.com/msavin/JetSetter.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {

  var clientFiles = [
  	"client/main.html",
    "client/main.js",
    "client/functions.js",
    "client/row_create/JetSetter_create.html",
    "client/row_create/JetSetter_create.js",
    "client/row_editor/JetSetter_editor.html",
    "client/row_editor/JetSetter_editor.js",
    "client/row_header/JetSetter_header.html",  
    "client/row_header/JetSetter_header.js",
    "client/row_session/JetSetter_row.html",
    "client/row_session/JetSetter_row.js",
    "client/_component/component.html",
    "client/_component/component.js",
    "style/JetSetter.css"
  ];

  api.versionsFrom('1.0');
  api.use(['templating','tracker','session'], 'client');
  
  api.use('meteortoys:toykit@0.8.2');
  api.add_files(clientFiles, "client");

  if (api.export) {
    api.export('JetSetter', "client");
  }
  
  
});