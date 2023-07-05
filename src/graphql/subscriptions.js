/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComic = /* GraphQL */ `
  subscription OnCreateComic($filter: ModelSubscriptionComicFilterInput) {
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
    }
  }
`;
export const onUpdateComic = /* GraphQL */ `
  subscription OnUpdateComic($filter: ModelSubscriptionComicFilterInput) {
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
    }
  }
`;
export const onDeleteComic = /* GraphQL */ `
  subscription OnDeleteComic($filter: ModelSubscriptionComicFilterInput) {
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
    }
  }
`;
export const onCreateComicEngagement = /* GraphQL */ `
  subscription OnCreateComicEngagement(
    $filter: ModelSubscriptionComicEngagementFilterInput
  ) {
    onCreateComicEngagement(filter: $filter) {
      id
      comicId
      createdAt
      dataType
      updatedAt
      userId
    }
  }
`;
export const onUpdateComicEngagement = /* GraphQL */ `
  subscription OnUpdateComicEngagement(
    $filter: ModelSubscriptionComicEngagementFilterInput
  ) {
    onUpdateComicEngagement(filter: $filter) {
      id
      comicId
      createdAt
      dataType
      updatedAt
      userId
    }
  }
`;
export const onDeleteComicEngagement = /* GraphQL */ `
  subscription OnDeleteComicEngagement(
    $filter: ModelSubscriptionComicEngagementFilterInput
  ) {
    onDeleteComicEngagement(filter: $filter) {
      id
      comicId
      createdAt
      dataType
      updatedAt
      userId
    }
  }
`;
