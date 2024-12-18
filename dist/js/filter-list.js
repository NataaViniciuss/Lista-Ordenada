export class FilterList {
    static filterNumbers(arr) {
        return arr.map(itens => itens.replace(/\d+/g, ''));
    }
    static filterSpaces(arr) {
        return arr.map(itens => itens.trim());
    }
    static filterLowerCase(arr) {
        return arr.map(itens => itens.substring(0, 1).toUpperCase() + itens.slice(1));
    }
}
