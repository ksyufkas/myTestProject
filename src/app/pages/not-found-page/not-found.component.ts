import {Component, OnInit} from '@angular/core';

/**
 * Компонент страницы, которая отображается в случае неизвестного роута
 */
@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
    name: string;

    constructor() {
    }

    ngOnInit(): void {
    }
}
