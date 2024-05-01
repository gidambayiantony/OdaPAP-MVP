import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EntershopinputComponent } from 'src/app/home/components/entershopinput/entershopinput.component';
import { ShopslistComponent } from 'src/app/home/components/shopslist/shopslist.component';
import { TabService } from 'src/app/services/tab-service.service';
import { ShoppingService } from 'src/app/shopping_service/shopping.service';
import {
  IonRange,
  IonLabel,
  IonItem,
  IonIcon,
  IonImg,
  IonAvatar,
  IonButton,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { location , locationOutline} from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-odapap',
  standalone: true,
  templateUrl: './odapap.component.html',
  styleUrls: ['./odapap.component.scss'],
  imports: [
    IonButton,
    IonAvatar,
    IonImg,
    IonIcon,
    EntershopinputComponent,
    ShopslistComponent,
    IonItem,
    IonRange,
    IonLabel,
    CommonModule,
    IonAvatar,

    FormsModule,
  ],
})
export class OdapapComponent implements OnInit {
  public sliderValue: number = 20;
  private destroy$ = new Subject<void>();

  sliderChanged(event: any) {
    // Handle slider changes if needed
  }

  updateValue(event: CustomEvent) {
    this.sliderValue = event.detail.value as number;
  }
  constructor(
    public shoppingService: ShoppingService,
    public tabservice: TabService
  ) {
    addIcons({
      location,
      locationOutline
    });
  }

  ngOnInit() {
    this.observe();
    this.tabservice.selectedTab$.subscribe((selectedTab) => {
      // Do something with the selected tab in Tab 1 component
    });
  }

  activemaintab = 'odapap';

  observe() {
    this.shoppingService.activemaintab$
      .pipe(takeUntil(this.destroy$))
      .subscribe((tab) => {
        this.activemaintab = tab;
      });
  }
}
