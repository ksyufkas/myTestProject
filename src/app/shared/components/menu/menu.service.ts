import {Injectable} from "@angular/core";

export interface IMenuItem {
    name: string;
    link: string;
    icon: string;
}

@Injectable()
export class MenuService {
    getMenuItems(): IMenuItem[] {
        const menuItems = [];
        menuItems.push({
            icon: 'plus',
            link: '/user-portal/order-delivery',
            name: 'Заказать доставку',
        });
        menuItems.push({
            icon: 'truck',
            link: '/user-portal/deliveries',
            name: 'Доставки',
        });
        menuItems.push({
            icon: 'note',
            link: '/user-portal/requests',
            name: 'Заявки',
        });
        menuItems.push({
            icon: 'people',
            link: '/user-portal/contacts',
            name: 'Контакты',
        });
        menuItems.push({
            icon: 'account',
            link: '/user-portal/account',
            name: 'Аккаунт',
        });
        return menuItems;
    }

}