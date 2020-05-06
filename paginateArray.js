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
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 200, 300];

//settings zmienna z ustawieniami dotyczącymi indeksu strony (actualPageIdx)
let settings = {actualPageIdx:9, entriesOnPage:50};

//Walidacja zmiennej dataEntries
function valid_dataEntries(dataEntries) {
  if (Array.isArray(dataEntries) === false){
    console.error("Zmienna dataEntries nie jest listą");
    return false
  }
  if (dataEntries.length>0 === false) {
    console.error("Zmienna dataEntries jest pusta");
    return false
  }
  if (dataEntries.some(value => value<0)) {
    console.error("Zmienna dataEntries zawiera liczby ujemne");
    return false
  }
  if (dataEntries.every(Number.isInteger) === false) {
    console.error("Zmienna dataEntries zawiera liczby dziesiętne");
    return false
  }
  return true
}

//Walidacja zmiennej settings
function valid_settings(settings, dataEntries) {
  if (settings instanceof Object === false) {
    console.error("Zmienna settings musi być obiektem");
    return false
  }
  if (settings.hasOwnProperty("actualPageIdx")&&settings.hasOwnProperty("entriesOnPage") === false){
    console.error("Zmienna settings musi mieć klucz actualPageIdx i entriesOnPage");
    return false
  }
  if (Object.values(settings).some(value => value<0)) {
    console.error("Obiekt settings musi mieć klucze z wartościami dodatnimi");
    return false
  }
  if (Object.values(settings).every(Number.isInteger) === false) {
    console.error("Zmienna settings musi mieć klucze z wartościami liczb całkowitych");
    return false
  }
  if (Math.ceil(dataEntries.length/50)<settings.actualPageIdx) {
    console.error("Zmienna actualPageIdx przekracza dozwoloną liczbę indeksu");
    return false
  }
  return true
}

// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
  if (valid_settings(settings, dataEntries)&&valid_dataEntries(dataEntries) == true) {
    return dataEntries.slice(settings.actualPageIdx*settings.entriesOnPage - settings.entriesOnPage,settings.actualPageIdx*settings.entriesOnPage);
  }
  return false
};
