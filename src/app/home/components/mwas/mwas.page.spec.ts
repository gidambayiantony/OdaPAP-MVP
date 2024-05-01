import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MwasPage } from './mwas.page';

describe('MwasPage', () => {
  let component: MwasPage;
  let fixture: ComponentFixture<MwasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MwasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
