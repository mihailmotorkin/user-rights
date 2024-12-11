import {inject, Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apollo = inject(Apollo);

  getCountries() {
    const GET_COUNTRIES_QUERY = gql`
      query {
        countries {
          code,
          name,
          currency,
          capital
        }
      }
    `;

    return this.apollo.watchQuery({
      query: GET_COUNTRIES_QUERY,
    }).valueChanges
      .pipe(
        // @ts-ignore
        map(result => result.data?.countries),
      );
  }

  updateCountries(code: string | number, newName: string) {
    const UPDATE_COUNTRY_NAME = gql`
      mutation  UpdateCountryName($code: ID!, $newName: String!) {
         updateCountryName(code: $code, name: $newName) {
          code
          name
        }
      }
    `;

    return this.apollo.mutate({
      mutation: UPDATE_COUNTRY_NAME,
      variables: {code, newName}
    });
  }

}
