/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateComicInput = {
  id?: string | null,
  addLike?: number | null,
  createdAt?: string | null,
  description?: string | null,
  errorCount?: number | null,
  img?: string | null,
  like?: number | null,
  status?: number | null,
  tags?: string | null,
  title?: string | null,
  officialTitle?: string | null,
  author?: string | null,
  updatedAt?: string | null,
  url?: string | null,
};

export type ModelComicConditionInput = {
  addLike?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  errorCount?: ModelIntInput | null,
  img?: ModelStringInput | null,
  like?: ModelIntInput | null,
  status?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  officialTitle?: ModelStringInput | null,
  author?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelComicConditionInput | null > | null,
  or?: Array< ModelComicConditionInput | null > | null,
  not?: ModelComicConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Comic = {
  __typename: "Comic",
  id: string,
  addLike?: number | null,
  createdAt?: string | null,
  description?: string | null,
  errorCount?: number | null,
  img?: string | null,
  like?: number | null,
  status?: number | null,
  tags?: string | null,
  title?: string | null,
  officialTitle?: string | null,
  author?: string | null,
  updatedAt?: string | null,
  url?: string | null,
};

export type UpdateComicInput = {
  id: string,
  addLike?: number | null,
  createdAt?: string | null,
  description?: string | null,
  errorCount?: number | null,
  img?: string | null,
  like?: number | null,
  status?: number | null,
  tags?: string | null,
  title?: string | null,
  officialTitle?: string | null,
  author?: string | null,
  updatedAt?: string | null,
  url?: string | null,
};

export type DeleteComicInput = {
  id: string,
};

export type CreateCDB02Input = {
  id?: string | null,
  postId?: string | null,
  createdAt?: string | null,
  content?: string | null,
  dataType?: string | null,
  reply?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type ModelCDB02ConditionInput = {
  postId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  reply?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelCDB02ConditionInput | null > | null,
  or?: Array< ModelCDB02ConditionInput | null > | null,
  not?: ModelCDB02ConditionInput | null,
};

export type CDB02 = {
  __typename: "CDB02",
  id: string,
  postId?: string | null,
  createdAt?: string | null,
  content?: string | null,
  dataType?: string | null,
  reply?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type UpdateCDB02Input = {
  id: string,
  postId?: string | null,
  createdAt?: string | null,
  content?: string | null,
  dataType?: string | null,
  reply?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type DeleteCDB02Input = {
  id: string,
};

export type ModelComicFilterInput = {
  id?: ModelIDInput | null,
  addLike?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  errorCount?: ModelIntInput | null,
  img?: ModelStringInput | null,
  like?: ModelIntInput | null,
  status?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  officialTitle?: ModelStringInput | null,
  author?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelComicFilterInput | null > | null,
  or?: Array< ModelComicFilterInput | null > | null,
  not?: ModelComicFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelComicConnection = {
  __typename: "ModelComicConnection",
  items:  Array<Comic | null >,
  nextToken?: string | null,
};

export type ModelCDB02FilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  reply?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelCDB02FilterInput | null > | null,
  or?: Array< ModelCDB02FilterInput | null > | null,
  not?: ModelCDB02FilterInput | null,
};

export type ModelCDB02Connection = {
  __typename: "ModelCDB02Connection",
  items:  Array<CDB02 | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSubscriptionComicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  addLike?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  errorCount?: ModelSubscriptionIntInput | null,
  img?: ModelSubscriptionStringInput | null,
  like?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  officialTitle?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionComicFilterInput | null > | null,
  or?: Array< ModelSubscriptionComicFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCDB02FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  dataType?: ModelSubscriptionStringInput | null,
  reply?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCDB02FilterInput | null > | null,
  or?: Array< ModelSubscriptionCDB02FilterInput | null > | null,
};

export type CreateComicMutationVariables = {
  input: CreateComicInput,
  condition?: ModelComicConditionInput | null,
};

export type CreateComicMutation = {
  createComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type UpdateComicMutationVariables = {
  input: UpdateComicInput,
  condition?: ModelComicConditionInput | null,
};

export type UpdateComicMutation = {
  updateComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type DeleteComicMutationVariables = {
  input: DeleteComicInput,
  condition?: ModelComicConditionInput | null,
};

export type DeleteComicMutation = {
  deleteComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type CreateCDB02MutationVariables = {
  input: CreateCDB02Input,
  condition?: ModelCDB02ConditionInput | null,
};

export type CreateCDB02Mutation = {
  createCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type UpdateCDB02MutationVariables = {
  input: UpdateCDB02Input,
  condition?: ModelCDB02ConditionInput | null,
};

export type UpdateCDB02Mutation = {
  updateCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type DeleteCDB02MutationVariables = {
  input: DeleteCDB02Input,
  condition?: ModelCDB02ConditionInput | null,
};

export type DeleteCDB02Mutation = {
  deleteCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type GetComicQueryVariables = {
  id: string,
};

export type GetComicQuery = {
  getComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type ListComicsQueryVariables = {
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComicsQuery = {
  listComics?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCDB02QueryVariables = {
  id: string,
};

export type GetCDB02Query = {
  getCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type ListCDB02sQueryVariables = {
  filter?: ModelCDB02FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCDB02sQuery = {
  listCDB02s?:  {
    __typename: "ModelCDB02Connection",
    items:  Array< {
      __typename: "CDB02",
      id: string,
      postId?: string | null,
      createdAt?: string | null,
      content?: string | null,
      dataType?: string | null,
      reply?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByStatusAndCreatedAtQueryVariables = {
  status: number,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByStatusAndCreatedAtQuery = {
  comicsByStatusAndCreatedAt?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByStatusAndLikeQueryVariables = {
  status: number,
  like?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByStatusAndLikeQuery = {
  comicsByStatusAndLike?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByStatusAndUpdatedAtQueryVariables = {
  status: number,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByStatusAndUpdatedAtQuery = {
  comicsByStatusAndUpdatedAt?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByTitleAndUrlQueryVariables = {
  title: string,
  url?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByTitleAndUrlQuery = {
  comicsByTitleAndUrl?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByOfficialTitleAndCreatedAtQueryVariables = {
  officialTitle: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByOfficialTitleAndCreatedAtQuery = {
  comicsByOfficialTitleAndCreatedAt?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByOfficialTitleAndLikeQueryVariables = {
  officialTitle: string,
  like?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByOfficialTitleAndLikeQuery = {
  comicsByOfficialTitleAndLike?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByAuthorAndCreatedAtQueryVariables = {
  author: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByAuthorAndCreatedAtQuery = {
  comicsByAuthorAndCreatedAt?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicsByAuthorAndLikeQueryVariables = {
  author: string,
  like?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicsByAuthorAndLikeQuery = {
  comicsByAuthorAndLike?:  {
    __typename: "ModelComicConnection",
    items:  Array< {
      __typename: "Comic",
      id: string,
      addLike?: number | null,
      createdAt?: string | null,
      description?: string | null,
      errorCount?: number | null,
      img?: string | null,
      like?: number | null,
      status?: number | null,
      tags?: string | null,
      title?: string | null,
      officialTitle?: string | null,
      author?: string | null,
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CDB02sByPostIdAndUserIdQueryVariables = {
  postId: string,
  userId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCDB02FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CDB02sByPostIdAndUserIdQuery = {
  cDB02sByPostIdAndUserId?:  {
    __typename: "ModelCDB02Connection",
    items:  Array< {
      __typename: "CDB02",
      id: string,
      postId?: string | null,
      createdAt?: string | null,
      content?: string | null,
      dataType?: string | null,
      reply?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CDB02sByPostIdAndCreatedAtQueryVariables = {
  postId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCDB02FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CDB02sByPostIdAndCreatedAtQuery = {
  cDB02sByPostIdAndCreatedAt?:  {
    __typename: "ModelCDB02Connection",
    items:  Array< {
      __typename: "CDB02",
      id: string,
      postId?: string | null,
      createdAt?: string | null,
      content?: string | null,
      dataType?: string | null,
      reply?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CDB02sByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCDB02FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CDB02sByUserIdAndCreatedAtQuery = {
  cDB02sByUserIdAndCreatedAt?:  {
    __typename: "ModelCDB02Connection",
    items:  Array< {
      __typename: "CDB02",
      id: string,
      postId?: string | null,
      createdAt?: string | null,
      content?: string | null,
      dataType?: string | null,
      reply?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateComicSubscriptionVariables = {
  filter?: ModelSubscriptionComicFilterInput | null,
};

export type OnCreateComicSubscription = {
  onCreateComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type OnUpdateComicSubscriptionVariables = {
  filter?: ModelSubscriptionComicFilterInput | null,
};

export type OnUpdateComicSubscription = {
  onUpdateComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type OnDeleteComicSubscriptionVariables = {
  filter?: ModelSubscriptionComicFilterInput | null,
};

export type OnDeleteComicSubscription = {
  onDeleteComic?:  {
    __typename: "Comic",
    id: string,
    addLike?: number | null,
    createdAt?: string | null,
    description?: string | null,
    errorCount?: number | null,
    img?: string | null,
    like?: number | null,
    status?: number | null,
    tags?: string | null,
    title?: string | null,
    officialTitle?: string | null,
    author?: string | null,
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type OnCreateCDB02SubscriptionVariables = {
  filter?: ModelSubscriptionCDB02FilterInput | null,
};

export type OnCreateCDB02Subscription = {
  onCreateCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateCDB02SubscriptionVariables = {
  filter?: ModelSubscriptionCDB02FilterInput | null,
};

export type OnUpdateCDB02Subscription = {
  onUpdateCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteCDB02SubscriptionVariables = {
  filter?: ModelSubscriptionCDB02FilterInput | null,
};

export type OnDeleteCDB02Subscription = {
  onDeleteCDB02?:  {
    __typename: "CDB02",
    id: string,
    postId?: string | null,
    createdAt?: string | null,
    content?: string | null,
    dataType?: string | null,
    reply?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};
