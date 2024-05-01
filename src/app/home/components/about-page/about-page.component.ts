import { Component, OnInit, inject } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonContent,
  IonChip,
  IonLabel,
  IonBadge,
  IonRow,
  IonGrid,
  IonCol,
  NavController,
  IonAvatar,
  IonImg,
  IonSegment,
  IonSegmentButton,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  arrowBack,
  search,
  heart,
  cart,
  location,
  storefrontOutline,
  reloadCircle,
  heartCircle,
  helpOutline,
  bagCheck,
} from 'ionicons/icons';
import { ProductcardComponent } from '../productcard/productcard.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Shop } from 'src/app/interfaces/shop_interface';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { ShoppingrecentComponent } from '../../views/components/shoppingrecent/shoppingrecent.component';

@Component({
  standalone: true,
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonContent,
    IonChip,
    IonLabel,
    IonBadge,
    IonRow,
    IonGrid,
    IonCol,
    ProductcardComponent,
    CommonModule,
    IonAvatar,
    IonImg,
    IonSegment,
    IonSegmentButton,
    ShoppingrecentComponent,
    RouterLink
  ],
})
export class AboutPageComponent implements OnInit {
  shopId!: string;
  selectedShop: any;

  all = ["one", "two", "three"]

  pending = ["five", "six", "seven"]

  confirmed = ["seven", "eight", "seven", "rwww"]






  shopDataService = inject(ShopDataService);
  selectedTab = 'shop';
  selectCategory(event: string) {
    this.selectedCategory = event;
  }

  segmentChanged(event: CustomEvent) {
    this.selectedTab = event.detail.value as string;
  }

  public selectedCategory: string = 'category1';
  public selectedCateg: string = 'products';

  products = [
    {
      shopname: 'test',
      itemsInCart:[],
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
      shopname: 'Anto Bakeries',
      productName: 'Scones',
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
  constructor(
    private route: ActivatedRoute,
    //implements the back navigation
    private navcontroller: NavController
  ) {
    addIcons({
      arrowBack,
      search,
      heart,
      cart,
      location,
      storefrontOutline,
      reloadCircle,
      heartCircle,
      helpOutline,
      bagCheck,
    });
  }

  goBack() {
    this.navcontroller.back();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.shopId = params['shopId'];
      console.log(this.shopId);

      this.selectedShop = this.shopDataService.dummyshops.find(
        (shop) => shop.shopid === this.shopId
      );

      console.log(this.selectedShop);
      console.log(this.all.length)
    });
  }
}
