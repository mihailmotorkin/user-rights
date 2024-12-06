import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountriesComponent} from './components/countries/countries.component';
import {LearnRxjsComponent} from './components/learn-rxjs/learn-rxjs/learn-rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponent, LearnRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
