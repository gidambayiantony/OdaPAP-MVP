import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet , CommonModule],
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
