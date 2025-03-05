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
    officialTitle
    author
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
    officialTitle
    author
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
    officialTitle
    author
    updatedAt
    url
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteComicMutationVariables,
  APITypes.DeleteComicMutation
>;
export const createCDB02 = /* GraphQL */ `mutation CreateCDB02(
  $input: CreateCDB02Input!
  $condition: ModelCDB02ConditionInput
) {
  createCDB02(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCDB02MutationVariables,
  APITypes.CreateCDB02Mutation
>;
export const updateCDB02 = /* GraphQL */ `mutation UpdateCDB02(
  $input: UpdateCDB02Input!
  $condition: ModelCDB02ConditionInput
) {
  updateCDB02(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCDB02MutationVariables,
  APITypes.UpdateCDB02Mutation
>;
export const deleteCDB02 = /* GraphQL */ `mutation DeleteCDB02(
  $input: DeleteCDB02Input!
  $condition: ModelCDB02ConditionInput
) {
  deleteCDB02(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCDB02MutationVariables,
  APITypes.DeleteCDB02Mutation
>;
