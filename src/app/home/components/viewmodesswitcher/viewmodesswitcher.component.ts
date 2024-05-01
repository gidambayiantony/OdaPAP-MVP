import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonLabel, IonRow, IonSegment, IonSegmentButton ,IonContent, IonCardContent } from '@ionic/angular/standalone';
import { ShopslistComponent } from '../shopslist/shopslist.component';
import { ProductslistviewComponent } from '../productslistview/productslistview.component';
import { Product } from 'src/app/interfaces/product_interface';

@Component({
  standalone:true,
  selector: 'app-viewmodesswitcher',
  templateUrl: './viewmodesswitcher.component.html',
  styleUrls: ['./viewmodesswitcher.component.scss'],
  imports:[
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    CommonModule,
 
    ProductslistviewComponent,
    IonContent,
    ShopslistComponent

  ]
})
export class ViewmodesswitcherComponent   {
  categorytype ="retails";
  selectedTab ='products'
  @Input() products: {
    shopname: string;
    productName: string;
    shopid: string;
    catname: string;
    sp: string;
    type: string;
    awaydescr: string;
    distance: string;
    currency: string;
    images: never[];
    isFavorite: boolean;
    image: string;
    dealswith: string;
    ownerid: string;
    place: string;
    contacts: {
      phone: string;
      email: string;
    };
  }[] = [];
  

  segmentChanged(event: CustomEvent) {
    this.selectedTab = event.detail.value as string;
  }

  constructor() { }

  

  switchViewMode(){
    
  }

}
