import {ChangeDetectionStrategy, Component, effect, inject, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {finalize, firstValueFrom, map, Observable} from 'rxjs';
import {QueryRef} from 'apollo-angular';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {GetUsersGQL} from './user.service';
import {GetUsersQuery} from './user.interface';
import {SwaggerTestService} from '../../../services/swagger-test.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {log} from 'node:util';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AsyncPipe,
    Button,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  userGQL = inject(GetUsersGQL)
  users$!: Observable<GetUsersQuery['users']>;
  userQuery!: QueryRef<GetUsersQuery>;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })
  roleIdInput: FormControl = new FormControl;

  swaggerService = inject(SwaggerTestService);

  roles$ = this.swaggerService.getAllRoles()
    .pipe(
      finalize(() => console.log('Finalize')),
    )


  ngOnInit() {
    //@ts-ignore
    this.userQuery = this.userGQL.watch();

    this.users$ = this.userQuery.valueChanges.pipe(
      map(result => result.data.users)
    );

  }


  deleteRoleById() {
    firstValueFrom(this.swaggerService.deleteRoleById(this.roleIdInput.value))
    this.roleIdInput.reset()
  }

  createRole() {
    if (this.form.invalid) return;

    const { name, description } = this.form.value;
    firstValueFrom(this.swaggerService.createRole(name!, description!))
    this.form.reset()
  }



}
