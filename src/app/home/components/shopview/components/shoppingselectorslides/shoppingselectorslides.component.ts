import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonsService } from 'src/app/services/commons/commons.service';
import { ShoppingService } from 'src/app/shopping/services/shopping.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-shoppingselectorslides',
  templateUrl: './shoppingselectorslides.component.html',
  styleUrls: ['./shoppingselectorslides.component.scss'],
})
export class ShoppingselectorslidesComponent  implements OnInit { 
              @ViewChild("categoriesthumbs") categoriesthumbs: ElementRef | any;
              @ViewChild("categorieslistslides") categorieslistslides: ElementRef | any;
              swiper ?: Swiper;     
              @Input()  shop :any ={};
                      
              constructor( 
                public commonService : CommonsService,
                public shoppingService : ShoppingService
              ) { }

              ngOnInit() {
                  this.loadCategories();
              }

              ngAfterViewInit(){ 
                      // this.categoriesthumbs = new Swiper('.categoriesthumbs', { 
                      // }); 
              }


            
              
              categories = [];
              activecategory = {};
              async loadCategories(){
                  //  replace with  get shopcategories from server; this is dummy category tree 
                  await this.shoppingService.getCategoryTree().then((categories :any)=>{
                        this.categories  = categories.retails;  
                        //  category comes with products; eg
                        // this.categories = {
                          // categorydetails; check sample category from shopingService.sample_categorytree;
                          // products:[ 
                                // name:"Product 1",
                                // id:"12345",
                                // descr:"",
                                // price:200,
                                // currency:"Ksh",
                                // qty:2,  // qty picked; 
                                // colors:[ {name:"green", bal:10 } , {name:"orange", bal:10 }],
                                // sizes:[ {name:"md", bal:12 } , {name:"lg", bal:12 }],
                                // colorpicked:"green", // red
                                // sizepicked:"md",  // 
                                // available:10,
                                // media:[
                                //   { type:"image", url:"https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" },
                                //   { type:"image", url:"https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
                                // ]
                          // ]
                        // }
                  });
              }

              
              slideChange(){
                    let activeIndex = this.categorieslistslides.nativeElement.swiper.activeIndex;
                    // reset active slide visible products to default for smooth scrolling;
                    console.log( activeIndex )
              }

              slideChangeTransitionStart(){
                    let activeIndex = this.categorieslistslides.nativeElement.swiper.activeIndex;
                    console.log( activeIndex )
              }

              activeIndexChange(){
                    let activeIndex = this.categorieslistslides.nativeElement.swiper.activeIndex;
                    console.log( activeIndex )
              }

 

              adjustQty(product){

              }

              increaseQtyInCart(product){
                  this.shoppingService.increaseQtyInCart(product , this.shop );
              }

              decreaseQtyInCart(product){
                  this.shoppingService.decreaseQtyInCart(product , this.shop);
              } 


              
              //  load more from server and update currentlist;
              async loadMore(scroll , currentlist:any=[] , alllist:any=[] , page:any=5 , increment_limit:number = 5 )
              {  
                            const wholelist = alllist;
                            await this.commonService.loadmore( 
                                        scroll , 
                                        wholelist, //  to expand to; 
                                        currentlist, // to expand on
                                        page, // 
                                        increment_limit
                            )
                            .then((results:any)=>{ 
                                          page                     =  results.page; 
                                          currentlist              =  results.displayed_sets; 
                                          console.log(this.categories)  
                            });   
              }
}
