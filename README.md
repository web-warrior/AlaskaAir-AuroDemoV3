# Auro Demo v3 VITE/REACT v19 build (based off Alaska Airlines open source Auro Demo v2 build)

Auro Demo v3 was created a the result of migrating the Alaska Airlines' "Auro Demo v2" project, bootstrapped with Create React App, "CRA", to Vite/React v19 build.

Auro Demo v2 project is a scaffold project to get familiar using the Auro Design System, Auro Design Tokens, Auro Web Components, Lit (https://lit.dev/docs/), and React.

* Send any inquires via email to: inquiry.webwarrior@gmail.com

This demo project had to be migrated to Vite because it was originally created with Create React App, CRA, and CRA has been deprecated.

This demo project includes setup instructions and extra info needed or steps taken to replace outdated methods for SASS and other improvements to documentation or source code required for packages, functions, methods or other dependencies no longer supported.

The initial experience getting started using the Auro Demo v2 as a scaffold project proved frustrating because the project had many errors running it locally. I researched all the issues to get the project running locally. Next I used it as a learning opportunity to demonstrate the need to improve documentation and update dependencies or other aspects of the source code or files in order to run the Auro Demo v2 project locally without errors. This process and steps taken to migrate the Auro Demo v2 project to Vite/React v19 build while remaining compatible with the Auro Design System.





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



### Live Auro Demo v3 VITE/REACT v19 Build

View a LIVE v3 build of "Auro Demo v3 VITE/REACT v19 build"

https://eye-4design.org/AuroDemo/ - migrated/updated and maintained by Jenny M 1/1/2025




### Live Auro Demo v2 CRA/React build

View LIVE build of "Auro Demo v2 CRA/REACT build"

https://auro-react-demo.surge.sh/  - created by Alaska Airlines in May of 2021





### Compatibility, compliance and supported browsers

The original app ran in all [supported browsers](http://auro.alaskaair.com/support/browsersSupport).

*Disclaimer* Components in this revised/alternate v3 deployment may or may not be 100% compliant due to ongoing experimentation and testing this demo with the Auro Design System.

Auro v3 has additional components and updated custom UI features implemented using the Auro Desing System UI tokens and web components.





# Auro Demo App build scripts

Depending on your local configuration, this project will work with either `yarn` or `npm`.
For the sake of documentation, the commands will default to `npm`.

## Vite Build command options executed within the root directory of the Auro Demo v3 app:

| Command | Description
|---|---
| npm run start | Runs the app in local "DEVELOPMENT" mode. When the build finishes the Auro Demo v2 project will launch [http://localhost:5173) in the browser.

  || Browser sync and linting in the CLI is enabled. (applicable to v2 CRA build only)

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



| Command | Description
|---|---
| npm test  | Launches the unit test runner in the interactive watch mode // TODO: set up Vite unit testing, NOT SET UP YET

  // TODO:
  * Checkout Auro's Automated Testing and run it in a Chrome browser
  * Unit testing made easy look into @open-wc/testing and @web/test-runner @ https://auro.alaskaair.com/generator.



| Command | Description
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




# Styling with Auro Design Tokens

See Auro development conventions for more detailed styling information https://auro.alaskaair.com/css/conventions





# Auro Design System Browser Support

The app runs and works in all [supported browsers](http://auro.alaskaair.com/support/browsersSupport).

Explore the Auro Demo v3 project source code to see how the Auro web components are structured/used together run in a Vite/React v19 development environment.

*General Disclaimer*----------------------------------------------------------------------------------------------------
Components in this revised/alternate version of the Auro Demo project may or may not be fully compliant.
This project may or may not be updated at anytime and may be subjected to extensive testing to ensure compliance with all browsers/client versions listed on the above URL. In addition, many of the base components may be enhanced with WCAG AA or AAA compliance standards that could deviate from base components and or styles that are utilized in the open source project by utilizing overrides. This is done so that a higher level of compliance is achieved. Deviations from default component usage and/or styles overrides are required for better user experience, responsive content and form interaction improvements to any/all UI web components should be deemed experimental. Comparison to original Auro Design System "out of the box" defaults should reveal any deviations, as well as taking a look at the App.scss for custom style overrides (these may not be optimized because the Auro Design System is vast and strict conventions are proprietary and will require a learning curve period to reach optimal usage patterns, conventions and taxonomy).





# Other References related to Auro Design System

https://www.webcomponents.org/
http://auro.alaskaair.com/support/browsersSupport
https://sass-lang.com/documentation/breaking-changes/import/
https://www.webcomponents.org/