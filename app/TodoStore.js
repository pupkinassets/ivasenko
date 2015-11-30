export class TodoStore {
    constructor() {
        this.load();
    }
    save() {
        window.localStorage['todoItems']=JSON.stringify(this.items);
    }
    addItem(name, checked) {
        this.items.push(new Item(name,checked));
    }
    clear() {
        this.items.length=0;
    }
    load() {
        this.items=[];
        let itemsStr=window.localStorage['todoItems'];
        if(itemsStr) {
            JSON.parse(itemsStr).forEach((e) => {
                this.addItem(e.name, e.checked);
            });
        }
    }
}


class Item {
    constructor (name, checked){
        this.name = name;
        this.checked=checked || false;
    }
    toggleCheck() {
        this.checked=!this.checked;
    }
}