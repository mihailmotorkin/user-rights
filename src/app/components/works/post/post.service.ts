import * as Types from '../../../../generated/graphql';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Posts', id: any, title: any, content: any, user?: { __typename?: 'Users', id: any, name: any, age: any } | null }> | null };

export type AddPostsMutationVariables = Types.Exact<{
  content: Types.Scalars['Text']['input'];
  title: Types.Scalars['Text']['input'];
  userId: Types.Scalars['Int4']['input'];
}>;


export type AddPostsMutation = { __typename?: 'Mutation', insertPosts: { __typename?: 'InsertPostsResponse', returning: Array<{ __typename?: 'Posts', content: any, title: any, userId: any, user?: { __typename?: 'Users', age: any, name: any, id: any } | null }> } };

export type DeletePostsMutationVariables = Types.Exact<{
  keyId: Types.Scalars['Int4']['input'];
}>;


export type DeletePostsMutation = { __typename?: 'Mutation', deletePostsById: { __typename?: 'DeletePostsByIdResponse', returning: Array<{ __typename?: 'Posts', content: any, id: any, title: any, userId: any }> } };

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
  export class GetPostsGQL extends Apollo.Query<GetPostsQuery, GetPostsQueryVariables> {
    document = GetPostsDocument;
    
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
  export class AddPostsGQL extends Apollo.Mutation<AddPostsMutation, AddPostsMutationVariables> {
    document = AddPostsDocument;
    
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
  export class DeletePostsGQL extends Apollo.Mutation<DeletePostsMutation, DeletePostsMutationVariables> {
    document = DeletePostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }