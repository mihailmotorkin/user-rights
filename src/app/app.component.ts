import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LaunchesComponent} from './components/launches/launches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LaunchesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
