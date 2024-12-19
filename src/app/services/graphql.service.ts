import {inject, Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Response, User} from '../interfaces/posts-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  apollo = inject(Apollo);

  getData() {
    const GET_QUERY = gql`
      query GetPosts {
        posts {
          id
          title
          content
          user {
            id
            name
            age
          }
        }
      }
    `;

    return this.apollo.watchQuery<Response>({
      query: GET_QUERY,
    })
  }

  addUser(name: string, age: number, id: number) {

    const ADD_USER = gql`
      mutation AddUser($userName: Text!, $userAge: Int4!, $userId: Int4!) {
        insertUsers(objects: {name: $userName, age: $userAge, id: $userId}) {
          returning {
            age
            name
            id
          }
        }
      }
    `;

    return this.apollo.mutate<User>({
      mutation: ADD_USER,
      variables: {
        userName: name,
        userAge: age,
        userId: id
      }
    })
  }

  addPosts(content: string, title: string, userId: number) {

    const ADD_USER = gql`
      mutation AddPosts($content: Text!, $title:  Text!, $userId: Int4!) {
        insertPosts(objects: {content: $content, title: $title, userId: $userId}) {
          returning {
            content
            title
            userId
            user {
              age
              name
              id
            }
          }
        }
      }
    `;

    return this.apollo.mutate<User>({
      mutation: ADD_USER,
      variables: {
        content: content,
        title: title,
        userId: userId
      }
    })
  }

  deletePostsById(keyId: number) {
    const DELETE_POST_BY_ID = gql`
      mutation DeletePosts($keyId:  Int4!) {
        deletePostsById(keyId: $keyId) {
          returning {
            content
            id
            title
            userId
          }
        }
      }
    `
    return this.apollo.mutate({
      mutation: DELETE_POST_BY_ID,
      variables: { keyId }
    })
  }


}
