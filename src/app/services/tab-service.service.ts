// tab-service.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private selectedTabSubject = new BehaviorSubject<string>('tab1');
  selectedTab$ = this.selectedTabSubject.asObservable();

  setSelectedTab(tab: string) {
    this.selectedTabSubject.next(tab);
  }
}
