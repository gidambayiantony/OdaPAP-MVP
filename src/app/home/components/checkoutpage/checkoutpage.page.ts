import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.page.html',
  styleUrls: ['./checkoutpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CheckoutpagePage implements OnInit {
  itemsInCart: any[] = [];
  cartItemNo: any;
getTotalAmount: any;
completeOrder: any;
calculateEstimatedDeliveryTime: any;

  // Inject ShopDataService in the constructor
  constructor(private shopCart: ShopDataService) {}

  ngOnInit() {
    // Retrieve items from the shopping cart
    this.itemsInCart = this.shopCart.cart;
    console.log(this.itemsInCart);

    // Calculate the number of cart items
    this.cartItemNo = this.itemsInCart.length;
  }

  // Add any additional logic or methods related to the checkout page here
}

