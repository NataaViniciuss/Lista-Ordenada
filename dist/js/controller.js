import { FilterList } from "./filter-list.js";
import { GetElementDom } from "./get-element-dom.js";
import { TrasformAndSort } from "./transform-and-sort.js";
export class Controller {
    orderedList() {
        const getElementDom = new GetElementDom('unordered-list', 'form-list', 'ordered-list', 'clear-list', "bottom-copy", 'destination');
        const valueList = getElementDom.valueList();
        const trasformInArray = TrasformAndSort.trasformInArray(valueList);
        const filterNumbers = FilterList.filterNumbers(trasformInArray);
        const filterSpaces = FilterList.filterSpaces(filterNumbers);
        const filterLowerCase = FilterList.filterLowerCase(filterSpaces);
        const filterOnlySpaces = FilterList.filterOnlySpaces(filterLowerCase);
        const sortList = TrasformAndSort.sortArray(filterOnlySpaces);
        const insertNumber = TrasformAndSort.insertNumber(sortList);
        const transformInString = TrasformAndSort.transformInString(insertNumber);
        const orderedList = transformInString;
        return orderedList;
    }
}
