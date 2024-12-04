import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  apollo = inject(Apollo);

  getLaunches() {
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
