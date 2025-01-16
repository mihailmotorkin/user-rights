import { Routes } from '@angular/router';
import {UserComponent} from './components/works/user/user.component';
import {QueriesComponent} from './components/queries/queries.component';

export const routes: Routes = [
  {path: '', redirectTo: 'queries', pathMatch: 'full'},
  {path: 'queries', component: QueriesComponent},
  {path: 'users', component: UserComponent},
];
