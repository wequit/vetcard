import { Article } from './types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Правильное питание для щенков: основы и рекомендации',
    excerpt: 'Узнайте, как составить сбалансированный рацион для вашего маленького питомца, чтобы он рос здоровым и сильным.',
    imageUrl: 'https://20927855.fs1.hubspotusercontent-na1.net/hubfs/20927855/Imported_Blog_Media/raw-food-diet-for-dogs.jpg',
    category: 'Питание',
    publishedDate: '2025-06-20',
    author: { name: 'Д-р Елена Иванова', avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    sourceUrl: 'https://example-vet-portal.com/puppy-nutrition',
  },
  {
    id: '2',
    title: 'Первые шаги после появления питомца в доме',
    excerpt: 'Адаптация котенка или щенка в новом доме — важный этап. Мы подготовили для вас чек-лист необходимых действий.',
    imageUrl: 'https://cdn.7days.ru/pic/f86/1002357/1581168/86.jpg',
    category: 'Уход',
    publishedDate: '2025-06-18',
    author: { name: 'Д-р Петр Сидоров', avatarUrl: 'https://randomuser.me/api/portraits/men/44.jpg' },
    sourceUrl: 'https://example-vet-portal.com/first-pet-steps',
  },
  {
    id: '3',
    title: 'Как понять язык тела вашей кошки?',
    excerpt: 'Кошки общаются не только мяуканьем. Положение ушей, хвоста и усов может рассказать о многом. Учимся понимать.',
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
    category: 'Поведение',
    publishedDate: '2025-06-15',
    author: { name: 'Д-р Анна Смирнова', avatarUrl: 'https://randomuser.me/api/portraits/women/46.jpg' },
    sourceUrl: 'https://example-vet-portal.com/cat-body-language',
  },
  {
    id: '4',
    title: 'Обязательные прививки для собак: полный гид',
    excerpt: 'Какие прививки и в каком возрасте необходимо делать вашей собаке, чтобы защитить ее от опасных заболеваний.',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
    category: 'Здоровье',
    publishedDate: '2025-06-12',
    author: { name: 'Д-р Елена Иванова', avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    sourceUrl: 'https://example-vet-portal.com/dog-vaccination',
  },
  {
    id: '5',
    title: 'Груминг в домашних условиях: советы профессионалов',
    excerpt: 'Поддерживать шерсть вашего питомца в идеальном состоянии можно и без посещения салона. Главные секреты и инструменты.',
    imageUrl: 'https://kotipes56.ru/uploads/page/a7a5a953d352547bae001f623f6562eb.jpg',
    category: 'Уход',
    publishedDate: '2025-06-10',
    author: { name: 'Д-р Петр Сидоров', avatarUrl: 'https://randomuser.me/api/portraits/men/44.jpg' },
    sourceUrl: 'https://example-vet-portal.com/home-grooming',
  },
  {
    id: '6',
    title: 'Опасные для животных комнатные растения',
    excerpt: 'Многие популярные домашние растения могут быть токсичны для кошек и собак. Проверьте, безопасен ли ваш дом.',
    imageUrl: 'https://www.bethowen.ru/upload/iblock/f76/f7639d025712931e312a3258e645a00d.jpg',
    category: 'Здоровье',
    publishedDate: '2025-06-05',
    author: { name: 'Д-р Анна Смирнова', avatarUrl: 'https://randomuser.me/api/portraits/women/46.jpg' },
    sourceUrl: 'https://example-vet-portal.com/toxic-plants',
  },
];