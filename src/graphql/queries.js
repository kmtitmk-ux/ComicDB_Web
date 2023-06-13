/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($id: ID!) {
    getComic(id: $id) {
      id
      errorCount
      img
      like
      status
      title
      updatedAt
      url
      createdAt
    }
  }
`;
export const listComics = /* GraphQL */ `
  query ListComics(
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        errorCount
        img
        like
        status
        title
        updatedAt
        url
        createdAt
      }
      nextToken
    }
  }
`;
export const comicsByStatusAndUpdatedAt = /* GraphQL */ `
  query ComicsByStatusAndUpdatedAt(
    $status: Int!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comicsByStatusAndUpdatedAt(
      status: $status
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        errorCount
        img
        like
        status
        title
        updatedAt
        url
        createdAt
      }
      nextToken
    }
  }
`;
export const comicsByTitleAndUrl = /* GraphQL */ `
  query ComicsByTitleAndUrl(
    $title: String!
    $url: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comicsByTitleAndUrl(
      title: $title
      url: $url
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        errorCount
        img
        like
        status
        title
        updatedAt
        url
        createdAt
      }
      nextToken
    }
  }
`;
