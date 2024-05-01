import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  standalone:true,
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  imports: [IonSearchbar],
  styleUrls: ['./shopping-search.component.scss'],
})
export class ShoppingSearchComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
