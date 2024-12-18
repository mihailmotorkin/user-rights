import { Component } from '@angular/core';
import {QueriesComponent} from './components/queries/queries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QueriesComponent, QueriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
