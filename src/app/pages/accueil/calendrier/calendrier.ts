import { Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendrier',
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './calendrier.html',
  styleUrl: './calendrier.scss',
})
export class Calendrier {
  selected = model<Date | null>(null);
}
