/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($id: ID!) {
    getComic(id: $id) {
      id
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
export const listComics = /* GraphQL */ `
  query ListComics(
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
    }
  }
`;
export const comicsByStatusAndCreatedAt = /* GraphQL */ `
  query ComicsByStatusAndCreatedAt(
    $status: Int!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comicsByStatusAndCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
    }
  }
`;
export const comicsByStatusAndLike = /* GraphQL */ `
  query ComicsByStatusAndLike(
    $status: Int!
    $like: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comicsByStatusAndLike(
      status: $status
      like: $like
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
    }
  }
`;
