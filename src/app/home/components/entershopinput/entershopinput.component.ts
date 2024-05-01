 
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { IonAvatar, IonButton, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { scanOutline, qrCodeOutline } from 'ionicons/icons';

 

@Component({
  standalone:true,
  selector: 'app-entershopinput',
  templateUrl: './entershopinput.component.html',
  styleUrls: ['./entershopinput.component.scss'],
  imports:[IonItem,IonAvatar,IonInput,IonButton,CommonModule,IonIcon]
})
export class EntershopinputComponent  implements OnInit {

  constructor(
        // public barcodeScanner  : BarcodeScannerService,
        // public loadingCtrl     : LoadingController,
        // public shoppingService : ShoppingService,
        // public commonService   : CommonsService
  ) {
    addIcons({
      scanOutline,
      qrCodeOutline

    })
   }

  ngOnInit() {}

  async enterIntoAStore(){

  }


  storenumber="";
  // async enterIntoAStore(fromscanned:any=false){

  //           const enterNow = async()=>{
  //             if( this.storenumber ){
  //               // load store from server;
  //               let loader = await this.loadingCtrl.create({ 
  //                       message: 'Please Wait',
  //                       spinner: 'bubbles',
  //                       backdropDismiss:true,
  //                       showBackdrop:true, 
  //                       keyboardClose:true,
  //               });
  //               await loader.present();
  //               // 
  //               // (await this.shoppingService.getAStore(this.storenumber)).subscribe((store) => {  
  //                     let store = { 
  //                       name:"Camera Fasion",
  //                       shopid: "39060",
  //                       awaydescr:"2km away;", // 
  //                       currency:"Ksh",
  //                       logo:"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //                       themecolor:"",
  //                       contacts:{
  //                         phone:"",
  //                         email:"", 
  //                         whatsapp:"",
  //                       }
  //                     }
  //                     this.shoppingService.enterAShop(store);
  //                     await loader.dismiss();
  
  //               // });
  //             } else{
  //                this.commonService.showToast("Enter or scan store number");
  //             }
  //           }

  //           if( fromscanned ){
  //                 //  open barcode scanner
  //                 await this.barcodeScanner.scan().then( async(result :any )=>{
  //                     this.storenumber = result;
  //                     await  enterNow();
  //                 }).catch((er)=>{
  //                    this.commonService.showToast("Enter or scan store number.");
  //                 }); 
                  
  //           }else{
  //             await  enterNow();
  //           }
            
            
  // }
}
