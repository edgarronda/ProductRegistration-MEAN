import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  productItems = [
    {
      id: 1,
      name: 'VOYAGER FOCUS UC, STANDARD',
      medium: 'Web',
      category: 'Mobile',
      year: 2010,
      registeredOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'VOYAGER 104',
      medium: 'WEB',
      category: 'Mobile',
      year: 2015,
      registeredOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: 'Savi W710, Over-the-head, Monaural, Microsoft',
      medium: 'WEB',
      category: 'Office',
      year: 2016,
      registeredOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Calisto 620, Microsoft',
      medium: 'WEB',
      category: 'Office',
      year: null,
      registeredOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'BackBeat PRO 2, Black and Tan',
      medium: 'WEB',
      category: 'Mobile',
      year: 2015,
      registeredOn: 1457166565384,
      isFavorite: false
    }
  ];

  onProductItemDelete(productItem) { }
}
