export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  provider?: {
    name: string;
    type: 'Клиника' | 'Зоомагазин' | 'Аптека';
    city?: string;
    address?: string;
    phone?: string;
    link?: string; // например, /partners/123
  };
}
