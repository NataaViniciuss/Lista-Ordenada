export class TrasformAndSort {
    static trasformInArray(str) {
        return str.split('\n');
    }
    static sortArray(arr) {
        return arr.sort();
    }
    static insertNumber(arr) {
        let contador = 1;
        return arr.map(itens => contador++ + ' ' + itens);
    }
    static transformInString(arr) {
        return arr.join('\n');
    }
}
