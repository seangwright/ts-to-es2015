# TS to ES2015

## Description

This project transpiles Typescript (using ES Modules) to [ES2015 compliant Javascript](http://2ality.com/2014/09/es6-modules-final.html) still using ES Modules and transpiles CommonJs modules installed via `npm` to ES Modules via [Rollup](https://github.com/rollup/rollup).

The `index.html` has a module script tag which causes a request to the server for that ES Module file. That file also has imports from other modules which are then requested by the browser. Once the modules are loaded the app runs.

The app uses a `support.ts` file as way of separating the orignal ES Modules from imported CommonJs modules. `support.ts` is transpiled to Javascript but its dependencies are not resolved by the Typescript compiler. Instead, Rollup follows the import and bundles all required Node modules into a `support.js` ES Module.

`lite-server`

## How to run

`npm i`

`npm start`

## Requirements

A browser with ES module support

## Resources

    https://jakearchibald.com/2017/es-modules-in-browsers/

    http://caniuse.com/#feat=es6-module

    https://pawelgrzybek.com/native-ecmascript-modules-in-the-browser/

    https://youtu.be/fIP4pjAqCtQ?t=24m56s (Explaination of how to use a 'support' module)