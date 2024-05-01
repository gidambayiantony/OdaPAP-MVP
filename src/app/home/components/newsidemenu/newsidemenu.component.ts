import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  storefrontOutline,
  personOutline,
  keyOutline,
  helpCircleOutline,
  informationCircle,
  airplaneOutline,
  shareSocialOutline,
  logoAndroid,
} from 'ionicons/icons';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  selector: 'app-newsidemenu',
  templateUrl: './newsidemenu.component.html',
  styleUrls: ['./newsidemenu.component.scss'],
})
export class NewsidemenuComponent implements OnInit {
  showText = true;

  menuitems: any = [];
  appmode = 'md';
  isapp: boolean = false;

  constructor(private router: Router) {
    addIcons({
      homeOutline,
      storefrontOutline,
      personOutline,
      keyOutline,
      helpCircleOutline,
      informationCircle,
      airplaneOutline,
      shareSocialOutline,
      logoAndroid,
    });
  }
  ngOnInit(): void {
    this.menuItemsList();
  }

  async navigate(page: string) {
    if (page == 'install') {
      this.getAndroidApp();
    } else {
      this.router.navigateByUrl(page);
    }
  }

  getAndroidApp() {
    if (this.isapp) {
      //this.shared.marketAction('playstore');
    } else {
      // this.shared.marketAction('appstore');
    }
    //this.events.publish("track",{ ev:"to-playstore",params:{   }});
  }

  async logout() {}

  UploadImage() {
    console.log('clicked');
  }

  menuItemsList() {
    this.menuitems = [
      {
        id: 9,
        title: 'Home',
        page: 'home', //newshop
        role: 'home',
        icon: 'home-outline',
        hasupdate: false,
        showwhitelbl: true,
      },

      {
        id: 1,
        title: 'Add Shop',
        page: 'createshop', //newshop
        role: 'newshop',
        icon: 'storefront-outline',
        hasupdate: false,
        showwhitelbl: true,
      },

      {
        id: 1,
        title: 'My Profile',
        page: 'profile',
        role: 'profile',
        icon: 'person-outline',
        hasupdate: false,
        showwhitelbl: true,
      },
      {
        id: 1,
        title: 'Change Password',
        page: 'profile',
        role: 'password',
        icon: 'key-outline',
        hasupdate: false,
        showwhitelbl: true,
      },
      {
        id: 2,
        title: 'Quick Guide',
        page: 'messages',
        icon: 'help-circle-outline',
        hasupdate: false,
        showwhitelbl: false,
      },
      {
        id: 3,
        title: 'About-Us',
        page: 'aboutus',
        icon: 'information-circle',
        hasupdate: false,
        showwhitelbl: true,
      },
      {
        id: 4,
        title: 'About Offline Mode',
        page: 'aboutoffline',
        icon: 'airplane-outline',
        hasupdate: false,
        showwhitelbl: true,
      },
      {
        id: 5,
        title: 'Invite friends & use for free',
        page: 'share',
        icon: 'share-social-outline',
        hasupdate: false,
        showwhitelbl: true,
      },
      {
        id: 8,
        title: 'Install Mobile App',
        page: 'install',
        icon: 'logo-android',
        hasupdate: false,
        showwhitelbl: true,
      },
      // {
      //       id: 7,
      //       title: "LogOut",
      //       page: "logout",
      //       icon: "log-out",
      //       hasupdate: false,
      //       showwhitelbl: true,
      // },
    ];
  }

  // Original shop data
  shops = [
    {
      logo: 'https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg',
      name: 'Shop 1',
      details: 'Details for Shop 1',
    },
    // Add more shop data as needed
  ];

  // Additional 10 shop data samples
  additionalShops = [
    { logo: 'assets/shop2.jpg', name: 'Shop 2', details: 'Details for Shop 2' },
    { logo: 'assets/shop3.jpg', name: 'Shop 3', details: 'Details for Shop 3' },
    { logo: 'assets/shop4.jpg', name: 'Shop 4', details: 'Details for Shop 4' },
    { logo: 'assets/shop5.jpg', name: 'Shop 5', details: 'Details for Shop 5' },
    { logo: 'assets/shop6.jpg', name: 'Shop 6', details: 'Details for Shop 6' },
    { logo: 'assets/shop7.jpg', name: 'Shop 7', details: 'Details for Shop 7' },
    { logo: 'assets/shop8.jpg', name: 'Shop 8', details: 'Details for Shop 8' },
    { logo: 'assets/shop9.jpg', name: 'Shop 9', details: 'Details for Shop 9' },
    {
      logo: 'assets/shop10.jpg',
      name: 'Shop 10',
      details: 'Details for Shop 10',
    },
    {
      logo: 'assets/shop11.jpg',
      name: 'Shop 11',
      details: 'Details for Shop 11',
    },
  ];

  // Concatenate the original shops with the additional ones
  allShops = [...this.shops, ...this.additionalShops];

  shortcuts = [
    { label: 'Home', icon: 'home-outline' },
    { label: 'About Us', icon: 'information-circle-outline' },
    { label: 'Share App', icon: 'share-social-outline' },
    { label: 'Download App', icon: 'cloud-download-outline' },
    { label: 'Quick Guide', icon: 'book-outline' },
  ];
}
