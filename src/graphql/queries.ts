/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComic = /* GraphQL */ `query GetComic($id: ID!) {
  getComic(id: $id) {
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
` as GeneratedQuery<APITypes.GetComicQueryVariables, APITypes.GetComicQuery>;
export const listComics = /* GraphQL */ `query ListComics(
  $filter: ModelComicFilterInput
  $limit: Int
  $nextToken: String
) {
  listComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListComicsQueryVariables,
  APITypes.ListComicsQuery
>;
export const getComicEngagement = /* GraphQL */ `query GetComicEngagement($id: ID!) {
  getComicEngagement(id: $id) {
    id
    comicId
    createdAt
    dataType
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetComicEngagementQueryVariables,
  APITypes.GetComicEngagementQuery
>;
export const listComicEngagements = /* GraphQL */ `query ListComicEngagements(
  $filter: ModelComicEngagementFilterInput
  $limit: Int
  $nextToken: String
) {
  listComicEngagements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      comicId
      createdAt
      dataType
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListComicEngagementsQueryVariables,
  APITypes.ListComicEngagementsQuery
>;
export const comicsByStatusAndCreatedAt = /* GraphQL */ `query ComicsByStatusAndCreatedAt(
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByStatusAndCreatedAtQueryVariables,
  APITypes.ComicsByStatusAndCreatedAtQuery
>;
export const comicsByStatusAndLike = /* GraphQL */ `query ComicsByStatusAndLike(
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByStatusAndLikeQueryVariables,
  APITypes.ComicsByStatusAndLikeQuery
>;
export const comicsByStatusAndUpdatedAt = /* GraphQL */ `query ComicsByStatusAndUpdatedAt(
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByStatusAndUpdatedAtQueryVariables,
  APITypes.ComicsByStatusAndUpdatedAtQuery
>;
export const comicsByTitleAndUrl = /* GraphQL */ `query ComicsByTitleAndUrl(
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByTitleAndUrlQueryVariables,
  APITypes.ComicsByTitleAndUrlQuery
>;
export const comicEngagementsByComicIdAndUserId = /* GraphQL */ `query ComicEngagementsByComicIdAndUserId(
  $comicId: String!
  $userId: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelComicEngagementFilterInput
  $limit: Int
  $nextToken: String
) {
  comicEngagementsByComicIdAndUserId(
    comicId: $comicId
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      comicId
      createdAt
      dataType
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicEngagementsByComicIdAndUserIdQueryVariables,
  APITypes.ComicEngagementsByComicIdAndUserIdQuery
>;
export const comicEngagementsByUserIdAndCreatedAt = /* GraphQL */ `query ComicEngagementsByUserIdAndCreatedAt(
  $userId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelComicEngagementFilterInput
  $limit: Int
  $nextToken: String
) {
  comicEngagementsByUserIdAndCreatedAt(
    userId: $userId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      comicId
      createdAt
      dataType
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicEngagementsByUserIdAndCreatedAtQueryVariables,
  APITypes.ComicEngagementsByUserIdAndCreatedAtQuery
>;
