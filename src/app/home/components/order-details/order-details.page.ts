import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OrderDetailsPage implements OnInit {
  orderDetails: any; // Declare orderDetails as a property
orderedit: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Retrieve order details from navigation state
    this.orderDetails = (history.state && history.state.orderDetails) ? history.state.orderDetails : null;

    // Check if order details are available
    if (!this.orderDetails) {
      // Redirect back to the orders list if no details found
      this.navCtrl.navigateBack('/orders');
    }
  }

  continueShopping() {
    //  logic for "Continue Shopping" button
    console.log('Continue Shopping clicked');
  }

  editOrder() {
    //  logic for "Edit Order" button
    console.log('Edit Order clicked');
  }

  cancelOrder() {
    // logic for "Cancel Order" button
    console.log('Cancel Order clicked');
  }
}