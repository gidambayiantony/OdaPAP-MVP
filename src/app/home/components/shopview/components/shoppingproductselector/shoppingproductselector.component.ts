import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
 
import { ShoppingService } from 'src/app/shopping/services/shopping.service';
import { CommonsService } from 'src/app/services/commons/commons.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-shoppingproductselector',
  templateUrl: './shoppingproductselector.component.html',
  styleUrls: ['./shoppingproductselector.component.scss'],
})
export class ShoppingproductselectorComponent    implements OnInit {

       private destroy$ = new Subject<void>();
       

        
           
        constructor(
              public shoppingService :  ShoppingService,
              public commonService   :  CommonsService,
              public navParams       :  NavParams,
              public  router         : Router,
              public  modalCntr      : ModalController
        ){  

        }

        shop : any ={}; 
        odapapshop = false;
        ngOnInit() {
              this.shop = this.navParams.data.shop;   
              this.obServes(); 
              //  get shop cart; 
              this.shoppingService.getMyCart();
        }


        mycart:any = {};
        obServes(){
            this.shoppingService.mycart$.pipe(takeUntil(this.destroy$)).subscribe( ( mycart ) =>{
                  this.mycart   = mycart; 
                  //  extract this shop cart from mycart shops list to simulate pick changes as user picks items;
                  let this_shop_index_incart =  this.commonService.findIndexInData( this.mycart.shops , "shopid", this.shop.shopid );
                  if( this_shop_index_incart!= -1  ){
                        this.inshopcart = this.mycart.shops[ this_shop_index_incart];
                  }

                  console.log(this.inshopcart  , this_shop_index_incart)
            });
        }
       
  

        inshopcart = {
            currency  :  this.shop.currency,
            totals    :  0,
            qty       :  0, 
            entries   :  0,
            shops     :  this.shop 
        }
   
        activetab = "all";
        changeTab(tab: string){
           this.activetab = tab;
        }

        callShop(){
            this.commonService.callDirect(this.shop.phone)
        }

        smsShop(){
            this.commonService.smsDirect(this.shop.phone)
        }

        whatsappShop(){
            this.commonService.whatsappDirect(this.shop.phone)
        }
 


        saveCart(){ 
               this.modalCntr.dismiss();
               this.router.navigate(['/mycart']);   

               //    
        }
}



