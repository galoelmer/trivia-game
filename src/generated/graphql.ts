/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]>;
  contentType_contains?: InputMaybe<Scalars["String"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName?: InputMaybe<Scalars["String"]>;
  fileName_contains?: InputMaybe<Scalars["String"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  height?: InputMaybe<Scalars["Int"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]>;
  height_gt?: InputMaybe<Scalars["Int"]>;
  height_gte?: InputMaybe<Scalars["Int"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]>;
  height_lte?: InputMaybe<Scalars["Int"]>;
  height_not?: InputMaybe<Scalars["Int"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size?: InputMaybe<Scalars["Int"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]>;
  size_gt?: InputMaybe<Scalars["Int"]>;
  size_gte?: InputMaybe<Scalars["Int"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]>;
  size_lte?: InputMaybe<Scalars["Int"]>;
  size_not?: InputMaybe<Scalars["Int"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
  url_contains?: InputMaybe<Scalars["String"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not?: InputMaybe<Scalars["String"]>;
  url_not_contains?: InputMaybe<Scalars["String"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  width?: InputMaybe<Scalars["Int"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]>;
  width_gt?: InputMaybe<Scalars["Int"]>;
  width_gte?: InputMaybe<Scalars["Int"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]>;
  width_lte?: InputMaybe<Scalars["Int"]>;
  width_not?: InputMaybe<Scalars["Int"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  beachResortCollection?: Maybe<BeachResortCollection>;
  entryCollection?: Maybe<EntryCollection>;
  triviaDataCollection?: Maybe<TriviaDataCollection>;
};

export type AssetLinkingCollectionsBeachResortCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsTriviaDataCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResort = Entry & {
  __typename?: "BeachResort";
  breakfast?: Maybe<Scalars["Boolean"]>;
  capacity?: Maybe<Scalars["Int"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<BeachResortLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  pets?: Maybe<Scalars["Boolean"]>;
  price?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  type?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortBreakfastArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortCapacityArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortExtrasArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortFeaturedArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortImagesCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortPetsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortPriceArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortSizeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/beachResort) */
export type BeachResortTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type BeachResortCollection = {
  __typename?: "BeachResortCollection";
  items: Array<Maybe<BeachResort>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type BeachResortFilter = {
  AND?: InputMaybe<Array<InputMaybe<BeachResortFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BeachResortFilter>>>;
  breakfast?: InputMaybe<Scalars["Boolean"]>;
  breakfast_exists?: InputMaybe<Scalars["Boolean"]>;
  breakfast_not?: InputMaybe<Scalars["Boolean"]>;
  capacity?: InputMaybe<Scalars["Int"]>;
  capacity_exists?: InputMaybe<Scalars["Boolean"]>;
  capacity_gt?: InputMaybe<Scalars["Int"]>;
  capacity_gte?: InputMaybe<Scalars["Int"]>;
  capacity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  capacity_lt?: InputMaybe<Scalars["Int"]>;
  capacity_lte?: InputMaybe<Scalars["Int"]>;
  capacity_not?: InputMaybe<Scalars["Int"]>;
  capacity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  extras_exists?: InputMaybe<Scalars["Boolean"]>;
  featured?: InputMaybe<Scalars["Boolean"]>;
  featured_exists?: InputMaybe<Scalars["Boolean"]>;
  featured_not?: InputMaybe<Scalars["Boolean"]>;
  imagesCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pets?: InputMaybe<Scalars["Boolean"]>;
  pets_exists?: InputMaybe<Scalars["Boolean"]>;
  pets_not?: InputMaybe<Scalars["Boolean"]>;
  price?: InputMaybe<Scalars["Float"]>;
  price_exists?: InputMaybe<Scalars["Boolean"]>;
  price_gt?: InputMaybe<Scalars["Float"]>;
  price_gte?: InputMaybe<Scalars["Float"]>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  price_lt?: InputMaybe<Scalars["Float"]>;
  price_lte?: InputMaybe<Scalars["Float"]>;
  price_not?: InputMaybe<Scalars["Float"]>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  size?: InputMaybe<Scalars["Float"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]>;
  size_gt?: InputMaybe<Scalars["Float"]>;
  size_gte?: InputMaybe<Scalars["Float"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  size_lt?: InputMaybe<Scalars["Float"]>;
  size_lte?: InputMaybe<Scalars["Float"]>;
  size_not?: InputMaybe<Scalars["Float"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_exists?: InputMaybe<Scalars["Boolean"]>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type BeachResortLinkingCollections = {
  __typename?: "BeachResortLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BeachResortLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum BeachResortOrder {
  BreakfastAsc = "breakfast_ASC",
  BreakfastDesc = "breakfast_DESC",
  CapacityAsc = "capacity_ASC",
  CapacityDesc = "capacity_DESC",
  FeaturedAsc = "featured_ASC",
  FeaturedDesc = "featured_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PetsAsc = "pets_ASC",
  PetsDesc = "pets_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/6vyoaR5wSbO4iGimD48ird) */
export type ContentType6VyoaR5WSbO4IGimD48Ird = Entry & {
  __typename?: "ContentType6VyoaR5WSbO4IGimD48Ird";
  apiKey?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentType6VyoaR5WSbO4IGimD48IrdLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  sandbox?: Maybe<Scalars["Boolean"]>;
  sys: Sys;
  translationService?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/6vyoaR5wSbO4iGimD48ird) */
export type ContentType6VyoaR5WSbO4IGimD48IrdApiKeyArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/6vyoaR5wSbO4iGimD48ird) */
export type ContentType6VyoaR5WSbO4IGimD48IrdLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/6vyoaR5wSbO4iGimD48ird) */
export type ContentType6VyoaR5WSbO4IGimD48IrdNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/6vyoaR5wSbO4iGimD48ird) */
export type ContentType6VyoaR5WSbO4IGimD48IrdSandboxArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/6vyoaR5wSbO4iGimD48ird) */
export type ContentType6VyoaR5WSbO4IGimD48IrdTranslationServiceArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentType6VyoaR5WSbO4IGimD48IrdCollection = {
  __typename?: "ContentType6VyoaR5WSbO4IGimD48IrdCollection";
  items: Array<Maybe<ContentType6VyoaR5WSbO4IGimD48Ird>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ContentType6VyoaR5WSbO4IGimD48IrdFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentType6VyoaR5WSbO4IGimD48IrdFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentType6VyoaR5WSbO4IGimD48IrdFilter>>>;
  apiKey?: InputMaybe<Scalars["String"]>;
  apiKey_contains?: InputMaybe<Scalars["String"]>;
  apiKey_exists?: InputMaybe<Scalars["Boolean"]>;
  apiKey_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  apiKey_not?: InputMaybe<Scalars["String"]>;
  apiKey_not_contains?: InputMaybe<Scalars["String"]>;
  apiKey_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sandbox?: InputMaybe<Scalars["Boolean"]>;
  sandbox_exists?: InputMaybe<Scalars["Boolean"]>;
  sandbox_not?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  translationService?: InputMaybe<Scalars["String"]>;
  translationService_contains?: InputMaybe<Scalars["String"]>;
  translationService_exists?: InputMaybe<Scalars["Boolean"]>;
  translationService_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  translationService_not?: InputMaybe<Scalars["String"]>;
  translationService_not_contains?: InputMaybe<Scalars["String"]>;
  translationService_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContentType6VyoaR5WSbO4IGimD48IrdLinkingCollections = {
  __typename?: "ContentType6VyoaR5WSbO4IGimD48IrdLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  wpemGnNf0XiyTkIMcK9W1Collection?: Maybe<WpemGnNf0XiyTkIMcK9W1Collection>;
};

export type ContentType6VyoaR5WSbO4IGimD48IrdLinkingCollectionsEntryCollectionArgs =
  {
    limit?: InputMaybe<Scalars["Int"]>;
    locale?: InputMaybe<Scalars["String"]>;
    preview?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
  };

export type ContentType6VyoaR5WSbO4IGimD48IrdLinkingCollectionsWpemGnNf0XiyTkIMcK9W1CollectionArgs =
  {
    limit?: InputMaybe<Scalars["Int"]>;
    locale?: InputMaybe<Scalars["String"]>;
    preview?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
  };

export enum ContentType6VyoaR5WSbO4IGimD48IrdOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SandboxAsc = "sandbox_ASC",
  SandboxDesc = "sandbox_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TranslationServiceAsc = "translationService_ASC",
  TranslationServiceDesc = "translationService_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]>;
};

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  beachResort?: Maybe<BeachResort>;
  beachResortCollection?: Maybe<BeachResortCollection>;
  contentType6VyoaR5WSbO4IGimD48Ird?: Maybe<ContentType6VyoaR5WSbO4IGimD48Ird>;
  contentType6VyoaR5WSbO4IGimD48IrdCollection?: Maybe<ContentType6VyoaR5WSbO4IGimD48IrdCollection>;
  entryCollection?: Maybe<EntryCollection>;
  triviaData?: Maybe<TriviaData>;
  triviaDataCollection?: Maybe<TriviaDataCollection>;
  wpemGnNf0XiyTkIMcK9W1?: Maybe<WpemGnNf0XiyTkIMcK9W1>;
  wpemGnNf0XiyTkIMcK9W1Collection?: Maybe<WpemGnNf0XiyTkIMcK9W1Collection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryBeachResortArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryBeachResortCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<BeachResortOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BeachResortFilter>;
};

export type QueryContentType6VyoaR5WSbO4IGimD48IrdArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryContentType6VyoaR5WSbO4IGimD48IrdCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<ContentType6VyoaR5WSbO4IGimD48IrdOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ContentType6VyoaR5WSbO4IGimD48IrdFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryTriviaDataArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTriviaDataCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TriviaDataOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TriviaDataFilter>;
};

export type QueryWpemGnNf0XiyTkIMcK9W1Args = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryWpemGnNf0XiyTkIMcK9W1CollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<WpemGnNf0XiyTkIMcK9W1Order>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WpemGnNf0XiyTkIMcK9W1Filter>;
};

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["String"]>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedVersion?: InputMaybe<Scalars["Float"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/triviaData) */
export type TriviaData = Entry & {
  __typename?: "TriviaData";
  answersList?: Maybe<Array<Maybe<Scalars["String"]>>>;
  contentfulMetadata: ContentfulMetadata;
  correctAnswer?: Maybe<Scalars["String"]>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<TriviaDataLinkingCollections>;
  question?: Maybe<Scalars["String"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/triviaData) */
export type TriviaDataAnswersListArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/triviaData) */
export type TriviaDataCorrectAnswerArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/triviaData) */
export type TriviaDataImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/triviaData) */
export type TriviaDataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/triviaData) */
export type TriviaDataQuestionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type TriviaDataCollection = {
  __typename?: "TriviaDataCollection";
  items: Array<Maybe<TriviaData>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type TriviaDataFilter = {
  AND?: InputMaybe<Array<InputMaybe<TriviaDataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TriviaDataFilter>>>;
  answersList_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  answersList_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  answersList_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  answersList_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  correctAnswer?: InputMaybe<Scalars["String"]>;
  correctAnswer_contains?: InputMaybe<Scalars["String"]>;
  correctAnswer_exists?: InputMaybe<Scalars["Boolean"]>;
  correctAnswer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  correctAnswer_not?: InputMaybe<Scalars["String"]>;
  correctAnswer_not_contains?: InputMaybe<Scalars["String"]>;
  correctAnswer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_exists?: InputMaybe<Scalars["Boolean"]>;
  question?: InputMaybe<Scalars["String"]>;
  question_contains?: InputMaybe<Scalars["String"]>;
  question_exists?: InputMaybe<Scalars["Boolean"]>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  question_not?: InputMaybe<Scalars["String"]>;
  question_not_contains?: InputMaybe<Scalars["String"]>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TriviaDataLinkingCollections = {
  __typename?: "TriviaDataLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type TriviaDataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum TriviaDataOrder {
  CorrectAnswerAsc = "correctAnswer_ASC",
  CorrectAnswerDesc = "correctAnswer_DESC",
  QuestionAsc = "question_ASC",
  QuestionDesc = "question_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1 = Entry & {
  __typename?: "WpemGnNf0XiyTkIMcK9W1";
  contentType?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<WpemGnNf0XiyTkIMcK9W1LinkingCollections>;
  localizationMethod?: Maybe<Scalars["String"]>;
  localizedReferences?: Maybe<Scalars["Boolean"]>;
  requestedDueDate?: Maybe<Scalars["String"]>;
  selectedReferenceFields?: Maybe<Scalars["JSON"]>;
  sourceContent?: Maybe<Scalars["JSON"]>;
  sys: Sys;
  targetLanguages?: Maybe<Array<Maybe<Scalars["String"]>>>;
  trackChanges?: Maybe<Scalars["Boolean"]>;
  translationName?: Maybe<Scalars["String"]>;
  translationNotes?: Maybe<Scalars["String"]>;
  translator?: Maybe<ContentType6VyoaR5WSbO4IGimD48Ird>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1ContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1LinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1LocalizationMethodArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1LocalizedReferencesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1RequestedDueDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1SelectedReferenceFieldsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1SourceContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1TargetLanguagesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1TrackChangesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1TranslationNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1TranslationNotesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lf7chirx6zkx/content_types/wpemGnNF0xiyTkIMcK9w1) */
export type WpemGnNf0XiyTkIMcK9W1TranslatorArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type WpemGnNf0XiyTkIMcK9W1Collection = {
  __typename?: "WpemGnNf0XiyTkIMcK9W1Collection";
  items: Array<Maybe<WpemGnNf0XiyTkIMcK9W1>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type WpemGnNf0XiyTkIMcK9W1Filter = {
  AND?: InputMaybe<Array<InputMaybe<WpemGnNf0XiyTkIMcK9W1Filter>>>;
  OR?: InputMaybe<Array<InputMaybe<WpemGnNf0XiyTkIMcK9W1Filter>>>;
  contentType?: InputMaybe<Scalars["String"]>;
  contentType_contains?: InputMaybe<Scalars["String"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  localizationMethod?: InputMaybe<Scalars["String"]>;
  localizationMethod_contains?: InputMaybe<Scalars["String"]>;
  localizationMethod_exists?: InputMaybe<Scalars["Boolean"]>;
  localizationMethod_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  localizationMethod_not?: InputMaybe<Scalars["String"]>;
  localizationMethod_not_contains?: InputMaybe<Scalars["String"]>;
  localizationMethod_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  localizedReferences?: InputMaybe<Scalars["Boolean"]>;
  localizedReferences_exists?: InputMaybe<Scalars["Boolean"]>;
  localizedReferences_not?: InputMaybe<Scalars["Boolean"]>;
  requestedDueDate?: InputMaybe<Scalars["String"]>;
  requestedDueDate_contains?: InputMaybe<Scalars["String"]>;
  requestedDueDate_exists?: InputMaybe<Scalars["Boolean"]>;
  requestedDueDate_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  requestedDueDate_not?: InputMaybe<Scalars["String"]>;
  requestedDueDate_not_contains?: InputMaybe<Scalars["String"]>;
  requestedDueDate_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  selectedReferenceFields_exists?: InputMaybe<Scalars["Boolean"]>;
  sourceContent_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  targetLanguages_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  targetLanguages_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  targetLanguages_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  targetLanguages_exists?: InputMaybe<Scalars["Boolean"]>;
  trackChanges?: InputMaybe<Scalars["Boolean"]>;
  trackChanges_exists?: InputMaybe<Scalars["Boolean"]>;
  trackChanges_not?: InputMaybe<Scalars["Boolean"]>;
  translationName?: InputMaybe<Scalars["String"]>;
  translationName_contains?: InputMaybe<Scalars["String"]>;
  translationName_exists?: InputMaybe<Scalars["Boolean"]>;
  translationName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  translationName_not?: InputMaybe<Scalars["String"]>;
  translationName_not_contains?: InputMaybe<Scalars["String"]>;
  translationName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  translationNotes?: InputMaybe<Scalars["String"]>;
  translationNotes_contains?: InputMaybe<Scalars["String"]>;
  translationNotes_exists?: InputMaybe<Scalars["Boolean"]>;
  translationNotes_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  translationNotes_not?: InputMaybe<Scalars["String"]>;
  translationNotes_not_contains?: InputMaybe<Scalars["String"]>;
  translationNotes_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  translator?: InputMaybe<CfContentType6VyoaR5WSbO4IGimD48IrdNestedFilter>;
  translator_exists?: InputMaybe<Scalars["Boolean"]>;
};

export type WpemGnNf0XiyTkIMcK9W1LinkingCollections = {
  __typename?: "WpemGnNf0XiyTkIMcK9W1LinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type WpemGnNf0XiyTkIMcK9W1LinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum WpemGnNf0XiyTkIMcK9W1Order {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  LocalizationMethodAsc = "localizationMethod_ASC",
  LocalizationMethodDesc = "localizationMethod_DESC",
  LocalizedReferencesAsc = "localizedReferences_ASC",
  LocalizedReferencesDesc = "localizedReferences_DESC",
  RequestedDueDateAsc = "requestedDueDate_ASC",
  RequestedDueDateDesc = "requestedDueDate_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TrackChangesAsc = "trackChanges_ASC",
  TrackChangesDesc = "trackChanges_DESC",
  TranslationNameAsc = "translationName_ASC",
  TranslationNameDesc = "translationName_DESC",
}

export type CfContentType6VyoaR5WSbO4IGimD48IrdNestedFilter = {
  AND?: InputMaybe<
    Array<InputMaybe<CfContentType6VyoaR5WSbO4IGimD48IrdNestedFilter>>
  >;
  OR?: InputMaybe<
    Array<InputMaybe<CfContentType6VyoaR5WSbO4IGimD48IrdNestedFilter>>
  >;
  apiKey?: InputMaybe<Scalars["String"]>;
  apiKey_contains?: InputMaybe<Scalars["String"]>;
  apiKey_exists?: InputMaybe<Scalars["Boolean"]>;
  apiKey_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  apiKey_not?: InputMaybe<Scalars["String"]>;
  apiKey_not_contains?: InputMaybe<Scalars["String"]>;
  apiKey_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sandbox?: InputMaybe<Scalars["Boolean"]>;
  sandbox_exists?: InputMaybe<Scalars["Boolean"]>;
  sandbox_not?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  translationService?: InputMaybe<Scalars["String"]>;
  translationService_contains?: InputMaybe<Scalars["String"]>;
  translationService_exists?: InputMaybe<Scalars["Boolean"]>;
  translationService_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  translationService_not?: InputMaybe<Scalars["String"]>;
  translationService_not_contains?: InputMaybe<Scalars["String"]>;
  translationService_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GetTriviaDataQueryVariables = Exact<{
  locale: Scalars["String"];
}>;

export type GetTriviaDataQuery = {
  __typename?: "Query";
  triviaDataCollection?: {
    __typename?: "TriviaDataCollection";
    items: Array<{
      __typename?: "TriviaData";
      question?: string | null;
      answersList?: Array<string | null> | null;
      correctAnswer?: string | null;
      image?: { __typename?: "Asset"; url?: string | null } | null;
    } | null>;
  } | null;
};

export const GetTriviaDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTriviaData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "locale" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "triviaDataCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "locale" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "locale" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "question" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "answersList" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "correctAnswer" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTriviaDataQuery, GetTriviaDataQueryVariables>;

/**
 * __useGetTriviaDataQuery__
 *
 * To run a query within a React component, call `useGetTriviaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTriviaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTriviaDataQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetTriviaDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTriviaDataQuery,
    GetTriviaDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTriviaDataQuery, GetTriviaDataQueryVariables>(
    GetTriviaDataDocument,
    options
  );
}
export function useGetTriviaDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTriviaDataQuery,
    GetTriviaDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTriviaDataQuery, GetTriviaDataQueryVariables>(
    GetTriviaDataDocument,
    options
  );
}
export type GetTriviaDataQueryHookResult = ReturnType<
  typeof useGetTriviaDataQuery
>;
export type GetTriviaDataLazyQueryHookResult = ReturnType<
  typeof useGetTriviaDataLazyQuery
>;
export type GetTriviaDataQueryResult = Apollo.QueryResult<
  GetTriviaDataQuery,
  GetTriviaDataQueryVariables
>;
