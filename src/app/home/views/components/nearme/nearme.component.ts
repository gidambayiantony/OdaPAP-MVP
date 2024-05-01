import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, inject } from '@angular/core';
import { IonBadge, IonCard, IonCardContent, IonCardTitle, IonChip, IonCol, IonGrid, IonIcon, IonImg, IonLabel, IonRow, IonSegment ,IonSegmentButton, IonText } from '@ionic/angular/standalone';
import { ShoppingfavoritesComponent } from '../shoppingfavorites/shoppingfavorites.component';
import { ViewmodesswitcherComponent } from 'src/app/home/components/viewmodesswitcher/viewmodesswitcher.component';
import { addIcons } from 'ionicons';
import { heart, cart, chevronDownCircleOutline } from 'ionicons/icons';
import { ProductcardComponent } from 'src/app/home/components/productcard/productcard.component';
import { ShopslistComponent } from 'src/app/home/components/shopslist/shopslist.component';
import { register } from 'swiper/element';
import { Product } from 'src/app/interfaces/product_interface';
import { RouterLink } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CategoriesmodalComponent } from 'src/app/home/components/categoriesmodal/categoriesmodal.component';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  standalone:true,
  selector: 'app-nearme',
  templateUrl: './nearme.component.html',
  styleUrls: ['./nearme.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[
    IonSegment,
    IonSegmentButton,
    IonChip,IonIcon,IonLabel,
    CommonModule,
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonRow,
    IonCol,
    IonText,
    IonBadge,
    ViewmodesswitcherComponent,
    IonIcon,
    ProductcardComponent,
    IonGrid,
    ShopslistComponent,
    RouterLink
    
  ]
})
export class NearmeComponent  implements AfterViewInit {
 

  productService = inject(ShopDataService)

  addToCart(product:any){
   this.productService.addToCart(product) 

  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  @Input() test!: () => number;
  public selectedCategory: string = 'category1';
  public selectedCateg: string = 'products';
 isFavorite:boolean = true;

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
      catname: 'Computer',
      sp:'',
      type: '71659',
      awaydescr: '0.1km away;', //
      distance: '0.025486912301820566', // meteres
      currency: 'GHS',
      images:[],
      isFavorite:false,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dealswith: 'Computing Products',
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
        awaydescr: '0.8km away;', //
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
async openBottomSheet() {
  const modal = await this.modalController.create({
    component: CategoriesmodalComponent,
    cssClass: 'bottom-sheet-modal'
  });

  await modal.present();
}
addProductToFav(product:Product){
  
  product.isFavorite = true

}
  constructor(private modalController:ModalController) { 

    addIcons({
      heart, cart, chevronDownCircleOutline
    })
  }
  ngAfterViewInit(): void {
     register()
  }
 
  selectCategory(event: string) {
    this.selectedCategory = event
  }

  selectCateg(event: string) {
    this.selectedCateg = event
  }

 

}
