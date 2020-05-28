//dataEntries - Zmienna z ilością elementów danej strony
let dataEntries = [31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300,
   31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300,
   31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300,
   31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300,
   31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300,
   31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300]

//settings zmienna z ustawieniami dotyczącymi indeksu strony (actualPageIdx)
let settings = {actualPageIdx:9, entriesOnPage:50};

//Funkcje walidujące
function isPositiveNumber(value) {
   return Number.isInteger(value)&&value>0
}

function isNotEmptyArray(list_values) {
   return Array.isArray(list_values)&&list_values.length !== 0
}

function isSettingHasProperStructure(settings) {
   isObject = typeof(settings) == "object"
   isProperStructure = settings.hasOwnProperty('actualPageIdx')&&settings.hasOwnProperty('entriesOnPage')
   return isObject&&isProperStructure
}

// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
  if (isSettingHasProperStructure(settings)==false) {
    throw Error("settings must be an object and have actualPageidx aned entriesOnPage keys");
  }
  if (isNotEmptyArray(list_values=dataEntries)==false) {
    throw Error("dataEntries must be a list of values");
  };
  if (isPositiveNumber(value=settings.actualPageIdx) == false) {
    throw Error("actualPageIdx is not positive integer")
  }
  if (isPositiveNumber(value=settings.entriesOnPage) == false) {
    throw Error("entriesOnPage is not positive integer")
  }
    {
      start = actualPageIdx*entriesOnPage-entriesOnPage
      end = actualPageIdx*entriesOnPage
      let entriesOnSelectedPage = dataEntries.slice(start, end)
      return entriesOnSelectedPage
      };
    }
  else {
    console.log("Błędnie wprowadzone dane. Sprawdź i wprowadź je jeszcze raz")
  }
}
