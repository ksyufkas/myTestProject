import {Injectable} from "@angular/core";

export interface IMenuItem {
    name: string;
    link: string;
    iconUrl: string;
}

@Injectable()
export class MenuService {
    getMenuItems(): IMenuItem[] {
        const menuItems = [];
        menuItems.push({
            iconUrl: 'icon--plus',
            link: '/user-portal/order-delivery',
            name: 'Заказать доставку',
        });
        menuItems.push({
            iconUrl: 'icon--truck',
            link: '/user-portal/deliveries',
            name: 'Доставки',
        });
        menuItems.push({
            iconUrl: 'icon--note',
            link: '/user-portal/requests',
            name: 'Заявки',
        });
        menuItems.push({
            iconUrl: 'icon--people',
            link: '/user-portal/contacts',
            name: 'Контакты',
        });
        menuItems.push({
            iconUrl: 'icon--account',
            link: '/user-portal/account',
            name: 'Аккаунт',
        });
        return menuItems;
    }

}