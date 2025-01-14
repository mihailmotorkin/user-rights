import * as Types from '../../../../generated/graphql';

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
