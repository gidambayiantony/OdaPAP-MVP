import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonThumbnail,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonContent,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonCardSubtitle,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonBadge,
  IonAvatar,
  IonInfiniteScroll,
  IonCardHeader,
  IonText,
} from '@ionic/angular/standalone';
import { ShopcardComponent } from '../shopcard/shopcard.component';
import { ShopslistComponent } from '../shopslist/shopslist.component';
@Component({
  standalone: true,
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.scss'],
  imports: [
    IonText,
    IonCardHeader,
    IonInfiniteScroll,
    IonAvatar,
    IonBadge,
    IonSegmentButton,
    IonSegment,
    IonCardSubtitle,
    IonHeader,
    IonContent,
    IonToolbar,
    IonCardContent,
    IonThumbnail,
    IonImg,
    IonCard,
    IonButton,
    IonCardTitle,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonGrid,
    IonSelect,
    IonSelectOption,
    IonRow,
    IonIcon,
    IonCol,
    IonLabel,
    IonList,
    IonItem,
    CommonModule,
    ShopslistComponent,
    ShopcardComponent,
  ],
})
export class OrderslistComponent implements OnInit {
  formatCurrency(arg0: any) {
    throw new Error('Method not implemented.');
  }

  ordersegment: string | undefined;
  orderCount: number = 0;
  totalAmount: number = 0; // Variable to hold the total amount
  countryCurrency: any;
  https: any;
  products: any[] = [
    {
      name: 'Product 1',
      image:
        ' https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Product 2',
      image:
        'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Product 3',
      image:
        'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
    },
  ];
  selectedProducts: any[] = []; // Declare selectedProducts as an array

  constructor(private navCtrl: NavController) {
    addIcons({
      bagHandleOutline,
    });
  }

  ngOnInit() {
    // Initial count and total amount when the component loads
    this.updateOrderCountAndAmount('all');
  }

  viewOrderDetails(order: any) {
    // Navigate to the detailed order view with the selected order details
    this.navCtrl.navigateForward('/order-details', {
      state: { orderDetails: order },
    });
  }
  filterOrders(selectedValue: string) {
    console.log(`Filtering orders by: ${selectedValue}`);

    if (selectedValue.toLowerCase() === 'all') {
      // Handle 'All' status separately
      this.updateOrderCountAndAmount('all');
    } else {
      // Handle other statuses
      this.updateOrderCountAndAmount(selectedValue);
    }
  }

  updateOrderCountAndAmount(status: string) {
    // Placeholder data - Replace this with actual service calls or data fetching logic
    switch (status) {
      case 'pending':
        this.orderCount = 5;
        this.totalAmount = 500;
        this.selectedProducts = [
          {
            name: 'kombani electronics',
            shopid: '39785',
            category: 'retail',
            type: '19853',
            awaydescr: '4.47 Km away',
            distance: '1.476760257099687',
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
            name: 'DUKA  COM 12',
            shopid: '36289',
            category: 'retail',
            type: '71659',
            awaydescr: '0.1km away;', //
            distance: '0.025486912301820566', // meteres
            currency: 'GHS',
            logo: 'https://assets.stockapp.africa/public/uploads/users/C36453/shops/19947/logo/1678187406_70a27a79a49eac929273.jpg',
            dealswith: 'Groceries and Products',
            ownerid: 'C36453',
            place: 'Mombasa CBD KE',
            contacts: {
              phone: '233209457631',
              email: 'dukagrouptest@stockapp.africa',
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
          // Add more pending orders as needed
        ];
        break;
      case 'confirmed':
        this.orderCount = 10;
        this.totalAmount = 1000;
        this.selectedProducts = [
          {
            name: 'Trendy Fashions',
            shopid: '38355',
            category: 'retail',
            type: '87546',
            awaydescr: '1.51 Km away',
            distance: '1.506760257099687',
            currency: 'KES',
            logo: 'https://assets.stockapp.africa/public/uploads/users/C69722/shops/38355/logo/1680729948_88a3d4ea4d374fe09aed.jpg',
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
          // Add more confirmed orders as needed
        ];
        break;
      case 'declined':
        this.orderCount = 20;
        this.totalAmount = 3000;
        this.selectedProducts = [
          {
            name: 'DUKA COM 12',
            shopid: '36289',
            category: 'retail',
            type: '71659',
            awaydescr: '0.1km away',
            distance: '0.025486912301820566',
            currency: 'KES',
            logo: 'https://assets.stockapp.africa/public/uploads/users/C36453/shops/19947/logo/1678187406_70a27a79a49eac929273.jpg',
            dealswith: 'Groceries and Products',
            ownerid: 'C36453',
            place: 'Mombasa CBD KE',
            contacts: {
              phone: '233209457631',
              email: 'dukagrouptest@stockapp.africa',
            },
          },
          // Add more declined orders as needed
        ];
        break;
      case 'all':
        // Use the provided product details for 'all' status
        this.selectedProducts = [
          {
            name: 'kombani electronics',
            shopid: '39785',
            category: 'retail',
            type: '19853',
            awaydescr: '4.47 Km away',
            distance: '1.476760257099687',
            currency: 'KES',
            logo: 'https://images.unsplash.com/photo-1560435650-7ec2e17ba926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            dealswith: 'hardware things',
            ownerid: 'C71233',
            place: 'Tiwi, Kenya',
            contacts: {
              phone: '720968478',
              email: 'fkariuki37@gmail.com',
            },
            orderDate: '2024-02-28', // Add order date
            itemCount: 3, // Add item count
            orderStatus: 'Confirmed', // Add order status
            orderTotal: 4500, // Add order total
            topItems: [
              { name: 'Item 1', quantity: 2 },
              { name: 'Item 2', quantity: 1 },
              { name: 'Item 3', quantity: 3 },
            ],
          },
          // Add more products as needed
        ];
        break;
    }

    // Additional logic for handling "KES 0 Found" when there is no order history
    if (this.orderCount === 0) {
      this.totalAmount = 0;
    }
  }
}
