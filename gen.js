const { generateTemplateFiles } = require('generate-template-files');

// run 'node gen' to start use

generateTemplateFiles([
  {
    option: 'c',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/component' ,
    },
    stringReplacers: ['Name'],
    output: {
      path: './src/components/Name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'p',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/component' ,
    },
    stringReplacers: ['Name'],
    output: {
      path: './src/pages/Name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  }
]);

// todo add context creation instead of reducers