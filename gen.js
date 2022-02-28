const { generateTemplateFiles } = require('generate-template-files');

// run 'node gen' to start use

generateTemplateFiles([
  {
    option: 'c',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './templates/component' ,
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
      folderPath: './templates/component' ,
    },
    stringReplacers: ['Name'],
    output: {
      path: './src/pages/Name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'ctx',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './templates/nameContext.js' ,  // todo change to file, not folder
    },
    stringReplacers: ['Name'],
    output: {
      path: './src/context/NameContext.js',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  }
]);