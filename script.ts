/**
 * This file has no imports or exports, so it’s a script.
 */


/**
 * Because of the line `export as namespace React`:
 * - It’s ok to reference the global `React` namespace for types.
 * - It’s ok to reference the global `React` namespace for values,
 *   even though it will crash at runtime.
 * - It’s (correctly) not ok to reference the `React` namespace for values if
 *   `module` is set to `node16` or `nodenext`.
 */
const element: React.ReactElement = React.createElement()
