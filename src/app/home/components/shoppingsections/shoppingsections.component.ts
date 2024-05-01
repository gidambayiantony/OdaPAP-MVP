import { OdapapComponent } from './../../views/components/odapap/odapap.component';
 
import { Component, OnInit } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { ShoppingService } from 'src/app/shopping_service/shopping.service';
import { Subject, takeUntil } from 'rxjs';
 

@Component({
  standalone:true,
  selector: 'app-shoppingsections',
  templateUrl: './shoppingsections.component.html',
  styleUrls: ['./shoppingsections.component.scss'],
  imports:[CommonModule,OdapapComponent ]
})
export class ShoppingsectionsComponent  implements OnInit {
  private destroy$ = new Subject<void>();
  constructor(
    public shoppingService: ShoppingService
  ) { }

  selectedtab = "odapap";
//   observeShoppingTabs(){
//     this.shoppingService.activemaintab$.pipe(takeUntil(this.destroy$)).subscribe((tab)=>{
//           this.activemaintab = tab; 
//     })
// }

  ngOnInit() {}

}
