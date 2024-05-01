import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonChip, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';
import { PopoverController } from '@ionic/angular'; // Import PopoverController
import { GuestPopupComponent } from '../guest-popup/guest-popup.component'; // Import your guest popup component

@Component({
  standalone: true,
  selector: 'app-guestloginbtn',
  templateUrl: './guestloginbtn.component.html',
  styleUrls: ['./guestloginbtn.component.scss'],
  imports:[IonChip,IonLabel, CommonModule ,IonIcon]
})
export class GuestloginbtnComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  userName: string = '';

  constructor(private popoverController: PopoverController) {
    addIcons({
      person,
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  async openGuestPopup() {
    const popover = await this.popoverController.create({
      component: GuestPopupComponent, // Use your guest popup component
      translucent: true,
      backdropDismiss: true,
    });

    popover.onDidDismiss().then((data) => {
      if (data.role === 'login' || data.role === 'signup') {
        // Set user as logged in and update the user name
        this.isUserLoggedIn = true;
        this.userName = data.data.userName;
      } else if (data.role === 'logout') {
        // Set user as logged out
        this.isUserLoggedIn = false;
        this.userName = '';
      }
    });

    return await popover.present();
  }
}
