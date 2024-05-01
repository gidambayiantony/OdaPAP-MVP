import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonAvatar, IonBadge, IonButton, IonIcon, IonInput, IonItem, IonLabel ,IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { storefrontOutline, locationOutline, heart } from 'ionicons/icons';
import { ProductModalComponent } from '../product-modal/product-modal.component';
 


@Component({
  standalone:true,
  selector: 'app-singleproductlistview',
  templateUrl: './singleproductlistview.component.html',
  styleUrls: ['./singleproductlistview.component.scss'],
  imports:[
    IonAvatar,
    IonButton,
    CommonModule,
    IonInput,
    IonIcon,
    IonItem,
    IonLabel,
    IonBadge,
    IonImg,
    FormsModule
  ]
})
export class SingleproductlistviewComponent  implements OnInit {

  public sliderValue: number = 0;

  updateValue(event: CustomEvent) {
    this.sliderValue = event.detail.value as number;
  }
  
  
  product = {

    favorited:true,
    qtyincart:56,
    images:[
      "https://media.self.com/photos/599c997a774b667d3bbe1214/4:3/w_2560%2Cc_limit/groceries-family-month.jpg"
    ],
    shopname:"Njuguna Stores",
    catname:"Grocery",
    awaydescr:"10km away",
    currency:"kes",
    number:199,
    uom:"UOM",
    sp:20


  }

  
 

  constructor(private modalController:ModalController) { 

    addIcons({
    storefrontOutline,
    locationOutline,
    heart
    })
  }
  

  ngOnInit() {}


  openProductModal() {
    this.modalController
      .create({
        component: ProductModalComponent,
        componentProps: {
          product: this.product,
        },
      })
      .then((modal) => modal.present());
  }
  openProduct(){

  }

  addToFavorites(){

  }

  increaseQtyInCart(){

  }

  decreaseQtyInCart(){}
}
