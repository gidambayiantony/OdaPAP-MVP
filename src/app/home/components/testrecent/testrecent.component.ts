import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/interfaces/product_interface';
import {
  IonBadge,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonRow,
} from '@ionic/angular/standalone';
import { ProductcardComponent } from '../productcard/productcard.component';
import { ViewmodesswitcherComponent } from '../viewmodesswitcher/viewmodesswitcher.component';
import { ShopslistComponent } from '../shopslist/shopslist.component';
import { CommonModule } from '@angular/common';
import { ProductslistviewComponent } from '../productslistview/productslistview.component';

@Component({
  standalone:true,
  selector: 'app-testrecent',
  templateUrl: './testrecent.component.html',
  styleUrls: ['./testrecent.component.scss'],
  imports:[
    IonItem,
    IonLabel,
    IonCardTitle,
    IonCardSubtitle,
    IonProgressBar,
   ShopslistComponent,
    ViewmodesswitcherComponent,
    ProductslistviewComponent,
    CommonModule,
    IonChip,
    IonRow,
    IonGrid,
    IonCol,
    ProductcardComponent,
    IonBadge,
    RouterLink

  ]

})
export class TestrecentComponent  implements OnInit {

  gettingfavorites = true;

  public selectedCategory: string = 'category1';
  public selectedCateg: string = 'products';
  isFavorite: boolean = true;

  selectCategory(event: string) {
    this.selectedCategory = event;
  }

  selectCateg(event: string) {
    this.selectedCateg = event;
  }

  addProductToFav(product: Product) {
    product.isFavorite = true;
  }

  products = [
    {
      shopname: 'test',
      productName: 'Bread',
      shopid: '36289',
      catname: 'retail',
      sp: '',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      images: [],
      isFavorite: true,
      image:
        'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },
    {
      shopname: 'test',
      productName: 'Laptop',
      shopid: '36289',
      catname: 'retail',
      sp: '',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      images: [],
      isFavorite: false,
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },

    {
      shopname: 'test',
      productName: 'Bread',
      shopid: '36289',
      catname: 'retail',
      sp: '',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      images: [],
      isFavorite: true,
      image:
        'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },
    {
      shopname: 'test',
      productName: 'Bread',
      shopid: '36289',
      catname: 'retail',
      sp: '',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      images: [],
      isFavorite: true,
      image:
        'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },
    
  ];
  favorites = [
    {
      name: 'DUKA  COM 12',
      shopid: '36289',
      category: 'retail',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      logo: 'https://assets.stockapp.africa/public/uploads/users/C36453/shops/19947/logo/1678187406_70a27a79a49eac929273.jpg',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },
    {
      name: 'Trendy Fashions',
      shopid: '38355',
      category: 'retail',
      type: '87546',
      awaydescr: '1.51 Km away;', //
      distance: '1.506760257099687', // meteres
      currency: 'KES',
      logo: 'https://assets.stockapp.africa/public/uploads/users/C69722/shops/38355/logo/1680729948_88a3d4ea4d374fe09aed.jpg',
      dealswith: 'fashion and wears',
      ownerid: 'C69722',
      place: 'Mombasa CBD, Kenya',
      contacts: {
        phone: '254722794549',
        email: 'ken@stockapp.africa',
      },
    },
    {
      name: "D's & K's Biz",
      shopid: '38877',
      category: 'retail',
      type: '27854',
      awaydescr: '1.5 Km away', //
      distance: '1.506760257099687', // meteres
      currency: 'KES',
      logo: 'https://assets.stockapp.africa/public/uploads/users/C69722/shops/38877/logo/1680729994_39daf804e41522d57698',
      dealswith: 'fashion and wears',
      ownerid: 'C69722',
      place: 'Mombasa CBD, Kenya',
      contacts: {
        phone: '254722794549',
        email: 'ken@stockapp.africa',
      },
    },
    {
      name: 'Builders Hardware',
      shopid: '39451',
      category: 'retail',
      type: '96431',
      awaydescr: '1.47 Km away', //
      distance: '1.476760257099687', // meteres
      currency: 'KES',
      logo: 'https://images.unsplash.com/photo-1560435650-7ec2e17ba926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      dealswith: 'hardware things',
      ownerid: 'C69722',
      place: 'Mombasa CBD, Kenya',
      contacts: {
        phone: '254722794549',
        email: 'builders@stockapp.africa',
      },
    },
    {
      name: 'kombani electronics ',
      shopid: '39785',
      category: 'retail',
      type: '19853',
      awaydescr: '4.47 Km away', //
      distance: '1.476760257099687', // meteres
      currency: 'KES',
      logo: 'https://images.unsplash.com/photo-1560435650-7ec2e17ba926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      dealswith: 'hardware things',
      ownerid: 'C71233',
      place: 'Tiwi, Kenya',
      contacts: {
        phone: '720968478',
        email: 'fkariuki37@gmail.com',
      },
    },
  ];

  constructor() { }

  ngOnInit() {}

}
