import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {map, Observable} from 'rxjs';
import {QueryRef} from 'apollo-angular';
import {GetUsersQuery} from './user.interface';
import {GetUsersGQL} from './user.service';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AsyncPipe,
    Button,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  userGQL = inject(GetUsersGQL)
  users$!: Observable<GetUsersQuery['users']>;
  userQuery!: QueryRef<GetUsersQuery>;

  ngOnInit() {
    //@ts-ignore
    this.userQuery = this.userGQL.watch();

    this.users$ = this.userQuery.valueChanges.pipe(
      map(result => result.data.users)
    );
  }

}
