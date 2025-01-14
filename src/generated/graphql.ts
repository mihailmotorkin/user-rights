export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Int4: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Numeric: { input: any; output: any; }
  Text: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

/** Responses from the 'delete_posts_by_id' procedure */
export type DeletePostsByIdResponse = {
  __typename?: 'DeletePostsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Posts>;
};

/** Responses from the 'delete_users_by_id' procedure */
export type DeleteUsersByIdResponse = {
  __typename?: 'DeleteUsersByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Users>;
};

export type InsertPostsObjectInput = {
  content: Scalars['Text']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['Int4']['input']>;
  title: Scalars['Text']['input'];
  userId: Scalars['Int4']['input'];
};

/** Responses from the 'insert_posts' procedure */
export type InsertPostsResponse = {
  __typename?: 'InsertPostsResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Posts>;
};

export type InsertUsersObjectInput = {
  age: Scalars['Int4']['input'];
  id?: InputMaybe<Scalars['Int4']['input']>;
  name: Scalars['Text']['input'];
};

/** Responses from the 'insert_users' procedure */
export type InsertUsersResponse = {
  __typename?: 'InsertUsersResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Users>;
};

export type Int4AggExp = {
  __typename?: 'Int4AggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  avg?: Maybe<Scalars['Numeric']['output']>;
  bit_and?: Maybe<Scalars['Int4']['output']>;
  bit_or?: Maybe<Scalars['Int4']['output']>;
  bit_xor?: Maybe<Scalars['Int4']['output']>;
  max?: Maybe<Scalars['Int4']['output']>;
  min?: Maybe<Scalars['Int4']['output']>;
  stddev?: Maybe<Scalars['Numeric']['output']>;
  stddev_pop?: Maybe<Scalars['Numeric']['output']>;
  stddev_samp?: Maybe<Scalars['Numeric']['output']>;
  sum?: Maybe<Scalars['Int8']['output']>;
  var_pop?: Maybe<Scalars['Numeric']['output']>;
  var_samp?: Maybe<Scalars['Numeric']['output']>;
  variance?: Maybe<Scalars['Numeric']['output']>;
};

export type Int4BoolExp = {
  _eq?: InputMaybe<Scalars['Int4']['input']>;
  _gt?: InputMaybe<Scalars['Int4']['input']>;
  _gte?: InputMaybe<Scalars['Int4']['input']>;
  _in?: InputMaybe<Array<Scalars['Int4']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int4']['input']>;
  _lte?: InputMaybe<Scalars['Int4']['input']>;
  _neq?: InputMaybe<Scalars['Int4']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Delete any row on the 'posts' collection using the 'id' key */
  deletePostsById: DeletePostsByIdResponse;
  /** Delete any row on the 'users' collection using the 'id' key */
  deleteUsersById: DeleteUsersByIdResponse;
  /** Insert into the posts table */
  insertPosts: InsertPostsResponse;
  /** Insert into the users table */
  insertUsers: InsertUsersResponse;
  /** Update any row on the 'posts' collection using the 'id' key */
  updatePostsById: UpdatePostsByIdResponse;
  /** Update any row on the 'users' collection using the 'id' key */
  updateUsersById: UpdateUsersByIdResponse;
};


export type MutationDeletePostsByIdArgs = {
  keyId: Scalars['Int4']['input'];
  preCheck?: InputMaybe<PostsBoolExp>;
};


export type MutationDeleteUsersByIdArgs = {
  keyId: Scalars['Int4']['input'];
  preCheck?: InputMaybe<UsersBoolExp>;
};


export type MutationInsertPostsArgs = {
  objects: Array<InsertPostsObjectInput>;
  postCheck?: InputMaybe<PostsBoolExp>;
};


export type MutationInsertUsersArgs = {
  objects: Array<InsertUsersObjectInput>;
  postCheck?: InputMaybe<UsersBoolExp>;
};


export type MutationUpdatePostsByIdArgs = {
  keyId: Scalars['Int4']['input'];
  postCheck?: InputMaybe<PostsBoolExp>;
  preCheck?: InputMaybe<PostsBoolExp>;
  updateColumns: UpdatePostsByIdUpdateColumnsInput;
};


export type MutationUpdateUsersByIdArgs = {
  keyId: Scalars['Int4']['input'];
  postCheck?: InputMaybe<UsersBoolExp>;
  preCheck?: InputMaybe<UsersBoolExp>;
  updateColumns: UpdateUsersByIdUpdateColumnsInput;
};

export enum OrderBy {
  /** Sorts the data in ascending order */
  Asc = 'Asc',
  /** Sorts the data in descending order */
  Desc = 'Desc'
}

export type Posts = {
  __typename?: 'Posts';
  content: Scalars['Text']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['Int4']['output'];
  title: Scalars['Text']['output'];
  user?: Maybe<Users>;
  userId: Scalars['Int4']['output'];
};

export type PostsAggExp = {
  __typename?: 'PostsAggExp';
  _count: Scalars['Int']['output'];
  content: TextAggExp;
  createdAt: TimestampAggExp;
  id: Int4AggExp;
  title: TextAggExp;
  userId: Int4AggExp;
};

export type PostsBoolExp = {
  _and?: InputMaybe<Array<PostsBoolExp>>;
  _not?: InputMaybe<PostsBoolExp>;
  _or?: InputMaybe<Array<PostsBoolExp>>;
  content?: InputMaybe<TextBoolExp>;
  createdAt?: InputMaybe<TimestampBoolExp>;
  id?: InputMaybe<Int4BoolExp>;
  title?: InputMaybe<TextBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<Int4BoolExp>;
};

export type PostsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PostsOrderByExp>>;
  where?: InputMaybe<PostsBoolExp>;
};

export type PostsOrderByExp = {
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<Posts>>;
  postsAggregate?: Maybe<PostsAggExp>;
  postsById?: Maybe<Posts>;
  users?: Maybe<Array<Users>>;
  usersAggregate?: Maybe<UsersAggExp>;
  usersById?: Maybe<Users>;
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PostsOrderByExp>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type QueryPostsAggregateArgs = {
  filter_input?: InputMaybe<PostsFilterInput>;
};


export type QueryPostsByIdArgs = {
  id: Scalars['Int4']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderByExp>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryUsersAggregateArgs = {
  filter_input?: InputMaybe<UsersFilterInput>;
};


export type QueryUsersByIdArgs = {
  id: Scalars['Int4']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  posts?: Maybe<Array<Posts>>;
  postsAggregate?: Maybe<PostsAggExp>;
  postsById?: Maybe<Posts>;
  users?: Maybe<Array<Users>>;
  usersAggregate?: Maybe<UsersAggExp>;
  usersById?: Maybe<Users>;
};


export type SubscriptionPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PostsOrderByExp>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type SubscriptionPostsAggregateArgs = {
  filter_input?: InputMaybe<PostsFilterInput>;
};


export type SubscriptionPostsByIdArgs = {
  id: Scalars['Int4']['input'];
};


export type SubscriptionUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderByExp>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionUsersAggregateArgs = {
  filter_input?: InputMaybe<UsersFilterInput>;
};


export type SubscriptionUsersByIdArgs = {
  id: Scalars['Int4']['input'];
};

export type TextAggExp = {
  __typename?: 'TextAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max?: Maybe<Scalars['Text']['output']>;
  min?: Maybe<Scalars['Text']['output']>;
};

export type TextBoolExp = {
  _eq?: InputMaybe<Scalars['Text']['input']>;
  _gt?: InputMaybe<Scalars['Text']['input']>;
  _gte?: InputMaybe<Scalars['Text']['input']>;
  _ilike?: InputMaybe<Scalars['Text']['input']>;
  _in?: InputMaybe<Array<Scalars['Text']['input']>>;
  _iregex?: InputMaybe<Scalars['Text']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['Text']['input']>;
  _lt?: InputMaybe<Scalars['Text']['input']>;
  _lte?: InputMaybe<Scalars['Text']['input']>;
  _neq?: InputMaybe<Scalars['Text']['input']>;
  _nilike?: InputMaybe<Scalars['Text']['input']>;
  _niregex?: InputMaybe<Scalars['Text']['input']>;
  _nlike?: InputMaybe<Scalars['Text']['input']>;
  _nregex?: InputMaybe<Scalars['Text']['input']>;
  _regex?: InputMaybe<Scalars['Text']['input']>;
  starts_with?: InputMaybe<Scalars['Text']['input']>;
  ts_match_tt?: InputMaybe<Scalars['Text']['input']>;
};

export type TimestampAggExp = {
  __typename?: 'TimestampAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max?: Maybe<Scalars['Timestamp']['output']>;
  min?: Maybe<Scalars['Timestamp']['output']>;
};

export type TimestampBoolExp = {
  _eq?: InputMaybe<Scalars['Timestamp']['input']>;
  _gt?: InputMaybe<Scalars['Timestamp']['input']>;
  _gte?: InputMaybe<Scalars['Timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Timestamp']['input']>;
  _lte?: InputMaybe<Scalars['Timestamp']['input']>;
  _neq?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Update the 'content' column in the 'posts' collection */
export type UpdateColumnPostsContentInput = {
  /** Set the column to this value */
  set: Scalars['Text']['input'];
};

/** Update the 'created_at' column in the 'posts' collection */
export type UpdateColumnPostsCreatedAtInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Update the 'id' column in the 'posts' collection */
export type UpdateColumnPostsIdInput = {
  /** Set the column to this value */
  set: Scalars['Int4']['input'];
};

/** Update the 'title' column in the 'posts' collection */
export type UpdateColumnPostsTitleInput = {
  /** Set the column to this value */
  set: Scalars['Text']['input'];
};

/** Update the 'user_id' column in the 'posts' collection */
export type UpdateColumnPostsUserIdInput = {
  /** Set the column to this value */
  set: Scalars['Int4']['input'];
};

/** Update the 'age' column in the 'users' collection */
export type UpdateColumnUsersAgeInput = {
  /** Set the column to this value */
  set: Scalars['Int4']['input'];
};

/** Update the 'id' column in the 'users' collection */
export type UpdateColumnUsersIdInput = {
  /** Set the column to this value */
  set: Scalars['Int4']['input'];
};

/** Update the 'name' column in the 'users' collection */
export type UpdateColumnUsersNameInput = {
  /** Set the column to this value */
  set: Scalars['Text']['input'];
};

/** Responses from the 'update_posts_by_id' procedure */
export type UpdatePostsByIdResponse = {
  __typename?: 'UpdatePostsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Posts>;
};

/** Update the columns of the 'posts' collection */
export type UpdatePostsByIdUpdateColumnsInput = {
  /** Update the 'content' column in the 'posts' collection. */
  content?: InputMaybe<UpdateColumnPostsContentInput>;
  /** Update the 'created_at' column in the 'posts' collection. */
  createdAt?: InputMaybe<UpdateColumnPostsCreatedAtInput>;
  /** Update the 'id' column in the 'posts' collection. */
  id?: InputMaybe<UpdateColumnPostsIdInput>;
  /** Update the 'title' column in the 'posts' collection. */
  title?: InputMaybe<UpdateColumnPostsTitleInput>;
  /** Update the 'user_id' column in the 'posts' collection. */
  userId?: InputMaybe<UpdateColumnPostsUserIdInput>;
};

/** Responses from the 'update_users_by_id' procedure */
export type UpdateUsersByIdResponse = {
  __typename?: 'UpdateUsersByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Users>;
};

/** Update the columns of the 'users' collection */
export type UpdateUsersByIdUpdateColumnsInput = {
  /** Update the 'age' column in the 'users' collection. */
  age?: InputMaybe<UpdateColumnUsersAgeInput>;
  /** Update the 'id' column in the 'users' collection. */
  id?: InputMaybe<UpdateColumnUsersIdInput>;
  /** Update the 'name' column in the 'users' collection. */
  name?: InputMaybe<UpdateColumnUsersNameInput>;
};

export type Users = {
  __typename?: 'Users';
  age: Scalars['Int4']['output'];
  id: Scalars['Int4']['output'];
  name: Scalars['Text']['output'];
};

export type UsersAggExp = {
  __typename?: 'UsersAggExp';
  _count: Scalars['Int']['output'];
  age: Int4AggExp;
  id: Int4AggExp;
  name: TextAggExp;
};

export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  age?: InputMaybe<Int4BoolExp>;
  id?: InputMaybe<Int4BoolExp>;
  name?: InputMaybe<TextBoolExp>;
};

export type UsersFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderByExp>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type UsersOrderByExp = {
  age?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};
