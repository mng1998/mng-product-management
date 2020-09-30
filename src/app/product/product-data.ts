import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Robot',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'A mini cute robot for boys.',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/product1.png',
        tags: ['toy', 'game']
      },
      {
        id: 2,
        productName: 'Mini Ship',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2018',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/product2.png'
      },
      {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2018',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'assets/images/product4.png',
        tags: ['tools', 'hammer', 'construction']
      },
      {
        id: 8,
        productName: 'Monster',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2018',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'assets/images/product3.png'
      },
      {
        id: 10,
        productName: 'Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2018',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'assets/images/product5.png'
      }
    ];
    return { products };
  }
}