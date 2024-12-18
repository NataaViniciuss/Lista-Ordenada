export class TrasformAndSort {
    public static trasformInArray(str: string): string[] {
        return str.split('\n');
    }

    public static sortArray(arr: string[]): string [] {
        return arr.sort();
    }

    public static insertNumber(arr: string[]): string [] {
        let contador = 1;
        return arr.map(itens => contador ++ + ' ' + itens)
    }

    public static transformInString(arr: string[]): string {
        return arr.join('\n');
    }
}
