import {Component, inject, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './countries.component.html',
  imports: [
    AsyncPipe,
    CommonModule,
    ButtonModule,
  ],
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  countriesService = inject(CountriesService);

  countries$: Observable<any> | undefined;

  ngOnInit() {
    this.countries$ = this.countriesService.getCountries()
  }

  update() {
    console.log('Update Countries Component');
    this.countriesService.updateCountries('US', 'United States of America').subscribe(
      (result) => {
        console.log('Country updated:', result);
      },
      error => {
        console.log('Error updating country:', error);
      }
    )
  }
}
