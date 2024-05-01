import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonHeader, IonThumbnail, IonCard, IonCardContent, IonCardTitle, IonImg, IonContent, IonButton, IonToolbar, IonButtons, IonBackButton, IonTitle, IonGrid, IonRow, IonCol, IonLabel, IonList, IonItem, IonIcon, IonCardSubtitle, IonSegment, IonSegmentButton, IonSelect, IonSelectOption } from "@ionic/angular/standalone";
@Component({
  standalone: true,
  selector: 'app-guest-popup',
  templateUrl: './guest-popup.component.html',
  styleUrls: ['./guest-popup.component.scss'],
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
    IonItem,]
})
export class GuestPopupComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  userName: string = '';

  constructor(
    private popoverController: PopoverController,
    private router: Router // Inject Router instead of NavController
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  login() {
    // Navigate to the login page
    this.router.navigate(['/login']);
    this.dismiss('login');
  }

  signup() {
    // Navigate to the signup page
    this.router.navigate(['/signup']);
    this.dismiss('signup');
  }

  logout() {
    // Implement your logout logic here
    this.isUserLoggedIn = false;
    this.userName = '';
    this.dismiss('logout');
  }

  dismiss(role: string) {
    // Dismiss the popover with additional data
    this.popoverController.dismiss({ role, userName: this.userName });
  }
}