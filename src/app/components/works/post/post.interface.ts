import * as Types from '../../../../generated/graphql';

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
