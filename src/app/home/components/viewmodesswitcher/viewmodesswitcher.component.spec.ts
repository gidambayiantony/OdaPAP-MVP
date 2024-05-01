import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewmodesswitcherComponent } from './viewmodesswitcher.component';

describe('ViewmodesswitcherComponent', () => {
  let component: ViewmodesswitcherComponent;
  let fixture: ComponentFixture<ViewmodesswitcherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodesswitcherComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewmodesswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
