function filter(list_elements, func) {
  list_results = []
  switch (list_elements) {
    case Array.isArray(list_elements) == false:
      throw Error("list_elements is not an Array");
      break;
    case typeof(value) != "function":
      throw Error("value is not a function")
      break;
    default:
    for (const elem of list_elements) {
      if (Boolean(func(elem)) == true) {
        list_results.push(elem)
      };
    };
  return list_results
  }
}
