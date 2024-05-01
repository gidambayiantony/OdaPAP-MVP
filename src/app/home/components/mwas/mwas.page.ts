import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-mwas',
  templateUrl: './mwas.page.html',
  styleUrls: ['./mwas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MwasPage implements OnInit {
  quantity:number = 1
  itemsInCart: any[] = [];
  shopCart = inject(ShopDataService);

  constructor(private alertController: AlertController) {
    this.itemsInCart = this.shopCart.cart;
  }

  removeFromCart(item: any) {
    // Show a confirmation message
    this.presentRemoveConfirmation(item);
  }


  decreaseQuantity( ) {
   

    if(this.quantity >= 1 ){
      this.quantity--;

    }
  }

  increaseQuantity() {
    

    if(this.quantity >= 1 ){
      this.quantity++;
      

    }
  }

  
  async presentRemoveConfirmation(item: any) {
    const alert = await this.alertController.create({
      header: 'Remove from Cart',
      message: 'Do you really want to remove this item from the cart?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Save for Later',
          handler: () => {
            // logic to save the item for later
            console.log('Save for Later clicked');
          },
        },
        {
          text: 'Remove Item',
          cssClass: 'remove-btn', 
          handler: () => {
            // logic to remove the item from the cart
            const index = this.itemsInCart.indexOf(item);
            if (index !== -1) {
              this.itemsInCart.splice(index, 1);
            }
          },
        },
      ],
    });

    await alert.present();
  }

 

  ngOnInit() {
  }

}
