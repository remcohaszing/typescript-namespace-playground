export interface ReactElement {}
export function createElement(): ReactElement



// // This commented code is equivalent to the code above.
// export = React
// declare namespace React {
//   interface ReactElement {}
//   function createElement(): ReactElement
// }



// The code below declares the export as a UMD module.
export as namespace React
