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
    officialTitle
    author
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
      officialTitle
      author
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
export const getCDB02 = /* GraphQL */ `query GetCDB02($id: ID!) {
  getCDB02(id: $id) {
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
` as GeneratedQuery<APITypes.GetCDB02QueryVariables, APITypes.GetCDB02Query>;
export const listCDB02s = /* GraphQL */ `query ListCDB02s(
  $filter: ModelCDB02FilterInput
  $limit: Int
  $nextToken: String
) {
  listCDB02s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCDB02sQueryVariables,
  APITypes.ListCDB02sQuery
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
      officialTitle
      author
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
      officialTitle
      author
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
      officialTitle
      author
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
      officialTitle
      author
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
export const comicsByOfficialTitleAndCreatedAt = /* GraphQL */ `query ComicsByOfficialTitleAndCreatedAt(
  $officialTitle: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelComicFilterInput
  $limit: Int
  $nextToken: String
) {
  comicsByOfficialTitleAndCreatedAt(
    officialTitle: $officialTitle
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
      officialTitle
      author
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByOfficialTitleAndCreatedAtQueryVariables,
  APITypes.ComicsByOfficialTitleAndCreatedAtQuery
>;
export const comicsByOfficialTitleAndLike = /* GraphQL */ `query ComicsByOfficialTitleAndLike(
  $officialTitle: String!
  $like: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelComicFilterInput
  $limit: Int
  $nextToken: String
) {
  comicsByOfficialTitleAndLike(
    officialTitle: $officialTitle
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
      officialTitle
      author
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByOfficialTitleAndLikeQueryVariables,
  APITypes.ComicsByOfficialTitleAndLikeQuery
>;
export const comicsByAuthorAndCreatedAt = /* GraphQL */ `query ComicsByAuthorAndCreatedAt(
  $author: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelComicFilterInput
  $limit: Int
  $nextToken: String
) {
  comicsByAuthorAndCreatedAt(
    author: $author
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
      officialTitle
      author
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByAuthorAndCreatedAtQueryVariables,
  APITypes.ComicsByAuthorAndCreatedAtQuery
>;
export const comicsByAuthorAndLike = /* GraphQL */ `query ComicsByAuthorAndLike(
  $author: String!
  $like: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelComicFilterInput
  $limit: Int
  $nextToken: String
) {
  comicsByAuthorAndLike(
    author: $author
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
      officialTitle
      author
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ComicsByAuthorAndLikeQueryVariables,
  APITypes.ComicsByAuthorAndLikeQuery
>;
export const cDB02sByPostIdAndUserId = /* GraphQL */ `query CDB02sByPostIdAndUserId(
  $postId: String!
  $userId: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCDB02FilterInput
  $limit: Int
  $nextToken: String
) {
  cDB02sByPostIdAndUserId(
    postId: $postId
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CDB02sByPostIdAndUserIdQueryVariables,
  APITypes.CDB02sByPostIdAndUserIdQuery
>;
export const cDB02sByPostIdAndCreatedAt = /* GraphQL */ `query CDB02sByPostIdAndCreatedAt(
  $postId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCDB02FilterInput
  $limit: Int
  $nextToken: String
) {
  cDB02sByPostIdAndCreatedAt(
    postId: $postId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CDB02sByPostIdAndCreatedAtQueryVariables,
  APITypes.CDB02sByPostIdAndCreatedAtQuery
>;
export const cDB02sByUserIdAndCreatedAt = /* GraphQL */ `query CDB02sByUserIdAndCreatedAt(
  $userId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCDB02FilterInput
  $limit: Int
  $nextToken: String
) {
  cDB02sByUserIdAndCreatedAt(
    userId: $userId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CDB02sByUserIdAndCreatedAtQueryVariables,
  APITypes.CDB02sByUserIdAndCreatedAtQuery
>;
