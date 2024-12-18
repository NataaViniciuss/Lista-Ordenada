export class GetElementDom {
    constructor(list, frm, sortList, clear, copy, dest) {
        const getList = document.getElementById(list);
        const getFrm = document.getElementById(frm);
        const getOrderedList = document.getElementById(sortList);
        const bottomClear = document.getElementById(clear);
        const bottomcopy = document.getElementById(copy);
        const screenDestination = document.getElementById(dest);
        if (getList) {
            this.getList = getList;
        }
        else {
            throw Error(`${list} nÃo é um elemento do DOM`);
        }
        if (getFrm) {
            this.getFrm = getFrm;
        }
        else {
            throw Error(`${frm} nÃo é um elemento do DOM`);
        }
        if (getOrderedList) {
            this.getOrderedList = getOrderedList;
        }
        else {
            throw Error(`${sortList} nÃo é um elemento do DOM`);
        }
        if (bottomClear) {
            this.bottomClear = bottomClear;
        }
        else {
            throw Error(`${clear} nÃo é um elemento do DOM`);
        }
        if (bottomcopy) {
            this.bottomCopy = bottomcopy;
        }
        else {
            throw Error(`${copy} nÃo é um elemento do DOM`);
        }
        if (screenDestination) {
            this.screenDestination = screenDestination;
        }
        else {
            throw Error(`${dest} nÃo é um elemento do DOM`);
        }
    }
    valueList() {
        return this.getList.value;
    }
    bottomList() {
        return this.bottomClear;
    }
    clearList() {
        return this.getList.value = '';
    }
    frm() {
        return this.getFrm;
    }
    orderedList() {
        return this.getOrderedList;
    }
    copy() {
        return this.bottomCopy;
    }
    destination() {
        return this.screenDestination;
    }
}
