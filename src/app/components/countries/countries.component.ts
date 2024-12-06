import {Component, inject, OnInit} from '@angular/core';
import {CountriesService} from '../../services/spacex.service';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import {map, Observable} from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './countries.component.html',
  imports: [
    AsyncPipe,
    CommonModule,
    NgIf,
    NgForOf
  ],
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  countriesService = inject(CountriesService);

  countries$: Observable<Country[]> | undefined;
  countries: Country[] = [];

  ngOnInit() {
    // this.countriesService.getLaunches().subscribe((result: any) => {
      // this.countries = result.data?.countries;
      this.countries$ = this.countriesService.getCountries()
        .pipe(
          map(result => {
            // console.log(result);
            // @ts-ignore
            return result.data.countries;
          })
        );
    // });
  }

}
