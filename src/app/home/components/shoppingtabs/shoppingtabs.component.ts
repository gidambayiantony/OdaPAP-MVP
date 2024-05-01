import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';

import {
  location,
  reloadCircle,
  heartCircle,
  bagCheck,
  analyticsOutline,
  storefrontOutline,
} from 'ionicons/icons';

import {
  IonCol,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonHeader,
  IonItem,
  IonFooter,
  IonRow,
  Platform,

} from '@ionic/angular/standalone';

import { Subject, takeUntil } from 'rxjs';
import { ShoppingService } from 'src/app/shopping_service/shopping.service';
import { TabService } from 'src/app/services/tab-service.service';
import { OdapapComponent } from '../../views/components/odapap/odapap.component';
import { EntershopinputComponent } from '../entershopinput/entershopinput.component';
import { NearmeComponent } from '../../views/components/nearme/nearme.component';
import { ShoppingfavoritesComponent } from '../../views/components/shoppingfavorites/shoppingfavorites.component';
import { ShoppingrecentComponent } from '../../views/components/shoppingrecent/shoppingrecent.component';
import { ShoppingOrderComponent } from '../../views/components/shopping-order/shopping-order.component';
import { PickdateComponent } from '../pickdate/pickdate.component';
@Component({
  standalone: true,
  selector: 'app-shoppingtabs',
  templateUrl: './shoppingtabs.component.html',
  styleUrls: ['./shoppingtabs.component.scss'],
  imports: [
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonLabel,
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
 IonFooter,
 IonRow,
    ShoppingOrderComponent,
    ShoppingfavoritesComponent,
    ShoppingrecentComponent,
    EntershopinputComponent,
    NearmeComponent,
    IonItem,
    OdapapComponent,
    PickdateComponent,

  ],
})
export class ShoppingtabsComponent implements OnInit {
  private destroy$ = new Subject<void>();

  public sliderValue: number = 80;

  isLargeScreen!: boolean;




  @Output() tabSelected:EventEmitter<string> = new EventEmitter<string>()

  sliderChanged(event: any) {
    // Handle slider changes if needed
  }

  updateValue(event: CustomEvent) {
    this.sliderValue = event.detail.value as number;
  }
  constructor(
    public platform :Platform,
    public shoppingService: ShoppingService,
    public tabservice: TabService //  public commonService : CommonsService,
  ) //  public shoppingService : ShoppingService

  {
    this.isLargeScreen = this.platform.width() > 767; // Adjust the threshold as needed
    addIcons({
      location,
      reloadCircle,
      heartCircle,
      bagCheck,
      analyticsOutline,
      storefrontOutline,
    });
  }

  selectedTab = 'odapap';

  segmentChanged(event: CustomEvent) {
    this.selectedTab = event.detail.value as string;
    this.tabSelected.emit(this.selectedTab)
  }

  ngOnInit() {
    this.observeShoppingTabs();

    this.observeProducts();
  }

  observeShoppingTabs() {
    this.shoppingService.activemaintab$
      .pipe(takeUntil(this.destroy$))
      .subscribe((tab) => {
        this.activemaintab = tab;
      });
  }

  allproducts = [];
  observeProducts() {
    // this.shoppingService.allproducts$.pipe(takeUntil(this.destroy$)).subscribe((allproducts)=>{
    //       this.allproducts = allproducts;
    // });
  }

  //
  activemaintab = 'odapap';
  tabsChange(e: any) {
    this.shoppingService.activemaintab.next(e);
  }
}
