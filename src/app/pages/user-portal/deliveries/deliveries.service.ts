import {Injectable} from "@angular/core";

export type DeliveryStateType = 'inProcess' | 'done' | 'close';
export type DeliveryType = 'invoices' | 'ndg' | 'toyota';

export enum DeliveryStateTypeEnum {
    InProgress = 'inProcess',
    Done = 'done',
    Close = 'close'
}

export enum DeliveryTypeEnum {
    Invoices = 'invoices',
    Ndg = 'ndg',
    Toyota = 'toyota'
}

export interface ICustomer {
    name: string,
    phone: string,
    address: string,
}

export interface IDeliveryPoint {
    state: DeliveryStateType,
    type: DeliveryType,
    number: string,
    date: Date,
    cost: number,
    weight: number,
    sender?: ICustomer,
    recipient: ICustomer,
}

export interface IDelivery {
    isGroup: boolean,
    deliveries: IDeliveryPoint[] | IDeliveryPoint,
    isClose: boolean
}

export interface IDeliveryGroup extends IDelivery {
    groupNumber: string
}

@Injectable()
export class DeliveriesService {

    getDeliveries(): (IDelivery | IDeliveryGroup)[] {
        return [
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            }, {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            }, {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            }, {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: true,
                groupNumber: '2695',
                isClose: false,
                deliveries: [
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    },
                    {
                        state: 'inProcess',
                        type: 'invoices',
                        number: '336838',
                        date: new Date('2018-06-20 20:50'),
                        cost: 920,
                        weight: 2,
                        recipient: {
                            name: 'Денис Константинопольский',
                            phone: '+7 911 260-50-40',
                            address: 'м. Динамо, ул. Генерала Крылова, 130 корпус 2, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: false,
                deliveries: [
                    {
                        state: 'close',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },
            {
                isGroup: false,
                isClose: true,
                deliveries: [
                    {
                        state: 'done',
                        type: 'ndg',
                        number: '336837',
                        date: new Date('2018-06-20 16:20'),
                        cost: 840,
                        weight: 3,
                        sender: {
                            name: 'Константин Александрович',
                            phone: '+7 863 754-19-90',
                            address: 'м. Белорусская, 5-я Ямского Поля ул., 7 корпус 2, Москва',
                        },
                        recipient: {
                            name: 'Анастасия Романова',
                            phone: '+7 921 150-80-30',
                            address: 'м. Динамо, ул. Верхняя Масловка, 25 корпус 1, Москва',
                        },
                    }
                ]
            },

        ];
    }

}