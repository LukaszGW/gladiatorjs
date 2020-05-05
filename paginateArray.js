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
	const arrayValidator = Array.isArray(dataEntries)&&dataEntries.length>0
	const settingsValidator = Number.isInteger(settings.actualPageIdx)&&Number.isInteger(settings.entriesOnPage)&&settings.actualPageIdx>0&&settings.entriesOnPage>0
	/*Walidacja dataEntries czy jest Arrayem, i czy zawiera jakieś elementy do paginacji.
	Warunek waliduje również czy*/
	if (arrayValidator&&settingsValidator == true) {
		return  dataEntries.slice(settings.actualPageIdx*settings.entriesOnPage - settings.entriesOnPage,settings.actualPageIdx*settings.entriesOnPage);
	}
};
