import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close , arrowForward, cart} from 'ionicons/icons';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductcardComponent } from '../productcard/productcard.component';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { register } from 'swiper/element';




@Component({
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-product-modal',
  templateUrl: 'product-modal.component.html',
  styleUrls: ['product-modal.component.scss'],
  imports:[
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonLabel,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    ProductcardComponent,
    CommonModule,
     
     

  ]
})
export class ProductModalComponent implements AfterViewInit{

  
  

  products = [
    {
      name: 'Bread',
      shopid: '36289',
      category: 'retail',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      logo: 'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Groceries and Products',
      ownerid: 'C36453',
      place: 'Mombasa CBD KE',
      contacts: {
        phone: '233209457631',
        email: 'dukagrouptest@stockapp.africa',
      },
    },
    {
      name: 'Laptop',
      shopid: '38355',
      category: 'retail',
      type: '87546',
      awaydescr: '1.51 Km away;', //
      distance: '1.506760257099687', // meteres
      currency: 'KES',
      logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'fashion and wears',
      ownerid: 'C69722',
      place: 'Mombasa CBD, Kenya',
      contacts: {
        phone: '254722794549',
        email: 'ken@stockapp.africa',
      },
    },
    {
      name: "Bike",
      shopid: '38877',
      category: 'retail',
      type: '27854',
      awaydescr: '1.5 Km away', //
      distance: '1.506760257099687', // meteres
      currency: 'KES',
      logo: ' https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D',
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
    
   
  constructor(private modalController: ModalController) {
    addIcons({
      close, arrowForward, cart

    })
  }
  ngAfterViewInit(): void {
    register()
  }

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addToCart() {
    // Implement your logic to add the product to the cart
  }
}
