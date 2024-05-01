import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntopagePage } from './antopage.page';

describe('AntopagePage', () => {
  let component: AntopagePage;
  let fixture: ComponentFixture<AntopagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
