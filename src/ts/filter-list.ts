export class FilterList {
    
    public static filterNumbers(arr: string[]): string[] {
        return arr.map(itens => itens.replace(/\d+/g, ''));
    }

    public static filterSpaces(arr: string[]): string[] {
        return arr.map(itens => itens.trim());
    }

    public static filterLowerCase(arr: string []): string[] {
        return arr.map(itens => itens.substring(0, 1).toUpperCase() + itens.slice(1));
    }

    public static filterOnlySpaces(arr: string[]): string[] {
        return arr.filter(item => item.trim() !== "");
        
    }
}