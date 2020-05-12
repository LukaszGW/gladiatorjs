function reduce(list_elements, func, value=list_elements[0]) {
  switch (list_elements) {
    case Array.isArray(list_elements) == false:
      throw Error("list_elements is not an Array");
      break;
    case list_elements.length == 0:
      throw Error("list_elements is empty");
      break;
    case typeof(value) != "function":
      throw Error("In reduce arguments put some function")
      break;
    default:
      for (const elem of list_elements) {
        value = value+elem
      }
      return value
  }
}
