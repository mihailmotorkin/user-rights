import {Component, inject, OnInit} from '@angular/core';
import {GraphqlService} from '../../services/graphql.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {map, Observable} from 'rxjs';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Apollo, QueryRef} from 'apollo-angular';
import {AddPostsGQL, GetPostsGQL} from '../works/post/post.service';
import {GetPostsQuery} from '../works/post/post.interface';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-queries',
  standalone: true,
  templateUrl: './queries.component.html',
  imports: [
    AsyncPipe,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    RouterLink,
  ],
  styleUrl: './queries.component.scss'
})
export class QueriesComponent implements OnInit {
  fb = inject(FormBuilder);
  graphqlService = inject(GraphqlService);
  apollo = inject(Apollo);
  postsGQL = inject(GetPostsGQL);
  addPosts = inject(AddPostsGQL);
  postsQuery!: QueryRef<GetPostsQuery>;


  posts$!: Observable<GetPostsQuery['posts']>;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(null, Validators.required),
    id: new FormControl(null, Validators.required),
  });

  postForm = this.fb.group({
    content: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    userId: new FormControl(null, Validators.required),
  })
  deletePostsForm = this.fb.group({
    postId: new FormControl(null, Validators.required),
  });

  ngOnInit() {
    // @ts-ignore
    this.postsQuery = this.postsGQL.watch();
    this.posts$ = this.postsQuery.valueChanges.pipe(
      map(result => result.data.posts)
    );
  }


  addUser() {
    if (this.userForm.invalid) {
      return;
    }

    if (this.userForm.value) {
      const {name, age, id} = this.userForm.value;
      this.graphqlService.addUser(name!, age!, id!)
        .subscribe(() => {
          this.userForm.controls.name.reset('');
          this.userForm.controls.age.reset(null);
          this.userForm.controls.id.reset(null);
        });
    }
  }

  addPost() {
    if (this.postForm.invalid) {
      return;
    }

    if (this.postForm.value) {
      const {content, title, userId} = this.postForm.value;
      this.addPosts.mutate({content, title, userId})
        .subscribe(({data}) => {
          console.log(data);
          this.postsQuery.refetch();
          this.postForm.controls.content.reset('');
          this.postForm.controls.title.reset('');
          this.postForm.controls.userId.reset(null);
        });
    }
  }

  deletePost() {
    const postId  = Number(this.deletePostsForm.value.postId);
    this.graphqlService.deletePostsById(postId)
    .subscribe(() => {
      this.postsQuery.refetch();
      this.deletePostsForm.reset();
    })
  }

}
