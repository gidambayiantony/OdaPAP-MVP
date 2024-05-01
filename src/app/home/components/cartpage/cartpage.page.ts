import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.page.html',
  styleUrls: ['./cartpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CartpagePage {
  itemsInCart: any[] = [];
  shopCart = inject(ShopDataService);
  emptyCart: any;
  zoomedImage: string | null = null;

  constructor(private alertController: AlertController) {
    this.itemsInCart = this.shopCart.cart;
    addIcons({
      trash
    });
  }

  removeFromCart(item: any) {
    // Show a confirmation message
    this.presentRemoveConfirmation(item);
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  incrementQuantity(item: any) {
    // Ensure quantity is initialized before incrementing
    item.quantity = item.quantity || 1;
    item.quantity++;
  }

  updateQuantity(item: any) {
    // Ensure the quantity is a positive integer
    item.quantity = Math.max(1, Math.floor(item.quantity));
  }

  calculateCartSubtotal(): number {
    return this.itemsInCart.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  confirmCheckout(): void {
    this.presentCheckoutConfirmation();
  }

  async presentCheckoutConfirmation() {
    const alert = await this.alertController.create({
      header: 'Confirm Checkout',
      message: 'Are you sure you want to proceed to checkout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.proceedToCheckout();
          }
        }
      ]
    });

    await alert.present();
  }

  proceedToCheckout(): void {
    // Add logic to navigate to the checkout page or handle the checkout process
    console.log('Proceeding to checkout...');
  }

  toggleImageZoom(imageUrl: string) {
    this.zoomedImage = this.zoomedImage === imageUrl ? null : imageUrl;
  }

  async presentRemoveConfirmation(item: any) {
    const alert = await this.alertController.create({
      header: 'Remove from Cart',
      message: 'Do you want to remove this item from the cart?',
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
}
