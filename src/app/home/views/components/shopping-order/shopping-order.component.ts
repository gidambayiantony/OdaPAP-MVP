import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {addIcons} from 'ionicons'
import {bagHandleOutline} from 'ionicons/icons';
import { IonHeader, IonThumbnail, IonCard, IonCardContent, IonCardTitle, IonImg, IonContent, IonButton, IonToolbar, IonButtons, IonBackButton, IonTitle, IonGrid, IonRow, IonCol, IonLabel, IonList, IonItem, IonIcon, IonCardSubtitle, IonSegment, IonSegmentButton, IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { OrderAnalysisComponent } from "../../../components/orderanalysis/orderanalysis.component";
import { OrderslistComponent } from "../../../components/orderslist/orderslist.component";
@Component({
    standalone: true,
    selector: 'app-shopping-order',
    templateUrl: './shopping-order.component.html',
    styleUrls: ['./shopping-order.component.scss'],
    imports: [IonSegmentButton, IonSegment, IonCardSubtitle,
        IonHeader, IonContent,
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
        CommonModule, OrderAnalysisComponent, OrderslistComponent]
})
export class ShoppingOrderComponent implements OnInit {
ordersanalysis: any 
selectedTab = "myorders";
loadingordersanalysis: any;
getOrderAnalysis() {
throw new Error('Method not implemented.');
}
ordersegment: string | undefined;
  orderCount: number = 0;
  totalAmount: number = 0; // Variable to hold the total amount
countryCurrency: any;
https: any;
selectedProducts: any[] = []; // Declare selectedProducts as an array

segmentChanged(event:CustomEvent){
  this.selectedTab = event.detail.value as string;

}

constructor(){addIcons({bagHandleOutline})}

  ngOnInit() {
    // Initial count and total amount when the component loads
    this.updateOrderCountAndAmount('all');
  }

  filterOrders(selectedValue: string) {
    console.log(`Filtering orders by: ${selectedValue}`);
    
    // Update the order count and total amount based on the selected status
    this.updateOrderCountAndAmount(selectedValue);
  }

  updateOrderCountAndAmount(status: string) {
    // Implement logic to fetch the order count and total amount based on the selected status
    // Placeholder logic
    switch (status) {
      case 'pending':
        this.orderCount = 5; 
        this.totalAmount = 500; 
        this.selectedProducts = [
          {
            name: 'DUKA  COM 12',
            shopid: '36289',
            category: 'retail',
            type: '71659',
            awaydescr: '0.1km away;',
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
            awaydescr: '1.51 Km away;',
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
        ];

        break;
        case 'declined':
          this.orderCount = 20; 
        this.totalAmount = 3000; 
        this.selectedProducts = [
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
        ]

        break;
        case 'All':
          this.orderCount = 3; 
        this.totalAmount = 4500; 
        this.selectedProducts = [
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
            name: 'Trendy Fashions',
            shopid: '38355',
            category: 'retail',
            type: '87546',
            awaydescr: '1.51 Km away;',
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
            name: 'DUKA  COM 12',
            shopid: '36289',
            category: 'retail',
            type: '71659',
            awaydescr: '0.1km away;',
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
          
        ]

      
      
    }
  
  // Additional logic for handling "KES 0 Found" when there is no order history
  if (this.orderCount === 0) {
    this.totalAmount = 0; // Set total amount to 0
  }
}
}