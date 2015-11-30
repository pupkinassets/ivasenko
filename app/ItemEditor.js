import {Component, Template} from 'angular2/angular2';

@Component({
    selector: 'item-editor',
    bind: {
        'item': 'item'
    }
})
@Template({
    inline: `
        <style>
        
        @import "../bower_components/angular-material/angular-material.css";
        md-checkbox.md-checked .md-icon {
            background-color: #039be5;
            color: white;
        }
        </style>
        <md-checkbox [class.md-checked]="item.checked" (click)="item.toggleCheck()">
        <div class="md-label">
            <div class="md-container">
                <div class="md-icon"></div>
            </div>
            <span>
                {{item.name}}
            </span>
        </div>
        </md-checkbox>
        ` 
})
export class ItemEditor {

}