import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close, cart, search, heart, location, arrowBack } from 'ionicons/icons';
import { ProductcardComponent } from 'src/app/home/components/productcard/productcard.component';

@Component({
  standalone: true,
  selector: 'app-shopview',
  templateUrl: './shopview.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./shopview.component.scss'],
  imports: [
    IonHeader,
    IonButtons,
    IonIcon,
    IonButton,
    IonContent,
    IonChip,
    IonLabel,
    IonBadge,
    ProductcardComponent,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    IonBackButton
  ],
})
export class ShopviewComponent implements OnInit {
  selectCategory(event: string) {
    this.selectedCategory = event;
  }

  public selectedCategory: string = 'category1';
  public selectedCateg: string = 'products';
  products = [
    {
      shopname:'test',
      productName: 'Bread',
      shopid: '36289',
      catname: 'retail',
      sp:'',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      images:[],
      isFavorite:true,
      image: 'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },
      {
        shopname:'test',
        productName: 'Laptop',
        shopid: '36289',
        catname: 'retail',
        sp:'',
        type: '71659',
        awaydescr: '0.1km away;', //
        distance: '0.025486912301820566', // meteres
        currency: 'GHS',
        images:[],
        isFavorite:false,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dealswith: 'Groceries and Products',
        ownerid: 'C36453',
        place: 'Mombasa CBD KE',
        contacts: {
          phone: '233209457631',
          email: 'dukagrouptest@stockapp.africa',
        },
      },
  
        {
          shopname:'Anto Bakeries',
          productName: 'Scones',
          shopid: '36289',
          catname: 'retail',
          sp:'',
          type: '71659',
          awaydescr: '0.1km away;', //
          distance: '0.025486912301820566', // meteres
          currency: 'GHS',
          images:[],
          isFavorite:false,
          image: 'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          dealswith: 'Groceries and Products',
          ownerid: 'C36453',
          place: 'Mombasa CBD KE',
          contacts: {
            phone: '233209457631',
            email: 'dukagrouptest@stockapp.africa',
          },
        },
          {
            shopname:'test',
            productName: 'Bread',
            shopid: '36289',
            catname: 'retail',
            sp:'',
            type: '71659',
            awaydescr: '0.1km away;', //
            distance: '0.025486912301820566', // meteres
            currency: 'GHS',
            images:[],
            isFavorite:true,
            image: 'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            dealswith: 'Groceries and Products',
            ownerid: 'C36453',
            place: 'Mombasa CBD KE',
            contacts: {
              phone: '233209457631',
              email: 'dukagrouptest@stockapp.africa',
            },
          
    },
    // {
    //   n\ame: 'Laptop',
    //   shopid: '38355',
    //   category: 'retail',
    //   type: '87546',
    //   awaydescr: '1.51 Km away;', //
    //   distance: '1.506760257099687', // meteres
    //   currency: 'KES',
    //   logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   dealswith: 'fashion and wears',
    //   ownerid: 'C69722',
    //   place: 'Mombasa CBD, Kenya',
    //   contacts: {
    //     phone: '254722794549',
    //     email: 'ken@stockapp.africa',
    //   },
    // },
    // {
    //   name: "Bike",
    //   shopid: '38877',
    //   category: 'retail',
    //   type: '27854',
    //   awaydescr: '1.5 Km away', //
    //   distance: '1.506760257099687', // meteres
    //   currency: 'KES',
    //   logo: ' https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    //   dealswith: 'fashion and wears',
    //   ownerid: 'C69722',
    //   place: 'Mombasa CBD, Kenya',
    //   contacts: {
    //     phone: '254722794549',
    //     email: 'ken@stockapp.africa',
    //   },
    // },
    // {
    //   name: 'Builders Hardware',
    //   shopid: '39451',
    //   category: 'retail',
    //   type: '96431',
    //   awaydescr: '1.47 Km away', //
    //   distance: '1.476760257099687', // meteres
    //   currency: 'KES',
    //   logo: 'https://images.unsplash.com/photo-1560435650-7ec2e17ba926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //   dealswith: 'hardware things',
    //   ownerid: 'C69722',
    //   place: 'Mombasa CBD, Kenya',
    //   contacts: {
    //     phone: '254722794549',
    //     email: 'builders@stockapp.africa',
    //   },
    // },
    // {
    //   name: 'kombani electronics ',
    //   shopid: '39785',
    //   category: 'retail',
    //   type: '19853',
    //   awaydescr: '4.47 Km away', //
    //   distance: '1.476760257099687', // meteres
    //   currency: 'KES',
    //   logo: 'https://images.unsplash.com/photo-1560435650-7ec2e17ba926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //   dealswith: 'hardware things',
    //   ownerid: 'C71233',
    //   place: 'Tiwi, Kenya',
    //   contacts: {
    //     phone: '720968478',
    //     email: 'fkariuki37@gmail.com',
    //   },
    // },
  ];
  constructor(private modalController: ModalController) {
    addIcons({
      close,
      cart,
      search,
      location,
      heart,
      arrowBack
    });
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }
}
