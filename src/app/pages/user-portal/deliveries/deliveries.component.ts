import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BsLocaleService, defineLocale} from "ngx-bootstrap";
import {ruLocale} from 'ngx-bootstrap/locale';
import {
    DeliveriesService,
    DeliveryStateTypeEnum,
    DeliveryTypeEnum,
    IDelivery,
    IDeliveryGroup,
    IDeliveryPoint
} from "./deliveries.service";

defineLocale('ru', ruLocale);

/** Интерфейс пагинации */
export interface IPagination {
    page: number;
    itemsPerPage: number;
}

/** Класс пагинации */
export class Pagination implements IPagination {
    constructor(
        public page: number = 1,
        public itemsPerPage: number = 25,
    ) {
    }
}

/**
 * Компонент Доставки
 */
@Component({
    selector: 'deliveries',
    templateUrl: './deliveries.component.html',
    styleUrls: ['./deliveries.less'],
    encapsulation: ViewEncapsulation.None
})
export class DeliveriesComponent implements OnInit {
    showFilter: boolean;
    startDate: Date;
    endDate: Date;
    isDatePicker: boolean;
    externalId: string;
    deliveryId: string;
    groupId: string;
    name: string;
    deliveries: (IDelivery | IDeliveryGroup)[];
    deliveryStateTypeEnum: typeof DeliveryStateTypeEnum;
    deliveriesCount: number;
    pagination: IPagination = new Pagination();
    deliveriesToDisplay: (IDelivery | IDeliveryGroup)[];
    isShowPrevButton: boolean;
    isHideNextButton: boolean;

    constructor(
        private localeService: BsLocaleService,
        private deliveriesService: DeliveriesService
    ) {
    }

    ngOnInit(): void {
        this.showFilter = true;
        this.localeService.use('ru');
        this.isDatePicker = false;
        this.deliveryStateTypeEnum = DeliveryStateTypeEnum
        this.deliveries = this.deliveriesService.getDeliveries();
        this.deliveriesCount = this.deliveries.length;
        this.setDeliveriesToDisplay(this.pagination);
    }

    changeVisibleFilter(): void {
        this.showFilter = !this.showFilter;
    }

    getDeliveryTypeText(item: IDeliveryPoint): string {
        let text = '';
        switch (item.type) {
            case DeliveryTypeEnum.Invoices:
                text = 'Счёт-фактуры контрагентам';
                break;
            case DeliveryTypeEnum.Ndg:
                text = 'NDG Absolute Origin';
                break;
            case DeliveryTypeEnum.Toyota:
                text = 'Тойота курьер с паспортом РФ';
                break;
            default:
                text = '';
        }
        return text;
    }

    getStateText(item: IDeliveryPoint): string {
        let text = '';
        switch (item.state) {
            case DeliveryStateTypeEnum.Close:
                text = 'Закрыта';
                break;
            case DeliveryStateTypeEnum.Done:
                text = 'Выполнена';
                break;
            case DeliveryStateTypeEnum.InProgress:
                text = 'Курьер у отправителя';
                break;
            default:
                text = '';
        }
        return text;
    }

    setDeliveriesToDisplay(pagination?: IPagination): void {
        this.pagination.page = pagination ? pagination.page : 1;
        const beginPosition = (this.pagination.page - 1) * this.pagination.itemsPerPage;
        this.deliveriesToDisplay = this.deliveries.slice(
            beginPosition,
            beginPosition + this.pagination.itemsPerPage);
        // При удалении последнего элемента на текущей (не первой) странице
        if (this.deliveriesToDisplay.length === 0 && this.pagination.page !== 1) {
            const newPagination: IPagination = {
                page: this.pagination.page - 1,
                itemsPerPage: this.pagination.itemsPerPage,
            };
            this.setDeliveriesToDisplay(newPagination);
        }
        this.isShowPrevButton = this.pagination.page !== 1;
        this.isHideNextButton = (Math.ceil(this.deliveries.length / this.pagination.itemsPerPage)) === this.pagination.page;
    }

    changeCountElement(newCount: number): void {
        this.pagination.itemsPerPage = newCount;
        this.setDeliveriesToDisplay(this.pagination);
    }
}
