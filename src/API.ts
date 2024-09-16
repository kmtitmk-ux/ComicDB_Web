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
  updatedAt?: string | null,
  url?: string | null,
};

export type DeleteComicInput = {
  id: string,
};

export type CreateComicEngagementInput = {
  id?: string | null,
  comicId?: string | null,
  createdAt?: string | null,
  dataType?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type ModelComicEngagementConditionInput = {
  comicId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelComicEngagementConditionInput | null > | null,
  or?: Array< ModelComicEngagementConditionInput | null > | null,
  not?: ModelComicEngagementConditionInput | null,
};

export type ComicEngagement = {
  __typename: "ComicEngagement",
  id: string,
  comicId?: string | null,
  createdAt?: string | null,
  dataType?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type UpdateComicEngagementInput = {
  id: string,
  comicId?: string | null,
  createdAt?: string | null,
  dataType?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type DeleteComicEngagementInput = {
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

export type ModelComicEngagementFilterInput = {
  id?: ModelIDInput | null,
  comicId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelComicEngagementFilterInput | null > | null,
  or?: Array< ModelComicEngagementFilterInput | null > | null,
  not?: ModelComicEngagementFilterInput | null,
};

export type ModelComicEngagementConnection = {
  __typename: "ModelComicEngagementConnection",
  items:  Array<ComicEngagement | null >,
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

export type ModelSubscriptionComicEngagementFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  comicId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dataType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionComicEngagementFilterInput | null > | null,
  or?: Array< ModelSubscriptionComicEngagementFilterInput | null > | null,
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
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type CreateComicEngagementMutationVariables = {
  input: CreateComicEngagementInput,
  condition?: ModelComicEngagementConditionInput | null,
};

export type CreateComicEngagementMutation = {
  createComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type UpdateComicEngagementMutationVariables = {
  input: UpdateComicEngagementInput,
  condition?: ModelComicEngagementConditionInput | null,
};

export type UpdateComicEngagementMutation = {
  updateComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type DeleteComicEngagementMutationVariables = {
  input: DeleteComicEngagementInput,
  condition?: ModelComicEngagementConditionInput | null,
};

export type DeleteComicEngagementMutation = {
  deleteComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
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
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetComicEngagementQueryVariables = {
  id: string,
};

export type GetComicEngagementQuery = {
  getComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type ListComicEngagementsQueryVariables = {
  filter?: ModelComicEngagementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComicEngagementsQuery = {
  listComicEngagements?:  {
    __typename: "ModelComicEngagementConnection",
    items:  Array< {
      __typename: "ComicEngagement",
      id: string,
      comicId?: string | null,
      createdAt?: string | null,
      dataType?: string | null,
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
      updatedAt?: string | null,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicEngagementsByComicIdAndUserIdQueryVariables = {
  comicId: string,
  userId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicEngagementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicEngagementsByComicIdAndUserIdQuery = {
  comicEngagementsByComicIdAndUserId?:  {
    __typename: "ModelComicEngagementConnection",
    items:  Array< {
      __typename: "ComicEngagement",
      id: string,
      comicId?: string | null,
      createdAt?: string | null,
      dataType?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComicEngagementsByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicEngagementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicEngagementsByUserIdAndCreatedAtQuery = {
  comicEngagementsByUserIdAndCreatedAt?:  {
    __typename: "ModelComicEngagementConnection",
    items:  Array< {
      __typename: "ComicEngagement",
      id: string,
      comicId?: string | null,
      createdAt?: string | null,
      dataType?: string | null,
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
    updatedAt?: string | null,
    url?: string | null,
  } | null,
};

export type OnCreateComicEngagementSubscriptionVariables = {
  filter?: ModelSubscriptionComicEngagementFilterInput | null,
};

export type OnCreateComicEngagementSubscription = {
  onCreateComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateComicEngagementSubscriptionVariables = {
  filter?: ModelSubscriptionComicEngagementFilterInput | null,
};

export type OnUpdateComicEngagementSubscription = {
  onUpdateComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteComicEngagementSubscriptionVariables = {
  filter?: ModelSubscriptionComicEngagementFilterInput | null,
};

export type OnDeleteComicEngagementSubscription = {
  onDeleteComicEngagement?:  {
    __typename: "ComicEngagement",
    id: string,
    comicId?: string | null,
    createdAt?: string | null,
    dataType?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};
