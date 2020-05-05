//dataEntries - Zmienna z ilością elementów danej strony
let dataEntries = [31, 30, 304, 303, 304, 305, 307, 307, 306, 307, 307, 307,
   307, 307, 307, 307, 299, 304, 306, 307, 306, 304, 307, 306,307, 306, 307,
   307, 307, 305, 305, 306, 307, 307, 305, 307, 306, 307, 307, 307, 307, 36,
   306, 37, 306, 306, 307, 36, 307, 306, 307, 307, 300, 307, 307, 307, 307,
   306, 306, 307, 306, 306, 307, 307, 306, 305, 307, 307, 307, 307, 307, 29,
   22, 286, 257, 27, 257, 257, 257, 257, 257, 257, 257, 257, 25, 257, 257,
   257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257]

/*settings zmienna z ustawieniami dotyczącymi indeksu strony (actualPageIdx) i
*/
let settings = {actualPageIdx:9, entriesOnPage:50};

// Stwórz funkcję paginateArray. Funkcja zwraca ilość elementów na podstawie ustawionego indexu i ogranicza do 50
const paginateArray = (dataEntries, settings) => {
    let entriesOnSelectedPage = dataEntries[settings.actualPageIdx];
    console.log("Obecna liczba elementów na stronie ${entriesOnSelectedPage}");
    if (entriesOnSelectedPage > settings.entriesOnPage) {
      console.log("obecna liczba elementów ${entriesOnSelectedPage}. Ograniczam liczbę elementów do ${settings.entriesOnPage}")
      entriesOnSelectedPage = settings.entriesOnPage
    }
    return entriesOnSelectedPage;
};
