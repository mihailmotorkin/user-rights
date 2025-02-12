import * as Types from '../../../../generated/graphql';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export const GetPostsDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostsGQL extends Apollo.Query<Types.GetPostsQuery, Types.GetPostsQueryVariables> {
    document = Types.GetPostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddPostsDocument = gql`
    mutation AddPosts($content: Text!, $title: Text!, $userId: Int4!) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class AddPostsGQL extends Apollo.Mutation<Types.AddPostsMutation, Types.AddPostsMutationVariables> {
    document = Types.AddPostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePostsDocument = gql`
    mutation DeletePosts($keyId: Int4!) {
  deletePostsById(keyId: $keyId) {
    returning {
      content
      id
      title
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePostsGQL extends Apollo.Mutation<Types.DeletePostsMutation, Types.DeletePostsMutationVariables> {
    document = Types.DeletePostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }