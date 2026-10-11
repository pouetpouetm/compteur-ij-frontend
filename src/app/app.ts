import { Component, signal, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,MatCardModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('compteur-ij-frontend');
  selected = model<Date | null>(null);
}
