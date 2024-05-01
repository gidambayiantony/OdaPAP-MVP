import { Component, OnInit } from '@angular/core';
import { IonContent, IonModal } from '@ionic/angular/standalone';

@Component({
  standalone:true,
  selector: 'app-categoriesmodal',
  templateUrl: './categoriesmodal.component.html',
  styleUrls: ['./categoriesmodal.component.scss'],
  imports:[
IonContent,
    IonModal

  ]
})
export class CategoriesmodalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
