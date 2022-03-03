<!-- markdownlint-disable-next-line -->

<h1 align="center">React Starter Template</h1>

<div align="center">

Quickly start beautiful [React](https://reactjs.org/) apps. With basic ready useful [MUI](https://mui.com/) components. And using [Vite](https://vitejs.dev/) build tool.

</div>

<br>
<br>

## Features
 Base UI built with Mui components, styled, and custom 

 Aliases path to main folders

 Generate-template-files ready to use with ready templates 

 Using react-meta-tags to inject dynamic theme-color 

 Axios common api's folder


<br>
<br>

## Setup

Install the npm packages.

```sh
npm i
```
In serverAxios.ts 'baseUrl' put whatever server link you have. For example:

```sh
 https://{project-name}.herokuapp.com/
```
Start dev server on localhost  for production run
```sh
 npm run dev
```
For production version run 
```sh
 npm run build
 npm run preview
```

<br>
<br>

## Deploy to github pages

### *Make sure you have set the repo, and the gh-pages option in github settings is on

### 1. Push the project folder (not the build) to the main branche

### 2. Replace the hompage in package.json to your repo name
```json
   "homepage": "https://<user-name>.github.io/<repo-name>/",
```

### 3. In vite.config file change the base to your repository name
```js
   base: '/<REPO-NAME>/',
```
### 4. Then just run 
```sh
   npm run deploy
```
Thats will build the app & create gh-pages branche (if doasn't exist) & add & commit & push the dist to branch gh-pages.

<br>
<br>

## Recommended vscode extentions 
### [Vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

<br>
<br>

## Generate New files
### Shortcut for components, pags, and context
to start use run:
```sh
npm run gen
```

<br>
<br>

***
For integration and more components see the [MUI](https://mui.com/) library