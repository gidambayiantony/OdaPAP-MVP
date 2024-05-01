import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingproductselectorComponent } from './shoppingproductselector.component';

describe('ShoppingproductselectorComponent', () => {
  let component: ShoppingproductselectorComponent;
  let fixture: ComponentFixture<ShoppingproductselectorComponent>;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ShoppingproductselectorComponent ],
        imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(ShoppingproductselectorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
