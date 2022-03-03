contains:

features: styled-components base interface by custom and mui components relative path to src folder generate-template-files ready yo use react-meta-tags to inject theme-color axios common api's folder

setup:

run npm i

replace the hompage github pages to your repo name

in serverAxios.ts 'baseUrl' put whatever server link you have, for example: https://{project-name}.herokuapp.com/

start server on localhost run: npm run dev for production run: npm run build

gh-pages config and deploy: *make sure you have set the repo, and the gh-pages option in github settings is on.

after creating git repository and adding the project folder to main branche,
you are ready to deploy your dist to a new branch:

in vite.config file change the base to your repository name
   base: '/<REPO-NAME>/',

then just run 
   'npm run deploy'

thats will build the app & create gh-pages branche (if doasn't exist) & add & commit & push the dist to branch gh-pages
recommended vscode extentions: vscode-styled-components JS JSX Snippets? ES7+ React/Redux/React-Native snippets?

the syntax for passing using props in styled component:

  const StyledHeader = styled(CompName)`
     background-color: #fff;
     color: ${props => props.colorProp || "#000"};
  `;

easy cmd files genertor, for types: components, pages, contex.

   run 'npm run gen' to start use
