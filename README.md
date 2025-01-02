# Alaska Air's Open Source Auro Design System React Demo v3

Auro Demo v3 was created a the result of migrating the Alaska Airlines' "Auro Demo v2" project, bootstrapped with Create React App, "CRA", to Vite/React v19 build.

Auro Demo v2 project is a scaffold project to get familiar using the Auro Design System, Auro Design Tokens, Auro Web Components, Lit (https://lit.dev/docs/), and React.

* Send any inquires via email to: inquiry.webwarrior@gmail.com

This demo project had to be migrated to Vite because it was originally created with Create React App, CRA, and CRA has been deprecated.

This demo project includes setup instructions and extra info needed or steps taken to replace outdated methods for SASS and other improvements to documentation or source code required for packages, functions, methods or other dependencies no longer supported.

The initial experience getting started using the Auro Demo v2 as a scaffold project proved frustrating because the project had many errors running it locally. I researched all the issues to get the project running locally. Next I used it as a learning opportunity to demonstrate the need to improve documentation and update dependencies or other aspects of the source code or files in order to run the Auro Demo v2 project locally without errors. This process and steps taken to migrate the Auro Demo v2 project to Vite/React v19 build while remaining compatible with the Auro Design System.


#


# This is an alternate version of the "open source" Alaska Air's Auro React Demo v2 project

This build is updated and maintained for research and reference purposes

The migration process documentation from v2 to v3 were written into this project as changes, additions and other tasks required occurred. All the steps taken and packages installed, files added and renaming of files, addition of folders and build configurations have also been included as a record of transition.

The "NOTES:" sections of this README document, together with additional coding comments in the project files, are kept for historical references to key aspects of the changes made to the original Auro Demo v2 scaffold and the additions, deletions, installations and updates made in Auro Demo v3.


# The Auro Demo v3 project demonstrates usage of an open source design system using design tokens to build unique web components with Auro Design System

To run the Auro Demo v3 VITE/REACT v19 build locally, clone it or download it from github:

```bash TODO: update this URL to my own repo of the updated source code for this project
$ git clone https://github.com/web-warrior/AlaskaAir-AuroDemoV3
```

## To run the Auro Dmeo v3 project locally
Open terminal and navigate to the AlaskaAir-AuroDemoV3 root folder and run the following commands:

npm install
npm audit fix
npm run start



# Live Auro Demo v3 VITE/REACT v19 Build

View a LIVE v3 build of "Auro Demo v3 VITE/REACT v19 build"

https://eye-4design.org/AuroDemo/ - migrated/updated and maintained by Jenny M 1/1/2025




# Live Auro Demo v2 CRA/React build

View LIVE build of "Auro Demo v2 CRA/REACT build"

https://auro-react-demo.surge.sh/  - created by Alaska Airlines in May of 2021





## Compatibility, compliance and supported browsers

The original app ran in all [supported browsers](http://auro.alaskaair.com/support/browsersSupport).

*Disclaimer* Components in this revised/alternate v3 deployment may or may not be 100% compliant due to ongoing experimentation and testing this demo with the Auro Design System.

Auro v3 has additional components and updated custom UI features implemented using the Auro Desing System UI tokens and web components.





## Example Auro Demo App API

Depending on your local configuration, this project will work with either `yarn` or `npm`.
For the sake of documentation, the commands will default to `npm`.

Vite Build command options executed within the root directory of the Auro Demo app:

| Command | Description
|---|---
| npm run start | Runs the app in local "DEVELOPMENT" mode. When the build finishes the Auro Demo v2 project will launch [http://localhost:5173) in the browser.

  || Browser sync and linting in the CLI is enabled.

  // TODO: X-Browser sync

  * I think this is handled by Vite now, but double check the use of Browser sync with CRA to determine next steps that may be needed. I am guessing Vite just uses it's own HMR (Hot Module Reloading) to replace Browser sync so confirm the use/non-use of Browser sync and update these notes


  // TODO: XX-linting in the CLI (this relates to CRA only - so need to update linting for Vite)

  * Vite does not have linting built-into it's CLI.
  * ESLint was added to this version of Auro Demo to replace the built-in linting provided by the previous "CRA" bootstrapped project configuration

    XX-done-review linting process, XX-done-maybe add a tool specifically for Vite? YES: The specific "Vite" version of ESLint was added to this Vite project:
    Followed instructions in this article:
    https://baisali-pradhan.medium.com/vite-eslint-the-perfect-duo-for-clean-and-efficient-web-development-bad349274eaa#:~:text=Essentially%20Vite's%20configuration%20file%2C%20called,our%20linting%20rules:%20touch%20.eslintrc

    ```js
    //vite-plugin-eslint
    npm install vite-plugin-eslint --save-dev
    ```


|---|---
| npm test  | Launches the unit test runner in the interactive watch mode // TODO: set up Vite unit testing, NOT SET UP YET

  // TODO:
  * Checkout Auro's Automated Testing and run it in a Chrome browser
  * Unit testing made easy look into @open-wc/testing and @web/test-runner @ https://auro.alaskaair.com/generator.


|---|---
| npm build | Runs the app in PRODUCTION mode creating a deployable build.

  // TODO: X-done-create optimized production build // the original v2 CRA build didn't build without errors
  * build/deployment
  // TODO: custom vite build specs are in vite.config.mjs // env. build variances depend on server/host options available

NOTE: to manually flush the local development build "cache" use this cmd in console
* if build fails due to a rare edge case event/exception, try using this to clear .vite build corrupted "cache":
https://www.warp.dev/terminus/clear-npm-cache

```js
rm -rf node_modules/.vite
```




## Setting up new React project with Auro Web Components

The following steps set up the Auro Design Tokens used to style the Auro Web Components




### Install js to run the demo

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





## Importing WC Style Sheets
WC Style Sheets (WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design System.

This demo project is built using Sass, [Dart Sass](https://www.npmjs.com/package/sass) is a preferred library.





## Run this cmd to install sass, sass is required for this demo
```js
npm i sass -D
```





## Use SASS migrator to transition to a module system, and stop using old css @import statements and global built-in functions
See https://sass-lang.com/documentation/breaking-changes/import/ for full details

-npm install -g sass-migrator
-sass-migrator module --migrate-deps "your-entrypoint".scss

```js
npm install -g sass-migrator
sass-migrator module --migrate-deps index.scss
```




## After installing sass-migrator
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




## Installed Web Core Style Sheets, "WCSS"

```js
npm i @alaskaairux/webcorestylesheets
```

Refer to WCSS Web Core Style Sheets for more details:
https://alaskaairlines.github.io/WebCoreStyleSheets/





### Importing the stylesheets
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





## Icon Library
The Icons package contains standard set of SVG icons that can be used with any web project.

```js
npm i @alaskaairux/icons -D

npm i @alaskaairux/auro-icon
```

Further documentation can be found in the [README] file of the Alaska Airlines Auro install
(https://auro.alaskaair.com/icons/install)
and
(https://auro.alaskaair.com/components/auro/tokenlist/install) as it relates to 'tokens'






## Updated App.js file with "root API" to provide better ergonomics for managing roots
ReactDOM.render is no longer supported in this VITE/REACT 19 build

* Used recommended updates to use createRoot render method in the App.jsx file:
https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

```js
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); /* new in v3 */
const root = createRoot(container); /* new in v3 createRoot(Container!) if you are using TypeScript */
```



## Migrated this project to Vite by following steps in this article:
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

### TODO: add "Skip to" link option for keyboard navigators/traversal




## Install Auro Design Tokens
https://auro.alaskaair.com/getting-started/developers/design-tokens/install

```js
 npm i @aurodesignsystem/design-tokens
 ```




## Add Auro components to this demo project, and utilize the reusable Auro Design Tokens to build custom UI elements (refer to Auro )

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




## Development

This project uses node Semantic Release with Conventional Commits.
// TODO: review how and why Semantic Release and the Conventional Commits are used



## Styling

See Auro development conventions for more detailed styling information https://auro.alaskaair.com/css/conventions




## Browser Support

The app runs and works in all [supported browsers](http://auro.alaskaair.com/support/browsersSupport).

Explore the Auro Demo v3 project source code to see how the Auro web components are structured/used together run in a Vite/React v19 development environment.

*General Disclaimer*----------------------------------------------------------------------------------------------------
Components in this revised/alternate version of the Auro Demo project may or may not be fully compliant.
This project may or may not be updated at anytime and may be subjected to extensive testing to ensure compliance with all browsers/client versions listed on the above URL. In addition, many of the base components may be enhanced with WCAG AA or AAA compliance standards that could deviate from base components and or styles that are utilized in the open source project by utilizing overrides. This is done so that a higher level of compliance is achieved. Deviations from default component usage and/or styles overrides are required for better user experience, responsive content and form interaction improvements to any/all UI web components should be deemed experimental. Comparison to original Auro Design System "out of the box" defaults should reveal any deviations, as well as taking a look at the App.scss for custom style overrides (these may not be optimized because the Auro Design System is vast and strict conventions are proprietary and will require a learning curve period to reach optimal usage patterns, conventions and taxonomy).




## FOR REFERENCE: this project was based on the original "outdated" source CRA bootstrapped build not supported anymore:

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




## Other References

https://www.webcomponents.org/
http://auro.alaskaair.com/support/browsersSupport
https://sass-lang.com/documentation/breaking-changes/import/
https://www.webcomponents.org/




# Build TODO's *

The build had many errors, unsupported packages, and vulnerabilities until I made significant amount of updates to node packages and files during the migration to Vite. Vite has it's own set of issues, and the migration of Sass and Vite resulted in some outstanding warnings that need to be individually addressed to resolve several warnings in both the local terminal output and dev tools console in browser.




## * Outstanding Auro Demo v3 build terminal console warnings

Relates to Sass migration and @import of Sass css modules:

* -Deprecation Warning: Sass @import rules
 are deprecated and will be removed in Dart Sass 3.0.0. More info and automated migrator: https://sass-lang.com/d/import

  All Auro Sass node_modules/packages are referenced using @import in the .scss and .jsx file(s). The Sass info on @import is not enough to resolve this warning, but I'll still look into this.
  -Find a way to convert @import to @use while being compliant with Sass Vite/React build capabilities.
  Initial attempts at implementing @use were not productive, the specifics on how @use syntax is applied in the .scss files and how Sass precompiler with @use is defined inside the vite.config.mjs properties. Calls to Sass resources with @use is not straightforward as it seems, so I've shelved this issue for now because it's not breaking yet, but it's a priority over the coming months to figure this out. (maybe try building a new empty Vite/React project and figure out how to use @use to reference Sass node packages)

  -

* -Deprecation Warning: Global built-in functions
 are deprecated and will be removed in Dart Sass 3.0.0.  Use meta.variable-exists instead. More info and automated migrator: https://sass-lang.com/d/import

  -Several Auro Sass node packages use @if variable-exists(variable-name) {} - The Sass info on @import is not enough to resolve this warning, but I'll still look into this.
  Initial research was not productive, the packages with these references cannot be updated because they are maintained by a third party. If these are updated to use @use with variable references in this project the updates will get overwritten if the Auro Design System packages get updated.

  -This brings up a good question to ask on the wiki/dev support for Auro Design System:
  What is the best strategy and practices to keep all the node packages up to date with ongoing updates to the Auro Design System? Ask on the forum.

  -

  -




## * Resolve warnings of npm package "Vulnerability" for:

* X-done-semantic-release/npm package contains vulnerabilities as follows:

  @semantic-release/npm  7.1.0 - 10.0.0-beta.4
      Depends on vulnerable versions of npm
      node_modules/@semantic-release/npm
        semantic-release  18.0.0-beta.1 - 20.1.3
        Depends on vulnerable versions of @semantic-release/npm

  done-Upgraded/Installed React v19 and ran npm audit fix --force and all vulnerabilities from build are resolved





## * Outstanding Auro Demo v3 project build browser console warnings for LIT:

* X-done-hook.js:608 Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.

  done-ignore this message in development console, it only shows up while running in dev mode/dev build as it should!


* -hook.js:608 Multiple versions of Lit loaded. Loading multiple versions is not recommended. See https://lit.dev/msg/multiple-versions for more information.

  https://lit.dev/docs/tools/development/#multiple-lit-versions
  Find out which Lit libraries have multiple versions loaded by checking the following variables in your browser console: window.litElementVersions, window.reactiveElementVersions, and window.litHtmlVersions.

  This will take more research, I'll look into it later.

  -


* -hook.js:608 Element auro-input scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled.

  This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.
  See https://lit.dev/msg/change-in-update for more information. (URL redirected to: https://lit.dev/docs/components/properties/#when-properties-change)

  Have not looked into this yet, but it's an ongoing backlog item to resolve eventually.

  -