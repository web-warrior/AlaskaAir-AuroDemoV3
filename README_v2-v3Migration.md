# Migration details outlining the steps taken to upgrade to Auro Demo v3 from Auro Demo v2

The initial experience getting started using the Auro Demo v2 as a scaffold project proved frustrating because the project had many errors running it locally. I researched all the issues to get the project running locally. Next I used it as a learning opportunity to demonstrate the need to improve documentation and update dependencies or other aspects of the source code or files in order to run the Auro Demo v2 project locally without errors. This process and steps taken to migrate the Auro Demo v2 project to Vite/React v19 build while remaining compatible with the Auro Design System.

This demo project had to be migrated to Vite because it was originally created with Create React App, CRA, and CRA has been deprecated.

This readme file includes setup instructions and extra info needed or steps taken to replace outdated methods for SASS and other improvements to documentation or source code required for packages, functions, methods or other dependencies no longer supported.


* Send any inquires via email to: inquiry.webwarrior@gmail.com


## Cloned the Auro Demo v2 repo the project would not build

```bash
git clone https://github.com/AlaskaAirlines/AuroReactDemo.git
```
- To get the project running without any build errors and/or vulnerabilities reported at build time in terminal output, and eliminate browser console errors I had to perform several additional changes and migrate to Vite



## Installed the alaska air ux and alaska air auro design system modules needed to to run the Auro Demo v2

The following command will install
* [auro-button](http://auro.alaskaair.com/components/auro/button)
* [auro-checkbox](https://auro.alaskaair.com/components/auro/checkbox)
* [auro-header](https://auro.alaskaair.com/components/auro/header)
* [auro-input](https://auro.alaskaair.com/components/auro/input)
* [auro-radio](https://auro.alaskaair.com/components/auro/radio)
* [design tokens](http://auro.alaskaair.com/getting-started/developers/design-tokens)
* [focus-visible](https://github.com/WICG/focus-visible)

Use this cmd to install all of the above modules listed:
```js
npm install --save-dev @alaskaairux/auro-button @alaskaairux/auro-checkbox @alaskaairux/auro-header @aurodesignsystem/auro-input @alaskaairux/auro-radio @alaskaairux/design-tokens focus-visible
```

These are just a subset used for the initial demo, there are many more to make use of





### Imported WC Style Sheets
WC Style Sheets (WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design System.

This demo project is built using Sass, [Dart Sass](https://www.npmjs.com/package/sass) is a preferred library.





### Ran this cmd to install sass, sass is required for this demo
```js
npm i sass -D
```





### Use SASS migrator to transition to a module system, and stop using old css @import statements and global built-in functions
See https://sass-lang.com/documentation/breaking-changes/import/ for full details

-npm install -g sass-migrator
-sass-migrator module --migrate-deps "your-entrypoint".scss

```js
npm install -g sass-migrator
sass-migrator module --migrate-deps index.scss
```




### After installing sass-migrator
* Renamed `index.css` to `styles.scss` and rename `index.js` to `main.jsx`
* Updated the .scss import statements in main.jsx and App.jsx files
* Created a new sass folder under /src folder
* Moved both App.scss and main.scss files into the new /src/sass/ folder

* Updated the url path /src/sass/ and filename for the .scss files in the App.jsx file
* Updated the.scss filenames in the @import statements in the 'App.jsx' file
```js
import './sass/App.scss';
import './sass/styles.scss';
```

* Updated the 'App.js' to 'App.jsx' in the @import statement in the 'main.jsx' file
* Updated the './serviceWorker.js' to './serviceWorker.jsx' in the 'main.jsx' file
```js
import App from './App.jsx';
import * as serviceWorker from './serviceWorker.jsx';
```




### Installed Web Core Style Sheets, "WCSS"

```js
npm i @alaskaairux/webcorestylesheets
```

Refer to WCSS Web Core Style Sheets for more details:
https://alaskaairlines.github.io/WebCoreStyleSheets/





### Imported the stylesheets
* Add Auro style module @imports statements to top of the `App.scss` file
* " ~ " in @import statements are no longer supported so changed path for Vite to use hard relative paths to '/node_modules/...' for now
* These are the style and design token dependencies required to run the Auro Demo v2
* Additional dependencies have been/will be added to Auro Demo v3 when/as needed

```scss
@import "/node_modules/@alaskaairux/design-tokens/dist/tokens/SCSSVariables"; // Auro design tokens as SCSS variables, required to use WCSS (Web Core Style Sheets) https://alaskaairlines.github.io/WebCoreStyleSheets/
@import "/node_modules/@alaskaairux/design-tokens/dist/tokens/SassCustomProperties"; // Auro design tokens as CSS Custom Properties, used by auro-* components

@import "/node_modules/@alaskaairux/webcorestylesheets/dist/breakpoints";
@import "/node_modules/@alaskaairux/webcorestylesheets/dist/fonts";
@import "/node_modules/@alaskaairux/webcorestylesheets/dist/normalize";
@import "/node_modules/@alaskaairux/webcorestylesheets/dist/essentials";
@import "/node_modules/@alaskaairux/webcorestylesheets/dist/headings";
@import "/node_modules/@alaskaairux/webcorestylesheets/dist/utilityClasses";
```

For more information about the Auro styles and design tokens:
See [the full API](https://alaskaairlines.github.io/WebCoreStyleSheets/) including the various Utility Selectors currently available.
@import values are still referencing ~ in the documentation, however, this build will no longer use ~ with import path values





### Installed Icon Library
The Icons package contains standard set of SVG icons that can be used with any web project.

```js
npm i @alaskaairux/icons -D

npm i @alaskaairux/auro-icon
```

Further documentation can be found in the [README] file of the Alaska Airlines Auro install
(https://auro.alaskaair.com/icons/install)
and
(https://auro.alaskaair.com/components/auro/tokenlist/install) as it relates to 'tokens'






### Updated App.js file with "root API" to provide better ergonomics for managing roots
ReactDOM.render is no longer supported in this VITE/REACT 19 build

* Used recommended updates to use createRoot render method in the App.jsx file:
https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

```js
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); /* new in v3 */
const root = createRoot(container); /* new in v3 createRoot(Container!) if you are using TypeScript */
```



### Migrated this project to Vite by following steps in this article:
https://coreui.io/blog/how-to-migrate-create-react-app-to-vite/#:~:text=Vite%20has%20emerged%20as%20a,focus%20on%20practicality%20and%20ease

### Renamed .js files as .jsx

### Renamed index.jsx to main.jsx

### Opened serviceWorker.jsx and rename the /"service-worker.js" to "/service-worker.jsx"
```js
const swUrl = `${process.env.PUBLIC_URL}/service-worker.jsx`;
```

### Created vite.config.js file, then renamed it to vite.config.mjs for "module" support

### Moved index.html from the public folder to the root of project and change the PATH URL references to /src and /public where applicable

### Added   "type": "module",  "main": "main.jsx", to the package.json file

### There are instances where it's necessary to delete package.json.lock file, however not exactly sure why
// TODO: research the .lock file purpose

### From this point forward use "npm run start" instead of "npm start" to build project in development mode in local browser with Vite

### NOTE: the development build for Vite runs on port:5173 instead of :3000 ie; http://localhost:5173

### Added import statements and build: properties to vite.config.mjs to support the eslint plugin for vite and the custom production build path as well as setting a :base path for the project as "./"

```js
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      assetsDir: 'AuroDemo/assets',
      // unique 'non-root' path for this app to run in a sub directory path "http://eye-4design.com/AuroDemo/". Used so I can run other apps on this same domain
      // assetsDir value is used to dynamically build the url to assets folder path in my production environment, which is unique
      // This provides accurate url referencing to resources to run the app on my custom domain/url sub directory path
      publicDir: true,
    },
    plugins: [react(), eslint()],
    base: "./", // sets relative url path - when set the necessary "." in front of the "/" for "src" path is retained in production vite builds when it's converted to "assets". This ensures production build assets url "assetDir" is valid.
  };
});
```

### Created .env files (.env.development and .env.production) to set up application variables for the baseURL path : Vite's "npm run build" converts "src" in all url paths to "assets". An application variable is used in the index.html file for both favicon.ico and manifest.json file paths in <head> of index.html allowing the url path to be dynamically generated to support both the development and production environment builds.

### The .env.production variables and values are specific to how I host multiple demos running in separate environments on one shared domain. Other production environments will be different from these custom values as they are totally dependant on the production environment server configuration.

### Added application variables to the top of App.jsx file

```js
  const apiUrl = import.meta.env.VITE_API_URL; // after eslint was running I needed to add a application variable "VITE_API_URL" to App.jsx because the serviceWorker.jsx file function was using an undefined variable 'isLocalhost' in conditional logic causing the build to fail. Creating this application variable in the App.jsx file and using it within new conditional logic in the serviceWorker.jsx file provided the ability to do the validate/check for 'development' vs. 'production' and fixed the build issue eslint was complaining about.

  const rootUrl = import.meta.env.VITE_ROOT_URL;
  const publicUrl = import.meta.env.VITE_PUBLIC_URL;

  const appName = import.meta.env.VITE_APP_NAME;

```






### Installed Auro Design Tokens
https://auro.alaskaair.com/getting-started/developers/design-tokens/install

```js
 npm i @aurodesignsystem/design-tokens
 ```




# Added an Auro component to test the demo project api calls
Add more to the demo to try out the reusable Auro Design Tokens and build custom UI elements (refer to Auro Design System)

The following is an example of how to add one of the components imported earlier in this document.
Following this example, you can add all of the components necessary to achieve your desired designs and page elements.

* In `App.js`, add a reference to `auro-button`.

```js
render() {
  return (
    <div className="App">
      <auro-button onClick={() => alert('clicked!')}>Click Me</auro-button>
    </div>
  )
}
```



### Vite does not have linting built-into it's CLI.

  * ESLint was added to this version of Auro Demo to replace the built-in linting provided by the previous "CRA" bootstrapped project configuration

    XX-done-review linting process, XX-done-maybe add a tool specifically for Vite? YES: The specific "Vite" version of ESLint was added to this Vite project:
    Followed instructions in this article:
    https://baisali-pradhan.medium.com/vite-eslint-the-perfect-duo-for-clean-and-efficient-web-development-bad349274eaa#:~:text=Essentially%20Vite's%20configuration%20file%2C%20called,our%20linting%20rules:%20touch%20.eslintrc

    ```js
    //vite-plugin-eslint
    npm install vite-plugin-eslint --save-dev
    ```


NOTES: This project was based on the original "outdated" source CRA bootstrapped build not supported anymore

The Auro Demo v2 project source/git url:
```bash
$ git clone https://github.com/AlaskaAirlines/AuroReactDemo.git
```
The original Auro Demo v2 project was bootstrapped with [Create React App], and "CRA" is no longer supported.
I ran into several issues with locating information needed to get the demo to run locally, and to build a production build. It did not build without errors initially.

The original Auro Demo v2 included an older version of SaSS.
This version was migrated to use the version of SaSS with module support because of this error about "breaking-changes":
https://sass-lang.com/documentation/breaking-changes/import/

The original Auro Demo v2 was bootstrapped with CRA
Auro Demo v3 now uses Vite/React 19 build and Sass has been updated
https://coreui.io/blog/how-to-migrate-create-react-app-to-vite/#:~:text=Vite%20has%20emerged%20as%20a,focus%20on%20practicality%20and%20ease
https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis


