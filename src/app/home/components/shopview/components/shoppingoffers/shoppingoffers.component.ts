import { Component, OnInit, Input } from '@angular/core';
import { ShoppingService } from 'src/app/shopping/services/shopping.service';

@Component({
  selector: 'app-shoppingoffers',
  templateUrl: './shoppingoffers.component.html',
  styleUrls: ['./shoppingoffers.component.scss'],
})
export class ShoppingoffersComponent  implements OnInit {
 
  @Input() shop:any = [];

      constructor( 
         public shoppingService : ShoppingService
      ) { }

      ngOnInit() { 
        this.loadOffers();
      } 


      offers = [];
      loadOffers(){
          this.offers = [
                { 
                  id: 1,
                  name:"Buy One Get One Free",
                  totals: 400,
                  discount: 100,
                  available: 4,
                  expirydate:Date.now(),
                  items:[
                    {
                        name:"Product 1",
                        id:2,
                        descr:"",
                        price:200,
                        currency:"Ksh",
                        qty:2,  // qty picked; 
                        colors:[ {name:"green", bal:10 } , {name:"orange", bal:10 }],
                        sizes:[ {name:"md", bal:12 } , {name:"lg", bal:12 }],
                        colorpicked:"green", // red
                        sizepicked:"md",  // 
                        available:10,
                        media:[
                          { type:"image", url:"https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" },
                          { type:"image", url:"https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
                        ]
                    },{
                      name:"Product 1",
                      id:1,
                      descr:"",
                      price:200,
                      currency:"Ksh",
                      qty:2,  // qty picked; 
                      colors:[ {name:"green", bal:10 } , {name:"orange", bal:10 }],
                      sizes:[ {name:"md", bal:12 } , {name:"lg", bal:12 }],
                      colorpicked:"green", // red
                      sizepicked:"md",  // 
                      available:10,
                      media:[
                        { type:"image", url:"https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" },
                        { type:"image", url:"https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
                      ]
                  }
                  ] 
                },
                { 
                  id: 2,
                  name:"Unlimited Combo",
                  totals: 400,
                  discount: 100, 
                  available: 4,
                  expirydate:Date.now(),
                  items:[
                    {
                        name:"Product 1",
                        id:"12345",
                        descr:"",
                        price:200,
                        currency:"Ksh",
                        qty:2,  // qty picked; 
                        colors:[ {name:"green", bal:10 } , {name:"orange", bal:10 }],
                        sizes:[ {name:"md", bal:12 } , {name:"lg", bal:12 }],
                        colorpicked:"green", // red
                        sizepicked:"md",  // 
                        available:10,
                        media:[
                          { type:"image", url:"https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" },
                          { type:"image", url:"https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
                        ]
                    },{
                      name:"Product 1",
                      id:"12345",
                      descr:"",
                      price:200,
                      currency:"Ksh",
                      qty:2,  // qty picked; 
                      colors:[ {name:"green", bal:10 } , {name:"orange", bal:10 }],
                      sizes:[ {name:"md", bal:12 } , {name:"lg", bal:12 }],
                      colorpicked:"green", // red
                      sizepicked:"md",  // 
                      available:10,
                      media:[
                        { type:"image", url:"https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" },
                        { type:"image", url:"https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
                      ]
                  }
                  ] 
                }
          ];
      }

        

      adjustQty(product){

      }

      increaseQtyInCart(product){
          product.isanoffer = true; 
          this.shoppingService.increaseQtyInCart(product , this.shop);
      }

      decreaseQtyInCart(product){
          product.isanoffer = true; 
          this.shoppingService.decreaseQtyInCart(product , this.shop);
      } 
}
