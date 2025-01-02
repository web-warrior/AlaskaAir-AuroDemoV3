# Auro Demo v3 Build TODO's

## Development research TODO's:

### Review how and why Semantic Release and the Conventional Commits are used
The bootstrapped v2 project used node Semantic Release with Conventional Commits, do research to learn more




## Misc TODO's:

### Add "Skip to" link option for keyboard navigators/traversal

### Browser sync is enabled. (applicable to v2 CRA build only ???)

  * I think Browser sync is handled by Vite now, but double check the use of Browser sync with CRA to determine next steps that may be needed. I am guessing Vite just uses it's own HMR (Hot Module Reloading) to replace Browser sync so confirm the use/non-use of Browser sync and update these notes


## Unit testing
| Command | Description
|---|---
| npm test  | Launches the unit test runner in the interactive watch mode // TODO: set up Vite unit testing, NOT SET UP YET

  * Checkout Auro's Automated Testing and run it in a Chrome browser
  * Unit testing made easy look into @open-wc/testing and @web/test-runner @ https://auro.alaskaair.com/generator.


## DONE - Auro Demo v2 Production build was failing TODO's

  <!--
  create optimized production build
  // the original v2 CRA build failed with errors

  customize Vite build in vite.config.mjs
  // env. build variances have dependency on server/host options available, create dynamic env. build files to sue env. variables for both development and production build
  -->


## Build TODO's:

The v2 build had many errors, unsupported packages, and vulnerabilities until I made significant amount of updates to node packages and files during the migration to Vite. Vite has it's own set of issues, and the migration of Sass and Vite resulted in some outstanding warnings that need to be individually addressed to resolve several warnings in both the local terminal output and dev tools console in browser.

After migration and release of v3, there are still a few build issues to research and resolve.


### * Terminal console warning TODO's:

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




## * Resolve warnings of npm package "Vulnerabilities" TODO's:

* X-done-semantic-release/npm package contains vulnerabilities:

  @semantic-release/npm  7.1.0 - 10.0.0-beta.4
      Depends on vulnerable versions of npm
      node_modules/@semantic-release/npm
        semantic-release  18.0.0-beta.1 - 20.1.3
        Depends on vulnerable versions of @semantic-release/npm

  done-Upgraded/Installed React v19 and ran npm audit fix --force and all vulnerabilities from build are resolved





## * Browser console warnings for LIT TODO's:

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


