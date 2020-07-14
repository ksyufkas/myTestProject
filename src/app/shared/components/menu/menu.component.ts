import {Component, OnInit} from '@angular/core';
import {IMenuItem, MenuService} from "./menu.service";
import {Router} from "@angular/router";

/**
 * Компонент меню навигации
 */
@Component({
    selector: 'my-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.less']
})
export class MyMenuComponent implements OnInit {
    menuItems: IMenuItem[];
    currentItem: IMenuItem;
    isMenuOpened: boolean;
    primaryMenuItems: IMenuItem[];

    constructor(
        private router: Router,
        private menuService: MenuService
    ) {
    }

    ngOnInit(): void {
        this.isMenuOpened = false;
        this.menuItems = this.menuService.getMenuItems();
        this.primaryMenuItems = [];
        this.primaryMenuItems.push({
            icon: 'exit',
            link: 'logout',
            name: 'Выход',
        });
        this.primaryMenuItems.push({
            icon: 'back',
            link: 'site',
            name: 'Вернуться на сайт',
        });
        const currentElement = this.menuItems.find((item) => {
            return item.link === this.router.url;
        });
        if (currentElement) {
            this.currentItem = currentElement;
        } else {
            this.router.navigate(['/user-portal/deliveries']);
        }
    }

    changeMenuVisible(): void {
        this.isMenuOpened = !this.isMenuOpened;
    }

    changeCurrentSection(item): void {
        this.currentItem = item;
        this.changeMenuVisible();
    }
}
