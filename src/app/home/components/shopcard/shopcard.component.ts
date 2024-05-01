import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonAvatar, IonButton, IonIcon, IonImg, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Shop } from 'src/app/interfaces/shop_interface';
import { ShopviewComponent } from '../../views/components/shopview/shopview.component';
import { ShoppingrecentComponent } from '../../views/components/shoppingrecent/shoppingrecent.component';

@Component({
  standalone:true,
  selector: 'app-shopcard',
  templateUrl: './shopcard.component.html',
  styleUrls: ['./shopcard.component.scss'],
  imports:[
    IonItem,
    IonAvatar,
    IonImg,
    IonButton,
    IonLabel,
    IonIcon,
    ShoppingrecentComponent
  ]
})
export class ShopcardComponent  implements OnInit {
  @Input() shop!:Shop



  constructor(private modalController:ModalController) { }

  // openShopModal() {
  //   this.modalController
  //     .create({
  //       component: ShopviewComponent,
  //       // componentProps: {
  //       //   product: this.product,
  //       // },
  //     })
  //     .then((modal) => modal.present());
  // }

  ngOnInit() {}

}
