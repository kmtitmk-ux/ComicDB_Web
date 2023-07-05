/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComic = /* GraphQL */ `
  mutation CreateComic(
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
    }
  }
`;
export const updateComic = /* GraphQL */ `
  mutation UpdateComic(
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
    }
  }
`;
export const deleteComic = /* GraphQL */ `
  mutation DeleteComic(
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
    }
  }
`;
export const createComicEngagement = /* GraphQL */ `
  mutation CreateComicEngagement(
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
    }
  }
`;
export const updateComicEngagement = /* GraphQL */ `
  mutation UpdateComicEngagement(
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
    }
  }
`;
export const deleteComicEngagement = /* GraphQL */ `
  mutation DeleteComicEngagement(
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
    }
  }
`;
