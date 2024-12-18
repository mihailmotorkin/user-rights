import {Component, inject, OnInit} from '@angular/core';
import {GraphqlService} from '../../services/graphql.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {map, Observable} from 'rxjs';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Apollo, gql} from 'apollo-angular';
import {GetPostsGQL, GetPostsQuery, Posts} from '../../../generated/graphql';


@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './queries.component.html',
  imports: [
    AsyncPipe,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  styleUrl: './queries.component.scss'
})
export class QueriesComponent implements OnInit {
  graphqlService = inject(GraphqlService);
  apollo = inject(Apollo);
  postsGQL = inject(GetPostsGQL)
  posts$!: Observable<GetPostsQuery["posts"]>;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(null, Validators.required),
    id: new FormControl(null, Validators.required),
    content: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    userId: new FormControl(null, Validators.required),
  });

  ngOnInit() {
    // this.posts$ = this.graphqlService.getData()
    //   .valueChanges
    //   .pipe(
    //     map(result => result.data.posts),
    //   );

    this.posts$ = this.postsGQL.watch().valueChanges
      .pipe(
        map(result => result.data.posts)
      )
  }


  addUser() {
    if (this.userForm.invalid) {
      return;
    }

    if (this.userForm.value) {
      const {name, age, id} = this.userForm.value;
      this.graphqlService.addUser(name!, age!, id!)
        .subscribe(data => console.log(data));
    }
  }

  addPost() {
    if (this.userForm.invalid) {
      return;
    }

    if (this.userForm.value) {
      const {content, title, userId} = this.userForm.value;
      this.graphqlService.addPosts(content!, title!, userId!)
        .subscribe();
    }
  }

}
