import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { IonicAngularModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShoppingrecentComponent } from './app/home/views/components/shoppingrecent/shoppingrecent.component';
import { NearmeComponent } from './app/home/views/components/nearme/nearme.component';
import { OdapapComponent } from './app/home/views/components/odapap/odapap.component';
import { ShoppingOrderComponent } from './home/views/components/shopping-order/shopping-order.component';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
  declarations: [
    NearmeComponent,
    OdapapComponent,
    ShoppingOrderComponent,
    AppComponent,
    ShoppingrecentComponent, 
],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicAngularModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
