export function isNodeList(el) {
  // Only NodeList has the "item()" function
  return el && typeof el.item !== "undefined"; 
}