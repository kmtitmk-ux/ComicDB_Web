/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComic = /* GraphQL */ `mutation CreateComic(
  $input: CreateComicInput!
  $condition: ModelComicConditionInput
) {
  createComic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateComicMutationVariables,
  APITypes.CreateComicMutation
>;
export const updateComic = /* GraphQL */ `mutation UpdateComic(
  $input: UpdateComicInput!
  $condition: ModelComicConditionInput
) {
  updateComic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateComicMutationVariables,
  APITypes.UpdateComicMutation
>;
export const deleteComic = /* GraphQL */ `mutation DeleteComic(
  $input: DeleteComicInput!
  $condition: ModelComicConditionInput
) {
  deleteComic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteComicMutationVariables,
  APITypes.DeleteComicMutation
>;
export const createComicEngagement = /* GraphQL */ `mutation CreateComicEngagement(
  $input: CreateComicEngagementInput!
  $condition: ModelComicEngagementConditionInput
) {
  createComicEngagement(input: $input, condition: $condition) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateComicEngagementMutationVariables,
  APITypes.CreateComicEngagementMutation
>;
export const updateComicEngagement = /* GraphQL */ `mutation UpdateComicEngagement(
  $input: UpdateComicEngagementInput!
  $condition: ModelComicEngagementConditionInput
) {
  updateComicEngagement(input: $input, condition: $condition) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateComicEngagementMutationVariables,
  APITypes.UpdateComicEngagementMutation
>;
export const deleteComicEngagement = /* GraphQL */ `mutation DeleteComicEngagement(
  $input: DeleteComicEngagementInput!
  $condition: ModelComicEngagementConditionInput
) {
  deleteComicEngagement(input: $input, condition: $condition) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteComicEngagementMutationVariables,
  APITypes.DeleteComicEngagementMutation
>;
