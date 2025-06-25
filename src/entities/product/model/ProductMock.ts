// ProductMocks.ts
import type { Product } from './ProductTypes';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Неодиар',
    description: 'Уникальный современный препарат для лечения острой хронической диареи у кошек и собак. Он способствует восстановлению микрофлоры кишечника и нормализует пищеварение.',
    imageUrl: 'https://img.detmir.st/FA2w7ht4l4BRz_A6C_pdIuC8JU9esTV-Ag8gbMz4ANY/rs:fit:700:700/g:sm/aHR0cHM6Ly9jYXRhbG9nLWNkbi5kZXRtaXIuc3QvbWVkaWEvWHR2UVllX3BLWGk3aldEdlpSVE84VzVsLVhQVy13OXlpRm5BNmZTR0VXTT0uanBlZw.webp',
    provider: {
      name: 'VetClinic Айгерим',
      type: 'Клиника',
      city: 'Бишкек',
      address: 'ул. Московская, 32',
      phone: '+996 700 123 456',
      link: '/partners/aygerim'
    }
  },
  {
    id: '2',
    name: 'Миртацен',
    description: 'Миртацен применяется при пищевых расстройствах у собак и кошек, связанных со снижением аппетита. Также используется для снятия стресса и адаптации животных к новым условиям.',
    imageUrl: 'https://img.detmir.st/TBkfS4pwcqJ3k0c7AdpQ877KCkwTMhFX1xWRVFLNTKc/rs:fit:700:700/g:sm/aHR0cHM6Ly9jYXRhbG9nLWNkbi5kZXRtaXIuc3QvbWVkaWEvZE84d0ZtdnE1T2xxdHNFWjRhamRDR1dOLWVJR3dpaGxwZGVvUC1aQXFqST0uanBlZw.webp',
    provider: {
      name: 'Зоомагазин «Хвостик»',
      type: 'Зоомагазин',
      city: 'Ош',
      address: 'пр. Ленина, 15',
      phone: '+996 770 654 321',
      link: '/partners/hvostik'
    }
  },
  {
    id: '3',
    name: 'Тилозин',
    description: 'Тилозин ТАБ относится к антибактериальным препаратам фармакотерапевтической группы макролиды. Применяется при инфекционных заболеваниях, вызванных чувствительными к тилозину микроорганизмами.',
    imageUrl: 'https://img.detmir.st/6E5cqQ-_SNY242EJrDsOlZ1Ky6HwzaBSG9wiuEAtTaE/rs:fit:700:700/g:sm/aHR0cHM6Ly9jYXRhbG9nLWNkbi5kZXRtaXIuc3QvbWVkaWEvZllPRlRHY3hMcDRBeXFUNlhFZmd3R0I1YWdaNkRoMTU3R0w5a2VUNm1Xbz0uanBlZw.webp',
    provider: {
      name: 'VetPharm',
      type: 'Аптека',
      city: 'Бишкек',
      address: 'ул. Ахунбаева, 67',
      phone: '+996 550 112 233',
      link: '/partners/vetpharm'
    }
  },
  {
    id: '4',
    name: 'Maropital',
    description: 'Маропиталь - эффективное средство для лечения и предотвращения рвоты различного происхождения у домашних животных. Часто назначается при химиотерапии или гастроэнтерите.',
    imageUrl: 'https://img.detmir.st/1301xRphF2zyg-7gSQRT3_SspvS7bk9TDUjzxciYNWg/rs:fit:700:700/g:sm/aHR0cHM6Ly9jYXRhbG9nLWNkbi5kZXRtaXIuc3QvbWVkaWEvZWVOVXA5UVhVYmFDSlBoNWVzSVE4Tzh3TVhBb1hJUEd6U01TU21wUHh4MD0uanBlZw.webp',
    provider: {
      name: 'VetClinic Алтын',
      type: 'Клиника',
      city: 'Кара-Балта',
      address: 'ул. Горького, 10',
      phone: '+996 707 789 000',
      link: '/partners/altyn'
    }
  }
];
