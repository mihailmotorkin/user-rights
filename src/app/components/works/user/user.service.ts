import * as Types from '../../../../generated/graphql';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'Users', age: any, id: any, name: any }> | null };

export type AddUserMutationVariables = Types.Exact<{
  userName: Types.Scalars['Text']['input'];
  userAge: Types.Scalars['Int4']['input'];
  userId: Types.Scalars['Int4']['input'];
}>;


export type AddUserMutation = { __typename?: 'Mutation', insertUsers: { __typename?: 'InsertUsersResponse', returning: Array<{ __typename?: 'Users', age: any, name: any, id: any }> } };

export type DeleteUsersMutationVariables = Types.Exact<{
  keyId: Types.Scalars['Int4']['input'];
}>;


export type DeleteUsersMutation = { __typename?: 'Mutation', deleteUsersById: { __typename?: 'DeleteUsersByIdResponse', returning: Array<{ __typename?: 'Users', age: any, id: any, name: any }> } };

export const GetUsersDocument = gql`
    query GetUsers {
  users {
    age
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddUserDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserGQL extends Apollo.Mutation<AddUserMutation, AddUserMutationVariables> {
    document = AddUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUsersDocument = gql`
    mutation DeleteUsers($keyId: Int4!) {
  deleteUsersById(keyId: $keyId) {
    returning {
      age
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUsersGQL extends Apollo.Mutation<DeleteUsersMutation, DeleteUsersMutationVariables> {
    document = DeleteUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }