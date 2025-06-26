import { Assistant } from './types';

export const mockReminder: Assistant[] = [
    {
        id: '1',
        date: '2025-07-12',
        animalName: 'Рекс',
        assistant_sms: 'Повторная прививка от бешентсва',
        status: 'Сделано',
    },
    {
        id: '2',
        date: '2025-10-01',
        animalName: 'Мурка',
        assistant_sms: 'Плановый осмотр',
        status: 'Запланировано',
    },
    {
        id: '3',
        date: '2025-11-01',
        animalName: 'Рекс',
        assistant_sms: 'Плановый укол от бешенства',
        status: 'Запланировано',
    },
];
