/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComic = /* GraphQL */ `subscription OnCreateComic($filter: ModelSubscriptionComicFilterInput) {
  onCreateComic(filter: $filter) {
    id
    addLike
    createdAt
    description
    errorCount
    img
    like
    status
    tags
    title
    officialTitle
    author
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateComicSubscriptionVariables,
  APITypes.OnCreateComicSubscription
>;
export const onUpdateComic = /* GraphQL */ `subscription OnUpdateComic($filter: ModelSubscriptionComicFilterInput) {
  onUpdateComic(filter: $filter) {
    id
    addLike
    createdAt
    description
    errorCount
    img
    like
    status
    tags
    title
    officialTitle
    author
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateComicSubscriptionVariables,
  APITypes.OnUpdateComicSubscription
>;
export const onDeleteComic = /* GraphQL */ `subscription OnDeleteComic($filter: ModelSubscriptionComicFilterInput) {
  onDeleteComic(filter: $filter) {
    id
    addLike
    createdAt
    description
    errorCount
    img
    like
    status
    tags
    title
    officialTitle
    author
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteComicSubscriptionVariables,
  APITypes.OnDeleteComicSubscription
>;
export const onCreateCDB02 = /* GraphQL */ `subscription OnCreateCDB02($filter: ModelSubscriptionCDB02FilterInput) {
  onCreateCDB02(filter: $filter) {
    id
    postId
    createdAt
    content
    dataType
    reply
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCDB02SubscriptionVariables,
  APITypes.OnCreateCDB02Subscription
>;
export const onUpdateCDB02 = /* GraphQL */ `subscription OnUpdateCDB02($filter: ModelSubscriptionCDB02FilterInput) {
  onUpdateCDB02(filter: $filter) {
    id
    postId
    createdAt
    content
    dataType
    reply
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCDB02SubscriptionVariables,
  APITypes.OnUpdateCDB02Subscription
>;
export const onDeleteCDB02 = /* GraphQL */ `subscription OnDeleteCDB02($filter: ModelSubscriptionCDB02FilterInput) {
  onDeleteCDB02(filter: $filter) {
    id
    postId
    createdAt
    content
    dataType
    reply
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCDB02SubscriptionVariables,
  APITypes.OnDeleteCDB02Subscription
>;
