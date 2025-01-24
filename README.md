# Auro Demo v3 VITE/REACT v19 build

(v3 is based off Alaska Airlines open source Auro Demo v2 build)

Auro Demo v3 was created as a result of migrating the "Auro Demo v2" project to Vite/React v19 build and adding Lit to build reusable components. Auro v3 will eventually have additional web components and a few custom UI features to demonstrate some unique use cases using the Auro Design System. Stay tuned for additional updates coming soon.

Auro Demo v2 project was created in 2021 by Alaska Airlines and is a scaffold project of a simple single page demo that uses Sass and Create React App.

* Send any inquires about Aruo Demo v3 to: inquiry.webwarrior@gmail.com



# The Auro Demo v3 project demonstrates usage of an open source design system using design tokens to build unique web components with Auro Design System

To run the Auro Demo v3 VITE/REACT v19 build locally, clone it or download it from git repo:

```bash
git clone https://github.com/web-warrior/AlaskaAir-AuroDemoV3
```


## To run the Auro Dmeo v3 project locally
Open terminal and navigate to the AlaskaAir-AuroDemoV3 root folder and run the following commands:

npm install
npm audit fix
npm run start



### Live Auro Demo v3 VITE/REACT v19 Build

View a LIVE v3 build of "Auro Demo v3" that uses VITE/REACT v19 build with SASS/SCSS and Lit.

https://eye-4design.org/AuroDemo/ - migrated/updated and maintained by Jenny M as of 1/1/2025, and is used for research and reference purposes




### Live Auro Demo v2 CRA/React build

View LIVE build of "Auro Demo v2 CRA/REACT build"

 - created by Alaska Airlines in May of 2021, a few updates were made recently in 2024 to fix the demo build that I discovered was broken when I was asked to try it out.




### Compatibility, compliance and supported browsers

The original app ran in all [supported browsers](http://auro.alaskaair.com/support/browsersSupport).

*Disclaimer* Components in this revised/alternate v3 deployment may or may not be 100% a11y compliant due to ongoing experimentation and testing this demo with the Auro Design System.







# Auro Demo App build commands

Depending on your local configuration, this project will work with either `yarn` or `npm`.
For the sake of documentation, the commands will default to `npm`.

## Vite Build command options executed within the root directory of the Auro Demo v3 app:

| Command | Description
|---|---
| npm run start | Runs the app in local "DEVELOPMENT" mode. When the build finishes the Auro Demo v2 project will launch [http://localhost:5173) in default browser client.




| Command | Description
|---|---
| npm test  | // unit testing NOT SET UP YET




| Command | Description
|---|---
| npm build | Runs the app in PRODUCTION mode creating a deployable build.


NOTES: to manually flush the local development build "cache" use this cmd in console
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

