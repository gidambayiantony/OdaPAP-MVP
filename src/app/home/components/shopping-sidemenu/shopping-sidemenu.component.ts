import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, home, logOutOutline, addCircle } from 'ionicons/icons';
import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonSplitPane,IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  standalone:true,
  selector: 'app-shopping-sidemenu',
  templateUrl: './shopping-sidemenu.component.html',
  styleUrls: ['./shopping-sidemenu.component.scss'],
  imports:[IonHeader,IonSplitPane,IonMenu,IonMenuToggle,IonContent,IonLabel,IonItem,IonButton, IonFooter,IonList,IonIcon,IonRouterOutlet]
})
export class ShoppingSidemenuComponent  implements OnInit {

  constructor() {
    addIcons({
      chevronForwardOutline,
      home,
      logOutOutline,
      addCircle


    })
   }

  ngOnInit() {}

}
