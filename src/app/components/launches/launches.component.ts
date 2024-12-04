import {Component, inject, OnInit} from '@angular/core';
import {SpaceXService} from '../../services/spacex.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-launches',
  standalone: true,
  templateUrl: './launches.component.html',
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  styleUrl: './launches.component.scss'
})
export class LaunchesComponent implements OnInit {
  spaceXService = inject(SpaceXService);
  // countries$: Observable<any> | undefined;
  countries: any | undefined = []
  ngOnInit() {
    this.spaceXService.getLaunches().subscribe((result: any) => {
      this.countries = result.data?.countries;
    });
  }
}
