import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardTitle, IonCol, IonIcon, IonImg, IonRow, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, cart } from 'ionicons/icons';
import { Product } from 'src/app/interfaces/product_interface';
@Component({
  standalone:true,
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
  imports:[
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonRow, IonCol,
    IonIcon, IonText
  ]
})
export class ProductcardComponent  implements OnInit {
  isFavorite:boolean = true;
  isInCart: boolean = true; 

  @Input() product!:Product;
  @Output() productSaved = new  EventEmitter<Product>()
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  @Input() productName: string = '';
  @Input() productImage: string = '';
  
  constructor(private router:Router) {
    addIcons({
      heart,cart

    })
   }

   navigateToProductDetails() {
    // Use the Angular Router to navigate to the product details page
    this.router.navigate(['/viewproduct']);
  }


   addToCartClicked() {
    this.addToCart.emit(this.product);
  }
  
 addToFav(){
  this.productSaved.emit(this.product)
 
  console.log("clicked")
 }

  ngOnInit() {}

}
