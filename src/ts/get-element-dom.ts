export class GetElementDom {
    private getList: HTMLTextAreaElement;
    private getFrm: HTMLFormElement;
    private getOrderedList: HTMLTextAreaElement;
    private bottomClear: HTMLInputElement;
    private bottomCopy: HTMLInputElement;

    constructor(list: string, frm: string, sortList: string, clear: string, copy: string) {
        const getList = document.getElementById(list)as HTMLTextAreaElement;
        const getFrm = document.getElementById(frm)as HTMLFormElement;
        const getOrderedList = document.getElementById(sortList)as HTMLTextAreaElement;
        const bottomClear = document.getElementById(clear)as HTMLInputElement;
        const bottomcopy = document.getElementById(copy)as HTMLInputElement;

        if (getList) {
            this.getList = getList;
        } else {
            throw Error(`${list} nÃo é um elemento do DOM`);
        } if (getFrm) {
            this.getFrm = getFrm;
        } else {
            throw Error(`${frm} nÃo é um elemento do DOM`);
        } if (getOrderedList) {
            this.getOrderedList = getOrderedList;
        } else {
            throw Error(`${sortList} nÃo é um elemento do DOM`);
        } if (bottomClear) {
            this.bottomClear = bottomClear;
        } else {
            throw Error(`${clear} nÃo é um elemento do DOM`);
        } if (bottomcopy) {
            this.bottomCopy = bottomcopy;
        } else {
            throw Error(`${copy} nÃo é um elemento do DOM`);
        }

    }

    public valueList(): string {
        return this.getList.value;
    }

    public bottomList(): HTMLInputElement {
        return this.bottomClear;
    }

    public clearList(): string {
        return this.getList.value = '';
    }

    public frm(): HTMLFormElement {
        return this.getFrm;
    }

    public orderedList(): HTMLTextAreaElement {
        return this.getOrderedList;
    }

    public copy(): HTMLInputElement {
        return this.bottomCopy;
    }

}