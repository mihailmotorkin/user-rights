import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Roles} from '../interfaces/swagger-test.interface';
import {delay, startWith, Subject, switchMap, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwaggerTestService {
  http = inject(HttpClient);
  swaggerUrl = `http://78.30.254.42:10199/api/v1`

  triggerSubject$ = new Subject<void>();

  getAllRoles() {
    return this.triggerSubject$.pipe(
      startWith(true),
      switchMap(() => this.http.get<Roles[]>(`${this.swaggerUrl}/role_get_table`))
    );
  }

  createRole(name: string, description: string) {
    const params = new HttpParams().set('name', name).set('description', description);
    return this.http.post<Roles>(`${this.swaggerUrl}/role_create`, {}, { params })
      .pipe(tap(() => this.triggerSubject$.next()))
  }

  createRoleByJSON(name: string, description: string) {
    return this.http.post<Roles>(`${this.swaggerUrl}/role_create_json`, { name, description })
      .pipe(tap(() => this.triggerSubject$.next()))
  }

  deleteRoleById(id: number | string) {
    const params = new HttpParams().set('id', id);
    return this.http.post<Roles>(`${this.swaggerUrl}/role_delete`, {}, { params })
      .pipe(tap(() => this.triggerSubject$.next()))
  }

  editRole(id: number, name: string, description: string) {
    const params = new HttpParams().set('id', id).set('name', name).set('description', description);
    return this.http.post<Roles>(`${this.swaggerUrl}/role_edit`, {}, { params })
      .pipe(tap(() => this.triggerSubject$.next()))
  }

}
