# React Notes

https://react.dev/ <<-- official docs

```javascript
React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.

Without framework project bnana hai toh hm vite or parcel la use krenge.

`vite` or `parcel` are bundlers ye sare code ko ek file me bundle krke de dete hai

REACT pr kam krna hai tog react dom use krenge
```

# Installation Guide

```javascript

NPM is a package management that is used to install, uninstall, and update Javascript packages on your workstation,

whereas NPX is a package executer that is used to directly execute Javascript packages without installing them.


Packages used by npm are installed globally. You have to care about pollution in the long term.

Packages used by npx are not installed globally.

`npx create-react-app mybasicapp`

After Intsallation Open pacakage files to understand the what installed & how to run the project.

`npm run start` -->> project start at localhost

`npm ruun build` -->> create a build folder in root dir

```

# react using Vite bundlr

```javascript

`npm create vite@latest `

 after installation we run

`npm install` to install node_modules folder

project run krna hai package json dekho

`npm run dev`

```

# Chai frontend Folder

```javascript

their are `two projects` created in `chai frontend` folder

1: mybasicapp (core react project )
2: myviteapp (ye project ko bundl krt hai )

both have pacajage json file

the only differencce is vite is lite

both have same below :

"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },

'mybasicapp' -->> iske andr kuch tsting dependencies extra hoti hai, react scripts h , or baki dono package files same hi hai almost

    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->

```

## Is Vite a library or framework?

```javascript

Many of the developers are in a dilemma to consider Vite as a framework or tool.

So, let me clear the fog that ` Vite is a frontend dev tool,`

which supports any frontend framework, with supported templates for Vue, TezJS, React, Preact, Lit Element, Svelte, and vanilla JavaScript.

```

## vite tool rules

```js

1: no .js instead always prefer to write jsx extension 

2: function first letter would be capital func Chai(){}; same for vite & core react 

3: jsx or core react said that we only render one element for that
they cam up with `fragment` `<> write here </>`

4: file.js file k name bhi first letter always in capital
File.js

```

# Hooks

```js
Hooks make it easier to manage and update the state in React applications.
They are functions that hook into the functionality of React components.

useState is one of hook we use commonly, in our myviteapp we write a code for understanding hooks 
checkout please.
```

