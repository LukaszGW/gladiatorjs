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



// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
	const isNotEmptyArray = Array.isArray(dataEntries)&&dataEntries.length>0
	const settingsVariableValidator = Number.isInteger(settings.actualPageIdx)&&Number.isInteger(settings.entriesOnPage)&&settings.actualPageIdx>0&&settings.entriesOnPage>0
	const isNotEmptySettings = settings instanceof Object&&Object.keys(ob).length>0
	/*Walidacja dataEntries czy jest Arrayem, i czy zawiera jakieś elementy do paginacji.
	Warunek waliduje również czy*/
	if (isNotEmptyArray&&isNotEmptySettings&&settingsValidator == true) {
		return  dataEntries.slice(settings.actualPageIdx*settings.entriesOnPage - settings.entriesOnPage,settings.actualPageIdx*settings.entriesOnPage);
	}
	  else if (isNotEmptySettings == false) {
	    console.log("Źle wprowadzone dane zmiennej dataEntries. Zmienną powinna być tablica, która zawiera przynajmniej jeden element")
	  }
	  else if (settingsValidator == false) {
	    console.log("Złe dane w kluczach walidatora. Kluczem walidatora powinna być całkowita liczba dodatnia")
	  }
	  else if (isNotEmptyArray) {
	    console.log("Zmienna settings powinna być obiektem i zawierać klucze actualPageIdx i entriesOnPage. actualPageIdx to index wybranej strony a entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony ")
	  }
    };
