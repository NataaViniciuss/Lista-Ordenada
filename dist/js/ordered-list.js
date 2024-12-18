import { Controller } from "./controller.js";
import { GetElementDom } from "./get-element-dom.js";
const getElementDom = new GetElementDom('unordered-list', 'form-list', 'ordered-list', 'clear-list', "bottom-copy");
const controller = new Controller();
getElementDom.frm().addEventListener('submit', (e) => {
    e.preventDefault();
    getElementDom.orderedList().innerHTML = controller.orderedList();
    console.log(controller.orderedList());
});
getElementDom.bottomList().addEventListener('click', (e) => {
    e.preventDefault();
    getElementDom.orderedList().innerHTML = '';
    getElementDom.clearList();
});
getElementDom.copy().addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(controller.orderedList());
    alert('Lista Copiada:' + controller.orderedList());
});
