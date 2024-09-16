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
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteComicSubscriptionVariables,
  APITypes.OnDeleteComicSubscription
>;
export const onCreateComicEngagement = /* GraphQL */ `subscription OnCreateComicEngagement(
  $filter: ModelSubscriptionComicEngagementFilterInput
) {
  onCreateComicEngagement(filter: $filter) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateComicEngagementSubscriptionVariables,
  APITypes.OnCreateComicEngagementSubscription
>;
export const onUpdateComicEngagement = /* GraphQL */ `subscription OnUpdateComicEngagement(
  $filter: ModelSubscriptionComicEngagementFilterInput
) {
  onUpdateComicEngagement(filter: $filter) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateComicEngagementSubscriptionVariables,
  APITypes.OnUpdateComicEngagementSubscription
>;
export const onDeleteComicEngagement = /* GraphQL */ `subscription OnDeleteComicEngagement(
  $filter: ModelSubscriptionComicEngagementFilterInput
) {
  onDeleteComicEngagement(filter: $filter) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteComicEngagementSubscriptionVariables,
  APITypes.OnDeleteComicEngagementSubscription
>;
