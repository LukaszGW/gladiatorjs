function filter(list_elements, func) {
  list_results = []
  if (Array.isArray(list_elements) == false){
      throw Error("list_elements is not an Array");
    };
  if (typeof(func) != "function") {}
      throw Error("value is not a function")
    };
  for (const elem of list_elements) {
    if (func(elem)) == true) {
      list_results.push(elem)
    };
  };
  return list_results
}
