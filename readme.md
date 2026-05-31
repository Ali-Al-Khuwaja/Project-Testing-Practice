Install jest

```
npm install --save-dev jest
```

### Using ES6 import statements with Jest

By default, the current version of Jest will not recognize ESM, which is why you will see their guides use CJS syntax (e.g. module.exports). In order for you to be able to use ESM with Jest, you will need to do following:

Install @babel/preset-env:

```
npm install --save-dev @babel/preset-env
```

Create a babel.config.js in the project root with the following contents:

```
export default {
presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

This will allow you to write ESM’s import/export syntax instead of require/module.exports; you do not need to change anything else in the guide and Jest can be run as normal. Behind the scenes, Babel will convert your ESM to CJS before running Jest (it won’t overwrite your actual files as this all happens in memory).
