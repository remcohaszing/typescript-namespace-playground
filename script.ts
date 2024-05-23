/**
 * This file has no imports or exports, so it’s a script.
 */


/**
 * Because of the line `export as namespace React`:
 * - It’s ok to reference the global `React` namespace for types.
 * - It’s ok to reference the global `React` namespace for values,
 *   even though it will crash at runtime.
 */
const element: React.ReactElement = React.createElement()
