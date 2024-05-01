import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  PickerController,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-pickdate',
  templateUrl: './pickdate.component.html',
  styleUrls: ['./pickdate.component.scss'],
  imports: [
    IonDatetime,
    IonContent,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    FormsModule,
  ],
})
export class PickdateComponent implements OnInit {
  selectedDate: string = '';

  constructor(private pickerCtrl: PickerController) {}

  async showDatePicker() {
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Done',
          handler: (value) => {
            this.selectedDate = value.date.value;
          },
        },
      ],
      columns: [
        {
          name: 'date',
          options: this.getDatePickerOptions(),
        },
      ],
    });

    await picker.present();
  }

  getDatePickerOptions() {
    const options = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
      options.push({ text: i.toString(), value: i });
    }

    return options;
  }

  ngOnInit() {}
}
