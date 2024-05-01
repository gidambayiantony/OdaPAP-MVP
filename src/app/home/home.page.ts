import { Component, OnInit, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  InfiniteScrollCustomEvent,
  IonBadge,
  IonLabel,
  IonAvatar,
  IonItem,
  IonList,
  IonLoading,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonAlert,IonRow,IonCol,IonInput,IonButton,
  IonRange,
  
 
  IonMenu,
  IonButtons,
  IonMenuButton,
   
  IonIcon,
  IonTabButton,
  IonTabs,
  IonTabBar,
  IonSegmentButton,
  IonSegment,
  PopoverController,
} from '@ionic/angular/standalone';
import { ShoppingSearchComponent } from './components/shopping-search/shopping-search.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {searchOutline , timerOutline, home,apps, cart} from 'ionicons/icons';
import { GuestloginbtnComponent } from './components/guestloginbtn/guestloginbtn.component';
import { Router, RouterLink } from '@angular/router';
import { ShoppingsectionsComponent } from './components/shoppingsections/shoppingsections.component';
import { NewsidemenuComponent } from './components/newsidemenu/newsidemenu.component';
import { ShoppingSidemenuComponent } from './components/shopping-sidemenu/shopping-sidemenu.component';
import { ShoppingtabsComponent } from './components/shoppingtabs/shoppingtabs.component';
import { OdapapComponent } from './views/components/odapap/odapap.component';
import { GuestPopupComponent } from './components/guest-popup/guest-popup.component';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product_interface';
import { ShopDataService } from '../services/shop-data.service';
import { PickdateComponent } from './components/pickdate/pickdate.component';
import { NearmeComponent } from './views/components/nearme/nearme.component';
import { ShoppingOrderComponent } from './views/components/shopping-order/shopping-order.component';
 
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
 ShoppingSidemenuComponent,
  NewsidemenuComponent,
    GuestloginbtnComponent,
    GuestPopupComponent,
    CommonModule,
    ShoppingsectionsComponent,
    IonTabButton,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonAvatar,
    ShoppingSearchComponent,
    IonButton,
    IonIcon,
    IonTabs,
    IonTabBar,
    ShoppingtabsComponent,
    IonSegmentButton,
    IonCol,
    IonSegment,
    OdapapComponent,
    IonRange,
    CommonModule,
    FormsModule,
   RouterLink,
   IonBadge,
  PickdateComponent,
   NearmeComponent,
   ShoppingOrderComponent
    
  ],
})
export class HomePage implements OnInit {

  shopCart:Product[] = []

  
  shopDataService = inject(ShopDataService)

  selectedTab: string = 'odapap'; // Replace 'default' with the default tab or appropriate value

  // Method to update the selected tab
  updateSelectedTab(tabName: string) {
    this.selectedTab = tabName;
  }

  addProduct(){
  

    console.log(this.shopCart)
  }

  ngOnInit(): void {
    this.shopCart = this.shopDataService.cart  }
  
  test = signal(0)

  public sliderValue: number = 0;

  updateValue(event: CustomEvent) {
    this.sliderValue = event.detail.value as number;
  }
 
  segmentChanged(event: CustomEvent) {
    this.selectedTab = event.detail.value as string;
  }

  constructor(
    private popController:PopoverController,
    public router  : Router,
  ) {
    addIcons({searchOutline, timerOutline, home, apps, cart})
  }

  async presentPopover(event: Event) {
    const popover = await this.popController.create({
      component: PickdateComponent,
      event: event,
      translucent: true,
    });
    return await popover.present();
  }

  logScrolling(ev:any){

  }

  logScrollStart(ev:any){

  }

  logScrollEnd(ev:any){

  }
  doRefresh(ev:any){

  }

  toggleSearch(){ 
        this.router.navigate(['/search']);  
  }


}
