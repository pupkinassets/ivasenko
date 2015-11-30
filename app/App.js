import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
import {TodoStore} from 'app/TodoStore';
import {ItemEditor} from 'app/ItemEditor';

@Component({
    selector: 'app',
    componentServices: [
	  TodoStore
    ]
})
@Template({
    url: 'app/todo.html',
    directives: [Foreach, ItemEditor]
})
class App {
    constructor(store:TodoStore) {
        this.store=store;
    }
}

bootstrap(App);