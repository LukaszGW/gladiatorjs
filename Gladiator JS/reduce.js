function reduce(list_elements, callback, value=list_elements[0]) {
  if (Array.isArray(list_elements) == false) {
      throw Error("list_elements is not an Array");
    }
  if (list_elements.length == 0) {
    throw Error("list_elements is empty");
    }
  if (typeof(func) != "function") {
    throw Error("value is not a function")
  }
  for (const elem of list_elements) {
      value = callback(value, elem)
  }
  return value
}
