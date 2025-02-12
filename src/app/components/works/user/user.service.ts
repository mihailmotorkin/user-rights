import * as Types from '../../../../generated/graphql';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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
  export class GetUsersGQL extends Apollo.Query<Types.GetUsersQuery, Types.GetUsersQueryVariables> {
    document = Types.GetUsersDocument;
    
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
  export class AddUserGQL extends Apollo.Mutation<Types.AddUserMutation, Types.AddUserMutationVariables> {
    document = Types.AddUserDocument;
    
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
  export class DeleteUsersGQL extends Apollo.Mutation<Types.DeleteUsersMutation, Types.DeleteUsersMutationVariables> {
    document = Types.DeleteUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }