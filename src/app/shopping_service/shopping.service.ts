import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

    // observe activemaintab changes from any component;
    public activemaintab  =  new Subject<any>();
    activemaintab$: Observable<any> = this.activemaintab.asObservable();
}
