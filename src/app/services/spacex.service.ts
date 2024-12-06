import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {map, Observable} from 'rxjs';
import {Country} from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apollo = inject(Apollo);

  getCountries() {
    const GET_COUNTRIES_QUERY = gql`
      query {
        countries {
          awsRegion
          capital
          code
          continent {
            code
          }
        }
      }
    `;

    return this.apollo.watchQuery({
      query: GET_COUNTRIES_QUERY
    }).valueChanges;
  }
}
