// import * as React from './react'
// import React = require('./react')


/**
 * This line makes the file a module.
 */
export {}


/**
 * In modules, only types are affected by `export as namespace React`.
 * - It’s ok to use `React` in type annotations.
 * - `React` must be imported to allow using it in values.
 */
const element: React.ReactElement = React.createElement()
