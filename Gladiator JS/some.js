//wersja 1 zgodnie z załażeniami
function some(list_elements, value) {
  if (Array.isArray(list_elements)) {
    console.log("list_elements is an Array")
  }
  else {
    throw new Error("list_elements is not an Array");
  }

  if (typeof(value) == "function") {
    console.log("value is a function")
  }
  else {
    throw new Error("value is not a function")
  }
  for (const elem of list_elements) {
    if (Boolean(value(elem)) == true) {
      return true
    };
  }
  return false
}

//Wersja 2 z warunkowaniem switch chyba lepsza, bo bardziej czytelna i króttsza
function some (list_elements, value) {
  switch (list_elements) {
    case Array.isArray(list_elements) == false:
      throw Error("list_elements is not an Array");
      break;
    case typeof(value) != "function":
      throw Error("value is not a function")
      break;
        };
      }
      for (const elem of list_elements) {
        if (Boolean(value(elem)) == true) {
          return true
      return false
    }
}
