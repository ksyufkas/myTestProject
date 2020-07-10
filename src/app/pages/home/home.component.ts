import {Component, OnInit} from '@angular/core';

/**
 * Домашняя страница
 */
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    name: string;

    constructor() {
    }

    ngOnInit(): void {
    }
}
