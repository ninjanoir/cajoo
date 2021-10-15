import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
  geography: any;
  geometry: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  access_token: Scalars['String'];
  message: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  token_type: Scalars['String'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type CancelOrderOutput = {
  __typename?: 'CancelOrderOutput';
  message: Scalars['String'];
};

export type CreateCajooDeliveryOutput = {
  __typename?: 'CreateCajooDeliveryOutput';
  message: Scalars['String'];
};

export type CreateCartItemOutput = {
  __typename?: 'CreateCartItemOutput';
  id: Scalars['uuid'];
};

export type CreateCoursierFrDeliveryOutput = {
  __typename?: 'CreateCoursierFrDeliveryOutput';
  message: Scalars['String'];
  order_id?: Maybe<Scalars['String']>;
};

export type CreateInvoiceOutput = {
  __typename?: 'CreateInvoiceOutput';
  location: Scalars['String'];
  message: Scalars['String'];
};

export type CreateMtoolsDeliveryOutput = {
  __typename?: 'CreateMtoolsDeliveryOutput';
  message: Scalars['String'];
};

export type CreateStaffUserOutput = {
  __typename?: 'CreateStaffUserOutput';
  message: Scalars['String'];
  userId?: Maybe<Scalars['uuid']>;
};

export type CreateStuartDeliveryOutput = {
  __typename?: 'CreateStuartDeliveryOutput';
  message: Scalars['String'];
};

export type CreateUberDirectDeliveryOutput = {
  __typename?: 'CreateUberDirectDeliveryOutput';
  message: Scalars['String'];
  order_id?: Maybe<Scalars['String']>;
};

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  message?: Maybe<Scalars['String']>;
};

export type DeliveryEtaOutput = {
  __typename?: 'DeliveryETAOutput';
  status: Status;
  time_seconds: Scalars['Float'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type OrderBodyCoursier = {
  deliveryID: Scalars['String'];
  orderAddress: Scalars['String'];
  orderAddressInstructions: Scalars['String'];
  orderNumber: Scalars['String'];
  userAddressCity: Scalars['String'];
  userEmail: Scalars['String'];
  userFirstName: Scalars['String'];
  userId: Scalars['String'];
  userLastName: Scalars['String'];
  userPhoneNumber: Scalars['String'];
  userPostalCode: Scalars['String'];
  warehouseAddress: Scalars['String'];
  warehouseCity: Scalars['String'];
  warehouseHandle: Scalars['String'];
  warehouseName: Scalars['String'];
  warehousePostalCode: Scalars['String'];
  warehouseSlackURL: Scalars['String'];
  warehouseSlackUserId: Scalars['String'];
};

export type OrderOutputCoursier = {
  __typename?: 'OrderOutputCoursier';
  input: Scalars['String'];
  message: Scalars['String'];
};

export type OrderStuartBody = {
  deliveryID: Scalars['String'];
  orderAddress: Scalars['String'];
  orderAddressInstructions: Scalars['String'];
  orderNumber: Scalars['String'];
  userFirstName: Scalars['String'];
  userId: Scalars['String'];
  userLastName: Scalars['String'];
  userPhoneNumber: Scalars['String'];
  warehouseAddress: Scalars['String'];
  warehouseHandle: Scalars['String'];
  warehouseName: Scalars['String'];
  warehouseSlackURL: Scalars['String'];
  warehouseSlackUserId: Scalars['String'];
};

export type OrderStuartOutput = {
  __typename?: 'OrderStuartOutput';
  input: Scalars['String'];
  message: Scalars['String'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  brand?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  exp_month?: Maybe<Scalars['Int']>;
  exp_year?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  last4?: Maybe<Scalars['String']>;
};

export enum Precision {
  High = 'high',
  Low = 'low'
}

export type RefundOrderOutput = {
  __typename?: 'RefundOrderOutput';
  message: Scalars['String'];
};

export type RiderChallengeOutput = {
  __typename?: 'RiderChallengeOutput';
  message: Scalars['String'];
};

export type RiderLoginOutput = {
  __typename?: 'RiderLoginOutput';
  access_token: Scalars['String'];
  message: Scalars['String'];
  token_type: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  message: Scalars['String'];
};

export enum Status {
  Bad = 'bad',
  Good = 'good',
  Medium = 'medium'
}

export type StatusOutput = {
  __typename?: 'StatusOutput';
  message: Scalars['String'];
  phone_number: Scalars['String'];
  status: Scalars['String'];
};

export type StatusUpdateOutput = {
  __typename?: 'StatusUpdateOutput';
  message: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type StripeUser = {
  __typename?: 'StripeUser';
  payment_methods: Array<PaymentMethod>;
  stripe_customer_id: Scalars['String'];
};

export type UpdateAdminPasswordOutput = {
  __typename?: 'UpdateAdminPasswordOutput';
  message: Scalars['String'];
};

export type UpdateRiderLocationOutput = {
  __typename?: 'UpdateRiderLocationOutput';
  message?: Maybe<Scalars['String']>;
};

export type UploadKey = {
  __typename?: 'UploadKey';
  key: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type AddressInput = {
  address_city: Scalars['String'];
  address_country?: Maybe<Scalars['String']>;
  address_instructions?: Maybe<Scalars['String']>;
  address_line_1: Scalars['String'];
  address_line_2?: Maybe<Scalars['String']>;
  address_postal_code: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "address_label" */
export type Address_Label = {
  __typename?: 'address_label';
  value: Scalars['String'];
};

/** aggregated selection of "address_label" */
export type Address_Label_Aggregate = {
  __typename?: 'address_label_aggregate';
  aggregate?: Maybe<Address_Label_Aggregate_Fields>;
  nodes: Array<Address_Label>;
};

/** aggregate fields of "address_label" */
export type Address_Label_Aggregate_Fields = {
  __typename?: 'address_label_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Address_Label_Max_Fields>;
  min?: Maybe<Address_Label_Min_Fields>;
};


/** aggregate fields of "address_label" */
export type Address_Label_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Address_Label_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "address_label". All fields are combined with a logical 'AND'. */
export type Address_Label_Bool_Exp = {
  _and?: Maybe<Array<Address_Label_Bool_Exp>>;
  _not?: Maybe<Address_Label_Bool_Exp>;
  _or?: Maybe<Array<Address_Label_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "address_label" */
export enum Address_Label_Constraint {
  /** unique or primary key constraint */
  AddressLabelPkey = 'address_label_pkey'
}

export enum Address_Label_Enum {
  Friend = 'friend',
  Home = 'home',
  Partner = 'partner',
  Work = 'work'
}

/** Boolean expression to compare columns of type "address_label_enum". All fields are combined with logical 'AND'. */
export type Address_Label_Enum_Comparison_Exp = {
  _eq?: Maybe<Address_Label_Enum>;
  _in?: Maybe<Array<Address_Label_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Address_Label_Enum>;
  _nin?: Maybe<Array<Address_Label_Enum>>;
};

/** input type for inserting data into table "address_label" */
export type Address_Label_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Address_Label_Max_Fields = {
  __typename?: 'address_label_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Address_Label_Min_Fields = {
  __typename?: 'address_label_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "address_label" */
export type Address_Label_Mutation_Response = {
  __typename?: 'address_label_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Address_Label>;
};

/** on conflict condition type for table "address_label" */
export type Address_Label_On_Conflict = {
  constraint: Address_Label_Constraint;
  update_columns?: Array<Address_Label_Update_Column>;
  where?: Maybe<Address_Label_Bool_Exp>;
};

/** Ordering options when selecting data from "address_label". */
export type Address_Label_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: address_label */
export type Address_Label_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "address_label" */
export enum Address_Label_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "address_label" */
export type Address_Label_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "address_label" */
export enum Address_Label_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "banners" */
export type Banners = {
  __typename?: 'banners';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  subcategory_id?: Maybe<Scalars['String']>;
  text_modal?: Maybe<Scalars['String']>;
  title_modal?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "banners" */
export type Banners_Aggregate = {
  __typename?: 'banners_aggregate';
  aggregate?: Maybe<Banners_Aggregate_Fields>;
  nodes: Array<Banners>;
};

/** aggregate fields of "banners" */
export type Banners_Aggregate_Fields = {
  __typename?: 'banners_aggregate_fields';
  avg?: Maybe<Banners_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Banners_Max_Fields>;
  min?: Maybe<Banners_Min_Fields>;
  stddev?: Maybe<Banners_Stddev_Fields>;
  stddev_pop?: Maybe<Banners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Banners_Stddev_Samp_Fields>;
  sum?: Maybe<Banners_Sum_Fields>;
  var_pop?: Maybe<Banners_Var_Pop_Fields>;
  var_samp?: Maybe<Banners_Var_Samp_Fields>;
  variance?: Maybe<Banners_Variance_Fields>;
};


/** aggregate fields of "banners" */
export type Banners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Banners_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Banners_Avg_Fields = {
  __typename?: 'banners_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "banners". All fields are combined with a logical 'AND'. */
export type Banners_Bool_Exp = {
  _and?: Maybe<Array<Banners_Bool_Exp>>;
  _not?: Maybe<Banners_Bool_Exp>;
  _or?: Maybe<Array<Banners_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  subcategory_id?: Maybe<String_Comparison_Exp>;
  text_modal?: Maybe<String_Comparison_Exp>;
  title_modal?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "banners" */
export enum Banners_Constraint {
  /** unique or primary key constraint */
  BannersPkey = 'banners_pkey'
}

/** input type for incrementing numeric columns in table "banners" */
export type Banners_Inc_Input = {
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "banners" */
export type Banners_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  subcategory_id?: Maybe<Scalars['String']>;
  text_modal?: Maybe<Scalars['String']>;
  title_modal?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Banners_Max_Fields = {
  __typename?: 'banners_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  subcategory_id?: Maybe<Scalars['String']>;
  text_modal?: Maybe<Scalars['String']>;
  title_modal?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Banners_Min_Fields = {
  __typename?: 'banners_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  subcategory_id?: Maybe<Scalars['String']>;
  text_modal?: Maybe<Scalars['String']>;
  title_modal?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "banners" */
export type Banners_Mutation_Response = {
  __typename?: 'banners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Banners>;
};

/** on conflict condition type for table "banners" */
export type Banners_On_Conflict = {
  constraint: Banners_Constraint;
  update_columns?: Array<Banners_Update_Column>;
  where?: Maybe<Banners_Bool_Exp>;
};

/** Ordering options when selecting data from "banners". */
export type Banners_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  subcategory_id?: Maybe<Order_By>;
  text_modal?: Maybe<Order_By>;
  title_modal?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: banners */
export type Banners_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "banners" */
export enum Banners_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Position = 'position',
  /** column name */
  SubcategoryId = 'subcategory_id',
  /** column name */
  TextModal = 'text_modal',
  /** column name */
  TitleModal = 'title_modal',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "banners" */
export type Banners_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  subcategory_id?: Maybe<Scalars['String']>;
  text_modal?: Maybe<Scalars['String']>;
  title_modal?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Banners_Stddev_Fields = {
  __typename?: 'banners_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Banners_Stddev_Pop_Fields = {
  __typename?: 'banners_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Banners_Stddev_Samp_Fields = {
  __typename?: 'banners_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Banners_Sum_Fields = {
  __typename?: 'banners_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** update columns of table "banners" */
export enum Banners_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Position = 'position',
  /** column name */
  SubcategoryId = 'subcategory_id',
  /** column name */
  TextModal = 'text_modal',
  /** column name */
  TitleModal = 'title_modal',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Banners_Var_Pop_Fields = {
  __typename?: 'banners_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Banners_Var_Samp_Fields = {
  __typename?: 'banners_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Banners_Variance_Fields = {
  __typename?: 'banners_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cart_items" */
export type Cart_Items = {
  __typename?: 'cart_items';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};

/** aggregated selection of "cart_items" */
export type Cart_Items_Aggregate = {
  __typename?: 'cart_items_aggregate';
  aggregate?: Maybe<Cart_Items_Aggregate_Fields>;
  nodes: Array<Cart_Items>;
};

/** aggregate fields of "cart_items" */
export type Cart_Items_Aggregate_Fields = {
  __typename?: 'cart_items_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cart_Items_Max_Fields>;
  min?: Maybe<Cart_Items_Min_Fields>;
};


/** aggregate fields of "cart_items" */
export type Cart_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cart_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cart_items". All fields are combined with a logical 'AND'. */
export type Cart_Items_Bool_Exp = {
  _and?: Maybe<Array<Cart_Items_Bool_Exp>>;
  _not?: Maybe<Cart_Items_Bool_Exp>;
  _or?: Maybe<Array<Cart_Items_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart_items" */
export enum Cart_Items_Constraint {
  /** unique or primary key constraint */
  CartItemsPkey = 'cart_items_pkey'
}

/** input type for inserting data into table "cart_items" */
export type Cart_Items_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Cart_Items_Max_Fields = {
  __typename?: 'cart_items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Cart_Items_Min_Fields = {
  __typename?: 'cart_items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "cart_items" */
export type Cart_Items_Mutation_Response = {
  __typename?: 'cart_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cart_Items>;
};

/** on conflict condition type for table "cart_items" */
export type Cart_Items_On_Conflict = {
  constraint: Cart_Items_Constraint;
  update_columns?: Array<Cart_Items_Update_Column>;
  where?: Maybe<Cart_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "cart_items". */
export type Cart_Items_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: cart_items */
export type Cart_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cart_items" */
export enum Cart_Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "cart_items" */
export type Cart_Items_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "cart_items" */
export enum Cart_Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An array relationship */
  category_stores: Array<Store_Category>;
  /** An aggregate relationship */
  category_stores_aggregate: Store_Category_Aggregate;
  /** An array relationship */
  category_warehouses: Array<Warehouse_Category>;
  /** An aggregate relationship */
  category_warehouses_aggregate: Warehouse_Category_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "categories" */
export type CategoriesCategory_StoresArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategory_Stores_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategory_WarehousesArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategory_Warehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesSubcategoriesArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesSubcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  category_stores?: Maybe<Store_Category_Bool_Exp>;
  category_warehouses?: Maybe<Warehouse_Category_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  handle?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  static_picture?: Maybe<String_Comparison_Exp>;
  subcategories?: Maybe<Subcategories_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesHandleKey = 'categories_handle_key',
  /** unique or primary key constraint */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category_stores?: Maybe<Store_Category_Arr_Rel_Insert_Input>;
  category_warehouses?: Maybe<Warehouse_Category_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  subcategories?: Maybe<Subcategories_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  category_stores_aggregate?: Maybe<Store_Category_Aggregate_Order_By>;
  category_warehouses_aggregate?: Maybe<Warehouse_Category_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  subcategories_aggregate?: Maybe<Subcategories_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "consent_type" */
export type Consent_Type = {
  __typename?: 'consent_type';
  value: Scalars['String'];
};

/** aggregated selection of "consent_type" */
export type Consent_Type_Aggregate = {
  __typename?: 'consent_type_aggregate';
  aggregate?: Maybe<Consent_Type_Aggregate_Fields>;
  nodes: Array<Consent_Type>;
};

/** aggregate fields of "consent_type" */
export type Consent_Type_Aggregate_Fields = {
  __typename?: 'consent_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Consent_Type_Max_Fields>;
  min?: Maybe<Consent_Type_Min_Fields>;
};


/** aggregate fields of "consent_type" */
export type Consent_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Consent_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "consent_type". All fields are combined with a logical 'AND'. */
export type Consent_Type_Bool_Exp = {
  _and?: Maybe<Array<Consent_Type_Bool_Exp>>;
  _not?: Maybe<Consent_Type_Bool_Exp>;
  _or?: Maybe<Array<Consent_Type_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "consent_type" */
export enum Consent_Type_Constraint {
  /** unique or primary key constraint */
  ConsentTypePkey = 'consent_type_pkey'
}

export enum Consent_Type_Enum {
  AgeEighteenOrOlder = 'age_eighteen_or_older',
  EmailContact = 'email_contact',
  TermsAndPrivacyPolicies = 'terms_and_privacy_policies'
}

/** Boolean expression to compare columns of type "consent_type_enum". All fields are combined with logical 'AND'. */
export type Consent_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Consent_Type_Enum>;
  _in?: Maybe<Array<Consent_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Consent_Type_Enum>;
  _nin?: Maybe<Array<Consent_Type_Enum>>;
};

/** input type for inserting data into table "consent_type" */
export type Consent_Type_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Consent_Type_Max_Fields = {
  __typename?: 'consent_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Consent_Type_Min_Fields = {
  __typename?: 'consent_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "consent_type" */
export type Consent_Type_Mutation_Response = {
  __typename?: 'consent_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Consent_Type>;
};

/** on conflict condition type for table "consent_type" */
export type Consent_Type_On_Conflict = {
  constraint: Consent_Type_Constraint;
  update_columns?: Array<Consent_Type_Update_Column>;
  where?: Maybe<Consent_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "consent_type". */
export type Consent_Type_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: consent_type */
export type Consent_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "consent_type" */
export enum Consent_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "consent_type" */
export type Consent_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "consent_type" */
export enum Consent_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type CouponOutput = {
  __typename?: 'couponOutput';
  discountType?: Maybe<Scalars['String']>;
  discountValue: Scalars['Int'];
  discountedPrice: Scalars['Int'];
  valid: Scalars['Boolean'];
};

/** columns and relationships of "coupon_category" */
export type Coupon_Category = {
  __typename?: 'coupon_category';
  value: Scalars['String'];
};

/** aggregated selection of "coupon_category" */
export type Coupon_Category_Aggregate = {
  __typename?: 'coupon_category_aggregate';
  aggregate?: Maybe<Coupon_Category_Aggregate_Fields>;
  nodes: Array<Coupon_Category>;
};

/** aggregate fields of "coupon_category" */
export type Coupon_Category_Aggregate_Fields = {
  __typename?: 'coupon_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Coupon_Category_Max_Fields>;
  min?: Maybe<Coupon_Category_Min_Fields>;
};


/** aggregate fields of "coupon_category" */
export type Coupon_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Coupon_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "coupon_category". All fields are combined with a logical 'AND'. */
export type Coupon_Category_Bool_Exp = {
  _and?: Maybe<Array<Coupon_Category_Bool_Exp>>;
  _not?: Maybe<Coupon_Category_Bool_Exp>;
  _or?: Maybe<Array<Coupon_Category_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "coupon_category" */
export enum Coupon_Category_Constraint {
  /** unique or primary key constraint */
  CouponCategoryPkey = 'coupon_category_pkey'
}

export enum Coupon_Category_Enum {
  Acquisition = 'acquisition',
  Retention = 'retention'
}

/** Boolean expression to compare columns of type "coupon_category_enum". All fields are combined with logical 'AND'. */
export type Coupon_Category_Enum_Comparison_Exp = {
  _eq?: Maybe<Coupon_Category_Enum>;
  _in?: Maybe<Array<Coupon_Category_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Coupon_Category_Enum>;
  _nin?: Maybe<Array<Coupon_Category_Enum>>;
};

/** input type for inserting data into table "coupon_category" */
export type Coupon_Category_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Coupon_Category_Max_Fields = {
  __typename?: 'coupon_category_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Coupon_Category_Min_Fields = {
  __typename?: 'coupon_category_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "coupon_category" */
export type Coupon_Category_Mutation_Response = {
  __typename?: 'coupon_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Coupon_Category>;
};

/** on conflict condition type for table "coupon_category" */
export type Coupon_Category_On_Conflict = {
  constraint: Coupon_Category_Constraint;
  update_columns?: Array<Coupon_Category_Update_Column>;
  where?: Maybe<Coupon_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "coupon_category". */
export type Coupon_Category_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: coupon_category */
export type Coupon_Category_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "coupon_category" */
export enum Coupon_Category_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "coupon_category" */
export type Coupon_Category_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "coupon_category" */
export enum Coupon_Category_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "coupon_tag" */
export type Coupon_Tag = {
  __typename?: 'coupon_tag';
  value: Scalars['String'];
};

/** aggregated selection of "coupon_tag" */
export type Coupon_Tag_Aggregate = {
  __typename?: 'coupon_tag_aggregate';
  aggregate?: Maybe<Coupon_Tag_Aggregate_Fields>;
  nodes: Array<Coupon_Tag>;
};

/** aggregate fields of "coupon_tag" */
export type Coupon_Tag_Aggregate_Fields = {
  __typename?: 'coupon_tag_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Coupon_Tag_Max_Fields>;
  min?: Maybe<Coupon_Tag_Min_Fields>;
};


/** aggregate fields of "coupon_tag" */
export type Coupon_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Coupon_Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "coupon_tag". All fields are combined with a logical 'AND'. */
export type Coupon_Tag_Bool_Exp = {
  _and?: Maybe<Array<Coupon_Tag_Bool_Exp>>;
  _not?: Maybe<Coupon_Tag_Bool_Exp>;
  _or?: Maybe<Array<Coupon_Tag_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "coupon_tag" */
export enum Coupon_Tag_Constraint {
  /** unique or primary key constraint */
  CouponTagPkey = 'coupon_tag_pkey'
}

export enum Coupon_Tag_Enum {
  CreditInfluence = 'credit_influence',
  CustomerRelationshipManagement = 'customer_relationship_management',
  CustomerSupport = 'customer_support',
  DamagedProduct = 'damaged_product',
  Default = 'default',
  Frozen = 'frozen',
  Godchild = 'godchild',
  Influence = 'influence',
  Internal = 'internal',
  LateDelivery = 'late_delivery',
  MissingProduct = 'missing_product',
  Offline = 'offline',
  OldShopify = 'old_shopify',
  OnlinePerformance = 'online_performance',
  Partnership = 'partnership',
  Referral = 'referral',
  ReferralCodeIssue = 'referral_code_issue',
  RenewOrder = 'renew_order',
  Renewal = 'renewal',
  RiderIssue = 'rider_issue',
  RottenProduct = 'rotten_product',
  WrongProduct = 'wrong_product'
}

/** Boolean expression to compare columns of type "coupon_tag_enum". All fields are combined with logical 'AND'. */
export type Coupon_Tag_Enum_Comparison_Exp = {
  _eq?: Maybe<Coupon_Tag_Enum>;
  _in?: Maybe<Array<Coupon_Tag_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Coupon_Tag_Enum>;
  _nin?: Maybe<Array<Coupon_Tag_Enum>>;
};

/** input type for inserting data into table "coupon_tag" */
export type Coupon_Tag_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Coupon_Tag_Max_Fields = {
  __typename?: 'coupon_tag_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Coupon_Tag_Min_Fields = {
  __typename?: 'coupon_tag_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "coupon_tag" */
export type Coupon_Tag_Mutation_Response = {
  __typename?: 'coupon_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Coupon_Tag>;
};

/** on conflict condition type for table "coupon_tag" */
export type Coupon_Tag_On_Conflict = {
  constraint: Coupon_Tag_Constraint;
  update_columns?: Array<Coupon_Tag_Update_Column>;
  where?: Maybe<Coupon_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "coupon_tag". */
export type Coupon_Tag_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: coupon_tag */
export type Coupon_Tag_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "coupon_tag" */
export enum Coupon_Tag_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "coupon_tag" */
export type Coupon_Tag_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "coupon_tag" */
export enum Coupon_Tag_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "coupon_user_group" */
export type Coupon_User_Group = {
  __typename?: 'coupon_user_group';
  coupon_code: Scalars['String'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
};

/** aggregated selection of "coupon_user_group" */
export type Coupon_User_Group_Aggregate = {
  __typename?: 'coupon_user_group_aggregate';
  aggregate?: Maybe<Coupon_User_Group_Aggregate_Fields>;
  nodes: Array<Coupon_User_Group>;
};

/** aggregate fields of "coupon_user_group" */
export type Coupon_User_Group_Aggregate_Fields = {
  __typename?: 'coupon_user_group_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Coupon_User_Group_Max_Fields>;
  min?: Maybe<Coupon_User_Group_Min_Fields>;
};


/** aggregate fields of "coupon_user_group" */
export type Coupon_User_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "coupon_user_group" */
export type Coupon_User_Group_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Coupon_User_Group_Max_Order_By>;
  min?: Maybe<Coupon_User_Group_Min_Order_By>;
};

/** input type for inserting array relation for remote table "coupon_user_group" */
export type Coupon_User_Group_Arr_Rel_Insert_Input = {
  data: Array<Coupon_User_Group_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Coupon_User_Group_On_Conflict>;
};

/** Boolean expression to filter rows from the table "coupon_user_group". All fields are combined with a logical 'AND'. */
export type Coupon_User_Group_Bool_Exp = {
  _and?: Maybe<Array<Coupon_User_Group_Bool_Exp>>;
  _not?: Maybe<Coupon_User_Group_Bool_Exp>;
  _or?: Maybe<Array<Coupon_User_Group_Bool_Exp>>;
  coupon_code?: Maybe<String_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "coupon_user_group" */
export enum Coupon_User_Group_Constraint {
  /** unique or primary key constraint */
  CouponUserGroupPkey = 'coupon_user_group_pkey'
}

/** input type for inserting data into table "coupon_user_group" */
export type Coupon_User_Group_Insert_Input = {
  coupon_code?: Maybe<Scalars['String']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Coupon_User_Group_Max_Fields = {
  __typename?: 'coupon_user_group_max_fields';
  coupon_code?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "coupon_user_group" */
export type Coupon_User_Group_Max_Order_By = {
  coupon_code?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Coupon_User_Group_Min_Fields = {
  __typename?: 'coupon_user_group_min_fields';
  coupon_code?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "coupon_user_group" */
export type Coupon_User_Group_Min_Order_By = {
  coupon_code?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "coupon_user_group" */
export type Coupon_User_Group_Mutation_Response = {
  __typename?: 'coupon_user_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Coupon_User_Group>;
};

/** on conflict condition type for table "coupon_user_group" */
export type Coupon_User_Group_On_Conflict = {
  constraint: Coupon_User_Group_Constraint;
  update_columns?: Array<Coupon_User_Group_Update_Column>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "coupon_user_group". */
export type Coupon_User_Group_Order_By = {
  coupon_code?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
};

/** primary key columns input for table: coupon_user_group */
export type Coupon_User_Group_Pk_Columns_Input = {
  coupon_code: Scalars['String'];
  group_id: Scalars['uuid'];
};

/** select columns of table "coupon_user_group" */
export enum Coupon_User_Group_Select_Column {
  /** column name */
  CouponCode = 'coupon_code',
  /** column name */
  GroupId = 'group_id'
}

/** input type for updating data in table "coupon_user_group" */
export type Coupon_User_Group_Set_Input = {
  coupon_code?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "coupon_user_group" */
export enum Coupon_User_Group_Update_Column {
  /** column name */
  CouponCode = 'coupon_code',
  /** column name */
  GroupId = 'group_id'
}

/** columns and relationships of "coupons" */
export type Coupons = {
  __typename?: 'coupons';
  category?: Maybe<Coupon_Category_Enum>;
  code: Scalars['String'];
  /** An array relationship */
  coupon_user_groups: Array<Coupon_User_Group>;
  /** An aggregate relationship */
  coupon_user_groups_aggregate: Coupon_User_Group_Aggregate;
  /** An array relationship */
  coupon_users: Array<User_Coupon>;
  /** An aggregate relationship */
  coupon_users_aggregate: User_Coupon_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  discount_type: Discount_Type;
  discount_value: Scalars['numeric'];
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count: Scalars['Int'];
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  recipient_id?: Maybe<Scalars['uuid']>;
  remaining_count?: Maybe<Scalars['numeric']>;
  tag?: Maybe<Coupon_Tag_Enum>;
  type: Discount_Type_Enum;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "coupons" */
export type CouponsCoupon_User_GroupsArgs = {
  distinct_on?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_User_Group_Order_By>>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};


/** columns and relationships of "coupons" */
export type CouponsCoupon_User_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_User_Group_Order_By>>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};


/** columns and relationships of "coupons" */
export type CouponsCoupon_UsersArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


/** columns and relationships of "coupons" */
export type CouponsCoupon_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


/** columns and relationships of "coupons" */
export type CouponsOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "coupons" */
export type CouponsOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "coupons" */
export type Coupons_Aggregate = {
  __typename?: 'coupons_aggregate';
  aggregate?: Maybe<Coupons_Aggregate_Fields>;
  nodes: Array<Coupons>;
};

/** aggregate fields of "coupons" */
export type Coupons_Aggregate_Fields = {
  __typename?: 'coupons_aggregate_fields';
  avg?: Maybe<Coupons_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Coupons_Max_Fields>;
  min?: Maybe<Coupons_Min_Fields>;
  stddev?: Maybe<Coupons_Stddev_Fields>;
  stddev_pop?: Maybe<Coupons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Coupons_Stddev_Samp_Fields>;
  sum?: Maybe<Coupons_Sum_Fields>;
  var_pop?: Maybe<Coupons_Var_Pop_Fields>;
  var_samp?: Maybe<Coupons_Var_Samp_Fields>;
  variance?: Maybe<Coupons_Variance_Fields>;
};


/** aggregate fields of "coupons" */
export type Coupons_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Coupons_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "coupons" */
export type Coupons_Aggregate_Order_By = {
  avg?: Maybe<Coupons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Coupons_Max_Order_By>;
  min?: Maybe<Coupons_Min_Order_By>;
  stddev?: Maybe<Coupons_Stddev_Order_By>;
  stddev_pop?: Maybe<Coupons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Coupons_Stddev_Samp_Order_By>;
  sum?: Maybe<Coupons_Sum_Order_By>;
  var_pop?: Maybe<Coupons_Var_Pop_Order_By>;
  var_samp?: Maybe<Coupons_Var_Samp_Order_By>;
  variance?: Maybe<Coupons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "coupons" */
export type Coupons_Arr_Rel_Insert_Input = {
  data: Array<Coupons_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Coupons_On_Conflict>;
};

/** aggregate avg on columns */
export type Coupons_Avg_Fields = {
  __typename?: 'coupons_avg_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "coupons" */
export type Coupons_Avg_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coupons". All fields are combined with a logical 'AND'. */
export type Coupons_Bool_Exp = {
  _and?: Maybe<Array<Coupons_Bool_Exp>>;
  _not?: Maybe<Coupons_Bool_Exp>;
  _or?: Maybe<Array<Coupons_Bool_Exp>>;
  category?: Maybe<Coupon_Category_Enum_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  coupon_user_groups?: Maybe<Coupon_User_Group_Bool_Exp>;
  coupon_users?: Maybe<User_Coupon_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount_type?: Maybe<Discount_Type_Bool_Exp>;
  discount_value?: Maybe<Numeric_Comparison_Exp>;
  expiry_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  max_coupon_value?: Maybe<Int_Comparison_Exp>;
  max_redeem_count?: Maybe<Int_Comparison_Exp>;
  max_user_orders?: Maybe<Int_Comparison_Exp>;
  min_order_value?: Maybe<Int_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  recipient_id?: Maybe<Uuid_Comparison_Exp>;
  remaining_count?: Maybe<Numeric_Comparison_Exp>;
  tag?: Maybe<Coupon_Tag_Enum_Comparison_Exp>;
  type?: Maybe<Discount_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "coupons" */
export enum Coupons_Constraint {
  /** unique or primary key constraint */
  CouponsPkey = 'coupons_pkey',
  /** unique or primary key constraint */
  CouponsUserIdKey = 'coupons_user_id_key'
}

/** input type for incrementing numeric columns in table "coupons" */
export type Coupons_Inc_Input = {
  discount_value?: Maybe<Scalars['numeric']>;
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count?: Maybe<Scalars['Int']>;
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  remaining_count?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "coupons" */
export type Coupons_Insert_Input = {
  category?: Maybe<Coupon_Category_Enum>;
  code?: Maybe<Scalars['String']>;
  coupon_user_groups?: Maybe<Coupon_User_Group_Arr_Rel_Insert_Input>;
  coupon_users?: Maybe<User_Coupon_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_type?: Maybe<Discount_Type_Obj_Rel_Insert_Input>;
  discount_value?: Maybe<Scalars['numeric']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_active?: Maybe<Scalars['Boolean']>;
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count?: Maybe<Scalars['Int']>;
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  recipient_id?: Maybe<Scalars['uuid']>;
  remaining_count?: Maybe<Scalars['numeric']>;
  tag?: Maybe<Coupon_Tag_Enum>;
  type?: Maybe<Discount_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Coupons_Max_Fields = {
  __typename?: 'coupons_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_value?: Maybe<Scalars['numeric']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count?: Maybe<Scalars['Int']>;
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  recipient_id?: Maybe<Scalars['uuid']>;
  remaining_count?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "coupons" */
export type Coupons_Max_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_value?: Maybe<Order_By>;
  expiry_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  recipient_id?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Coupons_Min_Fields = {
  __typename?: 'coupons_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_value?: Maybe<Scalars['numeric']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count?: Maybe<Scalars['Int']>;
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  recipient_id?: Maybe<Scalars['uuid']>;
  remaining_count?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "coupons" */
export type Coupons_Min_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_value?: Maybe<Order_By>;
  expiry_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  recipient_id?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "coupons" */
export type Coupons_Mutation_Response = {
  __typename?: 'coupons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Coupons>;
};

/** input type for inserting object relation for remote table "coupons" */
export type Coupons_Obj_Rel_Insert_Input = {
  data: Coupons_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Coupons_On_Conflict>;
};

/** on conflict condition type for table "coupons" */
export type Coupons_On_Conflict = {
  constraint: Coupons_Constraint;
  update_columns?: Array<Coupons_Update_Column>;
  where?: Maybe<Coupons_Bool_Exp>;
};

/** Ordering options when selecting data from "coupons". */
export type Coupons_Order_By = {
  category?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  coupon_user_groups_aggregate?: Maybe<Coupon_User_Group_Aggregate_Order_By>;
  coupon_users_aggregate?: Maybe<User_Coupon_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  discount_type?: Maybe<Discount_Type_Order_By>;
  discount_value?: Maybe<Order_By>;
  expiry_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  recipient_id?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: coupons */
export type Coupons_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "coupons" */
export enum Coupons_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountValue = 'discount_value',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  MaxCouponValue = 'max_coupon_value',
  /** column name */
  MaxRedeemCount = 'max_redeem_count',
  /** column name */
  MaxUserOrders = 'max_user_orders',
  /** column name */
  MinOrderValue = 'min_order_value',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  RemainingCount = 'remaining_count',
  /** column name */
  Tag = 'tag',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "coupons" */
export type Coupons_Set_Input = {
  category?: Maybe<Coupon_Category_Enum>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_value?: Maybe<Scalars['numeric']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_active?: Maybe<Scalars['Boolean']>;
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count?: Maybe<Scalars['Int']>;
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  recipient_id?: Maybe<Scalars['uuid']>;
  remaining_count?: Maybe<Scalars['numeric']>;
  tag?: Maybe<Coupon_Tag_Enum>;
  type?: Maybe<Discount_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Coupons_Stddev_Fields = {
  __typename?: 'coupons_stddev_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "coupons" */
export type Coupons_Stddev_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Coupons_Stddev_Pop_Fields = {
  __typename?: 'coupons_stddev_pop_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "coupons" */
export type Coupons_Stddev_Pop_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Coupons_Stddev_Samp_Fields = {
  __typename?: 'coupons_stddev_samp_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "coupons" */
export type Coupons_Stddev_Samp_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Coupons_Sum_Fields = {
  __typename?: 'coupons_sum_fields';
  discount_value?: Maybe<Scalars['numeric']>;
  max_coupon_value?: Maybe<Scalars['Int']>;
  max_redeem_count?: Maybe<Scalars['Int']>;
  max_user_orders?: Maybe<Scalars['Int']>;
  min_order_value?: Maybe<Scalars['Int']>;
  remaining_count?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "coupons" */
export type Coupons_Sum_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** update columns of table "coupons" */
export enum Coupons_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountValue = 'discount_value',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  MaxCouponValue = 'max_coupon_value',
  /** column name */
  MaxRedeemCount = 'max_redeem_count',
  /** column name */
  MaxUserOrders = 'max_user_orders',
  /** column name */
  MinOrderValue = 'min_order_value',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  RemainingCount = 'remaining_count',
  /** column name */
  Tag = 'tag',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Coupons_Var_Pop_Fields = {
  __typename?: 'coupons_var_pop_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "coupons" */
export type Coupons_Var_Pop_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Coupons_Var_Samp_Fields = {
  __typename?: 'coupons_var_samp_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "coupons" */
export type Coupons_Var_Samp_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Coupons_Variance_Fields = {
  __typename?: 'coupons_variance_fields';
  discount_value?: Maybe<Scalars['Float']>;
  max_coupon_value?: Maybe<Scalars['Float']>;
  max_redeem_count?: Maybe<Scalars['Float']>;
  max_user_orders?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  remaining_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "coupons" */
export type Coupons_Variance_Order_By = {
  discount_value?: Maybe<Order_By>;
  max_coupon_value?: Maybe<Order_By>;
  max_redeem_count?: Maybe<Order_By>;
  max_user_orders?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  remaining_count?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "deliveries" */
export type Deliveries = {
  __typename?: 'deliveries';
  arrived_at_client_at?: Maybe<Scalars['timestamptz']>;
  back_to_hub_at?: Maybe<Scalars['timestamptz']>;
  bike_type?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  delivered_at?: Maybe<Scalars['timestamptz']>;
  eta?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  group?: Maybe<Deliveries_Group>;
  group_id?: Maybe<Scalars['uuid']>;
  group_order?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  next_delivery_id?: Maybe<Scalars['uuid']>;
  number: Scalars['Int'];
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id: Scalars['uuid'];
  provider_id?: Maybe<Scalars['String']>;
  provider_name?: Maybe<Delivery_Method_Enum>;
  /** An object relationship */
  rider?: Maybe<Riders>;
  rider_id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status: Delivery_Status_Enum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "deliveries" */
export type Deliveries_Aggregate = {
  __typename?: 'deliveries_aggregate';
  aggregate?: Maybe<Deliveries_Aggregate_Fields>;
  nodes: Array<Deliveries>;
};

/** aggregate fields of "deliveries" */
export type Deliveries_Aggregate_Fields = {
  __typename?: 'deliveries_aggregate_fields';
  avg?: Maybe<Deliveries_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Deliveries_Max_Fields>;
  min?: Maybe<Deliveries_Min_Fields>;
  stddev?: Maybe<Deliveries_Stddev_Fields>;
  stddev_pop?: Maybe<Deliveries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deliveries_Stddev_Samp_Fields>;
  sum?: Maybe<Deliveries_Sum_Fields>;
  var_pop?: Maybe<Deliveries_Var_Pop_Fields>;
  var_samp?: Maybe<Deliveries_Var_Samp_Fields>;
  variance?: Maybe<Deliveries_Variance_Fields>;
};


/** aggregate fields of "deliveries" */
export type Deliveries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Deliveries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deliveries" */
export type Deliveries_Aggregate_Order_By = {
  avg?: Maybe<Deliveries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Deliveries_Max_Order_By>;
  min?: Maybe<Deliveries_Min_Order_By>;
  stddev?: Maybe<Deliveries_Stddev_Order_By>;
  stddev_pop?: Maybe<Deliveries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Deliveries_Stddev_Samp_Order_By>;
  sum?: Maybe<Deliveries_Sum_Order_By>;
  var_pop?: Maybe<Deliveries_Var_Pop_Order_By>;
  var_samp?: Maybe<Deliveries_Var_Samp_Order_By>;
  variance?: Maybe<Deliveries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "deliveries" */
export type Deliveries_Arr_Rel_Insert_Input = {
  data: Array<Deliveries_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};

/** aggregate avg on columns */
export type Deliveries_Avg_Fields = {
  __typename?: 'deliveries_avg_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "deliveries" */
export type Deliveries_Avg_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deliveries". All fields are combined with a logical 'AND'. */
export type Deliveries_Bool_Exp = {
  _and?: Maybe<Array<Deliveries_Bool_Exp>>;
  _not?: Maybe<Deliveries_Bool_Exp>;
  _or?: Maybe<Array<Deliveries_Bool_Exp>>;
  arrived_at_client_at?: Maybe<Timestamptz_Comparison_Exp>;
  back_to_hub_at?: Maybe<Timestamptz_Comparison_Exp>;
  bike_type?: Maybe<String_Comparison_Exp>;
  canceled_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delivered_at?: Maybe<Timestamptz_Comparison_Exp>;
  eta?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Deliveries_Group_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  group_order?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  next_delivery_id?: Maybe<Uuid_Comparison_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  order_id?: Maybe<Uuid_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_name?: Maybe<Delivery_Method_Enum_Comparison_Exp>;
  rider?: Maybe<Riders_Bool_Exp>;
  rider_id?: Maybe<Uuid_Comparison_Exp>;
  started_at?: Maybe<Timestamptz_Comparison_Exp>;
  status?: Maybe<Delivery_Status_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "deliveries" */
export enum Deliveries_Constraint {
  /** unique or primary key constraint */
  DeliveriesNumberKey = 'deliveries_number_key',
  /** unique or primary key constraint */
  DeliveriesPkey = 'deliveries_pkey'
}

/** columns and relationships of "deliveries_group" */
export type Deliveries_Group = {
  __typename?: 'deliveries_group';
  id: Scalars['uuid'];
};

/** aggregated selection of "deliveries_group" */
export type Deliveries_Group_Aggregate = {
  __typename?: 'deliveries_group_aggregate';
  aggregate?: Maybe<Deliveries_Group_Aggregate_Fields>;
  nodes: Array<Deliveries_Group>;
};

/** aggregate fields of "deliveries_group" */
export type Deliveries_Group_Aggregate_Fields = {
  __typename?: 'deliveries_group_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Deliveries_Group_Max_Fields>;
  min?: Maybe<Deliveries_Group_Min_Fields>;
};


/** aggregate fields of "deliveries_group" */
export type Deliveries_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Deliveries_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "deliveries_group". All fields are combined with a logical 'AND'. */
export type Deliveries_Group_Bool_Exp = {
  _and?: Maybe<Array<Deliveries_Group_Bool_Exp>>;
  _not?: Maybe<Deliveries_Group_Bool_Exp>;
  _or?: Maybe<Array<Deliveries_Group_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "deliveries_group" */
export enum Deliveries_Group_Constraint {
  /** unique or primary key constraint */
  DeliveriesGroupPkey = 'deliveries_group_pkey'
}

/** input type for inserting data into table "deliveries_group" */
export type Deliveries_Group_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Deliveries_Group_Max_Fields = {
  __typename?: 'deliveries_group_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Deliveries_Group_Min_Fields = {
  __typename?: 'deliveries_group_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "deliveries_group" */
export type Deliveries_Group_Mutation_Response = {
  __typename?: 'deliveries_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Deliveries_Group>;
};

/** input type for inserting object relation for remote table "deliveries_group" */
export type Deliveries_Group_Obj_Rel_Insert_Input = {
  data: Deliveries_Group_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Deliveries_Group_On_Conflict>;
};

/** on conflict condition type for table "deliveries_group" */
export type Deliveries_Group_On_Conflict = {
  constraint: Deliveries_Group_Constraint;
  update_columns?: Array<Deliveries_Group_Update_Column>;
  where?: Maybe<Deliveries_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "deliveries_group". */
export type Deliveries_Group_Order_By = {
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: deliveries_group */
export type Deliveries_Group_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "deliveries_group" */
export enum Deliveries_Group_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "deliveries_group" */
export type Deliveries_Group_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "deliveries_group" */
export enum Deliveries_Group_Update_Column {
  /** column name */
  Id = 'id'
}

/** input type for incrementing numeric columns in table "deliveries" */
export type Deliveries_Inc_Input = {
  group_order?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "deliveries" */
export type Deliveries_Insert_Input = {
  arrived_at_client_at?: Maybe<Scalars['timestamptz']>;
  back_to_hub_at?: Maybe<Scalars['timestamptz']>;
  bike_type?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  eta?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Deliveries_Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  group_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  next_delivery_id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['uuid']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_name?: Maybe<Delivery_Method_Enum>;
  rider?: Maybe<Riders_Obj_Rel_Insert_Input>;
  rider_id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Delivery_Status_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Deliveries_Max_Fields = {
  __typename?: 'deliveries_max_fields';
  arrived_at_client_at?: Maybe<Scalars['timestamptz']>;
  back_to_hub_at?: Maybe<Scalars['timestamptz']>;
  bike_type?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  eta?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  group_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  next_delivery_id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['uuid']>;
  provider_id?: Maybe<Scalars['String']>;
  rider_id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "deliveries" */
export type Deliveries_Max_Order_By = {
  arrived_at_client_at?: Maybe<Order_By>;
  back_to_hub_at?: Maybe<Order_By>;
  bike_type?: Maybe<Order_By>;
  canceled_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  delivered_at?: Maybe<Order_By>;
  eta?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  group_order?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  next_delivery_id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  rider_id?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Deliveries_Min_Fields = {
  __typename?: 'deliveries_min_fields';
  arrived_at_client_at?: Maybe<Scalars['timestamptz']>;
  back_to_hub_at?: Maybe<Scalars['timestamptz']>;
  bike_type?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  eta?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  group_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  next_delivery_id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['uuid']>;
  provider_id?: Maybe<Scalars['String']>;
  rider_id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "deliveries" */
export type Deliveries_Min_Order_By = {
  arrived_at_client_at?: Maybe<Order_By>;
  back_to_hub_at?: Maybe<Order_By>;
  bike_type?: Maybe<Order_By>;
  canceled_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  delivered_at?: Maybe<Order_By>;
  eta?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  group_order?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  next_delivery_id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  rider_id?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "deliveries" */
export type Deliveries_Mutation_Response = {
  __typename?: 'deliveries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Deliveries>;
};

/** on conflict condition type for table "deliveries" */
export type Deliveries_On_Conflict = {
  constraint: Deliveries_Constraint;
  update_columns?: Array<Deliveries_Update_Column>;
  where?: Maybe<Deliveries_Bool_Exp>;
};

/** Ordering options when selecting data from "deliveries". */
export type Deliveries_Order_By = {
  arrived_at_client_at?: Maybe<Order_By>;
  back_to_hub_at?: Maybe<Order_By>;
  bike_type?: Maybe<Order_By>;
  canceled_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  delivered_at?: Maybe<Order_By>;
  eta?: Maybe<Order_By>;
  group?: Maybe<Deliveries_Group_Order_By>;
  group_id?: Maybe<Order_By>;
  group_order?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  next_delivery_id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  order_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_name?: Maybe<Order_By>;
  rider?: Maybe<Riders_Order_By>;
  rider_id?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: deliveries */
export type Deliveries_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "deliveries" */
export enum Deliveries_Select_Column {
  /** column name */
  ArrivedAtClientAt = 'arrived_at_client_at',
  /** column name */
  BackToHubAt = 'back_to_hub_at',
  /** column name */
  BikeType = 'bike_type',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveredAt = 'delivered_at',
  /** column name */
  Eta = 'eta',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  GroupOrder = 'group_order',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  NextDeliveryId = 'next_delivery_id',
  /** column name */
  Number = 'number',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  RiderId = 'rider_id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "deliveries" */
export type Deliveries_Set_Input = {
  arrived_at_client_at?: Maybe<Scalars['timestamptz']>;
  back_to_hub_at?: Maybe<Scalars['timestamptz']>;
  bike_type?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  eta?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  group_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  next_delivery_id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['uuid']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_name?: Maybe<Delivery_Method_Enum>;
  rider_id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Delivery_Status_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Deliveries_Stddev_Fields = {
  __typename?: 'deliveries_stddev_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "deliveries" */
export type Deliveries_Stddev_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deliveries_Stddev_Pop_Fields = {
  __typename?: 'deliveries_stddev_pop_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "deliveries" */
export type Deliveries_Stddev_Pop_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deliveries_Stddev_Samp_Fields = {
  __typename?: 'deliveries_stddev_samp_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "deliveries" */
export type Deliveries_Stddev_Samp_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Deliveries_Sum_Fields = {
  __typename?: 'deliveries_sum_fields';
  group_order?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "deliveries" */
export type Deliveries_Sum_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** update columns of table "deliveries" */
export enum Deliveries_Update_Column {
  /** column name */
  ArrivedAtClientAt = 'arrived_at_client_at',
  /** column name */
  BackToHubAt = 'back_to_hub_at',
  /** column name */
  BikeType = 'bike_type',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveredAt = 'delivered_at',
  /** column name */
  Eta = 'eta',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  GroupOrder = 'group_order',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  NextDeliveryId = 'next_delivery_id',
  /** column name */
  Number = 'number',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  RiderId = 'rider_id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Deliveries_Var_Pop_Fields = {
  __typename?: 'deliveries_var_pop_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "deliveries" */
export type Deliveries_Var_Pop_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deliveries_Var_Samp_Fields = {
  __typename?: 'deliveries_var_samp_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "deliveries" */
export type Deliveries_Var_Samp_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Deliveries_Variance_Fields = {
  __typename?: 'deliveries_variance_fields';
  group_order?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "deliveries" */
export type Deliveries_Variance_Order_By = {
  group_order?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
};

/** columns and relationships of "delivery_feedbacks" */
export type Delivery_Feedbacks = {
  __typename?: 'delivery_feedbacks';
  answer: Feedback_Answer_Enum;
  answer_comments: Scalars['String'];
  created_at: Scalars['timestamptz'];
  order_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "delivery_feedbacks" */
export type Delivery_Feedbacks_Aggregate = {
  __typename?: 'delivery_feedbacks_aggregate';
  aggregate?: Maybe<Delivery_Feedbacks_Aggregate_Fields>;
  nodes: Array<Delivery_Feedbacks>;
};

/** aggregate fields of "delivery_feedbacks" */
export type Delivery_Feedbacks_Aggregate_Fields = {
  __typename?: 'delivery_feedbacks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Delivery_Feedbacks_Max_Fields>;
  min?: Maybe<Delivery_Feedbacks_Min_Fields>;
};


/** aggregate fields of "delivery_feedbacks" */
export type Delivery_Feedbacks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Feedbacks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "delivery_feedbacks". All fields are combined with a logical 'AND'. */
export type Delivery_Feedbacks_Bool_Exp = {
  _and?: Maybe<Array<Delivery_Feedbacks_Bool_Exp>>;
  _not?: Maybe<Delivery_Feedbacks_Bool_Exp>;
  _or?: Maybe<Array<Delivery_Feedbacks_Bool_Exp>>;
  answer?: Maybe<Feedback_Answer_Enum_Comparison_Exp>;
  answer_comments?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  order_id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_feedbacks" */
export enum Delivery_Feedbacks_Constraint {
  /** unique or primary key constraint */
  DeliveryFeedbacksPkey = 'delivery_feedbacks_pkey'
}

/** input type for inserting data into table "delivery_feedbacks" */
export type Delivery_Feedbacks_Insert_Input = {
  answer?: Maybe<Feedback_Answer_Enum>;
  answer_comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Delivery_Feedbacks_Max_Fields = {
  __typename?: 'delivery_feedbacks_max_fields';
  answer_comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Delivery_Feedbacks_Min_Fields = {
  __typename?: 'delivery_feedbacks_min_fields';
  answer_comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "delivery_feedbacks" */
export type Delivery_Feedbacks_Mutation_Response = {
  __typename?: 'delivery_feedbacks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Feedbacks>;
};

/** on conflict condition type for table "delivery_feedbacks" */
export type Delivery_Feedbacks_On_Conflict = {
  constraint: Delivery_Feedbacks_Constraint;
  update_columns?: Array<Delivery_Feedbacks_Update_Column>;
  where?: Maybe<Delivery_Feedbacks_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_feedbacks". */
export type Delivery_Feedbacks_Order_By = {
  answer?: Maybe<Order_By>;
  answer_comments?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: delivery_feedbacks */
export type Delivery_Feedbacks_Pk_Columns_Input = {
  order_id: Scalars['uuid'];
};

/** select columns of table "delivery_feedbacks" */
export enum Delivery_Feedbacks_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  AnswerComments = 'answer_comments',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "delivery_feedbacks" */
export type Delivery_Feedbacks_Set_Input = {
  answer?: Maybe<Feedback_Answer_Enum>;
  answer_comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "delivery_feedbacks" */
export enum Delivery_Feedbacks_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  AnswerComments = 'answer_comments',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "delivery_method" */
export type Delivery_Method = {
  __typename?: 'delivery_method';
  value: Scalars['String'];
};

/** aggregated selection of "delivery_method" */
export type Delivery_Method_Aggregate = {
  __typename?: 'delivery_method_aggregate';
  aggregate?: Maybe<Delivery_Method_Aggregate_Fields>;
  nodes: Array<Delivery_Method>;
};

/** aggregate fields of "delivery_method" */
export type Delivery_Method_Aggregate_Fields = {
  __typename?: 'delivery_method_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Delivery_Method_Max_Fields>;
  min?: Maybe<Delivery_Method_Min_Fields>;
};


/** aggregate fields of "delivery_method" */
export type Delivery_Method_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Method_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "delivery_method". All fields are combined with a logical 'AND'. */
export type Delivery_Method_Bool_Exp = {
  _and?: Maybe<Array<Delivery_Method_Bool_Exp>>;
  _not?: Maybe<Delivery_Method_Bool_Exp>;
  _or?: Maybe<Array<Delivery_Method_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_method" */
export enum Delivery_Method_Constraint {
  /** unique or primary key constraint */
  DeliveryMethodPkey = 'delivery_method_pkey'
}

export enum Delivery_Method_Enum {
  Cajoo = 'cajoo',
  Coursierfr = 'coursierfr',
  Custom = 'custom',
  Mtools = 'mtools',
  Onfleet = 'onfleet',
  Stuart = 'stuart',
  Uberdirect = 'uberdirect',
  Ubereats = 'ubereats'
}

/** Boolean expression to compare columns of type "delivery_method_enum". All fields are combined with logical 'AND'. */
export type Delivery_Method_Enum_Comparison_Exp = {
  _eq?: Maybe<Delivery_Method_Enum>;
  _in?: Maybe<Array<Delivery_Method_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Delivery_Method_Enum>;
  _nin?: Maybe<Array<Delivery_Method_Enum>>;
};

/** input type for inserting data into table "delivery_method" */
export type Delivery_Method_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Delivery_Method_Max_Fields = {
  __typename?: 'delivery_method_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Delivery_Method_Min_Fields = {
  __typename?: 'delivery_method_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "delivery_method" */
export type Delivery_Method_Mutation_Response = {
  __typename?: 'delivery_method_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Method>;
};

/** on conflict condition type for table "delivery_method" */
export type Delivery_Method_On_Conflict = {
  constraint: Delivery_Method_Constraint;
  update_columns?: Array<Delivery_Method_Update_Column>;
  where?: Maybe<Delivery_Method_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_method". */
export type Delivery_Method_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: delivery_method */
export type Delivery_Method_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "delivery_method" */
export enum Delivery_Method_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "delivery_method" */
export type Delivery_Method_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "delivery_method" */
export enum Delivery_Method_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "delivery_status" */
export type Delivery_Status = {
  __typename?: 'delivery_status';
  value: Scalars['String'];
};

/** aggregated selection of "delivery_status" */
export type Delivery_Status_Aggregate = {
  __typename?: 'delivery_status_aggregate';
  aggregate?: Maybe<Delivery_Status_Aggregate_Fields>;
  nodes: Array<Delivery_Status>;
};

/** aggregate fields of "delivery_status" */
export type Delivery_Status_Aggregate_Fields = {
  __typename?: 'delivery_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Delivery_Status_Max_Fields>;
  min?: Maybe<Delivery_Status_Min_Fields>;
};


/** aggregate fields of "delivery_status" */
export type Delivery_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "delivery_status". All fields are combined with a logical 'AND'. */
export type Delivery_Status_Bool_Exp = {
  _and?: Maybe<Array<Delivery_Status_Bool_Exp>>;
  _not?: Maybe<Delivery_Status_Bool_Exp>;
  _or?: Maybe<Array<Delivery_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_status" */
export enum Delivery_Status_Constraint {
  /** unique or primary key constraint */
  DeliveryStatusPkey = 'delivery_status_pkey'
}

export enum Delivery_Status_Enum {
  ArrivedAtClient = 'arrived_at_client',
  Canceled = 'canceled',
  Delivered = 'delivered',
  Delivering = 'delivering',
  Pending = 'pending',
  Picking = 'picking'
}

/** Boolean expression to compare columns of type "delivery_status_enum". All fields are combined with logical 'AND'. */
export type Delivery_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Delivery_Status_Enum>;
  _in?: Maybe<Array<Delivery_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Delivery_Status_Enum>;
  _nin?: Maybe<Array<Delivery_Status_Enum>>;
};

/** input type for inserting data into table "delivery_status" */
export type Delivery_Status_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Delivery_Status_Max_Fields = {
  __typename?: 'delivery_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Delivery_Status_Min_Fields = {
  __typename?: 'delivery_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "delivery_status" */
export type Delivery_Status_Mutation_Response = {
  __typename?: 'delivery_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Status>;
};

/** on conflict condition type for table "delivery_status" */
export type Delivery_Status_On_Conflict = {
  constraint: Delivery_Status_Constraint;
  update_columns?: Array<Delivery_Status_Update_Column>;
  where?: Maybe<Delivery_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_status". */
export type Delivery_Status_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: delivery_status */
export type Delivery_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "delivery_status" */
export enum Delivery_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "delivery_status" */
export type Delivery_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "delivery_status" */
export enum Delivery_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "discount_type" */
export type Discount_Type = {
  __typename?: 'discount_type';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "discount_type" */
export type Discount_Type_Aggregate = {
  __typename?: 'discount_type_aggregate';
  aggregate?: Maybe<Discount_Type_Aggregate_Fields>;
  nodes: Array<Discount_Type>;
};

/** aggregate fields of "discount_type" */
export type Discount_Type_Aggregate_Fields = {
  __typename?: 'discount_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Discount_Type_Max_Fields>;
  min?: Maybe<Discount_Type_Min_Fields>;
};


/** aggregate fields of "discount_type" */
export type Discount_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Discount_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "discount_type". All fields are combined with a logical 'AND'. */
export type Discount_Type_Bool_Exp = {
  _and?: Maybe<Array<Discount_Type_Bool_Exp>>;
  _not?: Maybe<Discount_Type_Bool_Exp>;
  _or?: Maybe<Array<Discount_Type_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "discount_type" */
export enum Discount_Type_Constraint {
  /** unique or primary key constraint */
  DiscountTypePkey = 'discount_type_pkey'
}

export enum Discount_Type_Enum {
  /** a fixed amount */
  Fixed = 'fixed',
  /** a percentage of the total price */
  Percentage = 'percentage'
}

/** Boolean expression to compare columns of type "discount_type_enum". All fields are combined with logical 'AND'. */
export type Discount_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Discount_Type_Enum>;
  _in?: Maybe<Array<Discount_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Discount_Type_Enum>;
  _nin?: Maybe<Array<Discount_Type_Enum>>;
};

/** input type for inserting data into table "discount_type" */
export type Discount_Type_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Discount_Type_Max_Fields = {
  __typename?: 'discount_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Discount_Type_Min_Fields = {
  __typename?: 'discount_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "discount_type" */
export type Discount_Type_Mutation_Response = {
  __typename?: 'discount_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Discount_Type>;
};

/** input type for inserting object relation for remote table "discount_type" */
export type Discount_Type_Obj_Rel_Insert_Input = {
  data: Discount_Type_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Discount_Type_On_Conflict>;
};

/** on conflict condition type for table "discount_type" */
export type Discount_Type_On_Conflict = {
  constraint: Discount_Type_Constraint;
  update_columns?: Array<Discount_Type_Update_Column>;
  where?: Maybe<Discount_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "discount_type". */
export type Discount_Type_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: discount_type */
export type Discount_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "discount_type" */
export enum Discount_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "discount_type" */
export type Discount_Type_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "discount_type" */
export enum Discount_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "discounts" */
export type Discounts = {
  __typename?: 'discounts';
  displayed_ratio: Scalars['Int'];
  end_time: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  inventory_product?: Maybe<Inventory_Products>;
  /** A computed field, executes function "is_active" */
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product_id: Scalars['uuid'];
  start_time: Scalars['timestamptz'];
  ttc_price: Scalars['numeric'];
  warehouse_id: Scalars['uuid'];
};

/** aggregated selection of "discounts" */
export type Discounts_Aggregate = {
  __typename?: 'discounts_aggregate';
  aggregate?: Maybe<Discounts_Aggregate_Fields>;
  nodes: Array<Discounts>;
};

/** aggregate fields of "discounts" */
export type Discounts_Aggregate_Fields = {
  __typename?: 'discounts_aggregate_fields';
  avg?: Maybe<Discounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Discounts_Max_Fields>;
  min?: Maybe<Discounts_Min_Fields>;
  stddev?: Maybe<Discounts_Stddev_Fields>;
  stddev_pop?: Maybe<Discounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Discounts_Stddev_Samp_Fields>;
  sum?: Maybe<Discounts_Sum_Fields>;
  var_pop?: Maybe<Discounts_Var_Pop_Fields>;
  var_samp?: Maybe<Discounts_Var_Samp_Fields>;
  variance?: Maybe<Discounts_Variance_Fields>;
};


/** aggregate fields of "discounts" */
export type Discounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Discounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "discounts" */
export type Discounts_Aggregate_Order_By = {
  avg?: Maybe<Discounts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Discounts_Max_Order_By>;
  min?: Maybe<Discounts_Min_Order_By>;
  stddev?: Maybe<Discounts_Stddev_Order_By>;
  stddev_pop?: Maybe<Discounts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Discounts_Stddev_Samp_Order_By>;
  sum?: Maybe<Discounts_Sum_Order_By>;
  var_pop?: Maybe<Discounts_Var_Pop_Order_By>;
  var_samp?: Maybe<Discounts_Var_Samp_Order_By>;
  variance?: Maybe<Discounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "discounts" */
export type Discounts_Arr_Rel_Insert_Input = {
  data: Array<Discounts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Discounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Discounts_Avg_Fields = {
  __typename?: 'discounts_avg_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "discounts" */
export type Discounts_Avg_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "discounts". All fields are combined with a logical 'AND'. */
export type Discounts_Bool_Exp = {
  _and?: Maybe<Array<Discounts_Bool_Exp>>;
  _not?: Maybe<Discounts_Bool_Exp>;
  _or?: Maybe<Array<Discounts_Bool_Exp>>;
  displayed_ratio?: Maybe<Int_Comparison_Exp>;
  end_time?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventory_product?: Maybe<Inventory_Products_Bool_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  start_time?: Maybe<Timestamptz_Comparison_Exp>;
  ttc_price?: Maybe<Numeric_Comparison_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "discounts" */
export enum Discounts_Constraint {
  /** unique or primary key constraint */
  DiscountsPkey = 'discounts_pkey'
}

/** input type for incrementing numeric columns in table "discounts" */
export type Discounts_Inc_Input = {
  displayed_ratio?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "discounts" */
export type Discounts_Insert_Input = {
  displayed_ratio?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product?: Maybe<Inventory_Products_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Discounts_Max_Fields = {
  __typename?: 'discounts_max_fields';
  displayed_ratio?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "discounts" */
export type Discounts_Max_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Discounts_Min_Fields = {
  __typename?: 'discounts_min_fields';
  displayed_ratio?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "discounts" */
export type Discounts_Min_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "discounts" */
export type Discounts_Mutation_Response = {
  __typename?: 'discounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Discounts>;
};

/** on conflict condition type for table "discounts" */
export type Discounts_On_Conflict = {
  constraint: Discounts_Constraint;
  update_columns?: Array<Discounts_Update_Column>;
  where?: Maybe<Discounts_Bool_Exp>;
};

/** Ordering options when selecting data from "discounts". */
export type Discounts_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product?: Maybe<Inventory_Products_Order_By>;
  is_active?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: discounts */
export type Discounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "discounts" */
export enum Discounts_Select_Column {
  /** column name */
  DisplayedRatio = 'displayed_ratio',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "discounts" */
export type Discounts_Set_Input = {
  displayed_ratio?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Discounts_Stddev_Fields = {
  __typename?: 'discounts_stddev_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "discounts" */
export type Discounts_Stddev_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Discounts_Stddev_Pop_Fields = {
  __typename?: 'discounts_stddev_pop_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "discounts" */
export type Discounts_Stddev_Pop_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Discounts_Stddev_Samp_Fields = {
  __typename?: 'discounts_stddev_samp_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "discounts" */
export type Discounts_Stddev_Samp_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Discounts_Sum_Fields = {
  __typename?: 'discounts_sum_fields';
  displayed_ratio?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "discounts" */
export type Discounts_Sum_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** update columns of table "discounts" */
export enum Discounts_Update_Column {
  /** column name */
  DisplayedRatio = 'displayed_ratio',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Discounts_Var_Pop_Fields = {
  __typename?: 'discounts_var_pop_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "discounts" */
export type Discounts_Var_Pop_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Discounts_Var_Samp_Fields = {
  __typename?: 'discounts_var_samp_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "discounts" */
export type Discounts_Var_Samp_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Discounts_Variance_Fields = {
  __typename?: 'discounts_variance_fields';
  displayed_ratio?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "discounts" */
export type Discounts_Variance_Order_By = {
  displayed_ratio?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** columns and relationships of "feedback_answer" */
export type Feedback_Answer = {
  __typename?: 'feedback_answer';
  value: Scalars['String'];
};

/** aggregated selection of "feedback_answer" */
export type Feedback_Answer_Aggregate = {
  __typename?: 'feedback_answer_aggregate';
  aggregate?: Maybe<Feedback_Answer_Aggregate_Fields>;
  nodes: Array<Feedback_Answer>;
};

/** aggregate fields of "feedback_answer" */
export type Feedback_Answer_Aggregate_Fields = {
  __typename?: 'feedback_answer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Feedback_Answer_Max_Fields>;
  min?: Maybe<Feedback_Answer_Min_Fields>;
};


/** aggregate fields of "feedback_answer" */
export type Feedback_Answer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feedback_Answer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "feedback_answer". All fields are combined with a logical 'AND'. */
export type Feedback_Answer_Bool_Exp = {
  _and?: Maybe<Array<Feedback_Answer_Bool_Exp>>;
  _not?: Maybe<Feedback_Answer_Bool_Exp>;
  _or?: Maybe<Array<Feedback_Answer_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feedback_answer" */
export enum Feedback_Answer_Constraint {
  /** unique or primary key constraint */
  FeedbackAnswerPkey = 'feedback_answer_pkey'
}

export enum Feedback_Answer_Enum {
  Bad = 'bad',
  Good = 'good',
  VeryGood = 'very_good'
}

/** Boolean expression to compare columns of type "feedback_answer_enum". All fields are combined with logical 'AND'. */
export type Feedback_Answer_Enum_Comparison_Exp = {
  _eq?: Maybe<Feedback_Answer_Enum>;
  _in?: Maybe<Array<Feedback_Answer_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Feedback_Answer_Enum>;
  _nin?: Maybe<Array<Feedback_Answer_Enum>>;
};

/** input type for inserting data into table "feedback_answer" */
export type Feedback_Answer_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Feedback_Answer_Max_Fields = {
  __typename?: 'feedback_answer_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Feedback_Answer_Min_Fields = {
  __typename?: 'feedback_answer_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "feedback_answer" */
export type Feedback_Answer_Mutation_Response = {
  __typename?: 'feedback_answer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback_Answer>;
};

/** on conflict condition type for table "feedback_answer" */
export type Feedback_Answer_On_Conflict = {
  constraint: Feedback_Answer_Constraint;
  update_columns?: Array<Feedback_Answer_Update_Column>;
  where?: Maybe<Feedback_Answer_Bool_Exp>;
};

/** Ordering options when selecting data from "feedback_answer". */
export type Feedback_Answer_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: feedback_answer */
export type Feedback_Answer_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "feedback_answer" */
export enum Feedback_Answer_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "feedback_answer" */
export type Feedback_Answer_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "feedback_answer" */
export enum Feedback_Answer_Update_Column {
  /** column name */
  Value = 'value'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};

export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: Maybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: Maybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

/** columns and relationships of "gift_rules" */
export type Gift_Rules = {
  __typename?: 'gift_rules';
  end_date?: Maybe<Scalars['date']>;
  /** An array relationship */
  gift_rules_categories: Array<Gift_Rules_Category>;
  /** An aggregate relationship */
  gift_rules_categories_aggregate: Gift_Rules_Category_Aggregate;
  /** An array relationship */
  gift_rules_gifts: Array<Gifts>;
  /** An aggregate relationship */
  gift_rules_gifts_aggregate: Gifts_Aggregate;
  /** An array relationship */
  gift_rules_products: Array<Gift_Rules_Product>;
  /** An aggregate relationship */
  gift_rules_products_aggregate: Gift_Rules_Product_Aggregate;
  /** An array relationship */
  gift_rules_warehouses: Array<Gift_Rules_Warehouse>;
  /** An aggregate relationship */
  gift_rules_warehouses_aggregate: Gift_Rules_Warehouse_Aggregate;
  id: Scalars['uuid'];
  is_enable: Scalars['Boolean'];
  max_order_value: Scalars['numeric'];
  min_order_value: Scalars['numeric'];
  name: Scalars['String'];
  order_count: Scalars['numeric'];
  start_date?: Maybe<Scalars['date']>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_CategoriesArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Category_Order_By>>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Category_Order_By>>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_GiftsArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gifts_Order_By>>;
  where?: Maybe<Gifts_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_Gifts_AggregateArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gifts_Order_By>>;
  where?: Maybe<Gifts_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_ProductsArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Product_Order_By>>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Product_Order_By>>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_WarehousesArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Warehouse_Order_By>>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};


/** columns and relationships of "gift_rules" */
export type Gift_RulesGift_Rules_Warehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Warehouse_Order_By>>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};

/** aggregated selection of "gift_rules" */
export type Gift_Rules_Aggregate = {
  __typename?: 'gift_rules_aggregate';
  aggregate?: Maybe<Gift_Rules_Aggregate_Fields>;
  nodes: Array<Gift_Rules>;
};

/** aggregate fields of "gift_rules" */
export type Gift_Rules_Aggregate_Fields = {
  __typename?: 'gift_rules_aggregate_fields';
  avg?: Maybe<Gift_Rules_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gift_Rules_Max_Fields>;
  min?: Maybe<Gift_Rules_Min_Fields>;
  stddev?: Maybe<Gift_Rules_Stddev_Fields>;
  stddev_pop?: Maybe<Gift_Rules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gift_Rules_Stddev_Samp_Fields>;
  sum?: Maybe<Gift_Rules_Sum_Fields>;
  var_pop?: Maybe<Gift_Rules_Var_Pop_Fields>;
  var_samp?: Maybe<Gift_Rules_Var_Samp_Fields>;
  variance?: Maybe<Gift_Rules_Variance_Fields>;
};


/** aggregate fields of "gift_rules" */
export type Gift_Rules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gift_Rules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Gift_Rules_Avg_Fields = {
  __typename?: 'gift_rules_avg_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gift_rules". All fields are combined with a logical 'AND'. */
export type Gift_Rules_Bool_Exp = {
  _and?: Maybe<Array<Gift_Rules_Bool_Exp>>;
  _not?: Maybe<Gift_Rules_Bool_Exp>;
  _or?: Maybe<Array<Gift_Rules_Bool_Exp>>;
  end_date?: Maybe<Date_Comparison_Exp>;
  gift_rules_categories?: Maybe<Gift_Rules_Category_Bool_Exp>;
  gift_rules_gifts?: Maybe<Gifts_Bool_Exp>;
  gift_rules_products?: Maybe<Gift_Rules_Product_Bool_Exp>;
  gift_rules_warehouses?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_enable?: Maybe<Boolean_Comparison_Exp>;
  max_order_value?: Maybe<Numeric_Comparison_Exp>;
  min_order_value?: Maybe<Numeric_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  order_count?: Maybe<Numeric_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
};

/** columns and relationships of "gift_rules_category" */
export type Gift_Rules_Category = {
  __typename?: 'gift_rules_category';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
  gift_rules_id: Scalars['uuid'];
};

/** aggregated selection of "gift_rules_category" */
export type Gift_Rules_Category_Aggregate = {
  __typename?: 'gift_rules_category_aggregate';
  aggregate?: Maybe<Gift_Rules_Category_Aggregate_Fields>;
  nodes: Array<Gift_Rules_Category>;
};

/** aggregate fields of "gift_rules_category" */
export type Gift_Rules_Category_Aggregate_Fields = {
  __typename?: 'gift_rules_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gift_Rules_Category_Max_Fields>;
  min?: Maybe<Gift_Rules_Category_Min_Fields>;
};


/** aggregate fields of "gift_rules_category" */
export type Gift_Rules_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gift_rules_category" */
export type Gift_Rules_Category_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Gift_Rules_Category_Max_Order_By>;
  min?: Maybe<Gift_Rules_Category_Min_Order_By>;
};

/** input type for inserting array relation for remote table "gift_rules_category" */
export type Gift_Rules_Category_Arr_Rel_Insert_Input = {
  data: Array<Gift_Rules_Category_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Gift_Rules_Category_On_Conflict>;
};

/** Boolean expression to filter rows from the table "gift_rules_category". All fields are combined with a logical 'AND'. */
export type Gift_Rules_Category_Bool_Exp = {
  _and?: Maybe<Array<Gift_Rules_Category_Bool_Exp>>;
  _not?: Maybe<Gift_Rules_Category_Bool_Exp>;
  _or?: Maybe<Array<Gift_Rules_Category_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  gift_rules_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gift_rules_category" */
export enum Gift_Rules_Category_Constraint {
  /** unique or primary key constraint */
  GiftRulesCategoryPkey = 'gift_rules_category_pkey'
}

/** input type for inserting data into table "gift_rules_category" */
export type Gift_Rules_Category_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['uuid']>;
  gift_rules_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gift_Rules_Category_Max_Fields = {
  __typename?: 'gift_rules_category_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  gift_rules_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "gift_rules_category" */
export type Gift_Rules_Category_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  gift_rules_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gift_Rules_Category_Min_Fields = {
  __typename?: 'gift_rules_category_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  gift_rules_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "gift_rules_category" */
export type Gift_Rules_Category_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  gift_rules_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "gift_rules_category" */
export type Gift_Rules_Category_Mutation_Response = {
  __typename?: 'gift_rules_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gift_Rules_Category>;
};

/** on conflict condition type for table "gift_rules_category" */
export type Gift_Rules_Category_On_Conflict = {
  constraint: Gift_Rules_Category_Constraint;
  update_columns?: Array<Gift_Rules_Category_Update_Column>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "gift_rules_category". */
export type Gift_Rules_Category_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  gift_rules_id?: Maybe<Order_By>;
};

/** primary key columns input for table: gift_rules_category */
export type Gift_Rules_Category_Pk_Columns_Input = {
  category_id: Scalars['uuid'];
  gift_rules_id: Scalars['uuid'];
};

/** select columns of table "gift_rules_category" */
export enum Gift_Rules_Category_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  GiftRulesId = 'gift_rules_id'
}

/** input type for updating data in table "gift_rules_category" */
export type Gift_Rules_Category_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  gift_rules_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "gift_rules_category" */
export enum Gift_Rules_Category_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  GiftRulesId = 'gift_rules_id'
}

/** unique or primary key constraints on table "gift_rules" */
export enum Gift_Rules_Constraint {
  /** unique or primary key constraint */
  GiftRulesNameKey = 'gift_rules_name_key',
  /** unique or primary key constraint */
  GiftRulesPkey = 'gift_rules_pkey'
}

/** input type for incrementing numeric columns in table "gift_rules" */
export type Gift_Rules_Inc_Input = {
  max_order_value?: Maybe<Scalars['numeric']>;
  min_order_value?: Maybe<Scalars['numeric']>;
  order_count?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "gift_rules" */
export type Gift_Rules_Insert_Input = {
  end_date?: Maybe<Scalars['date']>;
  gift_rules_categories?: Maybe<Gift_Rules_Category_Arr_Rel_Insert_Input>;
  gift_rules_gifts?: Maybe<Gifts_Arr_Rel_Insert_Input>;
  gift_rules_products?: Maybe<Gift_Rules_Product_Arr_Rel_Insert_Input>;
  gift_rules_warehouses?: Maybe<Gift_Rules_Warehouse_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  is_enable?: Maybe<Scalars['Boolean']>;
  max_order_value?: Maybe<Scalars['numeric']>;
  min_order_value?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  order_count?: Maybe<Scalars['numeric']>;
  start_date?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Gift_Rules_Max_Fields = {
  __typename?: 'gift_rules_max_fields';
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  max_order_value?: Maybe<Scalars['numeric']>;
  min_order_value?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  order_count?: Maybe<Scalars['numeric']>;
  start_date?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Gift_Rules_Min_Fields = {
  __typename?: 'gift_rules_min_fields';
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  max_order_value?: Maybe<Scalars['numeric']>;
  min_order_value?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  order_count?: Maybe<Scalars['numeric']>;
  start_date?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "gift_rules" */
export type Gift_Rules_Mutation_Response = {
  __typename?: 'gift_rules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gift_Rules>;
};

/** on conflict condition type for table "gift_rules" */
export type Gift_Rules_On_Conflict = {
  constraint: Gift_Rules_Constraint;
  update_columns?: Array<Gift_Rules_Update_Column>;
  where?: Maybe<Gift_Rules_Bool_Exp>;
};

/** Ordering options when selecting data from "gift_rules". */
export type Gift_Rules_Order_By = {
  end_date?: Maybe<Order_By>;
  gift_rules_categories_aggregate?: Maybe<Gift_Rules_Category_Aggregate_Order_By>;
  gift_rules_gifts_aggregate?: Maybe<Gifts_Aggregate_Order_By>;
  gift_rules_products_aggregate?: Maybe<Gift_Rules_Product_Aggregate_Order_By>;
  gift_rules_warehouses_aggregate?: Maybe<Gift_Rules_Warehouse_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  is_enable?: Maybe<Order_By>;
  max_order_value?: Maybe<Order_By>;
  min_order_value?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order_count?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
};

/** primary key columns input for table: gift_rules */
export type Gift_Rules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "gift_rules_product" */
export type Gift_Rules_Product = {
  __typename?: 'gift_rules_product';
  gift_rules_id: Scalars['uuid'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
};

/** aggregated selection of "gift_rules_product" */
export type Gift_Rules_Product_Aggregate = {
  __typename?: 'gift_rules_product_aggregate';
  aggregate?: Maybe<Gift_Rules_Product_Aggregate_Fields>;
  nodes: Array<Gift_Rules_Product>;
};

/** aggregate fields of "gift_rules_product" */
export type Gift_Rules_Product_Aggregate_Fields = {
  __typename?: 'gift_rules_product_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gift_Rules_Product_Max_Fields>;
  min?: Maybe<Gift_Rules_Product_Min_Fields>;
};


/** aggregate fields of "gift_rules_product" */
export type Gift_Rules_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gift_rules_product" */
export type Gift_Rules_Product_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Gift_Rules_Product_Max_Order_By>;
  min?: Maybe<Gift_Rules_Product_Min_Order_By>;
};

/** input type for inserting array relation for remote table "gift_rules_product" */
export type Gift_Rules_Product_Arr_Rel_Insert_Input = {
  data: Array<Gift_Rules_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Gift_Rules_Product_On_Conflict>;
};

/** Boolean expression to filter rows from the table "gift_rules_product". All fields are combined with a logical 'AND'. */
export type Gift_Rules_Product_Bool_Exp = {
  _and?: Maybe<Array<Gift_Rules_Product_Bool_Exp>>;
  _not?: Maybe<Gift_Rules_Product_Bool_Exp>;
  _or?: Maybe<Array<Gift_Rules_Product_Bool_Exp>>;
  gift_rules_id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gift_rules_product" */
export enum Gift_Rules_Product_Constraint {
  /** unique or primary key constraint */
  GiftRulesProductPkey = 'gift_rules_product_pkey'
}

/** input type for inserting data into table "gift_rules_product" */
export type Gift_Rules_Product_Insert_Input = {
  gift_rules_id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gift_Rules_Product_Max_Fields = {
  __typename?: 'gift_rules_product_max_fields';
  gift_rules_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "gift_rules_product" */
export type Gift_Rules_Product_Max_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gift_Rules_Product_Min_Fields = {
  __typename?: 'gift_rules_product_min_fields';
  gift_rules_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "gift_rules_product" */
export type Gift_Rules_Product_Min_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "gift_rules_product" */
export type Gift_Rules_Product_Mutation_Response = {
  __typename?: 'gift_rules_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gift_Rules_Product>;
};

/** on conflict condition type for table "gift_rules_product" */
export type Gift_Rules_Product_On_Conflict = {
  constraint: Gift_Rules_Product_Constraint;
  update_columns?: Array<Gift_Rules_Product_Update_Column>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "gift_rules_product". */
export type Gift_Rules_Product_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
};

/** primary key columns input for table: gift_rules_product */
export type Gift_Rules_Product_Pk_Columns_Input = {
  gift_rules_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};

/** select columns of table "gift_rules_product" */
export enum Gift_Rules_Product_Select_Column {
  /** column name */
  GiftRulesId = 'gift_rules_id',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "gift_rules_product" */
export type Gift_Rules_Product_Set_Input = {
  gift_rules_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "gift_rules_product" */
export enum Gift_Rules_Product_Update_Column {
  /** column name */
  GiftRulesId = 'gift_rules_id',
  /** column name */
  ProductId = 'product_id'
}

/** select columns of table "gift_rules" */
export enum Gift_Rules_Select_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnable = 'is_enable',
  /** column name */
  MaxOrderValue = 'max_order_value',
  /** column name */
  MinOrderValue = 'min_order_value',
  /** column name */
  Name = 'name',
  /** column name */
  OrderCount = 'order_count',
  /** column name */
  StartDate = 'start_date'
}

/** input type for updating data in table "gift_rules" */
export type Gift_Rules_Set_Input = {
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  is_enable?: Maybe<Scalars['Boolean']>;
  max_order_value?: Maybe<Scalars['numeric']>;
  min_order_value?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  order_count?: Maybe<Scalars['numeric']>;
  start_date?: Maybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Gift_Rules_Stddev_Fields = {
  __typename?: 'gift_rules_stddev_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gift_Rules_Stddev_Pop_Fields = {
  __typename?: 'gift_rules_stddev_pop_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gift_Rules_Stddev_Samp_Fields = {
  __typename?: 'gift_rules_stddev_samp_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Gift_Rules_Sum_Fields = {
  __typename?: 'gift_rules_sum_fields';
  max_order_value?: Maybe<Scalars['numeric']>;
  min_order_value?: Maybe<Scalars['numeric']>;
  order_count?: Maybe<Scalars['numeric']>;
};

/** update columns of table "gift_rules" */
export enum Gift_Rules_Update_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnable = 'is_enable',
  /** column name */
  MaxOrderValue = 'max_order_value',
  /** column name */
  MinOrderValue = 'min_order_value',
  /** column name */
  Name = 'name',
  /** column name */
  OrderCount = 'order_count',
  /** column name */
  StartDate = 'start_date'
}

/** aggregate var_pop on columns */
export type Gift_Rules_Var_Pop_Fields = {
  __typename?: 'gift_rules_var_pop_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gift_Rules_Var_Samp_Fields = {
  __typename?: 'gift_rules_var_samp_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gift_Rules_Variance_Fields = {
  __typename?: 'gift_rules_variance_fields';
  max_order_value?: Maybe<Scalars['Float']>;
  min_order_value?: Maybe<Scalars['Float']>;
  order_count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "gift_rules_warehouse" */
export type Gift_Rules_Warehouse = {
  __typename?: 'gift_rules_warehouse';
  gift_rules_id: Scalars['uuid'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};

/** aggregated selection of "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Aggregate = {
  __typename?: 'gift_rules_warehouse_aggregate';
  aggregate?: Maybe<Gift_Rules_Warehouse_Aggregate_Fields>;
  nodes: Array<Gift_Rules_Warehouse>;
};

/** aggregate fields of "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Aggregate_Fields = {
  __typename?: 'gift_rules_warehouse_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gift_Rules_Warehouse_Max_Fields>;
  min?: Maybe<Gift_Rules_Warehouse_Min_Fields>;
};


/** aggregate fields of "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Gift_Rules_Warehouse_Max_Order_By>;
  min?: Maybe<Gift_Rules_Warehouse_Min_Order_By>;
};

/** input type for inserting array relation for remote table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Arr_Rel_Insert_Input = {
  data: Array<Gift_Rules_Warehouse_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Gift_Rules_Warehouse_On_Conflict>;
};

/** Boolean expression to filter rows from the table "gift_rules_warehouse". All fields are combined with a logical 'AND'. */
export type Gift_Rules_Warehouse_Bool_Exp = {
  _and?: Maybe<Array<Gift_Rules_Warehouse_Bool_Exp>>;
  _not?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
  _or?: Maybe<Array<Gift_Rules_Warehouse_Bool_Exp>>;
  gift_rules_id?: Maybe<Uuid_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gift_rules_warehouse" */
export enum Gift_Rules_Warehouse_Constraint {
  /** unique or primary key constraint */
  GiftRulesWarehousePkey = 'gift_rules_warehouse_pkey'
}

/** input type for inserting data into table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Insert_Input = {
  gift_rules_id?: Maybe<Scalars['uuid']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gift_Rules_Warehouse_Max_Fields = {
  __typename?: 'gift_rules_warehouse_max_fields';
  gift_rules_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Max_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gift_Rules_Warehouse_Min_Fields = {
  __typename?: 'gift_rules_warehouse_min_fields';
  gift_rules_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Min_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Mutation_Response = {
  __typename?: 'gift_rules_warehouse_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gift_Rules_Warehouse>;
};

/** on conflict condition type for table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_On_Conflict = {
  constraint: Gift_Rules_Warehouse_Constraint;
  update_columns?: Array<Gift_Rules_Warehouse_Update_Column>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};

/** Ordering options when selecting data from "gift_rules_warehouse". */
export type Gift_Rules_Warehouse_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: gift_rules_warehouse */
export type Gift_Rules_Warehouse_Pk_Columns_Input = {
  gift_rules_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};

/** select columns of table "gift_rules_warehouse" */
export enum Gift_Rules_Warehouse_Select_Column {
  /** column name */
  GiftRulesId = 'gift_rules_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "gift_rules_warehouse" */
export type Gift_Rules_Warehouse_Set_Input = {
  gift_rules_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "gift_rules_warehouse" */
export enum Gift_Rules_Warehouse_Update_Column {
  /** column name */
  GiftRulesId = 'gift_rules_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** columns and relationships of "gifts" */
export type Gifts = {
  __typename?: 'gifts';
  gift_rules_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "gifts" */
export type Gifts_Aggregate = {
  __typename?: 'gifts_aggregate';
  aggregate?: Maybe<Gifts_Aggregate_Fields>;
  nodes: Array<Gifts>;
};

/** aggregate fields of "gifts" */
export type Gifts_Aggregate_Fields = {
  __typename?: 'gifts_aggregate_fields';
  avg?: Maybe<Gifts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gifts_Max_Fields>;
  min?: Maybe<Gifts_Min_Fields>;
  stddev?: Maybe<Gifts_Stddev_Fields>;
  stddev_pop?: Maybe<Gifts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gifts_Stddev_Samp_Fields>;
  sum?: Maybe<Gifts_Sum_Fields>;
  var_pop?: Maybe<Gifts_Var_Pop_Fields>;
  var_samp?: Maybe<Gifts_Var_Samp_Fields>;
  variance?: Maybe<Gifts_Variance_Fields>;
};


/** aggregate fields of "gifts" */
export type Gifts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gifts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gifts" */
export type Gifts_Aggregate_Order_By = {
  avg?: Maybe<Gifts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Gifts_Max_Order_By>;
  min?: Maybe<Gifts_Min_Order_By>;
  stddev?: Maybe<Gifts_Stddev_Order_By>;
  stddev_pop?: Maybe<Gifts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Gifts_Stddev_Samp_Order_By>;
  sum?: Maybe<Gifts_Sum_Order_By>;
  var_pop?: Maybe<Gifts_Var_Pop_Order_By>;
  var_samp?: Maybe<Gifts_Var_Samp_Order_By>;
  variance?: Maybe<Gifts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gifts" */
export type Gifts_Arr_Rel_Insert_Input = {
  data: Array<Gifts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Gifts_On_Conflict>;
};

/** aggregate avg on columns */
export type Gifts_Avg_Fields = {
  __typename?: 'gifts_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gifts" */
export type Gifts_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gifts". All fields are combined with a logical 'AND'. */
export type Gifts_Bool_Exp = {
  _and?: Maybe<Array<Gifts_Bool_Exp>>;
  _not?: Maybe<Gifts_Bool_Exp>;
  _or?: Maybe<Array<Gifts_Bool_Exp>>;
  gift_rules_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "gifts" */
export enum Gifts_Constraint {
  /** unique or primary key constraint */
  GiftsIdKey = 'gifts_id_key',
  /** unique or primary key constraint */
  GiftsPkey = 'gifts_pkey'
}

/** input type for incrementing numeric columns in table "gifts" */
export type Gifts_Inc_Input = {
  quantity?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "gifts" */
export type Gifts_Insert_Input = {
  gift_rules_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Gifts_Max_Fields = {
  __typename?: 'gifts_max_fields';
  gift_rules_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "gifts" */
export type Gifts_Max_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gifts_Min_Fields = {
  __typename?: 'gifts_min_fields';
  gift_rules_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "gifts" */
export type Gifts_Min_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** response of any mutation on the table "gifts" */
export type Gifts_Mutation_Response = {
  __typename?: 'gifts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gifts>;
};

/** on conflict condition type for table "gifts" */
export type Gifts_On_Conflict = {
  constraint: Gifts_Constraint;
  update_columns?: Array<Gifts_Update_Column>;
  where?: Maybe<Gifts_Bool_Exp>;
};

/** Ordering options when selecting data from "gifts". */
export type Gifts_Order_By = {
  gift_rules_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** primary key columns input for table: gifts */
export type Gifts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "gifts" */
export enum Gifts_Select_Column {
  /** column name */
  GiftRulesId = 'gift_rules_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "gifts" */
export type Gifts_Set_Input = {
  gift_rules_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Gifts_Stddev_Fields = {
  __typename?: 'gifts_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gifts" */
export type Gifts_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gifts_Stddev_Pop_Fields = {
  __typename?: 'gifts_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gifts" */
export type Gifts_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gifts_Stddev_Samp_Fields = {
  __typename?: 'gifts_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gifts" */
export type Gifts_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Gifts_Sum_Fields = {
  __typename?: 'gifts_sum_fields';
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "gifts" */
export type Gifts_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "gifts" */
export enum Gifts_Update_Column {
  /** column name */
  GiftRulesId = 'gift_rules_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Gifts_Var_Pop_Fields = {
  __typename?: 'gifts_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gifts" */
export type Gifts_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gifts_Var_Samp_Fields = {
  __typename?: 'gifts_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gifts" */
export type Gifts_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Gifts_Variance_Fields = {
  __typename?: 'gifts_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gifts" */
export type Gifts_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  user_groups: Array<User_Group>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Group_Aggregate;
};


/** columns and relationships of "groups" */
export type GroupsUser_GroupsArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsUser_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: Maybe<Array<Groups_Bool_Exp>>;
  _not?: Maybe<Groups_Bool_Exp>;
  _or?: Maybe<Array<Groups_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user_groups?: Maybe<User_Group_Bool_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey'
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  user_groups?: Maybe<User_Group_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** on conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: Maybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_groups_aggregate?: Maybe<User_Group_Aggregate_Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "inventory_products" */
export type Inventory_Products = {
  __typename?: 'inventory_products';
  always_visible: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  /** A computed field, executes function "discount_enabled" */
  discount_enabled?: Maybe<Scalars['Boolean']>;
  discount_end_time?: Maybe<Scalars['timestamptz']>;
  discount_start_time?: Maybe<Scalars['timestamptz']>;
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  discounts: Array<Discounts>;
  /** An aggregate relationship */
  discounts_aggregate: Discounts_Aggregate;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  is_displayed: Scalars['Boolean'];
  is_referenced: Scalars['Boolean'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  stock_available: Scalars['Int'];
  /** An array relationship */
  store_products: Array<Store_Products>;
  /** An aggregate relationship */
  store_products_aggregate: Store_Products_Aggregate;
  ttc_price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsDiscountsArgs = {
  distinct_on?: Maybe<Array<Discounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discounts_Order_By>>;
  where?: Maybe<Discounts_Bool_Exp>;
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsDiscounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Discounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discounts_Order_By>>;
  where?: Maybe<Discounts_Bool_Exp>;
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsStore_ProductsArgs = {
  distinct_on?: Maybe<Array<Store_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Products_Order_By>>;
  where?: Maybe<Store_Products_Bool_Exp>;
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsStore_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Products_Order_By>>;
  where?: Maybe<Store_Products_Bool_Exp>;
};

/** aggregated selection of "inventory_products" */
export type Inventory_Products_Aggregate = {
  __typename?: 'inventory_products_aggregate';
  aggregate?: Maybe<Inventory_Products_Aggregate_Fields>;
  nodes: Array<Inventory_Products>;
};

/** aggregate fields of "inventory_products" */
export type Inventory_Products_Aggregate_Fields = {
  __typename?: 'inventory_products_aggregate_fields';
  avg?: Maybe<Inventory_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Products_Max_Fields>;
  min?: Maybe<Inventory_Products_Min_Fields>;
  stddev?: Maybe<Inventory_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Products_Sum_Fields>;
  var_pop?: Maybe<Inventory_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Products_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Products_Variance_Fields>;
};


/** aggregate fields of "inventory_products" */
export type Inventory_Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inventory_Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inventory_products" */
export type Inventory_Products_Aggregate_Order_By = {
  avg?: Maybe<Inventory_Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Inventory_Products_Max_Order_By>;
  min?: Maybe<Inventory_Products_Min_Order_By>;
  stddev?: Maybe<Inventory_Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Inventory_Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Inventory_Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Inventory_Products_Sum_Order_By>;
  var_pop?: Maybe<Inventory_Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Inventory_Products_Var_Samp_Order_By>;
  variance?: Maybe<Inventory_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "inventory_products" */
export type Inventory_Products_Arr_Rel_Insert_Input = {
  data: Array<Inventory_Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Inventory_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Inventory_Products_Avg_Fields = {
  __typename?: 'inventory_products_avg_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "inventory_products" */
export type Inventory_Products_Avg_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "inventory_products". All fields are combined with a logical 'AND'. */
export type Inventory_Products_Bool_Exp = {
  _and?: Maybe<Array<Inventory_Products_Bool_Exp>>;
  _not?: Maybe<Inventory_Products_Bool_Exp>;
  _or?: Maybe<Array<Inventory_Products_Bool_Exp>>;
  always_visible?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount_enabled?: Maybe<Boolean_Comparison_Exp>;
  discount_end_time?: Maybe<Timestamptz_Comparison_Exp>;
  discount_start_time?: Maybe<Timestamptz_Comparison_Exp>;
  discounted_ttc_price?: Maybe<Numeric_Comparison_Exp>;
  discounts?: Maybe<Discounts_Bool_Exp>;
  displayed_discounted_ratio?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_displayed?: Maybe<Boolean_Comparison_Exp>;
  is_referenced?: Maybe<Boolean_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  stock_available?: Maybe<Int_Comparison_Exp>;
  store_products?: Maybe<Store_Products_Bool_Exp>;
  ttc_price?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventory_products" */
export enum Inventory_Products_Constraint {
  /** unique or primary key constraint */
  InventoryProductsIdKey = 'inventory_products_id_key',
  /** unique or primary key constraint */
  InventoryProductsPkey = 'inventory_products_pkey'
}

/** input type for incrementing numeric columns in table "inventory_products" */
export type Inventory_Products_Inc_Input = {
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  stock_available?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "inventory_products" */
export type Inventory_Products_Insert_Input = {
  always_visible?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_end_time?: Maybe<Scalars['timestamptz']>;
  discount_start_time?: Maybe<Scalars['timestamptz']>;
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  discounts?: Maybe<Discounts_Arr_Rel_Insert_Input>;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  is_displayed?: Maybe<Scalars['Boolean']>;
  is_referenced?: Maybe<Scalars['Boolean']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  stock_available?: Maybe<Scalars['Int']>;
  store_products?: Maybe<Store_Products_Arr_Rel_Insert_Input>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Inventory_Products_Max_Fields = {
  __typename?: 'inventory_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_end_time?: Maybe<Scalars['timestamptz']>;
  discount_start_time?: Maybe<Scalars['timestamptz']>;
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  stock_available?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "inventory_products" */
export type Inventory_Products_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  discount_end_time?: Maybe<Order_By>;
  discount_start_time?: Maybe<Order_By>;
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inventory_Products_Min_Fields = {
  __typename?: 'inventory_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_end_time?: Maybe<Scalars['timestamptz']>;
  discount_start_time?: Maybe<Scalars['timestamptz']>;
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  stock_available?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "inventory_products" */
export type Inventory_Products_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  discount_end_time?: Maybe<Order_By>;
  discount_start_time?: Maybe<Order_By>;
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "inventory_products" */
export type Inventory_Products_Mutation_Response = {
  __typename?: 'inventory_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory_Products>;
};

/** input type for inserting object relation for remote table "inventory_products" */
export type Inventory_Products_Obj_Rel_Insert_Input = {
  data: Inventory_Products_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Inventory_Products_On_Conflict>;
};

/** on conflict condition type for table "inventory_products" */
export type Inventory_Products_On_Conflict = {
  constraint: Inventory_Products_Constraint;
  update_columns?: Array<Inventory_Products_Update_Column>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory_products". */
export type Inventory_Products_Order_By = {
  always_visible?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_enabled?: Maybe<Order_By>;
  discount_end_time?: Maybe<Order_By>;
  discount_start_time?: Maybe<Order_By>;
  discounted_ttc_price?: Maybe<Order_By>;
  discounts_aggregate?: Maybe<Discounts_Aggregate_Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_displayed?: Maybe<Order_By>;
  is_referenced?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  store_products_aggregate?: Maybe<Store_Products_Aggregate_Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: inventory_products */
export type Inventory_Products_Pk_Columns_Input = {
  product_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};

/** select columns of table "inventory_products" */
export enum Inventory_Products_Select_Column {
  /** column name */
  AlwaysVisible = 'always_visible',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountEndTime = 'discount_end_time',
  /** column name */
  DiscountStartTime = 'discount_start_time',
  /** column name */
  DiscountedTtcPrice = 'discounted_ttc_price',
  /** column name */
  DisplayedDiscountedRatio = 'displayed_discounted_ratio',
  /** column name */
  Id = 'id',
  /** column name */
  IsDisplayed = 'is_displayed',
  /** column name */
  IsReferenced = 'is_referenced',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StockAvailable = 'stock_available',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "inventory_products" */
export type Inventory_Products_Set_Input = {
  always_visible?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_end_time?: Maybe<Scalars['timestamptz']>;
  discount_start_time?: Maybe<Scalars['timestamptz']>;
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  is_displayed?: Maybe<Scalars['Boolean']>;
  is_referenced?: Maybe<Scalars['Boolean']>;
  product_id?: Maybe<Scalars['uuid']>;
  stock_available?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Inventory_Products_Stddev_Fields = {
  __typename?: 'inventory_products_stddev_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "inventory_products" */
export type Inventory_Products_Stddev_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Products_Stddev_Pop_Fields = {
  __typename?: 'inventory_products_stddev_pop_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "inventory_products" */
export type Inventory_Products_Stddev_Pop_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Products_Stddev_Samp_Fields = {
  __typename?: 'inventory_products_stddev_samp_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "inventory_products" */
export type Inventory_Products_Stddev_Samp_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Inventory_Products_Sum_Fields = {
  __typename?: 'inventory_products_sum_fields';
  discounted_ttc_price?: Maybe<Scalars['numeric']>;
  displayed_discounted_ratio?: Maybe<Scalars['Int']>;
  stock_available?: Maybe<Scalars['Int']>;
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "inventory_products" */
export type Inventory_Products_Sum_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** update columns of table "inventory_products" */
export enum Inventory_Products_Update_Column {
  /** column name */
  AlwaysVisible = 'always_visible',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountEndTime = 'discount_end_time',
  /** column name */
  DiscountStartTime = 'discount_start_time',
  /** column name */
  DiscountedTtcPrice = 'discounted_ttc_price',
  /** column name */
  DisplayedDiscountedRatio = 'displayed_discounted_ratio',
  /** column name */
  Id = 'id',
  /** column name */
  IsDisplayed = 'is_displayed',
  /** column name */
  IsReferenced = 'is_referenced',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StockAvailable = 'stock_available',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Inventory_Products_Var_Pop_Fields = {
  __typename?: 'inventory_products_var_pop_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "inventory_products" */
export type Inventory_Products_Var_Pop_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inventory_Products_Var_Samp_Fields = {
  __typename?: 'inventory_products_var_samp_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "inventory_products" */
export type Inventory_Products_Var_Samp_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Inventory_Products_Variance_Fields = {
  __typename?: 'inventory_products_variance_fields';
  discounted_ttc_price?: Maybe<Scalars['Float']>;
  displayed_discounted_ratio?: Maybe<Scalars['Float']>;
  stock_available?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "inventory_products" */
export type Inventory_Products_Variance_Order_By = {
  discounted_ttc_price?: Maybe<Order_By>;
  displayed_discounted_ratio?: Maybe<Order_By>;
  stock_available?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "log_operator_events" */
export type Log_Operator_Events = {
  __typename?: 'log_operator_events';
  created_at: Scalars['timestamptz'];
  event_data?: Maybe<Scalars['jsonb']>;
  event_name: Scalars['String'];
  id: Scalars['uuid'];
  related_object_id?: Maybe<Scalars['String']>;
  related_object_type?: Maybe<Scalars['String']>;
  /** An object relationship */
  staff_user: Staff_Users;
  staff_user_id: Scalars['uuid'];
};


/** columns and relationships of "log_operator_events" */
export type Log_Operator_EventsEvent_DataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "log_operator_events" */
export type Log_Operator_Events_Aggregate = {
  __typename?: 'log_operator_events_aggregate';
  aggregate?: Maybe<Log_Operator_Events_Aggregate_Fields>;
  nodes: Array<Log_Operator_Events>;
};

/** aggregate fields of "log_operator_events" */
export type Log_Operator_Events_Aggregate_Fields = {
  __typename?: 'log_operator_events_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Log_Operator_Events_Max_Fields>;
  min?: Maybe<Log_Operator_Events_Min_Fields>;
};


/** aggregate fields of "log_operator_events" */
export type Log_Operator_Events_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Log_Operator_Events_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Log_Operator_Events_Append_Input = {
  event_data?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "log_operator_events". All fields are combined with a logical 'AND'. */
export type Log_Operator_Events_Bool_Exp = {
  _and?: Maybe<Array<Log_Operator_Events_Bool_Exp>>;
  _not?: Maybe<Log_Operator_Events_Bool_Exp>;
  _or?: Maybe<Array<Log_Operator_Events_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  event_data?: Maybe<Jsonb_Comparison_Exp>;
  event_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  related_object_id?: Maybe<String_Comparison_Exp>;
  related_object_type?: Maybe<String_Comparison_Exp>;
  staff_user?: Maybe<Staff_Users_Bool_Exp>;
  staff_user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "log_operator_events" */
export enum Log_Operator_Events_Constraint {
  /** unique or primary key constraint */
  LogOperatorEventsPkey = 'log_operator_events_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Log_Operator_Events_Delete_At_Path_Input = {
  event_data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Log_Operator_Events_Delete_Elem_Input = {
  event_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Log_Operator_Events_Delete_Key_Input = {
  event_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "log_operator_events" */
export type Log_Operator_Events_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  event_data?: Maybe<Scalars['jsonb']>;
  event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  related_object_id?: Maybe<Scalars['String']>;
  related_object_type?: Maybe<Scalars['String']>;
  staff_user?: Maybe<Staff_Users_Obj_Rel_Insert_Input>;
  staff_user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Log_Operator_Events_Max_Fields = {
  __typename?: 'log_operator_events_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  related_object_id?: Maybe<Scalars['String']>;
  related_object_type?: Maybe<Scalars['String']>;
  staff_user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Log_Operator_Events_Min_Fields = {
  __typename?: 'log_operator_events_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  related_object_id?: Maybe<Scalars['String']>;
  related_object_type?: Maybe<Scalars['String']>;
  staff_user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "log_operator_events" */
export type Log_Operator_Events_Mutation_Response = {
  __typename?: 'log_operator_events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Log_Operator_Events>;
};

/** on conflict condition type for table "log_operator_events" */
export type Log_Operator_Events_On_Conflict = {
  constraint: Log_Operator_Events_Constraint;
  update_columns?: Array<Log_Operator_Events_Update_Column>;
  where?: Maybe<Log_Operator_Events_Bool_Exp>;
};

/** Ordering options when selecting data from "log_operator_events". */
export type Log_Operator_Events_Order_By = {
  created_at?: Maybe<Order_By>;
  event_data?: Maybe<Order_By>;
  event_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  related_object_id?: Maybe<Order_By>;
  related_object_type?: Maybe<Order_By>;
  staff_user?: Maybe<Staff_Users_Order_By>;
  staff_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: log_operator_events */
export type Log_Operator_Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Log_Operator_Events_Prepend_Input = {
  event_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "log_operator_events" */
export enum Log_Operator_Events_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventData = 'event_data',
  /** column name */
  EventName = 'event_name',
  /** column name */
  Id = 'id',
  /** column name */
  RelatedObjectId = 'related_object_id',
  /** column name */
  RelatedObjectType = 'related_object_type',
  /** column name */
  StaffUserId = 'staff_user_id'
}

/** input type for updating data in table "log_operator_events" */
export type Log_Operator_Events_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  event_data?: Maybe<Scalars['jsonb']>;
  event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  related_object_id?: Maybe<Scalars['String']>;
  related_object_type?: Maybe<Scalars['String']>;
  staff_user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "log_operator_events" */
export enum Log_Operator_Events_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventData = 'event_data',
  /** column name */
  EventName = 'event_name',
  /** column name */
  Id = 'id',
  /** column name */
  RelatedObjectId = 'related_object_id',
  /** column name */
  RelatedObjectType = 'related_object_type',
  /** column name */
  StaffUserId = 'staff_user_id'
}

export type LoginOutput = {
  __typename?: 'loginOutput';
  access_token: Scalars['String'];
  expires_in?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  refresh_token: Scalars['String'];
  token_type: Scalars['String'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  adminLogin?: Maybe<AdminLoginOutput>;
  cancelUberOrder?: Maybe<CancelOrderOutput>;
  challenge: StatusOutput;
  createCajooDelivery?: Maybe<CreateCajooDeliveryOutput>;
  createCartItem?: Maybe<CreateCartItemOutput>;
  createCoursierFrDelivery?: Maybe<CreateCoursierFrDeliveryOutput>;
  createInvoice?: Maybe<CreateInvoiceOutput>;
  createMtoolsDelivery?: Maybe<CreateMtoolsDeliveryOutput>;
  createStaffUser?: Maybe<CreateStaffUserOutput>;
  createStuartDelivery?: Maybe<CreateStuartDeliveryOutput>;
  createUberDirectDelivery?: Maybe<CreateUberDirectDeliveryOutput>;
  deleteUserPersonalData?: Maybe<DeleteUserOutput>;
  /** delete data from the table: "address_label" */
  delete_address_label?: Maybe<Address_Label_Mutation_Response>;
  /** delete single row from the table: "address_label" */
  delete_address_label_by_pk?: Maybe<Address_Label>;
  /** delete data from the table: "banners" */
  delete_banners?: Maybe<Banners_Mutation_Response>;
  /** delete single row from the table: "banners" */
  delete_banners_by_pk?: Maybe<Banners>;
  /** delete data from the table: "cart_items" */
  delete_cart_items?: Maybe<Cart_Items_Mutation_Response>;
  /** delete single row from the table: "cart_items" */
  delete_cart_items_by_pk?: Maybe<Cart_Items>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "consent_type" */
  delete_consent_type?: Maybe<Consent_Type_Mutation_Response>;
  /** delete single row from the table: "consent_type" */
  delete_consent_type_by_pk?: Maybe<Consent_Type>;
  /** delete data from the table: "coupon_category" */
  delete_coupon_category?: Maybe<Coupon_Category_Mutation_Response>;
  /** delete single row from the table: "coupon_category" */
  delete_coupon_category_by_pk?: Maybe<Coupon_Category>;
  /** delete data from the table: "coupon_tag" */
  delete_coupon_tag?: Maybe<Coupon_Tag_Mutation_Response>;
  /** delete single row from the table: "coupon_tag" */
  delete_coupon_tag_by_pk?: Maybe<Coupon_Tag>;
  /** delete data from the table: "coupon_user_group" */
  delete_coupon_user_group?: Maybe<Coupon_User_Group_Mutation_Response>;
  /** delete single row from the table: "coupon_user_group" */
  delete_coupon_user_group_by_pk?: Maybe<Coupon_User_Group>;
  /** delete data from the table: "coupons" */
  delete_coupons?: Maybe<Coupons_Mutation_Response>;
  /** delete single row from the table: "coupons" */
  delete_coupons_by_pk?: Maybe<Coupons>;
  /** delete data from the table: "deliveries" */
  delete_deliveries?: Maybe<Deliveries_Mutation_Response>;
  /** delete single row from the table: "deliveries" */
  delete_deliveries_by_pk?: Maybe<Deliveries>;
  /** delete data from the table: "deliveries_group" */
  delete_deliveries_group?: Maybe<Deliveries_Group_Mutation_Response>;
  /** delete single row from the table: "deliveries_group" */
  delete_deliveries_group_by_pk?: Maybe<Deliveries_Group>;
  /** delete data from the table: "delivery_feedbacks" */
  delete_delivery_feedbacks?: Maybe<Delivery_Feedbacks_Mutation_Response>;
  /** delete single row from the table: "delivery_feedbacks" */
  delete_delivery_feedbacks_by_pk?: Maybe<Delivery_Feedbacks>;
  /** delete data from the table: "delivery_method" */
  delete_delivery_method?: Maybe<Delivery_Method_Mutation_Response>;
  /** delete single row from the table: "delivery_method" */
  delete_delivery_method_by_pk?: Maybe<Delivery_Method>;
  /** delete data from the table: "delivery_status" */
  delete_delivery_status?: Maybe<Delivery_Status_Mutation_Response>;
  /** delete single row from the table: "delivery_status" */
  delete_delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** delete data from the table: "discount_type" */
  delete_discount_type?: Maybe<Discount_Type_Mutation_Response>;
  /** delete single row from the table: "discount_type" */
  delete_discount_type_by_pk?: Maybe<Discount_Type>;
  /** delete data from the table: "discounts" */
  delete_discounts?: Maybe<Discounts_Mutation_Response>;
  /** delete single row from the table: "discounts" */
  delete_discounts_by_pk?: Maybe<Discounts>;
  /** delete data from the table: "feedback_answer" */
  delete_feedback_answer?: Maybe<Feedback_Answer_Mutation_Response>;
  /** delete single row from the table: "feedback_answer" */
  delete_feedback_answer_by_pk?: Maybe<Feedback_Answer>;
  /** delete data from the table: "gift_rules" */
  delete_gift_rules?: Maybe<Gift_Rules_Mutation_Response>;
  /** delete single row from the table: "gift_rules" */
  delete_gift_rules_by_pk?: Maybe<Gift_Rules>;
  /** delete data from the table: "gift_rules_category" */
  delete_gift_rules_category?: Maybe<Gift_Rules_Category_Mutation_Response>;
  /** delete single row from the table: "gift_rules_category" */
  delete_gift_rules_category_by_pk?: Maybe<Gift_Rules_Category>;
  /** delete data from the table: "gift_rules_product" */
  delete_gift_rules_product?: Maybe<Gift_Rules_Product_Mutation_Response>;
  /** delete single row from the table: "gift_rules_product" */
  delete_gift_rules_product_by_pk?: Maybe<Gift_Rules_Product>;
  /** delete data from the table: "gift_rules_warehouse" */
  delete_gift_rules_warehouse?: Maybe<Gift_Rules_Warehouse_Mutation_Response>;
  /** delete single row from the table: "gift_rules_warehouse" */
  delete_gift_rules_warehouse_by_pk?: Maybe<Gift_Rules_Warehouse>;
  /** delete data from the table: "gifts" */
  delete_gifts?: Maybe<Gifts_Mutation_Response>;
  /** delete single row from the table: "gifts" */
  delete_gifts_by_pk?: Maybe<Gifts>;
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "inventory_products" */
  delete_inventory_products?: Maybe<Inventory_Products_Mutation_Response>;
  /** delete single row from the table: "inventory_products" */
  delete_inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** delete data from the table: "log_operator_events" */
  delete_log_operator_events?: Maybe<Log_Operator_Events_Mutation_Response>;
  /** delete single row from the table: "log_operator_events" */
  delete_log_operator_events_by_pk?: Maybe<Log_Operator_Events>;
  /** delete data from the table: "operation_rule_handle" */
  delete_operation_rule_handle?: Maybe<Operation_Rule_Handle_Mutation_Response>;
  /** delete single row from the table: "operation_rule_handle" */
  delete_operation_rule_handle_by_pk?: Maybe<Operation_Rule_Handle>;
  /** delete data from the table: "operation_rules" */
  delete_operation_rules?: Maybe<Operation_Rules_Mutation_Response>;
  /** delete single row from the table: "operation_rules" */
  delete_operation_rules_by_pk?: Maybe<Operation_Rules>;
  /** delete data from the table: "order_items" */
  delete_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** delete single row from the table: "order_items" */
  delete_order_items_by_pk?: Maybe<Order_Items>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "payment_method" */
  delete_payment_method?: Maybe<Payment_Method_Mutation_Response>;
  /** delete single row from the table: "payment_method" */
  delete_payment_method_by_pk?: Maybe<Payment_Method>;
  /** delete data from the table: "payment_status" */
  delete_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** delete single row from the table: "payment_status" */
  delete_payment_status_by_pk?: Maybe<Payment_Status>;
  /** delete data from the table: "popular_searches" */
  delete_popular_searches?: Maybe<Popular_Searches_Mutation_Response>;
  /** delete single row from the table: "popular_searches" */
  delete_popular_searches_by_pk?: Maybe<Popular_Searches>;
  /** delete data from the table: "product_properties" */
  delete_product_properties?: Maybe<Product_Properties_Mutation_Response>;
  /** delete single row from the table: "product_properties" */
  delete_product_properties_by_pk?: Maybe<Product_Properties>;
  /** delete data from the table: "product_subcategory" */
  delete_product_subcategory?: Maybe<Product_Subcategory_Mutation_Response>;
  /** delete single row from the table: "product_subcategory" */
  delete_product_subcategory_by_pk?: Maybe<Product_Subcategory>;
  /** delete data from the table: "product_suggestions" */
  delete_product_suggestions?: Maybe<Product_Suggestions_Mutation_Response>;
  /** delete single row from the table: "product_suggestions" */
  delete_product_suggestions_by_pk?: Maybe<Product_Suggestions>;
  /** delete data from the table: "product_tag" */
  delete_product_tag?: Maybe<Product_Tag_Mutation_Response>;
  /** delete single row from the table: "product_tag" */
  delete_product_tag_by_pk?: Maybe<Product_Tag>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "rider_status" */
  delete_rider_status?: Maybe<Rider_Status_Mutation_Response>;
  /** delete single row from the table: "rider_status" */
  delete_rider_status_by_pk?: Maybe<Rider_Status>;
  /** delete data from the table: "riders" */
  delete_riders?: Maybe<Riders_Mutation_Response>;
  /** delete single row from the table: "riders" */
  delete_riders_by_pk?: Maybe<Riders>;
  /** delete data from the table: "role_type" */
  delete_role_type?: Maybe<Role_Type_Mutation_Response>;
  /** delete single row from the table: "role_type" */
  delete_role_type_by_pk?: Maybe<Role_Type>;
  /** delete data from the table: "staff_users" */
  delete_staff_users?: Maybe<Staff_Users_Mutation_Response>;
  /** delete single row from the table: "staff_users" */
  delete_staff_users_by_pk?: Maybe<Staff_Users>;
  /** delete data from the table: "store_category" */
  delete_store_category?: Maybe<Store_Category_Mutation_Response>;
  /** delete single row from the table: "store_category" */
  delete_store_category_by_pk?: Maybe<Store_Category>;
  /** delete data from the table: "store_hours" */
  delete_store_hours?: Maybe<Store_Hours_Mutation_Response>;
  /** delete single row from the table: "store_hours" */
  delete_store_hours_by_pk?: Maybe<Store_Hours>;
  /** delete data from the table: "store_products" */
  delete_store_products?: Maybe<Store_Products_Mutation_Response>;
  /** delete single row from the table: "store_products" */
  delete_store_products_by_pk?: Maybe<Store_Products>;
  /** delete data from the table: "stores" */
  delete_stores?: Maybe<Stores_Mutation_Response>;
  /** delete single row from the table: "stores" */
  delete_stores_by_pk?: Maybe<Stores>;
  /** delete data from the table: "subcategories" */
  delete_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** delete single row from the table: "subcategories" */
  delete_subcategories_by_pk?: Maybe<Subcategories>;
  /** delete data from the table: "system_information" */
  delete_system_information?: Maybe<System_Information_Mutation_Response>;
  /** delete single row from the table: "system_information" */
  delete_system_information_by_pk?: Maybe<System_Information>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "transporter_criterias" */
  delete_transporter_criterias?: Maybe<Transporter_Criterias_Mutation_Response>;
  /** delete single row from the table: "transporter_criterias" */
  delete_transporter_criterias_by_pk?: Maybe<Transporter_Criterias>;
  /** delete data from the table: "transports" */
  delete_transports?: Maybe<Transports_Mutation_Response>;
  /** delete single row from the table: "transports" */
  delete_transports_by_pk?: Maybe<Transports>;
  /** delete data from the table: "user_addresses" */
  delete_user_addresses?: Maybe<User_Addresses_Mutation_Response>;
  /** delete single row from the table: "user_addresses" */
  delete_user_addresses_by_pk?: Maybe<User_Addresses>;
  /** delete data from the table: "user_consents" */
  delete_user_consents?: Maybe<User_Consents_Mutation_Response>;
  /** delete single row from the table: "user_consents" */
  delete_user_consents_by_pk?: Maybe<User_Consents>;
  /** delete data from the table: "user_coupon" */
  delete_user_coupon?: Maybe<User_Coupon_Mutation_Response>;
  /** delete single row from the table: "user_coupon" */
  delete_user_coupon_by_pk?: Maybe<User_Coupon>;
  /** delete data from the table: "user_favorite_product" */
  delete_user_favorite_product?: Maybe<User_Favorite_Product_Mutation_Response>;
  /** delete single row from the table: "user_favorite_product" */
  delete_user_favorite_product_by_pk?: Maybe<User_Favorite_Product>;
  /** delete data from the table: "user_group" */
  delete_user_group?: Maybe<User_Group_Mutation_Response>;
  /** delete single row from the table: "user_group" */
  delete_user_group_by_pk?: Maybe<User_Group>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "warehouse_category" */
  delete_warehouse_category?: Maybe<Warehouse_Category_Mutation_Response>;
  /** delete single row from the table: "warehouse_category" */
  delete_warehouse_category_by_pk?: Maybe<Warehouse_Category>;
  /** delete data from the table: "warehouse_hours" */
  delete_warehouse_hours?: Maybe<Warehouse_Hours_Mutation_Response>;
  /** delete single row from the table: "warehouse_hours" */
  delete_warehouse_hours_by_pk?: Maybe<Warehouse_Hours>;
  /** delete data from the table: "warehouse_operation_rule" */
  delete_warehouse_operation_rule?: Maybe<Warehouse_Operation_Rule_Mutation_Response>;
  /** delete single row from the table: "warehouse_operation_rule" */
  delete_warehouse_operation_rule_by_pk?: Maybe<Warehouse_Operation_Rule>;
  /** delete data from the table: "warehouse_status" */
  delete_warehouse_status?: Maybe<Warehouse_Status_Mutation_Response>;
  /** delete single row from the table: "warehouse_status" */
  delete_warehouse_status_by_pk?: Maybe<Warehouse_Status>;
  /** delete data from the table: "warehouse_user_address" */
  delete_warehouse_user_address?: Maybe<Warehouse_User_Address_Mutation_Response>;
  /** delete single row from the table: "warehouse_user_address" */
  delete_warehouse_user_address_by_pk?: Maybe<Warehouse_User_Address>;
  /** delete data from the table: "warehouses" */
  delete_warehouses?: Maybe<Warehouses_Mutation_Response>;
  /** delete single row from the table: "warehouses" */
  delete_warehouses_by_pk?: Maybe<Warehouses>;
  /** delete data from the table: "warehouses_text" */
  delete_warehouses_text?: Maybe<Warehouses_Text_Mutation_Response>;
  detachPaymentMethod?: Maybe<SampleOutput>;
  getPictureUploadKey?: Maybe<UploadKey>;
  /** insert data into the table: "address_label" */
  insert_address_label?: Maybe<Address_Label_Mutation_Response>;
  /** insert a single row into the table: "address_label" */
  insert_address_label_one?: Maybe<Address_Label>;
  /** insert data into the table: "banners" */
  insert_banners?: Maybe<Banners_Mutation_Response>;
  /** insert a single row into the table: "banners" */
  insert_banners_one?: Maybe<Banners>;
  /** insert data into the table: "cart_items" */
  insert_cart_items?: Maybe<Cart_Items_Mutation_Response>;
  /** insert a single row into the table: "cart_items" */
  insert_cart_items_one?: Maybe<Cart_Items>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "consent_type" */
  insert_consent_type?: Maybe<Consent_Type_Mutation_Response>;
  /** insert a single row into the table: "consent_type" */
  insert_consent_type_one?: Maybe<Consent_Type>;
  /** insert data into the table: "coupon_category" */
  insert_coupon_category?: Maybe<Coupon_Category_Mutation_Response>;
  /** insert a single row into the table: "coupon_category" */
  insert_coupon_category_one?: Maybe<Coupon_Category>;
  /** insert data into the table: "coupon_tag" */
  insert_coupon_tag?: Maybe<Coupon_Tag_Mutation_Response>;
  /** insert a single row into the table: "coupon_tag" */
  insert_coupon_tag_one?: Maybe<Coupon_Tag>;
  /** insert data into the table: "coupon_user_group" */
  insert_coupon_user_group?: Maybe<Coupon_User_Group_Mutation_Response>;
  /** insert a single row into the table: "coupon_user_group" */
  insert_coupon_user_group_one?: Maybe<Coupon_User_Group>;
  /** insert data into the table: "coupons" */
  insert_coupons?: Maybe<Coupons_Mutation_Response>;
  /** insert a single row into the table: "coupons" */
  insert_coupons_one?: Maybe<Coupons>;
  /** insert data into the table: "deliveries" */
  insert_deliveries?: Maybe<Deliveries_Mutation_Response>;
  /** insert data into the table: "deliveries_group" */
  insert_deliveries_group?: Maybe<Deliveries_Group_Mutation_Response>;
  /** insert a single row into the table: "deliveries_group" */
  insert_deliveries_group_one?: Maybe<Deliveries_Group>;
  /** insert a single row into the table: "deliveries" */
  insert_deliveries_one?: Maybe<Deliveries>;
  /** insert data into the table: "delivery_feedbacks" */
  insert_delivery_feedbacks?: Maybe<Delivery_Feedbacks_Mutation_Response>;
  /** insert a single row into the table: "delivery_feedbacks" */
  insert_delivery_feedbacks_one?: Maybe<Delivery_Feedbacks>;
  /** insert data into the table: "delivery_method" */
  insert_delivery_method?: Maybe<Delivery_Method_Mutation_Response>;
  /** insert a single row into the table: "delivery_method" */
  insert_delivery_method_one?: Maybe<Delivery_Method>;
  /** insert data into the table: "delivery_status" */
  insert_delivery_status?: Maybe<Delivery_Status_Mutation_Response>;
  /** insert a single row into the table: "delivery_status" */
  insert_delivery_status_one?: Maybe<Delivery_Status>;
  /** insert data into the table: "discount_type" */
  insert_discount_type?: Maybe<Discount_Type_Mutation_Response>;
  /** insert a single row into the table: "discount_type" */
  insert_discount_type_one?: Maybe<Discount_Type>;
  /** insert data into the table: "discounts" */
  insert_discounts?: Maybe<Discounts_Mutation_Response>;
  /** insert a single row into the table: "discounts" */
  insert_discounts_one?: Maybe<Discounts>;
  /** insert data into the table: "feedback_answer" */
  insert_feedback_answer?: Maybe<Feedback_Answer_Mutation_Response>;
  /** insert a single row into the table: "feedback_answer" */
  insert_feedback_answer_one?: Maybe<Feedback_Answer>;
  /** insert data into the table: "gift_rules" */
  insert_gift_rules?: Maybe<Gift_Rules_Mutation_Response>;
  /** insert data into the table: "gift_rules_category" */
  insert_gift_rules_category?: Maybe<Gift_Rules_Category_Mutation_Response>;
  /** insert a single row into the table: "gift_rules_category" */
  insert_gift_rules_category_one?: Maybe<Gift_Rules_Category>;
  /** insert a single row into the table: "gift_rules" */
  insert_gift_rules_one?: Maybe<Gift_Rules>;
  /** insert data into the table: "gift_rules_product" */
  insert_gift_rules_product?: Maybe<Gift_Rules_Product_Mutation_Response>;
  /** insert a single row into the table: "gift_rules_product" */
  insert_gift_rules_product_one?: Maybe<Gift_Rules_Product>;
  /** insert data into the table: "gift_rules_warehouse" */
  insert_gift_rules_warehouse?: Maybe<Gift_Rules_Warehouse_Mutation_Response>;
  /** insert a single row into the table: "gift_rules_warehouse" */
  insert_gift_rules_warehouse_one?: Maybe<Gift_Rules_Warehouse>;
  /** insert data into the table: "gifts" */
  insert_gifts?: Maybe<Gifts_Mutation_Response>;
  /** insert a single row into the table: "gifts" */
  insert_gifts_one?: Maybe<Gifts>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "inventory_products" */
  insert_inventory_products?: Maybe<Inventory_Products_Mutation_Response>;
  /** insert a single row into the table: "inventory_products" */
  insert_inventory_products_one?: Maybe<Inventory_Products>;
  /** insert data into the table: "log_operator_events" */
  insert_log_operator_events?: Maybe<Log_Operator_Events_Mutation_Response>;
  /** insert a single row into the table: "log_operator_events" */
  insert_log_operator_events_one?: Maybe<Log_Operator_Events>;
  /** insert data into the table: "operation_rule_handle" */
  insert_operation_rule_handle?: Maybe<Operation_Rule_Handle_Mutation_Response>;
  /** insert a single row into the table: "operation_rule_handle" */
  insert_operation_rule_handle_one?: Maybe<Operation_Rule_Handle>;
  /** insert data into the table: "operation_rules" */
  insert_operation_rules?: Maybe<Operation_Rules_Mutation_Response>;
  /** insert a single row into the table: "operation_rules" */
  insert_operation_rules_one?: Maybe<Operation_Rules>;
  /** insert data into the table: "order_items" */
  insert_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** insert a single row into the table: "order_items" */
  insert_order_items_one?: Maybe<Order_Items>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "payment_method" */
  insert_payment_method?: Maybe<Payment_Method_Mutation_Response>;
  /** insert a single row into the table: "payment_method" */
  insert_payment_method_one?: Maybe<Payment_Method>;
  /** insert data into the table: "payment_status" */
  insert_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** insert a single row into the table: "payment_status" */
  insert_payment_status_one?: Maybe<Payment_Status>;
  /** insert data into the table: "popular_searches" */
  insert_popular_searches?: Maybe<Popular_Searches_Mutation_Response>;
  /** insert a single row into the table: "popular_searches" */
  insert_popular_searches_one?: Maybe<Popular_Searches>;
  /** insert data into the table: "product_properties" */
  insert_product_properties?: Maybe<Product_Properties_Mutation_Response>;
  /** insert a single row into the table: "product_properties" */
  insert_product_properties_one?: Maybe<Product_Properties>;
  /** insert data into the table: "product_subcategory" */
  insert_product_subcategory?: Maybe<Product_Subcategory_Mutation_Response>;
  /** insert a single row into the table: "product_subcategory" */
  insert_product_subcategory_one?: Maybe<Product_Subcategory>;
  /** insert data into the table: "product_suggestions" */
  insert_product_suggestions?: Maybe<Product_Suggestions_Mutation_Response>;
  /** insert a single row into the table: "product_suggestions" */
  insert_product_suggestions_one?: Maybe<Product_Suggestions>;
  /** insert data into the table: "product_tag" */
  insert_product_tag?: Maybe<Product_Tag_Mutation_Response>;
  /** insert a single row into the table: "product_tag" */
  insert_product_tag_one?: Maybe<Product_Tag>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "rider_status" */
  insert_rider_status?: Maybe<Rider_Status_Mutation_Response>;
  /** insert a single row into the table: "rider_status" */
  insert_rider_status_one?: Maybe<Rider_Status>;
  /** insert data into the table: "riders" */
  insert_riders?: Maybe<Riders_Mutation_Response>;
  /** insert a single row into the table: "riders" */
  insert_riders_one?: Maybe<Riders>;
  /** insert data into the table: "role_type" */
  insert_role_type?: Maybe<Role_Type_Mutation_Response>;
  /** insert a single row into the table: "role_type" */
  insert_role_type_one?: Maybe<Role_Type>;
  /** insert data into the table: "staff_users" */
  insert_staff_users?: Maybe<Staff_Users_Mutation_Response>;
  /** insert a single row into the table: "staff_users" */
  insert_staff_users_one?: Maybe<Staff_Users>;
  /** insert data into the table: "store_category" */
  insert_store_category?: Maybe<Store_Category_Mutation_Response>;
  /** insert a single row into the table: "store_category" */
  insert_store_category_one?: Maybe<Store_Category>;
  /** insert data into the table: "store_hours" */
  insert_store_hours?: Maybe<Store_Hours_Mutation_Response>;
  /** insert a single row into the table: "store_hours" */
  insert_store_hours_one?: Maybe<Store_Hours>;
  /** insert data into the table: "store_products" */
  insert_store_products?: Maybe<Store_Products_Mutation_Response>;
  /** insert a single row into the table: "store_products" */
  insert_store_products_one?: Maybe<Store_Products>;
  /** insert data into the table: "stores" */
  insert_stores?: Maybe<Stores_Mutation_Response>;
  /** insert a single row into the table: "stores" */
  insert_stores_one?: Maybe<Stores>;
  /** insert data into the table: "subcategories" */
  insert_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** insert a single row into the table: "subcategories" */
  insert_subcategories_one?: Maybe<Subcategories>;
  /** insert data into the table: "system_information" */
  insert_system_information?: Maybe<System_Information_Mutation_Response>;
  /** insert a single row into the table: "system_information" */
  insert_system_information_one?: Maybe<System_Information>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "transporter_criterias" */
  insert_transporter_criterias?: Maybe<Transporter_Criterias_Mutation_Response>;
  /** insert a single row into the table: "transporter_criterias" */
  insert_transporter_criterias_one?: Maybe<Transporter_Criterias>;
  /** insert data into the table: "transports" */
  insert_transports?: Maybe<Transports_Mutation_Response>;
  /** insert a single row into the table: "transports" */
  insert_transports_one?: Maybe<Transports>;
  /** insert data into the table: "user_addresses" */
  insert_user_addresses?: Maybe<User_Addresses_Mutation_Response>;
  /** insert a single row into the table: "user_addresses" */
  insert_user_addresses_one?: Maybe<User_Addresses>;
  /** insert data into the table: "user_consents" */
  insert_user_consents?: Maybe<User_Consents_Mutation_Response>;
  /** insert a single row into the table: "user_consents" */
  insert_user_consents_one?: Maybe<User_Consents>;
  /** insert data into the table: "user_coupon" */
  insert_user_coupon?: Maybe<User_Coupon_Mutation_Response>;
  /** insert a single row into the table: "user_coupon" */
  insert_user_coupon_one?: Maybe<User_Coupon>;
  /** insert data into the table: "user_favorite_product" */
  insert_user_favorite_product?: Maybe<User_Favorite_Product_Mutation_Response>;
  /** insert a single row into the table: "user_favorite_product" */
  insert_user_favorite_product_one?: Maybe<User_Favorite_Product>;
  /** insert data into the table: "user_group" */
  insert_user_group?: Maybe<User_Group_Mutation_Response>;
  /** insert a single row into the table: "user_group" */
  insert_user_group_one?: Maybe<User_Group>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "warehouse_category" */
  insert_warehouse_category?: Maybe<Warehouse_Category_Mutation_Response>;
  /** insert a single row into the table: "warehouse_category" */
  insert_warehouse_category_one?: Maybe<Warehouse_Category>;
  /** insert data into the table: "warehouse_hours" */
  insert_warehouse_hours?: Maybe<Warehouse_Hours_Mutation_Response>;
  /** insert a single row into the table: "warehouse_hours" */
  insert_warehouse_hours_one?: Maybe<Warehouse_Hours>;
  /** insert data into the table: "warehouse_operation_rule" */
  insert_warehouse_operation_rule?: Maybe<Warehouse_Operation_Rule_Mutation_Response>;
  /** insert a single row into the table: "warehouse_operation_rule" */
  insert_warehouse_operation_rule_one?: Maybe<Warehouse_Operation_Rule>;
  /** insert data into the table: "warehouse_status" */
  insert_warehouse_status?: Maybe<Warehouse_Status_Mutation_Response>;
  /** insert a single row into the table: "warehouse_status" */
  insert_warehouse_status_one?: Maybe<Warehouse_Status>;
  /** insert data into the table: "warehouse_user_address" */
  insert_warehouse_user_address?: Maybe<Warehouse_User_Address_Mutation_Response>;
  /** insert a single row into the table: "warehouse_user_address" */
  insert_warehouse_user_address_one?: Maybe<Warehouse_User_Address>;
  /** insert data into the table: "warehouses" */
  insert_warehouses?: Maybe<Warehouses_Mutation_Response>;
  /** insert a single row into the table: "warehouses" */
  insert_warehouses_one?: Maybe<Warehouses>;
  /** insert data into the table: "warehouses_text" */
  insert_warehouses_text?: Maybe<Warehouses_Text_Mutation_Response>;
  /** insert a single row into the table: "warehouses_text" */
  insert_warehouses_text_one?: Maybe<Warehouses_Text>;
  login?: Maybe<LoginOutput>;
  orderCoursierFr?: Maybe<OrderOutputCoursier>;
  orderPayment?: Maybe<OrderOutput>;
  orderStuart?: Maybe<OrderStuartOutput>;
  refreshToken?: Maybe<AdminLoginOutput>;
  refundOrder?: Maybe<RefundOrderOutput>;
  riderChallenge?: Maybe<RiderChallengeOutput>;
  riderLogin?: Maybe<RiderLoginOutput>;
  setUberPosStatus?: Maybe<StatusUpdateOutput>;
  setUberRestaurantStatus?: Maybe<StatusUpdateOutput>;
  socialLogin?: Maybe<SocialLoginOutput>;
  socialLoginVerify?: Maybe<SocialLoginVerifyOutput>;
  updateAdminPassword?: Maybe<UpdateAdminPasswordOutput>;
  updateRiderLocation?: Maybe<UpdateRiderLocationOutput>;
  /** update data of the table: "address_label" */
  update_address_label?: Maybe<Address_Label_Mutation_Response>;
  /** update single row of the table: "address_label" */
  update_address_label_by_pk?: Maybe<Address_Label>;
  /** update data of the table: "banners" */
  update_banners?: Maybe<Banners_Mutation_Response>;
  /** update single row of the table: "banners" */
  update_banners_by_pk?: Maybe<Banners>;
  /** update data of the table: "cart_items" */
  update_cart_items?: Maybe<Cart_Items_Mutation_Response>;
  /** update single row of the table: "cart_items" */
  update_cart_items_by_pk?: Maybe<Cart_Items>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "consent_type" */
  update_consent_type?: Maybe<Consent_Type_Mutation_Response>;
  /** update single row of the table: "consent_type" */
  update_consent_type_by_pk?: Maybe<Consent_Type>;
  /** update data of the table: "coupon_category" */
  update_coupon_category?: Maybe<Coupon_Category_Mutation_Response>;
  /** update single row of the table: "coupon_category" */
  update_coupon_category_by_pk?: Maybe<Coupon_Category>;
  /** update data of the table: "coupon_tag" */
  update_coupon_tag?: Maybe<Coupon_Tag_Mutation_Response>;
  /** update single row of the table: "coupon_tag" */
  update_coupon_tag_by_pk?: Maybe<Coupon_Tag>;
  /** update data of the table: "coupon_user_group" */
  update_coupon_user_group?: Maybe<Coupon_User_Group_Mutation_Response>;
  /** update single row of the table: "coupon_user_group" */
  update_coupon_user_group_by_pk?: Maybe<Coupon_User_Group>;
  /** update data of the table: "coupons" */
  update_coupons?: Maybe<Coupons_Mutation_Response>;
  /** update single row of the table: "coupons" */
  update_coupons_by_pk?: Maybe<Coupons>;
  /** update data of the table: "deliveries" */
  update_deliveries?: Maybe<Deliveries_Mutation_Response>;
  /** update single row of the table: "deliveries" */
  update_deliveries_by_pk?: Maybe<Deliveries>;
  /** update data of the table: "deliveries_group" */
  update_deliveries_group?: Maybe<Deliveries_Group_Mutation_Response>;
  /** update single row of the table: "deliveries_group" */
  update_deliveries_group_by_pk?: Maybe<Deliveries_Group>;
  /** update data of the table: "delivery_feedbacks" */
  update_delivery_feedbacks?: Maybe<Delivery_Feedbacks_Mutation_Response>;
  /** update single row of the table: "delivery_feedbacks" */
  update_delivery_feedbacks_by_pk?: Maybe<Delivery_Feedbacks>;
  /** update data of the table: "delivery_method" */
  update_delivery_method?: Maybe<Delivery_Method_Mutation_Response>;
  /** update single row of the table: "delivery_method" */
  update_delivery_method_by_pk?: Maybe<Delivery_Method>;
  /** update data of the table: "delivery_status" */
  update_delivery_status?: Maybe<Delivery_Status_Mutation_Response>;
  /** update single row of the table: "delivery_status" */
  update_delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** update data of the table: "discount_type" */
  update_discount_type?: Maybe<Discount_Type_Mutation_Response>;
  /** update single row of the table: "discount_type" */
  update_discount_type_by_pk?: Maybe<Discount_Type>;
  /** update data of the table: "discounts" */
  update_discounts?: Maybe<Discounts_Mutation_Response>;
  /** update single row of the table: "discounts" */
  update_discounts_by_pk?: Maybe<Discounts>;
  /** update data of the table: "feedback_answer" */
  update_feedback_answer?: Maybe<Feedback_Answer_Mutation_Response>;
  /** update single row of the table: "feedback_answer" */
  update_feedback_answer_by_pk?: Maybe<Feedback_Answer>;
  /** update data of the table: "gift_rules" */
  update_gift_rules?: Maybe<Gift_Rules_Mutation_Response>;
  /** update single row of the table: "gift_rules" */
  update_gift_rules_by_pk?: Maybe<Gift_Rules>;
  /** update data of the table: "gift_rules_category" */
  update_gift_rules_category?: Maybe<Gift_Rules_Category_Mutation_Response>;
  /** update single row of the table: "gift_rules_category" */
  update_gift_rules_category_by_pk?: Maybe<Gift_Rules_Category>;
  /** update data of the table: "gift_rules_product" */
  update_gift_rules_product?: Maybe<Gift_Rules_Product_Mutation_Response>;
  /** update single row of the table: "gift_rules_product" */
  update_gift_rules_product_by_pk?: Maybe<Gift_Rules_Product>;
  /** update data of the table: "gift_rules_warehouse" */
  update_gift_rules_warehouse?: Maybe<Gift_Rules_Warehouse_Mutation_Response>;
  /** update single row of the table: "gift_rules_warehouse" */
  update_gift_rules_warehouse_by_pk?: Maybe<Gift_Rules_Warehouse>;
  /** update data of the table: "gifts" */
  update_gifts?: Maybe<Gifts_Mutation_Response>;
  /** update single row of the table: "gifts" */
  update_gifts_by_pk?: Maybe<Gifts>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update data of the table: "inventory_products" */
  update_inventory_products?: Maybe<Inventory_Products_Mutation_Response>;
  /** update single row of the table: "inventory_products" */
  update_inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** update data of the table: "log_operator_events" */
  update_log_operator_events?: Maybe<Log_Operator_Events_Mutation_Response>;
  /** update single row of the table: "log_operator_events" */
  update_log_operator_events_by_pk?: Maybe<Log_Operator_Events>;
  /** update data of the table: "operation_rule_handle" */
  update_operation_rule_handle?: Maybe<Operation_Rule_Handle_Mutation_Response>;
  /** update single row of the table: "operation_rule_handle" */
  update_operation_rule_handle_by_pk?: Maybe<Operation_Rule_Handle>;
  /** update data of the table: "operation_rules" */
  update_operation_rules?: Maybe<Operation_Rules_Mutation_Response>;
  /** update single row of the table: "operation_rules" */
  update_operation_rules_by_pk?: Maybe<Operation_Rules>;
  /** update data of the table: "order_items" */
  update_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** update single row of the table: "order_items" */
  update_order_items_by_pk?: Maybe<Order_Items>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "payment_method" */
  update_payment_method?: Maybe<Payment_Method_Mutation_Response>;
  /** update single row of the table: "payment_method" */
  update_payment_method_by_pk?: Maybe<Payment_Method>;
  /** update data of the table: "payment_status" */
  update_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** update single row of the table: "payment_status" */
  update_payment_status_by_pk?: Maybe<Payment_Status>;
  /** update data of the table: "popular_searches" */
  update_popular_searches?: Maybe<Popular_Searches_Mutation_Response>;
  /** update single row of the table: "popular_searches" */
  update_popular_searches_by_pk?: Maybe<Popular_Searches>;
  /** update data of the table: "product_properties" */
  update_product_properties?: Maybe<Product_Properties_Mutation_Response>;
  /** update single row of the table: "product_properties" */
  update_product_properties_by_pk?: Maybe<Product_Properties>;
  /** update data of the table: "product_subcategory" */
  update_product_subcategory?: Maybe<Product_Subcategory_Mutation_Response>;
  /** update single row of the table: "product_subcategory" */
  update_product_subcategory_by_pk?: Maybe<Product_Subcategory>;
  /** update data of the table: "product_suggestions" */
  update_product_suggestions?: Maybe<Product_Suggestions_Mutation_Response>;
  /** update single row of the table: "product_suggestions" */
  update_product_suggestions_by_pk?: Maybe<Product_Suggestions>;
  /** update data of the table: "product_tag" */
  update_product_tag?: Maybe<Product_Tag_Mutation_Response>;
  /** update single row of the table: "product_tag" */
  update_product_tag_by_pk?: Maybe<Product_Tag>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "rider_status" */
  update_rider_status?: Maybe<Rider_Status_Mutation_Response>;
  /** update single row of the table: "rider_status" */
  update_rider_status_by_pk?: Maybe<Rider_Status>;
  /** update data of the table: "riders" */
  update_riders?: Maybe<Riders_Mutation_Response>;
  /** update single row of the table: "riders" */
  update_riders_by_pk?: Maybe<Riders>;
  /** update data of the table: "role_type" */
  update_role_type?: Maybe<Role_Type_Mutation_Response>;
  /** update single row of the table: "role_type" */
  update_role_type_by_pk?: Maybe<Role_Type>;
  /** update data of the table: "staff_users" */
  update_staff_users?: Maybe<Staff_Users_Mutation_Response>;
  /** update single row of the table: "staff_users" */
  update_staff_users_by_pk?: Maybe<Staff_Users>;
  /** update data of the table: "store_category" */
  update_store_category?: Maybe<Store_Category_Mutation_Response>;
  /** update single row of the table: "store_category" */
  update_store_category_by_pk?: Maybe<Store_Category>;
  /** update data of the table: "store_hours" */
  update_store_hours?: Maybe<Store_Hours_Mutation_Response>;
  /** update single row of the table: "store_hours" */
  update_store_hours_by_pk?: Maybe<Store_Hours>;
  /** update data of the table: "store_products" */
  update_store_products?: Maybe<Store_Products_Mutation_Response>;
  /** update single row of the table: "store_products" */
  update_store_products_by_pk?: Maybe<Store_Products>;
  /** update data of the table: "stores" */
  update_stores?: Maybe<Stores_Mutation_Response>;
  /** update single row of the table: "stores" */
  update_stores_by_pk?: Maybe<Stores>;
  /** update data of the table: "subcategories" */
  update_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** update single row of the table: "subcategories" */
  update_subcategories_by_pk?: Maybe<Subcategories>;
  /** update data of the table: "system_information" */
  update_system_information?: Maybe<System_Information_Mutation_Response>;
  /** update single row of the table: "system_information" */
  update_system_information_by_pk?: Maybe<System_Information>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update data of the table: "transporter_criterias" */
  update_transporter_criterias?: Maybe<Transporter_Criterias_Mutation_Response>;
  /** update single row of the table: "transporter_criterias" */
  update_transporter_criterias_by_pk?: Maybe<Transporter_Criterias>;
  /** update data of the table: "transports" */
  update_transports?: Maybe<Transports_Mutation_Response>;
  /** update single row of the table: "transports" */
  update_transports_by_pk?: Maybe<Transports>;
  /** update data of the table: "user_addresses" */
  update_user_addresses?: Maybe<User_Addresses_Mutation_Response>;
  /** update single row of the table: "user_addresses" */
  update_user_addresses_by_pk?: Maybe<User_Addresses>;
  /** update data of the table: "user_consents" */
  update_user_consents?: Maybe<User_Consents_Mutation_Response>;
  /** update single row of the table: "user_consents" */
  update_user_consents_by_pk?: Maybe<User_Consents>;
  /** update data of the table: "user_coupon" */
  update_user_coupon?: Maybe<User_Coupon_Mutation_Response>;
  /** update single row of the table: "user_coupon" */
  update_user_coupon_by_pk?: Maybe<User_Coupon>;
  /** update data of the table: "user_favorite_product" */
  update_user_favorite_product?: Maybe<User_Favorite_Product_Mutation_Response>;
  /** update single row of the table: "user_favorite_product" */
  update_user_favorite_product_by_pk?: Maybe<User_Favorite_Product>;
  /** update data of the table: "user_group" */
  update_user_group?: Maybe<User_Group_Mutation_Response>;
  /** update single row of the table: "user_group" */
  update_user_group_by_pk?: Maybe<User_Group>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "warehouse_category" */
  update_warehouse_category?: Maybe<Warehouse_Category_Mutation_Response>;
  /** update single row of the table: "warehouse_category" */
  update_warehouse_category_by_pk?: Maybe<Warehouse_Category>;
  /** update data of the table: "warehouse_hours" */
  update_warehouse_hours?: Maybe<Warehouse_Hours_Mutation_Response>;
  /** update single row of the table: "warehouse_hours" */
  update_warehouse_hours_by_pk?: Maybe<Warehouse_Hours>;
  /** update data of the table: "warehouse_operation_rule" */
  update_warehouse_operation_rule?: Maybe<Warehouse_Operation_Rule_Mutation_Response>;
  /** update single row of the table: "warehouse_operation_rule" */
  update_warehouse_operation_rule_by_pk?: Maybe<Warehouse_Operation_Rule>;
  /** update data of the table: "warehouse_status" */
  update_warehouse_status?: Maybe<Warehouse_Status_Mutation_Response>;
  /** update single row of the table: "warehouse_status" */
  update_warehouse_status_by_pk?: Maybe<Warehouse_Status>;
  /** update data of the table: "warehouse_user_address" */
  update_warehouse_user_address?: Maybe<Warehouse_User_Address_Mutation_Response>;
  /** update single row of the table: "warehouse_user_address" */
  update_warehouse_user_address_by_pk?: Maybe<Warehouse_User_Address>;
  /** update data of the table: "warehouses" */
  update_warehouses?: Maybe<Warehouses_Mutation_Response>;
  /** update single row of the table: "warehouses" */
  update_warehouses_by_pk?: Maybe<Warehouses>;
  /** update data of the table: "warehouses_text" */
  update_warehouses_text?: Maybe<Warehouses_Text_Mutation_Response>;
  validateCoupon?: Maybe<CouponOutput>;
};


/** mutation root */
export type Mutation_RootAdminLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCancelUberOrderArgs = {
  orderId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChallengeArgs = {
  phone_number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateCajooDeliveryArgs = {
  orderId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootCreateCartItemArgs = {
  product_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootCreateCoursierFrDeliveryArgs = {
  orderId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootCreateInvoiceArgs = {
  orderId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateMtoolsDeliveryArgs = {
  orderId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootCreateStaffUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateStuartDeliveryArgs = {
  orderId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootCreateUberDirectDeliveryArgs = {
  orderId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserPersonalDataArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Address_LabelArgs = {
  where: Address_Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_Label_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BannersArgs = {
  where: Banners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Banners_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cart_ItemsArgs = {
  where: Cart_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cart_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Consent_TypeArgs = {
  where: Consent_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Consent_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Coupon_CategoryArgs = {
  where: Coupon_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coupon_Category_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Coupon_TagArgs = {
  where: Coupon_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coupon_Tag_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Coupon_User_GroupArgs = {
  where: Coupon_User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coupon_User_Group_By_PkArgs = {
  coupon_code: Scalars['String'];
  group_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CouponsArgs = {
  where: Coupons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coupons_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DeliveriesArgs = {
  where: Deliveries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deliveries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Deliveries_GroupArgs = {
  where: Deliveries_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deliveries_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_FeedbacksArgs = {
  where: Delivery_Feedbacks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Feedbacks_By_PkArgs = {
  order_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_MethodArgs = {
  where: Delivery_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Method_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_StatusArgs = {
  where: Delivery_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Discount_TypeArgs = {
  where: Discount_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Discount_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DiscountsArgs = {
  where: Discounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Discounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Feedback_AnswerArgs = {
  where: Feedback_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feedback_Answer_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Gift_RulesArgs = {
  where: Gift_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_CategoryArgs = {
  where: Gift_Rules_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  gift_rules_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_ProductArgs = {
  where: Gift_Rules_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_Product_By_PkArgs = {
  gift_rules_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_WarehouseArgs = {
  where: Gift_Rules_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gift_Rules_Warehouse_By_PkArgs = {
  gift_rules_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GiftsArgs = {
  where: Gifts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gifts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Inventory_ProductsArgs = {
  where: Inventory_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_Products_By_PkArgs = {
  product_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Log_Operator_EventsArgs = {
  where: Log_Operator_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Log_Operator_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Operation_Rule_HandleArgs = {
  where: Operation_Rule_Handle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operation_Rule_Handle_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Operation_RulesArgs = {
  where: Operation_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operation_Rules_By_PkArgs = {
  handle: Operation_Rule_Handle_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Order_ItemsArgs = {
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_MethodArgs = {
  where: Payment_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Method_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_StatusArgs = {
  where: Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Popular_SearchesArgs = {
  where: Popular_Searches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Popular_Searches_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_PropertiesArgs = {
  where: Product_Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Properties_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SubcategoryArgs = {
  where: Product_Subcategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Subcategory_By_PkArgs = {
  product_id: Scalars['uuid'];
  subcategory_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SuggestionsArgs = {
  where: Product_Suggestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Suggestions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_TagArgs = {
  where: Product_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Tag_By_PkArgs = {
  product_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rider_StatusArgs = {
  where: Rider_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rider_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RidersArgs = {
  where: Riders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Riders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Role_TypeArgs = {
  where: Role_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Staff_UsersArgs = {
  where: Staff_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staff_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Store_CategoryArgs = {
  where: Store_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Store_HoursArgs = {
  where: Store_Hours_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_Hours_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Store_ProductsArgs = {
  where: Store_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_Products_By_PkArgs = {
  inventory_product_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StoresArgs = {
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stores_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SubcategoriesArgs = {
  where: Subcategories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subcategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_System_InformationArgs = {
  where: System_Information_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_System_Information_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Transporter_CriteriasArgs = {
  where: Transporter_Criterias_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transporter_Criterias_By_PkArgs = {
  transport_mode: Scalars['String'];
  transporter_name: Delivery_Method_Enum;
};


/** mutation root */
export type Mutation_RootDelete_TransportsArgs = {
  where: Transports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transports_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_AddressesArgs = {
  where: User_Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_ConsentsArgs = {
  where: User_Consents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Consents_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_CouponArgs = {
  where: User_Coupon_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Coupon_By_PkArgs = {
  coupon_code: Scalars['String'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Favorite_ProductArgs = {
  where: User_Favorite_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Favorite_Product_By_PkArgs = {
  product_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_GroupArgs = {
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Group_By_PkArgs = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  role: Role_Type_Enum;
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_CategoryArgs = {
  where: Warehouse_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_HoursArgs = {
  where: Warehouse_Hours_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_Hours_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_Operation_RuleArgs = {
  where: Warehouse_Operation_Rule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_Operation_Rule_By_PkArgs = {
  operation_rule_handle: Scalars['String'];
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_StatusArgs = {
  where: Warehouse_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_User_AddressArgs = {
  where: Warehouse_User_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Warehouse_User_Address_By_PkArgs = {
  user_address_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WarehousesArgs = {
  where: Warehouses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Warehouses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Warehouses_TextArgs = {
  where: Warehouses_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDetachPaymentMethodArgs = {
  payment_method_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootGetPictureUploadKeyArgs = {
  handle: Scalars['String'];
  path: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Address_LabelArgs = {
  objects: Array<Address_Label_Insert_Input>;
  on_conflict?: Maybe<Address_Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_Label_OneArgs = {
  object: Address_Label_Insert_Input;
  on_conflict?: Maybe<Address_Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BannersArgs = {
  objects: Array<Banners_Insert_Input>;
  on_conflict?: Maybe<Banners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banners_OneArgs = {
  object: Banners_Insert_Input;
  on_conflict?: Maybe<Banners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_ItemsArgs = {
  objects: Array<Cart_Items_Insert_Input>;
  on_conflict?: Maybe<Cart_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_Items_OneArgs = {
  object: Cart_Items_Insert_Input;
  on_conflict?: Maybe<Cart_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Consent_TypeArgs = {
  objects: Array<Consent_Type_Insert_Input>;
  on_conflict?: Maybe<Consent_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Consent_Type_OneArgs = {
  object: Consent_Type_Insert_Input;
  on_conflict?: Maybe<Consent_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupon_CategoryArgs = {
  objects: Array<Coupon_Category_Insert_Input>;
  on_conflict?: Maybe<Coupon_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupon_Category_OneArgs = {
  object: Coupon_Category_Insert_Input;
  on_conflict?: Maybe<Coupon_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupon_TagArgs = {
  objects: Array<Coupon_Tag_Insert_Input>;
  on_conflict?: Maybe<Coupon_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupon_Tag_OneArgs = {
  object: Coupon_Tag_Insert_Input;
  on_conflict?: Maybe<Coupon_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupon_User_GroupArgs = {
  objects: Array<Coupon_User_Group_Insert_Input>;
  on_conflict?: Maybe<Coupon_User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupon_User_Group_OneArgs = {
  object: Coupon_User_Group_Insert_Input;
  on_conflict?: Maybe<Coupon_User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CouponsArgs = {
  objects: Array<Coupons_Insert_Input>;
  on_conflict?: Maybe<Coupons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupons_OneArgs = {
  object: Coupons_Insert_Input;
  on_conflict?: Maybe<Coupons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeliveriesArgs = {
  objects: Array<Deliveries_Insert_Input>;
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deliveries_GroupArgs = {
  objects: Array<Deliveries_Group_Insert_Input>;
  on_conflict?: Maybe<Deliveries_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deliveries_Group_OneArgs = {
  object: Deliveries_Group_Insert_Input;
  on_conflict?: Maybe<Deliveries_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deliveries_OneArgs = {
  object: Deliveries_Insert_Input;
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_FeedbacksArgs = {
  objects: Array<Delivery_Feedbacks_Insert_Input>;
  on_conflict?: Maybe<Delivery_Feedbacks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Feedbacks_OneArgs = {
  object: Delivery_Feedbacks_Insert_Input;
  on_conflict?: Maybe<Delivery_Feedbacks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_MethodArgs = {
  objects: Array<Delivery_Method_Insert_Input>;
  on_conflict?: Maybe<Delivery_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Method_OneArgs = {
  object: Delivery_Method_Insert_Input;
  on_conflict?: Maybe<Delivery_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_StatusArgs = {
  objects: Array<Delivery_Status_Insert_Input>;
  on_conflict?: Maybe<Delivery_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Status_OneArgs = {
  object: Delivery_Status_Insert_Input;
  on_conflict?: Maybe<Delivery_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discount_TypeArgs = {
  objects: Array<Discount_Type_Insert_Input>;
  on_conflict?: Maybe<Discount_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discount_Type_OneArgs = {
  object: Discount_Type_Insert_Input;
  on_conflict?: Maybe<Discount_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DiscountsArgs = {
  objects: Array<Discounts_Insert_Input>;
  on_conflict?: Maybe<Discounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discounts_OneArgs = {
  object: Discounts_Insert_Input;
  on_conflict?: Maybe<Discounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_AnswerArgs = {
  objects: Array<Feedback_Answer_Insert_Input>;
  on_conflict?: Maybe<Feedback_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_Answer_OneArgs = {
  object: Feedback_Answer_Insert_Input;
  on_conflict?: Maybe<Feedback_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_RulesArgs = {
  objects: Array<Gift_Rules_Insert_Input>;
  on_conflict?: Maybe<Gift_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_CategoryArgs = {
  objects: Array<Gift_Rules_Category_Insert_Input>;
  on_conflict?: Maybe<Gift_Rules_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_Category_OneArgs = {
  object: Gift_Rules_Category_Insert_Input;
  on_conflict?: Maybe<Gift_Rules_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_OneArgs = {
  object: Gift_Rules_Insert_Input;
  on_conflict?: Maybe<Gift_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_ProductArgs = {
  objects: Array<Gift_Rules_Product_Insert_Input>;
  on_conflict?: Maybe<Gift_Rules_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_Product_OneArgs = {
  object: Gift_Rules_Product_Insert_Input;
  on_conflict?: Maybe<Gift_Rules_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_WarehouseArgs = {
  objects: Array<Gift_Rules_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Gift_Rules_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Rules_Warehouse_OneArgs = {
  object: Gift_Rules_Warehouse_Insert_Input;
  on_conflict?: Maybe<Gift_Rules_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GiftsArgs = {
  objects: Array<Gifts_Insert_Input>;
  on_conflict?: Maybe<Gifts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gifts_OneArgs = {
  object: Gifts_Insert_Input;
  on_conflict?: Maybe<Gifts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_ProductsArgs = {
  objects: Array<Inventory_Products_Insert_Input>;
  on_conflict?: Maybe<Inventory_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_Products_OneArgs = {
  object: Inventory_Products_Insert_Input;
  on_conflict?: Maybe<Inventory_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_Operator_EventsArgs = {
  objects: Array<Log_Operator_Events_Insert_Input>;
  on_conflict?: Maybe<Log_Operator_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_Operator_Events_OneArgs = {
  object: Log_Operator_Events_Insert_Input;
  on_conflict?: Maybe<Log_Operator_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_Rule_HandleArgs = {
  objects: Array<Operation_Rule_Handle_Insert_Input>;
  on_conflict?: Maybe<Operation_Rule_Handle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_Rule_Handle_OneArgs = {
  object: Operation_Rule_Handle_Insert_Input;
  on_conflict?: Maybe<Operation_Rule_Handle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_RulesArgs = {
  objects: Array<Operation_Rules_Insert_Input>;
  on_conflict?: Maybe<Operation_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_Rules_OneArgs = {
  object: Operation_Rules_Insert_Input;
  on_conflict?: Maybe<Operation_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ItemsArgs = {
  objects: Array<Order_Items_Insert_Input>;
  on_conflict?: Maybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Items_OneArgs = {
  object: Order_Items_Insert_Input;
  on_conflict?: Maybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_MethodArgs = {
  objects: Array<Payment_Method_Insert_Input>;
  on_conflict?: Maybe<Payment_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Method_OneArgs = {
  object: Payment_Method_Insert_Input;
  on_conflict?: Maybe<Payment_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_StatusArgs = {
  objects: Array<Payment_Status_Insert_Input>;
  on_conflict?: Maybe<Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Status_OneArgs = {
  object: Payment_Status_Insert_Input;
  on_conflict?: Maybe<Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Popular_SearchesArgs = {
  objects: Array<Popular_Searches_Insert_Input>;
  on_conflict?: Maybe<Popular_Searches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Popular_Searches_OneArgs = {
  object: Popular_Searches_Insert_Input;
  on_conflict?: Maybe<Popular_Searches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_PropertiesArgs = {
  objects: Array<Product_Properties_Insert_Input>;
  on_conflict?: Maybe<Product_Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Properties_OneArgs = {
  object: Product_Properties_Insert_Input;
  on_conflict?: Maybe<Product_Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SubcategoryArgs = {
  objects: Array<Product_Subcategory_Insert_Input>;
  on_conflict?: Maybe<Product_Subcategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Subcategory_OneArgs = {
  object: Product_Subcategory_Insert_Input;
  on_conflict?: Maybe<Product_Subcategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SuggestionsArgs = {
  objects: Array<Product_Suggestions_Insert_Input>;
  on_conflict?: Maybe<Product_Suggestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Suggestions_OneArgs = {
  object: Product_Suggestions_Insert_Input;
  on_conflict?: Maybe<Product_Suggestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_TagArgs = {
  objects: Array<Product_Tag_Insert_Input>;
  on_conflict?: Maybe<Product_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Tag_OneArgs = {
  object: Product_Tag_Insert_Input;
  on_conflict?: Maybe<Product_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rider_StatusArgs = {
  objects: Array<Rider_Status_Insert_Input>;
  on_conflict?: Maybe<Rider_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rider_Status_OneArgs = {
  object: Rider_Status_Insert_Input;
  on_conflict?: Maybe<Rider_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RidersArgs = {
  objects: Array<Riders_Insert_Input>;
  on_conflict?: Maybe<Riders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Riders_OneArgs = {
  object: Riders_Insert_Input;
  on_conflict?: Maybe<Riders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_TypeArgs = {
  objects: Array<Role_Type_Insert_Input>;
  on_conflict?: Maybe<Role_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Type_OneArgs = {
  object: Role_Type_Insert_Input;
  on_conflict?: Maybe<Role_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_UsersArgs = {
  objects: Array<Staff_Users_Insert_Input>;
  on_conflict?: Maybe<Staff_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_Users_OneArgs = {
  object: Staff_Users_Insert_Input;
  on_conflict?: Maybe<Staff_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_CategoryArgs = {
  objects: Array<Store_Category_Insert_Input>;
  on_conflict?: Maybe<Store_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_Category_OneArgs = {
  object: Store_Category_Insert_Input;
  on_conflict?: Maybe<Store_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_HoursArgs = {
  objects: Array<Store_Hours_Insert_Input>;
  on_conflict?: Maybe<Store_Hours_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_Hours_OneArgs = {
  object: Store_Hours_Insert_Input;
  on_conflict?: Maybe<Store_Hours_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_ProductsArgs = {
  objects: Array<Store_Products_Insert_Input>;
  on_conflict?: Maybe<Store_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_Products_OneArgs = {
  object: Store_Products_Insert_Input;
  on_conflict?: Maybe<Store_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoresArgs = {
  objects: Array<Stores_Insert_Input>;
  on_conflict?: Maybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stores_OneArgs = {
  object: Stores_Insert_Input;
  on_conflict?: Maybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubcategoriesArgs = {
  objects: Array<Subcategories_Insert_Input>;
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subcategories_OneArgs = {
  object: Subcategories_Insert_Input;
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_System_InformationArgs = {
  objects: Array<System_Information_Insert_Input>;
  on_conflict?: Maybe<System_Information_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_System_Information_OneArgs = {
  object: System_Information_Insert_Input;
  on_conflict?: Maybe<System_Information_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transporter_CriteriasArgs = {
  objects: Array<Transporter_Criterias_Insert_Input>;
  on_conflict?: Maybe<Transporter_Criterias_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transporter_Criterias_OneArgs = {
  object: Transporter_Criterias_Insert_Input;
  on_conflict?: Maybe<Transporter_Criterias_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransportsArgs = {
  objects: Array<Transports_Insert_Input>;
  on_conflict?: Maybe<Transports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transports_OneArgs = {
  object: Transports_Insert_Input;
  on_conflict?: Maybe<Transports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_AddressesArgs = {
  objects: Array<User_Addresses_Insert_Input>;
  on_conflict?: Maybe<User_Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Addresses_OneArgs = {
  object: User_Addresses_Insert_Input;
  on_conflict?: Maybe<User_Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ConsentsArgs = {
  objects: Array<User_Consents_Insert_Input>;
  on_conflict?: Maybe<User_Consents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Consents_OneArgs = {
  object: User_Consents_Insert_Input;
  on_conflict?: Maybe<User_Consents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_CouponArgs = {
  objects: Array<User_Coupon_Insert_Input>;
  on_conflict?: Maybe<User_Coupon_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Coupon_OneArgs = {
  object: User_Coupon_Insert_Input;
  on_conflict?: Maybe<User_Coupon_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Favorite_ProductArgs = {
  objects: Array<User_Favorite_Product_Insert_Input>;
  on_conflict?: Maybe<User_Favorite_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Favorite_Product_OneArgs = {
  object: User_Favorite_Product_Insert_Input;
  on_conflict?: Maybe<User_Favorite_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GroupArgs = {
  objects: Array<User_Group_Insert_Input>;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Group_OneArgs = {
  object: User_Group_Insert_Input;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_CategoryArgs = {
  objects: Array<Warehouse_Category_Insert_Input>;
  on_conflict?: Maybe<Warehouse_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_Category_OneArgs = {
  object: Warehouse_Category_Insert_Input;
  on_conflict?: Maybe<Warehouse_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_HoursArgs = {
  objects: Array<Warehouse_Hours_Insert_Input>;
  on_conflict?: Maybe<Warehouse_Hours_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_Hours_OneArgs = {
  object: Warehouse_Hours_Insert_Input;
  on_conflict?: Maybe<Warehouse_Hours_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_Operation_RuleArgs = {
  objects: Array<Warehouse_Operation_Rule_Insert_Input>;
  on_conflict?: Maybe<Warehouse_Operation_Rule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_Operation_Rule_OneArgs = {
  object: Warehouse_Operation_Rule_Insert_Input;
  on_conflict?: Maybe<Warehouse_Operation_Rule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_StatusArgs = {
  objects: Array<Warehouse_Status_Insert_Input>;
  on_conflict?: Maybe<Warehouse_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_Status_OneArgs = {
  object: Warehouse_Status_Insert_Input;
  on_conflict?: Maybe<Warehouse_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_User_AddressArgs = {
  objects: Array<Warehouse_User_Address_Insert_Input>;
  on_conflict?: Maybe<Warehouse_User_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouse_User_Address_OneArgs = {
  object: Warehouse_User_Address_Insert_Input;
  on_conflict?: Maybe<Warehouse_User_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WarehousesArgs = {
  objects: Array<Warehouses_Insert_Input>;
  on_conflict?: Maybe<Warehouses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouses_OneArgs = {
  object: Warehouses_Insert_Input;
  on_conflict?: Maybe<Warehouses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouses_TextArgs = {
  objects: Array<Warehouses_Text_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Warehouses_Text_OneArgs = {
  object: Warehouses_Text_Insert_Input;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  code: Scalars['String'];
  phone_number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootOrderCoursierFrArgs = {
  order: OrderBodyCoursier;
};


/** mutation root */
export type Mutation_RootOrderPaymentArgs = {
  address_details?: Maybe<AddressInput>;
  address_id?: Maybe<Scalars['String']>;
  coupon_code?: Maybe<Scalars['String']>;
  device_id?: Maybe<Scalars['String']>;
  tips_fee?: Maybe<Scalars['Int']>;
  warehouse_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootOrderStuartArgs = {
  order: OrderStuartBody;
};


/** mutation root */
export type Mutation_RootRefreshTokenArgs = {
  refresh_token?: Maybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootRefundOrderArgs = {
  amount?: Maybe<Scalars['Float']>;
  orderId: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  refundedProductIds?: Maybe<Array<Maybe<Scalars['uuid']>>>;
};


/** mutation root */
export type Mutation_RootRiderChallengeArgs = {
  phone_number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRiderLoginArgs = {
  password: Scalars['String'];
  phone_number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSetUberPosStatusArgs = {
  status: Scalars['Boolean'];
  uberEatsId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootSetUberRestaurantStatusArgs = {
  status: Scalars['String'];
  uberEatsId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootSocialLoginArgs = {
  access_token: Scalars['String'];
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSocialLoginVerifyArgs = {
  access_token: Scalars['String'];
  code: Scalars['String'];
  phone_number: Scalars['String'];
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateAdminPasswordArgs = {
  id: Scalars['uuid'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateRiderLocationArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** mutation root */
export type Mutation_RootUpdate_Address_LabelArgs = {
  _set?: Maybe<Address_Label_Set_Input>;
  where: Address_Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_Label_By_PkArgs = {
  _set?: Maybe<Address_Label_Set_Input>;
  pk_columns: Address_Label_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BannersArgs = {
  _inc?: Maybe<Banners_Inc_Input>;
  _set?: Maybe<Banners_Set_Input>;
  where: Banners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Banners_By_PkArgs = {
  _inc?: Maybe<Banners_Inc_Input>;
  _set?: Maybe<Banners_Set_Input>;
  pk_columns: Banners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_ItemsArgs = {
  _set?: Maybe<Cart_Items_Set_Input>;
  where: Cart_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_Items_By_PkArgs = {
  _set?: Maybe<Cart_Items_Set_Input>;
  pk_columns: Cart_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Consent_TypeArgs = {
  _set?: Maybe<Consent_Type_Set_Input>;
  where: Consent_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Consent_Type_By_PkArgs = {
  _set?: Maybe<Consent_Type_Set_Input>;
  pk_columns: Consent_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Coupon_CategoryArgs = {
  _set?: Maybe<Coupon_Category_Set_Input>;
  where: Coupon_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coupon_Category_By_PkArgs = {
  _set?: Maybe<Coupon_Category_Set_Input>;
  pk_columns: Coupon_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Coupon_TagArgs = {
  _set?: Maybe<Coupon_Tag_Set_Input>;
  where: Coupon_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coupon_Tag_By_PkArgs = {
  _set?: Maybe<Coupon_Tag_Set_Input>;
  pk_columns: Coupon_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Coupon_User_GroupArgs = {
  _set?: Maybe<Coupon_User_Group_Set_Input>;
  where: Coupon_User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coupon_User_Group_By_PkArgs = {
  _set?: Maybe<Coupon_User_Group_Set_Input>;
  pk_columns: Coupon_User_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CouponsArgs = {
  _inc?: Maybe<Coupons_Inc_Input>;
  _set?: Maybe<Coupons_Set_Input>;
  where: Coupons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coupons_By_PkArgs = {
  _inc?: Maybe<Coupons_Inc_Input>;
  _set?: Maybe<Coupons_Set_Input>;
  pk_columns: Coupons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DeliveriesArgs = {
  _inc?: Maybe<Deliveries_Inc_Input>;
  _set?: Maybe<Deliveries_Set_Input>;
  where: Deliveries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deliveries_By_PkArgs = {
  _inc?: Maybe<Deliveries_Inc_Input>;
  _set?: Maybe<Deliveries_Set_Input>;
  pk_columns: Deliveries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Deliveries_GroupArgs = {
  _set?: Maybe<Deliveries_Group_Set_Input>;
  where: Deliveries_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deliveries_Group_By_PkArgs = {
  _set?: Maybe<Deliveries_Group_Set_Input>;
  pk_columns: Deliveries_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_FeedbacksArgs = {
  _set?: Maybe<Delivery_Feedbacks_Set_Input>;
  where: Delivery_Feedbacks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Feedbacks_By_PkArgs = {
  _set?: Maybe<Delivery_Feedbacks_Set_Input>;
  pk_columns: Delivery_Feedbacks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_MethodArgs = {
  _set?: Maybe<Delivery_Method_Set_Input>;
  where: Delivery_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Method_By_PkArgs = {
  _set?: Maybe<Delivery_Method_Set_Input>;
  pk_columns: Delivery_Method_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_StatusArgs = {
  _set?: Maybe<Delivery_Status_Set_Input>;
  where: Delivery_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Status_By_PkArgs = {
  _set?: Maybe<Delivery_Status_Set_Input>;
  pk_columns: Delivery_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Discount_TypeArgs = {
  _set?: Maybe<Discount_Type_Set_Input>;
  where: Discount_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Discount_Type_By_PkArgs = {
  _set?: Maybe<Discount_Type_Set_Input>;
  pk_columns: Discount_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DiscountsArgs = {
  _inc?: Maybe<Discounts_Inc_Input>;
  _set?: Maybe<Discounts_Set_Input>;
  where: Discounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Discounts_By_PkArgs = {
  _inc?: Maybe<Discounts_Inc_Input>;
  _set?: Maybe<Discounts_Set_Input>;
  pk_columns: Discounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_AnswerArgs = {
  _set?: Maybe<Feedback_Answer_Set_Input>;
  where: Feedback_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_Answer_By_PkArgs = {
  _set?: Maybe<Feedback_Answer_Set_Input>;
  pk_columns: Feedback_Answer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_RulesArgs = {
  _inc?: Maybe<Gift_Rules_Inc_Input>;
  _set?: Maybe<Gift_Rules_Set_Input>;
  where: Gift_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_By_PkArgs = {
  _inc?: Maybe<Gift_Rules_Inc_Input>;
  _set?: Maybe<Gift_Rules_Set_Input>;
  pk_columns: Gift_Rules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_CategoryArgs = {
  _set?: Maybe<Gift_Rules_Category_Set_Input>;
  where: Gift_Rules_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_Category_By_PkArgs = {
  _set?: Maybe<Gift_Rules_Category_Set_Input>;
  pk_columns: Gift_Rules_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_ProductArgs = {
  _set?: Maybe<Gift_Rules_Product_Set_Input>;
  where: Gift_Rules_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_Product_By_PkArgs = {
  _set?: Maybe<Gift_Rules_Product_Set_Input>;
  pk_columns: Gift_Rules_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_WarehouseArgs = {
  _set?: Maybe<Gift_Rules_Warehouse_Set_Input>;
  where: Gift_Rules_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Rules_Warehouse_By_PkArgs = {
  _set?: Maybe<Gift_Rules_Warehouse_Set_Input>;
  pk_columns: Gift_Rules_Warehouse_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GiftsArgs = {
  _inc?: Maybe<Gifts_Inc_Input>;
  _set?: Maybe<Gifts_Set_Input>;
  where: Gifts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gifts_By_PkArgs = {
  _inc?: Maybe<Gifts_Inc_Input>;
  _set?: Maybe<Gifts_Set_Input>;
  pk_columns: Gifts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: Maybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: Maybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_ProductsArgs = {
  _inc?: Maybe<Inventory_Products_Inc_Input>;
  _set?: Maybe<Inventory_Products_Set_Input>;
  where: Inventory_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_Products_By_PkArgs = {
  _inc?: Maybe<Inventory_Products_Inc_Input>;
  _set?: Maybe<Inventory_Products_Set_Input>;
  pk_columns: Inventory_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Log_Operator_EventsArgs = {
  _append?: Maybe<Log_Operator_Events_Append_Input>;
  _delete_at_path?: Maybe<Log_Operator_Events_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Log_Operator_Events_Delete_Elem_Input>;
  _delete_key?: Maybe<Log_Operator_Events_Delete_Key_Input>;
  _prepend?: Maybe<Log_Operator_Events_Prepend_Input>;
  _set?: Maybe<Log_Operator_Events_Set_Input>;
  where: Log_Operator_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Log_Operator_Events_By_PkArgs = {
  _append?: Maybe<Log_Operator_Events_Append_Input>;
  _delete_at_path?: Maybe<Log_Operator_Events_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Log_Operator_Events_Delete_Elem_Input>;
  _delete_key?: Maybe<Log_Operator_Events_Delete_Key_Input>;
  _prepend?: Maybe<Log_Operator_Events_Prepend_Input>;
  _set?: Maybe<Log_Operator_Events_Set_Input>;
  pk_columns: Log_Operator_Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_Rule_HandleArgs = {
  _set?: Maybe<Operation_Rule_Handle_Set_Input>;
  where: Operation_Rule_Handle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_Rule_Handle_By_PkArgs = {
  _set?: Maybe<Operation_Rule_Handle_Set_Input>;
  pk_columns: Operation_Rule_Handle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_RulesArgs = {
  _set?: Maybe<Operation_Rules_Set_Input>;
  where: Operation_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_Rules_By_PkArgs = {
  _set?: Maybe<Operation_Rules_Set_Input>;
  pk_columns: Operation_Rules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ItemsArgs = {
  _inc?: Maybe<Order_Items_Inc_Input>;
  _set?: Maybe<Order_Items_Set_Input>;
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Items_By_PkArgs = {
  _inc?: Maybe<Order_Items_Inc_Input>;
  _set?: Maybe<Order_Items_Set_Input>;
  pk_columns: Order_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: Maybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: Maybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_MethodArgs = {
  _set?: Maybe<Payment_Method_Set_Input>;
  where: Payment_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Method_By_PkArgs = {
  _set?: Maybe<Payment_Method_Set_Input>;
  pk_columns: Payment_Method_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_StatusArgs = {
  _set?: Maybe<Payment_Status_Set_Input>;
  where: Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_By_PkArgs = {
  _set?: Maybe<Payment_Status_Set_Input>;
  pk_columns: Payment_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Popular_SearchesArgs = {
  _inc?: Maybe<Popular_Searches_Inc_Input>;
  _set?: Maybe<Popular_Searches_Set_Input>;
  where: Popular_Searches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Popular_Searches_By_PkArgs = {
  _inc?: Maybe<Popular_Searches_Inc_Input>;
  _set?: Maybe<Popular_Searches_Set_Input>;
  pk_columns: Popular_Searches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_PropertiesArgs = {
  _set?: Maybe<Product_Properties_Set_Input>;
  where: Product_Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Properties_By_PkArgs = {
  _set?: Maybe<Product_Properties_Set_Input>;
  pk_columns: Product_Properties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SubcategoryArgs = {
  _inc?: Maybe<Product_Subcategory_Inc_Input>;
  _set?: Maybe<Product_Subcategory_Set_Input>;
  where: Product_Subcategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Subcategory_By_PkArgs = {
  _inc?: Maybe<Product_Subcategory_Inc_Input>;
  _set?: Maybe<Product_Subcategory_Set_Input>;
  pk_columns: Product_Subcategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SuggestionsArgs = {
  _set?: Maybe<Product_Suggestions_Set_Input>;
  where: Product_Suggestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Suggestions_By_PkArgs = {
  _set?: Maybe<Product_Suggestions_Set_Input>;
  pk_columns: Product_Suggestions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_TagArgs = {
  _set?: Maybe<Product_Tag_Set_Input>;
  where: Product_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Tag_By_PkArgs = {
  _set?: Maybe<Product_Tag_Set_Input>;
  pk_columns: Product_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rider_StatusArgs = {
  _set?: Maybe<Rider_Status_Set_Input>;
  where: Rider_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rider_Status_By_PkArgs = {
  _set?: Maybe<Rider_Status_Set_Input>;
  pk_columns: Rider_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RidersArgs = {
  _inc?: Maybe<Riders_Inc_Input>;
  _set?: Maybe<Riders_Set_Input>;
  where: Riders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Riders_By_PkArgs = {
  _inc?: Maybe<Riders_Inc_Input>;
  _set?: Maybe<Riders_Set_Input>;
  pk_columns: Riders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_TypeArgs = {
  _set?: Maybe<Role_Type_Set_Input>;
  where: Role_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Type_By_PkArgs = {
  _set?: Maybe<Role_Type_Set_Input>;
  pk_columns: Role_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_UsersArgs = {
  _set?: Maybe<Staff_Users_Set_Input>;
  where: Staff_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_Users_By_PkArgs = {
  _set?: Maybe<Staff_Users_Set_Input>;
  pk_columns: Staff_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_CategoryArgs = {
  _inc?: Maybe<Store_Category_Inc_Input>;
  _set?: Maybe<Store_Category_Set_Input>;
  where: Store_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_Category_By_PkArgs = {
  _inc?: Maybe<Store_Category_Inc_Input>;
  _set?: Maybe<Store_Category_Set_Input>;
  pk_columns: Store_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_HoursArgs = {
  _inc?: Maybe<Store_Hours_Inc_Input>;
  _set?: Maybe<Store_Hours_Set_Input>;
  where: Store_Hours_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_Hours_By_PkArgs = {
  _inc?: Maybe<Store_Hours_Inc_Input>;
  _set?: Maybe<Store_Hours_Set_Input>;
  pk_columns: Store_Hours_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_ProductsArgs = {
  _inc?: Maybe<Store_Products_Inc_Input>;
  _set?: Maybe<Store_Products_Set_Input>;
  where: Store_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_Products_By_PkArgs = {
  _inc?: Maybe<Store_Products_Inc_Input>;
  _set?: Maybe<Store_Products_Set_Input>;
  pk_columns: Store_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StoresArgs = {
  _set?: Maybe<Stores_Set_Input>;
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stores_By_PkArgs = {
  _set?: Maybe<Stores_Set_Input>;
  pk_columns: Stores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubcategoriesArgs = {
  _inc?: Maybe<Subcategories_Inc_Input>;
  _set?: Maybe<Subcategories_Set_Input>;
  where: Subcategories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subcategories_By_PkArgs = {
  _inc?: Maybe<Subcategories_Inc_Input>;
  _set?: Maybe<Subcategories_Set_Input>;
  pk_columns: Subcategories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_System_InformationArgs = {
  _set?: Maybe<System_Information_Set_Input>;
  where: System_Information_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_System_Information_By_PkArgs = {
  _set?: Maybe<System_Information_Set_Input>;
  pk_columns: System_Information_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _set?: Maybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _set?: Maybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transporter_CriteriasArgs = {
  _set?: Maybe<Transporter_Criterias_Set_Input>;
  where: Transporter_Criterias_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transporter_Criterias_By_PkArgs = {
  _set?: Maybe<Transporter_Criterias_Set_Input>;
  pk_columns: Transporter_Criterias_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransportsArgs = {
  _set?: Maybe<Transports_Set_Input>;
  where: Transports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transports_By_PkArgs = {
  _set?: Maybe<Transports_Set_Input>;
  pk_columns: Transports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_AddressesArgs = {
  _inc?: Maybe<User_Addresses_Inc_Input>;
  _set?: Maybe<User_Addresses_Set_Input>;
  where: User_Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Addresses_By_PkArgs = {
  _inc?: Maybe<User_Addresses_Inc_Input>;
  _set?: Maybe<User_Addresses_Set_Input>;
  pk_columns: User_Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ConsentsArgs = {
  _set?: Maybe<User_Consents_Set_Input>;
  where: User_Consents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Consents_By_PkArgs = {
  _set?: Maybe<User_Consents_Set_Input>;
  pk_columns: User_Consents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_CouponArgs = {
  _inc?: Maybe<User_Coupon_Inc_Input>;
  _set?: Maybe<User_Coupon_Set_Input>;
  where: User_Coupon_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Coupon_By_PkArgs = {
  _inc?: Maybe<User_Coupon_Inc_Input>;
  _set?: Maybe<User_Coupon_Set_Input>;
  pk_columns: User_Coupon_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Favorite_ProductArgs = {
  _set?: Maybe<User_Favorite_Product_Set_Input>;
  where: User_Favorite_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Favorite_Product_By_PkArgs = {
  _set?: Maybe<User_Favorite_Product_Set_Input>;
  pk_columns: User_Favorite_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GroupArgs = {
  _set?: Maybe<User_Group_Set_Input>;
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Group_By_PkArgs = {
  _set?: Maybe<User_Group_Set_Input>;
  pk_columns: User_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_CategoryArgs = {
  _inc?: Maybe<Warehouse_Category_Inc_Input>;
  _set?: Maybe<Warehouse_Category_Set_Input>;
  where: Warehouse_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_Category_By_PkArgs = {
  _inc?: Maybe<Warehouse_Category_Inc_Input>;
  _set?: Maybe<Warehouse_Category_Set_Input>;
  pk_columns: Warehouse_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_HoursArgs = {
  _inc?: Maybe<Warehouse_Hours_Inc_Input>;
  _set?: Maybe<Warehouse_Hours_Set_Input>;
  where: Warehouse_Hours_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_Hours_By_PkArgs = {
  _inc?: Maybe<Warehouse_Hours_Inc_Input>;
  _set?: Maybe<Warehouse_Hours_Set_Input>;
  pk_columns: Warehouse_Hours_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_Operation_RuleArgs = {
  _append?: Maybe<Warehouse_Operation_Rule_Append_Input>;
  _delete_at_path?: Maybe<Warehouse_Operation_Rule_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Warehouse_Operation_Rule_Delete_Elem_Input>;
  _delete_key?: Maybe<Warehouse_Operation_Rule_Delete_Key_Input>;
  _prepend?: Maybe<Warehouse_Operation_Rule_Prepend_Input>;
  _set?: Maybe<Warehouse_Operation_Rule_Set_Input>;
  where: Warehouse_Operation_Rule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_Operation_Rule_By_PkArgs = {
  _append?: Maybe<Warehouse_Operation_Rule_Append_Input>;
  _delete_at_path?: Maybe<Warehouse_Operation_Rule_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Warehouse_Operation_Rule_Delete_Elem_Input>;
  _delete_key?: Maybe<Warehouse_Operation_Rule_Delete_Key_Input>;
  _prepend?: Maybe<Warehouse_Operation_Rule_Prepend_Input>;
  _set?: Maybe<Warehouse_Operation_Rule_Set_Input>;
  pk_columns: Warehouse_Operation_Rule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_StatusArgs = {
  _set?: Maybe<Warehouse_Status_Set_Input>;
  where: Warehouse_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_Status_By_PkArgs = {
  _set?: Maybe<Warehouse_Status_Set_Input>;
  pk_columns: Warehouse_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_User_AddressArgs = {
  _inc?: Maybe<Warehouse_User_Address_Inc_Input>;
  _set?: Maybe<Warehouse_User_Address_Set_Input>;
  where: Warehouse_User_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouse_User_Address_By_PkArgs = {
  _inc?: Maybe<Warehouse_User_Address_Inc_Input>;
  _set?: Maybe<Warehouse_User_Address_Set_Input>;
  pk_columns: Warehouse_User_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WarehousesArgs = {
  _inc?: Maybe<Warehouses_Inc_Input>;
  _set?: Maybe<Warehouses_Set_Input>;
  where: Warehouses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouses_By_PkArgs = {
  _inc?: Maybe<Warehouses_Inc_Input>;
  _set?: Maybe<Warehouses_Set_Input>;
  pk_columns: Warehouses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Warehouses_TextArgs = {
  _set?: Maybe<Warehouses_Text_Set_Input>;
  where: Warehouses_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootValidateCouponArgs = {
  code: Scalars['String'];
  warehouse_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "operation_rule_handle" */
export type Operation_Rule_Handle = {
  __typename?: 'operation_rule_handle';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "operation_rule_handle" */
export type Operation_Rule_Handle_Aggregate = {
  __typename?: 'operation_rule_handle_aggregate';
  aggregate?: Maybe<Operation_Rule_Handle_Aggregate_Fields>;
  nodes: Array<Operation_Rule_Handle>;
};

/** aggregate fields of "operation_rule_handle" */
export type Operation_Rule_Handle_Aggregate_Fields = {
  __typename?: 'operation_rule_handle_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Operation_Rule_Handle_Max_Fields>;
  min?: Maybe<Operation_Rule_Handle_Min_Fields>;
};


/** aggregate fields of "operation_rule_handle" */
export type Operation_Rule_Handle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Operation_Rule_Handle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "operation_rule_handle". All fields are combined with a logical 'AND'. */
export type Operation_Rule_Handle_Bool_Exp = {
  _and?: Maybe<Array<Operation_Rule_Handle_Bool_Exp>>;
  _not?: Maybe<Operation_Rule_Handle_Bool_Exp>;
  _or?: Maybe<Array<Operation_Rule_Handle_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "operation_rule_handle" */
export enum Operation_Rule_Handle_Constraint {
  /** unique or primary key constraint */
  OperationRuleHandlePkey = 'operation_rule_handle_pkey'
}

export enum Operation_Rule_Handle_Enum {
  CoursierfrLoadBalancing = 'coursierfr_load_balancing',
  IsExperiencingDelays = 'is_experiencing_delays',
  StuartLoadBalancing = 'stuart_load_balancing',
  Tms = 'tms'
}

/** Boolean expression to compare columns of type "operation_rule_handle_enum". All fields are combined with logical 'AND'. */
export type Operation_Rule_Handle_Enum_Comparison_Exp = {
  _eq?: Maybe<Operation_Rule_Handle_Enum>;
  _in?: Maybe<Array<Operation_Rule_Handle_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Operation_Rule_Handle_Enum>;
  _nin?: Maybe<Array<Operation_Rule_Handle_Enum>>;
};

/** input type for inserting data into table "operation_rule_handle" */
export type Operation_Rule_Handle_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Operation_Rule_Handle_Max_Fields = {
  __typename?: 'operation_rule_handle_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Operation_Rule_Handle_Min_Fields = {
  __typename?: 'operation_rule_handle_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "operation_rule_handle" */
export type Operation_Rule_Handle_Mutation_Response = {
  __typename?: 'operation_rule_handle_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Operation_Rule_Handle>;
};

/** on conflict condition type for table "operation_rule_handle" */
export type Operation_Rule_Handle_On_Conflict = {
  constraint: Operation_Rule_Handle_Constraint;
  update_columns?: Array<Operation_Rule_Handle_Update_Column>;
  where?: Maybe<Operation_Rule_Handle_Bool_Exp>;
};

/** Ordering options when selecting data from "operation_rule_handle". */
export type Operation_Rule_Handle_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: operation_rule_handle */
export type Operation_Rule_Handle_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "operation_rule_handle" */
export enum Operation_Rule_Handle_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "operation_rule_handle" */
export type Operation_Rule_Handle_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "operation_rule_handle" */
export enum Operation_Rule_Handle_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "operation_rules" */
export type Operation_Rules = {
  __typename?: 'operation_rules';
  created_at: Scalars['timestamptz'];
  handle: Operation_Rule_Handle_Enum;
  /** An array relationship */
  operation_rule_warehouses: Array<Warehouse_Operation_Rule>;
  /** An aggregate relationship */
  operation_rule_warehouses_aggregate: Warehouse_Operation_Rule_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "operation_rules" */
export type Operation_RulesOperation_Rule_WarehousesArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};


/** columns and relationships of "operation_rules" */
export type Operation_RulesOperation_Rule_Warehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};

/** aggregated selection of "operation_rules" */
export type Operation_Rules_Aggregate = {
  __typename?: 'operation_rules_aggregate';
  aggregate?: Maybe<Operation_Rules_Aggregate_Fields>;
  nodes: Array<Operation_Rules>;
};

/** aggregate fields of "operation_rules" */
export type Operation_Rules_Aggregate_Fields = {
  __typename?: 'operation_rules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Operation_Rules_Max_Fields>;
  min?: Maybe<Operation_Rules_Min_Fields>;
};


/** aggregate fields of "operation_rules" */
export type Operation_Rules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Operation_Rules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "operation_rules". All fields are combined with a logical 'AND'. */
export type Operation_Rules_Bool_Exp = {
  _and?: Maybe<Array<Operation_Rules_Bool_Exp>>;
  _not?: Maybe<Operation_Rules_Bool_Exp>;
  _or?: Maybe<Array<Operation_Rules_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  handle?: Maybe<Operation_Rule_Handle_Enum_Comparison_Exp>;
  operation_rule_warehouses?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "operation_rules" */
export enum Operation_Rules_Constraint {
  /** unique or primary key constraint */
  OperationRulesPkey = 'operation_rules_pkey'
}

/** input type for inserting data into table "operation_rules" */
export type Operation_Rules_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Operation_Rule_Handle_Enum>;
  operation_rule_warehouses?: Maybe<Warehouse_Operation_Rule_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Operation_Rules_Max_Fields = {
  __typename?: 'operation_rules_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Operation_Rules_Min_Fields = {
  __typename?: 'operation_rules_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "operation_rules" */
export type Operation_Rules_Mutation_Response = {
  __typename?: 'operation_rules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Operation_Rules>;
};

/** input type for inserting object relation for remote table "operation_rules" */
export type Operation_Rules_Obj_Rel_Insert_Input = {
  data: Operation_Rules_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Operation_Rules_On_Conflict>;
};

/** on conflict condition type for table "operation_rules" */
export type Operation_Rules_On_Conflict = {
  constraint: Operation_Rules_Constraint;
  update_columns?: Array<Operation_Rules_Update_Column>;
  where?: Maybe<Operation_Rules_Bool_Exp>;
};

/** Ordering options when selecting data from "operation_rules". */
export type Operation_Rules_Order_By = {
  created_at?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  operation_rule_warehouses_aggregate?: Maybe<Warehouse_Operation_Rule_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: operation_rules */
export type Operation_Rules_Pk_Columns_Input = {
  handle: Operation_Rule_Handle_Enum;
};

/** select columns of table "operation_rules" */
export enum Operation_Rules_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "operation_rules" */
export type Operation_Rules_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Operation_Rule_Handle_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "operation_rules" */
export enum Operation_Rules_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type OrderOutput = {
  __typename?: 'orderOutput';
  amount: Scalars['Float'];
  clientSecret: Scalars['String'];
  orderId: Scalars['uuid'];
  publishableKey: Scalars['String'];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_items" */
export type Order_Items = {
  __typename?: 'order_items';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  is_gift: Scalars['Boolean'];
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id?: Maybe<Scalars['uuid']>;
  original_ttc_price?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  refunded: Scalars['Boolean'];
  ttc_price: Scalars['numeric'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "order_items" */
export type Order_Items_Aggregate = {
  __typename?: 'order_items_aggregate';
  aggregate?: Maybe<Order_Items_Aggregate_Fields>;
  nodes: Array<Order_Items>;
};

/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_Fields = {
  __typename?: 'order_items_aggregate_fields';
  avg?: Maybe<Order_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Items_Max_Fields>;
  min?: Maybe<Order_Items_Min_Fields>;
  stddev?: Maybe<Order_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Items_Sum_Fields>;
  var_pop?: Maybe<Order_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Items_Var_Samp_Fields>;
  variance?: Maybe<Order_Items_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_items" */
export type Order_Items_Aggregate_Order_By = {
  avg?: Maybe<Order_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Items_Max_Order_By>;
  min?: Maybe<Order_Items_Min_Order_By>;
  stddev?: Maybe<Order_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Items_Sum_Order_By>;
  var_pop?: Maybe<Order_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Items_Var_Samp_Order_By>;
  variance?: Maybe<Order_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type Order_Items_Arr_Rel_Insert_Input = {
  data: Array<Order_Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Order_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Items_Avg_Fields = {
  __typename?: 'order_items_avg_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_items" */
export type Order_Items_Avg_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type Order_Items_Bool_Exp = {
  _and?: Maybe<Array<Order_Items_Bool_Exp>>;
  _not?: Maybe<Order_Items_Bool_Exp>;
  _or?: Maybe<Array<Order_Items_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_gift?: Maybe<Boolean_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  order_id?: Maybe<Uuid_Comparison_Exp>;
  original_ttc_price?: Maybe<Numeric_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  refunded?: Maybe<Boolean_Comparison_Exp>;
  ttc_price?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum Order_Items_Constraint {
  /** unique or primary key constraint */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type Order_Items_Inc_Input = {
  original_ttc_price?: Maybe<Scalars['numeric']>;
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order_items" */
export type Order_Items_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_gift?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['uuid']>;
  original_ttc_price?: Maybe<Scalars['numeric']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  refunded?: Maybe<Scalars['Boolean']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Order_Items_Max_Fields = {
  __typename?: 'order_items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  original_ttc_price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['uuid']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "order_items" */
export type Order_Items_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  original_ttc_price?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Items_Min_Fields = {
  __typename?: 'order_items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  original_ttc_price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['uuid']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "order_items" */
export type Order_Items_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  original_ttc_price?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type Order_Items_Mutation_Response = {
  __typename?: 'order_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Items>;
};

/** on conflict condition type for table "order_items" */
export type Order_Items_On_Conflict = {
  constraint: Order_Items_Constraint;
  update_columns?: Array<Order_Items_Update_Column>;
  where?: Maybe<Order_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type Order_Items_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_gift?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  order_id?: Maybe<Order_By>;
  original_ttc_price?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  refunded?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: order_items */
export type Order_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_items" */
export enum Order_Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsGift = 'is_gift',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OriginalTtcPrice = 'original_ttc_price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Refunded = 'refunded',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "order_items" */
export type Order_Items_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_gift?: Maybe<Scalars['Boolean']>;
  order_id?: Maybe<Scalars['uuid']>;
  original_ttc_price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['uuid']>;
  refunded?: Maybe<Scalars['Boolean']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Order_Items_Stddev_Fields = {
  __typename?: 'order_items_stddev_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_items" */
export type Order_Items_Stddev_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Items_Stddev_Pop_Fields = {
  __typename?: 'order_items_stddev_pop_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type Order_Items_Stddev_Pop_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Items_Stddev_Samp_Fields = {
  __typename?: 'order_items_stddev_samp_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type Order_Items_Stddev_Samp_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Items_Sum_Fields = {
  __typename?: 'order_items_sum_fields';
  original_ttc_price?: Maybe<Scalars['numeric']>;
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "order_items" */
export type Order_Items_Sum_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** update columns of table "order_items" */
export enum Order_Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsGift = 'is_gift',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OriginalTtcPrice = 'original_ttc_price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Refunded = 'refunded',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Order_Items_Var_Pop_Fields = {
  __typename?: 'order_items_var_pop_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_items" */
export type Order_Items_Var_Pop_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Items_Var_Samp_Fields = {
  __typename?: 'order_items_var_samp_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_items" */
export type Order_Items_Var_Samp_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Items_Variance_Fields = {
  __typename?: 'order_items_variance_fields';
  original_ttc_price?: Maybe<Scalars['Float']>;
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_items" */
export type Order_Items_Variance_Order_By = {
  original_ttc_price?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
};

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: Maybe<Array<Order_Status_Bool_Exp>>;
  _not?: Maybe<Order_Status_Bool_Exp>;
  _or?: Maybe<Array<Order_Status_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint */
  OrderStatusPkey = 'order_status_pkey'
}

export enum Order_Status_Enum {
  /** Order has been delivered */
  Delivered = 'delivered',
  /** Payment for the order has completed succesfully */
  Paid = 'paid',
  /** Payment for the order has failed */
  PaymentFailed = 'payment_failed',
  /** Currently recording the order */
  Pending = 'pending'
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Order_Status_Enum>;
  _in?: Maybe<Array<Order_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Order_Status_Enum>;
  _nin?: Maybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** input type for inserting object relation for remote table "order_status" */
export type Order_Status_Obj_Rel_Insert_Input = {
  data: Order_Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};

/** on conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: Maybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  address_city: Scalars['String'];
  address_country?: Maybe<Scalars['String']>;
  address_instructions?: Maybe<Scalars['String']>;
  address_is_outside: Scalars['Boolean'];
  address_line_1: Scalars['String'];
  address_line_2?: Maybe<Scalars['String']>;
  address_postal_code: Scalars['String'];
  cancelation_reason?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  /** A computed field, executes function "confirmation_time_seconds" */
  confirmation_time_seconds?: Maybe<Scalars['float8']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  coupon_code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  deliveries: Array<Deliveries>;
  /** An aggregate relationship */
  deliveries_aggregate: Deliveries_Aggregate;
  delivery_eta?: Maybe<Scalars['timestamptz']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_id?: Maybe<Scalars['String']>;
  delivery_method?: Maybe<Delivery_Method_Enum>;
  delivery_status?: Maybe<Delivery_Status_Enum>;
  delivery_stop_id?: Maybe<Scalars['String']>;
  /** A computed field, executes function "delivery_time_seconds" */
  delivery_time_seconds?: Maybe<Scalars['float8']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  has_given_feedback: Scalars['Boolean'];
  id: Scalars['uuid'];
  invoice?: Maybe<Scalars['String']>;
  is_fraud: Scalars['Boolean'];
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  /** A computed field, executes function "max_acceptable_delivered_at" */
  max_acceptable_delivered_at?: Maybe<Scalars['timestamptz']>;
  notification_sent_one_minute?: Maybe<Scalars['Boolean']>;
  number: Scalars['Int'];
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** An object relationship */
  order_status?: Maybe<Order_Status>;
  paid_at?: Maybe<Scalars['timestamptz']>;
  payment_method?: Maybe<Payment_Method_Enum>;
  payment_status?: Maybe<Payment_Status_Enum>;
  picked_at?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "preparation_time_seconds" */
  preparation_time_seconds?: Maybe<Scalars['float8']>;
  prepared_at?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "promised_delivered_at" */
  promised_delivered_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  rider?: Maybe<Riders>;
  rider_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Order_Status_Enum>;
  /** An object relationship */
  store?: Maybe<Stores>;
  store_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_id: Scalars['String'];
  stripe_payment_method_id?: Maybe<Scalars['String']>;
  tips_fee: Scalars['numeric'];
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  /** A computed field, executes function "total_delivery_time_seconds" */
  total_delivery_time_seconds?: Maybe<Scalars['float8']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
  warehouse_status?: Maybe<Warehouse_Status_Enum>;
};


/** columns and relationships of "orders" */
export type OrdersDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Orders_Bool_Exp>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Orders_Bool_Exp>>;
  address_city?: Maybe<String_Comparison_Exp>;
  address_country?: Maybe<String_Comparison_Exp>;
  address_instructions?: Maybe<String_Comparison_Exp>;
  address_is_outside?: Maybe<Boolean_Comparison_Exp>;
  address_line_1?: Maybe<String_Comparison_Exp>;
  address_line_2?: Maybe<String_Comparison_Exp>;
  address_postal_code?: Maybe<String_Comparison_Exp>;
  cancelation_reason?: Maybe<String_Comparison_Exp>;
  canceled_at?: Maybe<Timestamp_Comparison_Exp>;
  confirmation_time_seconds?: Maybe<Float8_Comparison_Exp>;
  confirmed_at?: Maybe<Timestamptz_Comparison_Exp>;
  coupon_code?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  custom_refunded_amount?: Maybe<Numeric_Comparison_Exp>;
  delivered_at?: Maybe<Timestamptz_Comparison_Exp>;
  deliveries?: Maybe<Deliveries_Bool_Exp>;
  delivery_eta?: Maybe<Timestamptz_Comparison_Exp>;
  delivery_fee?: Maybe<Numeric_Comparison_Exp>;
  delivery_fee_refunded_amount?: Maybe<Numeric_Comparison_Exp>;
  delivery_id?: Maybe<String_Comparison_Exp>;
  delivery_method?: Maybe<Delivery_Method_Enum_Comparison_Exp>;
  delivery_status?: Maybe<Delivery_Status_Enum_Comparison_Exp>;
  delivery_stop_id?: Maybe<String_Comparison_Exp>;
  delivery_time_seconds?: Maybe<Float8_Comparison_Exp>;
  discount_applied?: Maybe<Numeric_Comparison_Exp>;
  has_given_feedback?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  invoice?: Maybe<String_Comparison_Exp>;
  is_fraud?: Maybe<Boolean_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  max_acceptable_delivered_at?: Maybe<Timestamptz_Comparison_Exp>;
  notification_sent_one_minute?: Maybe<Boolean_Comparison_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  order_items?: Maybe<Order_Items_Bool_Exp>;
  order_status?: Maybe<Order_Status_Bool_Exp>;
  paid_at?: Maybe<Timestamptz_Comparison_Exp>;
  payment_method?: Maybe<Payment_Method_Enum_Comparison_Exp>;
  payment_status?: Maybe<Payment_Status_Enum_Comparison_Exp>;
  picked_at?: Maybe<Timestamptz_Comparison_Exp>;
  preparation_time_seconds?: Maybe<Float8_Comparison_Exp>;
  prepared_at?: Maybe<Timestamptz_Comparison_Exp>;
  promised_delivered_at?: Maybe<Timestamptz_Comparison_Exp>;
  rider?: Maybe<Riders_Bool_Exp>;
  rider_id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<Order_Status_Enum_Comparison_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
  stripe_payment_intent_id?: Maybe<String_Comparison_Exp>;
  stripe_payment_method_id?: Maybe<String_Comparison_Exp>;
  tips_fee?: Maybe<Numeric_Comparison_Exp>;
  tips_fee_refunded_amount?: Maybe<Numeric_Comparison_Exp>;
  total_delivery_time_seconds?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
  warehouse_status?: Maybe<Warehouse_Status_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersDeliveryIdKey = 'orders_delivery_id_key',
  /** unique or primary key constraint */
  OrdersNumberKey = 'orders_number_key',
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey',
  /** unique or primary key constraint */
  OrdersStripePaymentIntentIdKey = 'orders_stripe_payment_intent_id_key'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  number?: Maybe<Scalars['Int']>;
  tips_fee?: Maybe<Scalars['numeric']>;
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  address_city?: Maybe<Scalars['String']>;
  address_country?: Maybe<Scalars['String']>;
  address_instructions?: Maybe<Scalars['String']>;
  address_is_outside?: Maybe<Scalars['Boolean']>;
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  address_postal_code?: Maybe<Scalars['String']>;
  cancelation_reason?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  deliveries?: Maybe<Deliveries_Arr_Rel_Insert_Input>;
  delivery_eta?: Maybe<Scalars['timestamptz']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_id?: Maybe<Scalars['String']>;
  delivery_method?: Maybe<Delivery_Method_Enum>;
  delivery_status?: Maybe<Delivery_Status_Enum>;
  delivery_stop_id?: Maybe<Scalars['String']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  has_given_feedback?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  invoice?: Maybe<Scalars['String']>;
  is_fraud?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  notification_sent_one_minute?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  order_items?: Maybe<Order_Items_Arr_Rel_Insert_Input>;
  order_status?: Maybe<Order_Status_Obj_Rel_Insert_Input>;
  paid_at?: Maybe<Scalars['timestamptz']>;
  payment_method?: Maybe<Payment_Method_Enum>;
  payment_status?: Maybe<Payment_Status_Enum>;
  picked_at?: Maybe<Scalars['timestamptz']>;
  prepared_at?: Maybe<Scalars['timestamptz']>;
  rider?: Maybe<Riders_Obj_Rel_Insert_Input>;
  rider_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Order_Status_Enum>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_method_id?: Maybe<Scalars['String']>;
  tips_fee?: Maybe<Scalars['numeric']>;
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
  warehouse_status?: Maybe<Warehouse_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  address_city?: Maybe<Scalars['String']>;
  address_country?: Maybe<Scalars['String']>;
  address_instructions?: Maybe<Scalars['String']>;
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  address_postal_code?: Maybe<Scalars['String']>;
  cancelation_reason?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  delivery_eta?: Maybe<Scalars['timestamptz']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_id?: Maybe<Scalars['String']>;
  delivery_stop_id?: Maybe<Scalars['String']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  invoice?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  number?: Maybe<Scalars['Int']>;
  paid_at?: Maybe<Scalars['timestamptz']>;
  picked_at?: Maybe<Scalars['timestamptz']>;
  prepared_at?: Maybe<Scalars['timestamptz']>;
  rider_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_method_id?: Maybe<Scalars['String']>;
  tips_fee?: Maybe<Scalars['numeric']>;
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  address_city?: Maybe<Order_By>;
  address_country?: Maybe<Order_By>;
  address_instructions?: Maybe<Order_By>;
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  address_postal_code?: Maybe<Order_By>;
  cancelation_reason?: Maybe<Order_By>;
  canceled_at?: Maybe<Order_By>;
  confirmed_at?: Maybe<Order_By>;
  coupon_code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_refunded_amount?: Maybe<Order_By>;
  delivered_at?: Maybe<Order_By>;
  delivery_eta?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  delivery_id?: Maybe<Order_By>;
  delivery_stop_id?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  paid_at?: Maybe<Order_By>;
  picked_at?: Maybe<Order_By>;
  prepared_at?: Maybe<Order_By>;
  rider_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  stripe_payment_method_id?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  address_city?: Maybe<Scalars['String']>;
  address_country?: Maybe<Scalars['String']>;
  address_instructions?: Maybe<Scalars['String']>;
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  address_postal_code?: Maybe<Scalars['String']>;
  cancelation_reason?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  delivery_eta?: Maybe<Scalars['timestamptz']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_id?: Maybe<Scalars['String']>;
  delivery_stop_id?: Maybe<Scalars['String']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  invoice?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  number?: Maybe<Scalars['Int']>;
  paid_at?: Maybe<Scalars['timestamptz']>;
  picked_at?: Maybe<Scalars['timestamptz']>;
  prepared_at?: Maybe<Scalars['timestamptz']>;
  rider_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_method_id?: Maybe<Scalars['String']>;
  tips_fee?: Maybe<Scalars['numeric']>;
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  address_city?: Maybe<Order_By>;
  address_country?: Maybe<Order_By>;
  address_instructions?: Maybe<Order_By>;
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  address_postal_code?: Maybe<Order_By>;
  cancelation_reason?: Maybe<Order_By>;
  canceled_at?: Maybe<Order_By>;
  confirmed_at?: Maybe<Order_By>;
  coupon_code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_refunded_amount?: Maybe<Order_By>;
  delivered_at?: Maybe<Order_By>;
  delivery_eta?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  delivery_id?: Maybe<Order_By>;
  delivery_stop_id?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  paid_at?: Maybe<Order_By>;
  picked_at?: Maybe<Order_By>;
  prepared_at?: Maybe<Order_By>;
  rider_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  stripe_payment_method_id?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  address_city?: Maybe<Order_By>;
  address_country?: Maybe<Order_By>;
  address_instructions?: Maybe<Order_By>;
  address_is_outside?: Maybe<Order_By>;
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  address_postal_code?: Maybe<Order_By>;
  cancelation_reason?: Maybe<Order_By>;
  canceled_at?: Maybe<Order_By>;
  confirmation_time_seconds?: Maybe<Order_By>;
  confirmed_at?: Maybe<Order_By>;
  coupon_code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_refunded_amount?: Maybe<Order_By>;
  delivered_at?: Maybe<Order_By>;
  deliveries_aggregate?: Maybe<Deliveries_Aggregate_Order_By>;
  delivery_eta?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  delivery_id?: Maybe<Order_By>;
  delivery_method?: Maybe<Order_By>;
  delivery_status?: Maybe<Order_By>;
  delivery_stop_id?: Maybe<Order_By>;
  delivery_time_seconds?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  has_given_feedback?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice?: Maybe<Order_By>;
  is_fraud?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  max_acceptable_delivered_at?: Maybe<Order_By>;
  notification_sent_one_minute?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  order_items_aggregate?: Maybe<Order_Items_Aggregate_Order_By>;
  order_status?: Maybe<Order_Status_Order_By>;
  paid_at?: Maybe<Order_By>;
  payment_method?: Maybe<Order_By>;
  payment_status?: Maybe<Order_By>;
  picked_at?: Maybe<Order_By>;
  preparation_time_seconds?: Maybe<Order_By>;
  prepared_at?: Maybe<Order_By>;
  promised_delivered_at?: Maybe<Order_By>;
  rider?: Maybe<Riders_Order_By>;
  rider_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  stripe_payment_method_id?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
  total_delivery_time_seconds?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
  warehouse_status?: Maybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  AddressCity = 'address_city',
  /** column name */
  AddressCountry = 'address_country',
  /** column name */
  AddressInstructions = 'address_instructions',
  /** column name */
  AddressIsOutside = 'address_is_outside',
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  AddressPostalCode = 'address_postal_code',
  /** column name */
  CancelationReason = 'cancelation_reason',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CouponCode = 'coupon_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRefundedAmount = 'custom_refunded_amount',
  /** column name */
  DeliveredAt = 'delivered_at',
  /** column name */
  DeliveryEta = 'delivery_eta',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  DeliveryFeeRefundedAmount = 'delivery_fee_refunded_amount',
  /** column name */
  DeliveryId = 'delivery_id',
  /** column name */
  DeliveryMethod = 'delivery_method',
  /** column name */
  DeliveryStatus = 'delivery_status',
  /** column name */
  DeliveryStopId = 'delivery_stop_id',
  /** column name */
  DiscountApplied = 'discount_applied',
  /** column name */
  HasGivenFeedback = 'has_given_feedback',
  /** column name */
  Id = 'id',
  /** column name */
  Invoice = 'invoice',
  /** column name */
  IsFraud = 'is_fraud',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  NotificationSentOneMinute = 'notification_sent_one_minute',
  /** column name */
  Number = 'number',
  /** column name */
  PaidAt = 'paid_at',
  /** column name */
  PaymentMethod = 'payment_method',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PickedAt = 'picked_at',
  /** column name */
  PreparedAt = 'prepared_at',
  /** column name */
  RiderId = 'rider_id',
  /** column name */
  Status = 'status',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  StripePaymentIntentId = 'stripe_payment_intent_id',
  /** column name */
  StripePaymentMethodId = 'stripe_payment_method_id',
  /** column name */
  TipsFee = 'tips_fee',
  /** column name */
  TipsFeeRefundedAmount = 'tips_fee_refunded_amount',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WarehouseId = 'warehouse_id',
  /** column name */
  WarehouseStatus = 'warehouse_status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  address_city?: Maybe<Scalars['String']>;
  address_country?: Maybe<Scalars['String']>;
  address_instructions?: Maybe<Scalars['String']>;
  address_is_outside?: Maybe<Scalars['Boolean']>;
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  address_postal_code?: Maybe<Scalars['String']>;
  cancelation_reason?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivered_at?: Maybe<Scalars['timestamptz']>;
  delivery_eta?: Maybe<Scalars['timestamptz']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_id?: Maybe<Scalars['String']>;
  delivery_method?: Maybe<Delivery_Method_Enum>;
  delivery_status?: Maybe<Delivery_Status_Enum>;
  delivery_stop_id?: Maybe<Scalars['String']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  has_given_feedback?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  invoice?: Maybe<Scalars['String']>;
  is_fraud?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  notification_sent_one_minute?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  paid_at?: Maybe<Scalars['timestamptz']>;
  payment_method?: Maybe<Payment_Method_Enum>;
  payment_status?: Maybe<Payment_Status_Enum>;
  picked_at?: Maybe<Scalars['timestamptz']>;
  prepared_at?: Maybe<Scalars['timestamptz']>;
  rider_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Order_Status_Enum>;
  store_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_method_id?: Maybe<Scalars['String']>;
  tips_fee?: Maybe<Scalars['numeric']>;
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
  warehouse_status?: Maybe<Warehouse_Status_Enum>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  custom_refunded_amount?: Maybe<Scalars['numeric']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['numeric']>;
  discount_applied?: Maybe<Scalars['numeric']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  number?: Maybe<Scalars['Int']>;
  tips_fee?: Maybe<Scalars['numeric']>;
  tips_fee_refunded_amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  AddressCity = 'address_city',
  /** column name */
  AddressCountry = 'address_country',
  /** column name */
  AddressInstructions = 'address_instructions',
  /** column name */
  AddressIsOutside = 'address_is_outside',
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  AddressPostalCode = 'address_postal_code',
  /** column name */
  CancelationReason = 'cancelation_reason',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CouponCode = 'coupon_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRefundedAmount = 'custom_refunded_amount',
  /** column name */
  DeliveredAt = 'delivered_at',
  /** column name */
  DeliveryEta = 'delivery_eta',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  DeliveryFeeRefundedAmount = 'delivery_fee_refunded_amount',
  /** column name */
  DeliveryId = 'delivery_id',
  /** column name */
  DeliveryMethod = 'delivery_method',
  /** column name */
  DeliveryStatus = 'delivery_status',
  /** column name */
  DeliveryStopId = 'delivery_stop_id',
  /** column name */
  DiscountApplied = 'discount_applied',
  /** column name */
  HasGivenFeedback = 'has_given_feedback',
  /** column name */
  Id = 'id',
  /** column name */
  Invoice = 'invoice',
  /** column name */
  IsFraud = 'is_fraud',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  NotificationSentOneMinute = 'notification_sent_one_minute',
  /** column name */
  Number = 'number',
  /** column name */
  PaidAt = 'paid_at',
  /** column name */
  PaymentMethod = 'payment_method',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PickedAt = 'picked_at',
  /** column name */
  PreparedAt = 'prepared_at',
  /** column name */
  RiderId = 'rider_id',
  /** column name */
  Status = 'status',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  StripePaymentIntentId = 'stripe_payment_intent_id',
  /** column name */
  StripePaymentMethodId = 'stripe_payment_method_id',
  /** column name */
  TipsFee = 'tips_fee',
  /** column name */
  TipsFeeRefundedAmount = 'tips_fee_refunded_amount',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WarehouseId = 'warehouse_id',
  /** column name */
  WarehouseStatus = 'warehouse_status'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  custom_refunded_amount?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  delivery_fee_refunded_amount?: Maybe<Scalars['Float']>;
  discount_applied?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  tips_fee?: Maybe<Scalars['Float']>;
  tips_fee_refunded_amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  custom_refunded_amount?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_fee_refunded_amount?: Maybe<Order_By>;
  discount_applied?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  tips_fee?: Maybe<Order_By>;
  tips_fee_refunded_amount?: Maybe<Order_By>;
};

/** columns and relationships of "payment_method" */
export type Payment_Method = {
  __typename?: 'payment_method';
  value: Scalars['String'];
};

/** aggregated selection of "payment_method" */
export type Payment_Method_Aggregate = {
  __typename?: 'payment_method_aggregate';
  aggregate?: Maybe<Payment_Method_Aggregate_Fields>;
  nodes: Array<Payment_Method>;
};

/** aggregate fields of "payment_method" */
export type Payment_Method_Aggregate_Fields = {
  __typename?: 'payment_method_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Payment_Method_Max_Fields>;
  min?: Maybe<Payment_Method_Min_Fields>;
};


/** aggregate fields of "payment_method" */
export type Payment_Method_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Method_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "payment_method". All fields are combined with a logical 'AND'. */
export type Payment_Method_Bool_Exp = {
  _and?: Maybe<Array<Payment_Method_Bool_Exp>>;
  _not?: Maybe<Payment_Method_Bool_Exp>;
  _or?: Maybe<Array<Payment_Method_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_method" */
export enum Payment_Method_Constraint {
  /** unique or primary key constraint */
  PaymentMethodPkey = 'payment_method_pkey'
}

export enum Payment_Method_Enum {
  ApplePay = 'apple_pay',
  Card = 'card',
  GooglePay = 'google_pay'
}

/** Boolean expression to compare columns of type "payment_method_enum". All fields are combined with logical 'AND'. */
export type Payment_Method_Enum_Comparison_Exp = {
  _eq?: Maybe<Payment_Method_Enum>;
  _in?: Maybe<Array<Payment_Method_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Payment_Method_Enum>;
  _nin?: Maybe<Array<Payment_Method_Enum>>;
};

/** input type for inserting data into table "payment_method" */
export type Payment_Method_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Payment_Method_Max_Fields = {
  __typename?: 'payment_method_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Payment_Method_Min_Fields = {
  __typename?: 'payment_method_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "payment_method" */
export type Payment_Method_Mutation_Response = {
  __typename?: 'payment_method_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Method>;
};

/** on conflict condition type for table "payment_method" */
export type Payment_Method_On_Conflict = {
  constraint: Payment_Method_Constraint;
  update_columns?: Array<Payment_Method_Update_Column>;
  where?: Maybe<Payment_Method_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_method". */
export type Payment_Method_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: payment_method */
export type Payment_Method_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "payment_method" */
export enum Payment_Method_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "payment_method" */
export type Payment_Method_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "payment_method" */
export enum Payment_Method_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "payment_status" */
export type Payment_Status = {
  __typename?: 'payment_status';
  value: Scalars['String'];
};

/** aggregated selection of "payment_status" */
export type Payment_Status_Aggregate = {
  __typename?: 'payment_status_aggregate';
  aggregate?: Maybe<Payment_Status_Aggregate_Fields>;
  nodes: Array<Payment_Status>;
};

/** aggregate fields of "payment_status" */
export type Payment_Status_Aggregate_Fields = {
  __typename?: 'payment_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Payment_Status_Max_Fields>;
  min?: Maybe<Payment_Status_Min_Fields>;
};


/** aggregate fields of "payment_status" */
export type Payment_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "payment_status". All fields are combined with a logical 'AND'. */
export type Payment_Status_Bool_Exp = {
  _and?: Maybe<Array<Payment_Status_Bool_Exp>>;
  _not?: Maybe<Payment_Status_Bool_Exp>;
  _or?: Maybe<Array<Payment_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_status" */
export enum Payment_Status_Constraint {
  /** unique or primary key constraint */
  PaymentStatusPkey = 'payment_status_pkey'
}

export enum Payment_Status_Enum {
  Failed = 'failed',
  Paid = 'paid',
  Pending = 'pending',
  Refunded = 'refunded'
}

/** Boolean expression to compare columns of type "payment_status_enum". All fields are combined with logical 'AND'. */
export type Payment_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Payment_Status_Enum>;
  _in?: Maybe<Array<Payment_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Payment_Status_Enum>;
  _nin?: Maybe<Array<Payment_Status_Enum>>;
};

/** input type for inserting data into table "payment_status" */
export type Payment_Status_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Payment_Status_Max_Fields = {
  __typename?: 'payment_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Payment_Status_Min_Fields = {
  __typename?: 'payment_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "payment_status" */
export type Payment_Status_Mutation_Response = {
  __typename?: 'payment_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Status>;
};

/** on conflict condition type for table "payment_status" */
export type Payment_Status_On_Conflict = {
  constraint: Payment_Status_Constraint;
  update_columns?: Array<Payment_Status_Update_Column>;
  where?: Maybe<Payment_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_status". */
export type Payment_Status_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: payment_status */
export type Payment_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "payment_status" */
export enum Payment_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "payment_status" */
export type Payment_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "payment_status" */
export enum Payment_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "popular_searches" */
export type Popular_Searches = {
  __typename?: 'popular_searches';
  id: Scalars['uuid'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

/** aggregated selection of "popular_searches" */
export type Popular_Searches_Aggregate = {
  __typename?: 'popular_searches_aggregate';
  aggregate?: Maybe<Popular_Searches_Aggregate_Fields>;
  nodes: Array<Popular_Searches>;
};

/** aggregate fields of "popular_searches" */
export type Popular_Searches_Aggregate_Fields = {
  __typename?: 'popular_searches_aggregate_fields';
  avg?: Maybe<Popular_Searches_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Popular_Searches_Max_Fields>;
  min?: Maybe<Popular_Searches_Min_Fields>;
  stddev?: Maybe<Popular_Searches_Stddev_Fields>;
  stddev_pop?: Maybe<Popular_Searches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Popular_Searches_Stddev_Samp_Fields>;
  sum?: Maybe<Popular_Searches_Sum_Fields>;
  var_pop?: Maybe<Popular_Searches_Var_Pop_Fields>;
  var_samp?: Maybe<Popular_Searches_Var_Samp_Fields>;
  variance?: Maybe<Popular_Searches_Variance_Fields>;
};


/** aggregate fields of "popular_searches" */
export type Popular_Searches_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Popular_Searches_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Popular_Searches_Avg_Fields = {
  __typename?: 'popular_searches_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "popular_searches". All fields are combined with a logical 'AND'. */
export type Popular_Searches_Bool_Exp = {
  _and?: Maybe<Array<Popular_Searches_Bool_Exp>>;
  _not?: Maybe<Popular_Searches_Bool_Exp>;
  _or?: Maybe<Array<Popular_Searches_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "popular_searches" */
export enum Popular_Searches_Constraint {
  /** unique or primary key constraint */
  PopularSearchesPkey = 'popular_searches_pkey'
}

/** input type for incrementing numeric columns in table "popular_searches" */
export type Popular_Searches_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "popular_searches" */
export type Popular_Searches_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Popular_Searches_Max_Fields = {
  __typename?: 'popular_searches_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Popular_Searches_Min_Fields = {
  __typename?: 'popular_searches_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "popular_searches" */
export type Popular_Searches_Mutation_Response = {
  __typename?: 'popular_searches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Popular_Searches>;
};

/** on conflict condition type for table "popular_searches" */
export type Popular_Searches_On_Conflict = {
  constraint: Popular_Searches_Constraint;
  update_columns?: Array<Popular_Searches_Update_Column>;
  where?: Maybe<Popular_Searches_Bool_Exp>;
};

/** Ordering options when selecting data from "popular_searches". */
export type Popular_Searches_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** primary key columns input for table: popular_searches */
export type Popular_Searches_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "popular_searches" */
export enum Popular_Searches_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "popular_searches" */
export type Popular_Searches_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Popular_Searches_Stddev_Fields = {
  __typename?: 'popular_searches_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Popular_Searches_Stddev_Pop_Fields = {
  __typename?: 'popular_searches_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Popular_Searches_Stddev_Samp_Fields = {
  __typename?: 'popular_searches_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Popular_Searches_Sum_Fields = {
  __typename?: 'popular_searches_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "popular_searches" */
export enum Popular_Searches_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** aggregate var_pop on columns */
export type Popular_Searches_Var_Pop_Fields = {
  __typename?: 'popular_searches_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Popular_Searches_Var_Samp_Fields = {
  __typename?: 'popular_searches_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Popular_Searches_Variance_Fields = {
  __typename?: 'popular_searches_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "product_properties" */
export type Product_Properties = {
  __typename?: 'product_properties';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  product_id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "product_properties" */
export type Product_Properties_Aggregate = {
  __typename?: 'product_properties_aggregate';
  aggregate?: Maybe<Product_Properties_Aggregate_Fields>;
  nodes: Array<Product_Properties>;
};

/** aggregate fields of "product_properties" */
export type Product_Properties_Aggregate_Fields = {
  __typename?: 'product_properties_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Product_Properties_Max_Fields>;
  min?: Maybe<Product_Properties_Min_Fields>;
};


/** aggregate fields of "product_properties" */
export type Product_Properties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Properties_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_properties" */
export type Product_Properties_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Properties_Max_Order_By>;
  min?: Maybe<Product_Properties_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_properties" */
export type Product_Properties_Arr_Rel_Insert_Input = {
  data: Array<Product_Properties_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Product_Properties_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_properties". All fields are combined with a logical 'AND'. */
export type Product_Properties_Bool_Exp = {
  _and?: Maybe<Array<Product_Properties_Bool_Exp>>;
  _not?: Maybe<Product_Properties_Bool_Exp>;
  _or?: Maybe<Array<Product_Properties_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_properties" */
export enum Product_Properties_Constraint {
  /** unique or primary key constraint */
  ProductPropertiesPkey = 'product_properties_pkey'
}

/** input type for inserting data into table "product_properties" */
export type Product_Properties_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Product_Properties_Max_Fields = {
  __typename?: 'product_properties_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "product_properties" */
export type Product_Properties_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Properties_Min_Fields = {
  __typename?: 'product_properties_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "product_properties" */
export type Product_Properties_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "product_properties" */
export type Product_Properties_Mutation_Response = {
  __typename?: 'product_properties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Properties>;
};

/** on conflict condition type for table "product_properties" */
export type Product_Properties_On_Conflict = {
  constraint: Product_Properties_Constraint;
  update_columns?: Array<Product_Properties_Update_Column>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};

/** Ordering options when selecting data from "product_properties". */
export type Product_Properties_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: product_properties */
export type Product_Properties_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product_properties" */
export enum Product_Properties_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "product_properties" */
export type Product_Properties_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "product_properties" */
export enum Product_Properties_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "product_subcategory" */
export type Product_Subcategory = {
  __typename?: 'product_subcategory';
  order?: Maybe<Scalars['Int']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  /** An object relationship */
  subcategory: Subcategories;
  subcategory_id: Scalars['uuid'];
};

/** aggregated selection of "product_subcategory" */
export type Product_Subcategory_Aggregate = {
  __typename?: 'product_subcategory_aggregate';
  aggregate?: Maybe<Product_Subcategory_Aggregate_Fields>;
  nodes: Array<Product_Subcategory>;
};

/** aggregate fields of "product_subcategory" */
export type Product_Subcategory_Aggregate_Fields = {
  __typename?: 'product_subcategory_aggregate_fields';
  avg?: Maybe<Product_Subcategory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Subcategory_Max_Fields>;
  min?: Maybe<Product_Subcategory_Min_Fields>;
  stddev?: Maybe<Product_Subcategory_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Subcategory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Subcategory_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Subcategory_Sum_Fields>;
  var_pop?: Maybe<Product_Subcategory_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Subcategory_Var_Samp_Fields>;
  variance?: Maybe<Product_Subcategory_Variance_Fields>;
};


/** aggregate fields of "product_subcategory" */
export type Product_Subcategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Subcategory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_subcategory" */
export type Product_Subcategory_Aggregate_Order_By = {
  avg?: Maybe<Product_Subcategory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Subcategory_Max_Order_By>;
  min?: Maybe<Product_Subcategory_Min_Order_By>;
  stddev?: Maybe<Product_Subcategory_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Subcategory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Subcategory_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Subcategory_Sum_Order_By>;
  var_pop?: Maybe<Product_Subcategory_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Subcategory_Var_Samp_Order_By>;
  variance?: Maybe<Product_Subcategory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_subcategory" */
export type Product_Subcategory_Arr_Rel_Insert_Input = {
  data: Array<Product_Subcategory_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Product_Subcategory_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Subcategory_Avg_Fields = {
  __typename?: 'product_subcategory_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product_subcategory" */
export type Product_Subcategory_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_subcategory". All fields are combined with a logical 'AND'. */
export type Product_Subcategory_Bool_Exp = {
  _and?: Maybe<Array<Product_Subcategory_Bool_Exp>>;
  _not?: Maybe<Product_Subcategory_Bool_Exp>;
  _or?: Maybe<Array<Product_Subcategory_Bool_Exp>>;
  order?: Maybe<Int_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  subcategory?: Maybe<Subcategories_Bool_Exp>;
  subcategory_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_subcategory" */
export enum Product_Subcategory_Constraint {
  /** unique or primary key constraint */
  ProductSubcategoryPkey = 'product_subcategory_pkey'
}

/** input type for incrementing numeric columns in table "product_subcategory" */
export type Product_Subcategory_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "product_subcategory" */
export type Product_Subcategory_Insert_Input = {
  order?: Maybe<Scalars['Int']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  subcategory?: Maybe<Subcategories_Obj_Rel_Insert_Input>;
  subcategory_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Subcategory_Max_Fields = {
  __typename?: 'product_subcategory_max_fields';
  order?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  subcategory_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product_subcategory" */
export type Product_Subcategory_Max_Order_By = {
  order?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  subcategory_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Subcategory_Min_Fields = {
  __typename?: 'product_subcategory_min_fields';
  order?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  subcategory_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product_subcategory" */
export type Product_Subcategory_Min_Order_By = {
  order?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  subcategory_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "product_subcategory" */
export type Product_Subcategory_Mutation_Response = {
  __typename?: 'product_subcategory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Subcategory>;
};

/** on conflict condition type for table "product_subcategory" */
export type Product_Subcategory_On_Conflict = {
  constraint: Product_Subcategory_Constraint;
  update_columns?: Array<Product_Subcategory_Update_Column>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};

/** Ordering options when selecting data from "product_subcategory". */
export type Product_Subcategory_Order_By = {
  order?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  subcategory?: Maybe<Subcategories_Order_By>;
  subcategory_id?: Maybe<Order_By>;
};

/** primary key columns input for table: product_subcategory */
export type Product_Subcategory_Pk_Columns_Input = {
  product_id: Scalars['uuid'];
  subcategory_id: Scalars['uuid'];
};

/** select columns of table "product_subcategory" */
export enum Product_Subcategory_Select_Column {
  /** column name */
  Order = 'order',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  SubcategoryId = 'subcategory_id'
}

/** input type for updating data in table "product_subcategory" */
export type Product_Subcategory_Set_Input = {
  order?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  subcategory_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Subcategory_Stddev_Fields = {
  __typename?: 'product_subcategory_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product_subcategory" */
export type Product_Subcategory_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Subcategory_Stddev_Pop_Fields = {
  __typename?: 'product_subcategory_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product_subcategory" */
export type Product_Subcategory_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Subcategory_Stddev_Samp_Fields = {
  __typename?: 'product_subcategory_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product_subcategory" */
export type Product_Subcategory_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Subcategory_Sum_Fields = {
  __typename?: 'product_subcategory_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "product_subcategory" */
export type Product_Subcategory_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "product_subcategory" */
export enum Product_Subcategory_Update_Column {
  /** column name */
  Order = 'order',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  SubcategoryId = 'subcategory_id'
}

/** aggregate var_pop on columns */
export type Product_Subcategory_Var_Pop_Fields = {
  __typename?: 'product_subcategory_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product_subcategory" */
export type Product_Subcategory_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Subcategory_Var_Samp_Fields = {
  __typename?: 'product_subcategory_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product_subcategory" */
export type Product_Subcategory_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Subcategory_Variance_Fields = {
  __typename?: 'product_subcategory_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product_subcategory" */
export type Product_Subcategory_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

/** columns and relationships of "product_suggestions" */
export type Product_Suggestions = {
  __typename?: 'product_suggestions';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  suggestion: Scalars['String'];
  user_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};

/** aggregated selection of "product_suggestions" */
export type Product_Suggestions_Aggregate = {
  __typename?: 'product_suggestions_aggregate';
  aggregate?: Maybe<Product_Suggestions_Aggregate_Fields>;
  nodes: Array<Product_Suggestions>;
};

/** aggregate fields of "product_suggestions" */
export type Product_Suggestions_Aggregate_Fields = {
  __typename?: 'product_suggestions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Product_Suggestions_Max_Fields>;
  min?: Maybe<Product_Suggestions_Min_Fields>;
};


/** aggregate fields of "product_suggestions" */
export type Product_Suggestions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Suggestions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "product_suggestions". All fields are combined with a logical 'AND'. */
export type Product_Suggestions_Bool_Exp = {
  _and?: Maybe<Array<Product_Suggestions_Bool_Exp>>;
  _not?: Maybe<Product_Suggestions_Bool_Exp>;
  _or?: Maybe<Array<Product_Suggestions_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  suggestion?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_suggestions" */
export enum Product_Suggestions_Constraint {
  /** unique or primary key constraint */
  ProductSuggestionsPkey = 'product_suggestions_pkey'
}

/** input type for inserting data into table "product_suggestions" */
export type Product_Suggestions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  suggestion?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Suggestions_Max_Fields = {
  __typename?: 'product_suggestions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  suggestion?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Product_Suggestions_Min_Fields = {
  __typename?: 'product_suggestions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  suggestion?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "product_suggestions" */
export type Product_Suggestions_Mutation_Response = {
  __typename?: 'product_suggestions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Suggestions>;
};

/** on conflict condition type for table "product_suggestions" */
export type Product_Suggestions_On_Conflict = {
  constraint: Product_Suggestions_Constraint;
  update_columns?: Array<Product_Suggestions_Update_Column>;
  where?: Maybe<Product_Suggestions_Bool_Exp>;
};

/** Ordering options when selecting data from "product_suggestions". */
export type Product_Suggestions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  suggestion?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: product_suggestions */
export type Product_Suggestions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product_suggestions" */
export enum Product_Suggestions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Suggestion = 'suggestion',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "product_suggestions" */
export type Product_Suggestions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  suggestion?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product_suggestions" */
export enum Product_Suggestions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Suggestion = 'suggestion',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** columns and relationships of "product_tag" */
export type Product_Tag = {
  __typename?: 'product_tag';
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  /** An object relationship */
  tag: Tags;
  tag_id: Scalars['uuid'];
};

/** aggregated selection of "product_tag" */
export type Product_Tag_Aggregate = {
  __typename?: 'product_tag_aggregate';
  aggregate?: Maybe<Product_Tag_Aggregate_Fields>;
  nodes: Array<Product_Tag>;
};

/** aggregate fields of "product_tag" */
export type Product_Tag_Aggregate_Fields = {
  __typename?: 'product_tag_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Product_Tag_Max_Fields>;
  min?: Maybe<Product_Tag_Min_Fields>;
};


/** aggregate fields of "product_tag" */
export type Product_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_tag" */
export type Product_Tag_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Tag_Max_Order_By>;
  min?: Maybe<Product_Tag_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_tag" */
export type Product_Tag_Arr_Rel_Insert_Input = {
  data: Array<Product_Tag_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Product_Tag_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_tag". All fields are combined with a logical 'AND'. */
export type Product_Tag_Bool_Exp = {
  _and?: Maybe<Array<Product_Tag_Bool_Exp>>;
  _not?: Maybe<Product_Tag_Bool_Exp>;
  _or?: Maybe<Array<Product_Tag_Bool_Exp>>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  tag?: Maybe<Tags_Bool_Exp>;
  tag_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_tag" */
export enum Product_Tag_Constraint {
  /** unique or primary key constraint */
  ProductTagPkey = 'product_tag_pkey'
}

/** input type for inserting data into table "product_tag" */
export type Product_Tag_Insert_Input = {
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Tags_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Tag_Max_Fields = {
  __typename?: 'product_tag_max_fields';
  product_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product_tag" */
export type Product_Tag_Max_Order_By = {
  product_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Tag_Min_Fields = {
  __typename?: 'product_tag_min_fields';
  product_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product_tag" */
export type Product_Tag_Min_Order_By = {
  product_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "product_tag" */
export type Product_Tag_Mutation_Response = {
  __typename?: 'product_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Tag>;
};

/** on conflict condition type for table "product_tag" */
export type Product_Tag_On_Conflict = {
  constraint: Product_Tag_Constraint;
  update_columns?: Array<Product_Tag_Update_Column>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "product_tag". */
export type Product_Tag_Order_By = {
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  tag?: Maybe<Tags_Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** primary key columns input for table: product_tag */
export type Product_Tag_Pk_Columns_Input = {
  product_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

/** select columns of table "product_tag" */
export enum Product_Tag_Select_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "product_tag" */
export type Product_Tag_Set_Input = {
  product_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product_tag" */
export enum Product_Tag_Update_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  TagId = 'tag_id'
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  additional_info?: Maybe<Scalars['String']>;
  can_be_bought_with_food_voucher: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  indications?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  is_alcohol: Scalars['Boolean'];
  is_bio: Scalars['Boolean'];
  keywords?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  product_favorite_users: Array<User_Favorite_Product>;
  /** An aggregate relationship */
  product_favorite_users_aggregate: User_Favorite_Product_Aggregate;
  /** An array relationship */
  product_properties: Array<Product_Properties>;
  /** An aggregate relationship */
  product_properties_aggregate: Product_Properties_Aggregate;
  /** An array relationship */
  product_subcategories: Array<Product_Subcategory>;
  /** An aggregate relationship */
  product_subcategories_aggregate: Product_Subcategory_Aggregate;
  /** An array relationship */
  product_tags: Array<Product_Tag>;
  /** An aggregate relationship */
  product_tags_aggregate: Product_Tag_Aggregate;
  sku?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  tva_rate: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
  weight?: Maybe<Scalars['numeric']>;
};


/** columns and relationships of "products" */
export type ProductsInventory_ProductsArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsInventory_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_ItemsArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Favorite_UsersArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Favorite_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_PropertiesArgs = {
  distinct_on?: Maybe<Array<Product_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Properties_Order_By>>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Properties_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Properties_Order_By>>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_SubcategoriesArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Subcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_TagsArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  additional_info?: Maybe<String_Comparison_Exp>;
  can_be_bought_with_food_voucher?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  indications?: Maybe<String_Comparison_Exp>;
  ingredients?: Maybe<String_Comparison_Exp>;
  inventory_products?: Maybe<Inventory_Products_Bool_Exp>;
  is_alcohol?: Maybe<Boolean_Comparison_Exp>;
  is_bio?: Maybe<Boolean_Comparison_Exp>;
  keywords?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  order_items?: Maybe<Order_Items_Bool_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  product_favorite_users?: Maybe<User_Favorite_Product_Bool_Exp>;
  product_properties?: Maybe<Product_Properties_Bool_Exp>;
  product_subcategories?: Maybe<Product_Subcategory_Bool_Exp>;
  product_tags?: Maybe<Product_Tag_Bool_Exp>;
  sku?: Maybe<String_Comparison_Exp>;
  static_picture?: Maybe<String_Comparison_Exp>;
  tva_rate?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey',
  /** unique or primary key constraint */
  ProductsSkuKey = 'products_sku_key'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  tva_rate?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  additional_info?: Maybe<Scalars['String']>;
  can_be_bought_with_food_voucher?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  indications?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  inventory_products?: Maybe<Inventory_Products_Arr_Rel_Insert_Input>;
  is_alcohol?: Maybe<Scalars['Boolean']>;
  is_bio?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order_items?: Maybe<Order_Items_Arr_Rel_Insert_Input>;
  picture?: Maybe<Scalars['String']>;
  product_favorite_users?: Maybe<User_Favorite_Product_Arr_Rel_Insert_Input>;
  product_properties?: Maybe<Product_Properties_Arr_Rel_Insert_Input>;
  product_subcategories?: Maybe<Product_Subcategory_Arr_Rel_Insert_Input>;
  product_tags?: Maybe<Product_Tag_Arr_Rel_Insert_Input>;
  sku?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  tva_rate?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  additional_info?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  indications?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  tva_rate?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  additional_info?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  indications?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  tva_rate?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  additional_info?: Maybe<Order_By>;
  can_be_bought_with_food_voucher?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  indications?: Maybe<Order_By>;
  ingredients?: Maybe<Order_By>;
  inventory_products_aggregate?: Maybe<Inventory_Products_Aggregate_Order_By>;
  is_alcohol?: Maybe<Order_By>;
  is_bio?: Maybe<Order_By>;
  keywords?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order_items_aggregate?: Maybe<Order_Items_Aggregate_Order_By>;
  picture?: Maybe<Order_By>;
  product_favorite_users_aggregate?: Maybe<User_Favorite_Product_Aggregate_Order_By>;
  product_properties_aggregate?: Maybe<Product_Properties_Aggregate_Order_By>;
  product_subcategories_aggregate?: Maybe<Product_Subcategory_Aggregate_Order_By>;
  product_tags_aggregate?: Maybe<Product_Tag_Aggregate_Order_By>;
  sku?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  tva_rate?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  AdditionalInfo = 'additional_info',
  /** column name */
  CanBeBoughtWithFoodVoucher = 'can_be_bought_with_food_voucher',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Indications = 'indications',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  IsAlcohol = 'is_alcohol',
  /** column name */
  IsBio = 'is_bio',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Sku = 'sku',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  TvaRate = 'tva_rate',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  additional_info?: Maybe<Scalars['String']>;
  can_be_bought_with_food_voucher?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  indications?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  is_alcohol?: Maybe<Scalars['Boolean']>;
  is_bio?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  tva_rate?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  tva_rate?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  AdditionalInfo = 'additional_info',
  /** column name */
  CanBeBoughtWithFoodVoucher = 'can_be_bought_with_food_voucher',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Indications = 'indications',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  IsAlcohol = 'is_alcohol',
  /** column name */
  IsBio = 'is_bio',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Sku = 'sku',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  TvaRate = 'tva_rate',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  tva_rate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "address_label" */
  address_label: Array<Address_Label>;
  /** fetch aggregated fields from the table: "address_label" */
  address_label_aggregate: Address_Label_Aggregate;
  /** fetch data from the table: "address_label" using primary key columns */
  address_label_by_pk?: Maybe<Address_Label>;
  /** fetch data from the table: "banners" */
  banners: Array<Banners>;
  /** fetch aggregated fields from the table: "banners" */
  banners_aggregate: Banners_Aggregate;
  /** fetch data from the table: "banners" using primary key columns */
  banners_by_pk?: Maybe<Banners>;
  /** fetch data from the table: "cart_items" */
  cart_items: Array<Cart_Items>;
  /** fetch aggregated fields from the table: "cart_items" */
  cart_items_aggregate: Cart_Items_Aggregate;
  /** fetch data from the table: "cart_items" using primary key columns */
  cart_items_by_pk?: Maybe<Cart_Items>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "consent_type" */
  consent_type: Array<Consent_Type>;
  /** fetch aggregated fields from the table: "consent_type" */
  consent_type_aggregate: Consent_Type_Aggregate;
  /** fetch data from the table: "consent_type" using primary key columns */
  consent_type_by_pk?: Maybe<Consent_Type>;
  /** fetch data from the table: "coupon_category" */
  coupon_category: Array<Coupon_Category>;
  /** fetch aggregated fields from the table: "coupon_category" */
  coupon_category_aggregate: Coupon_Category_Aggregate;
  /** fetch data from the table: "coupon_category" using primary key columns */
  coupon_category_by_pk?: Maybe<Coupon_Category>;
  /** fetch data from the table: "coupon_tag" */
  coupon_tag: Array<Coupon_Tag>;
  /** fetch aggregated fields from the table: "coupon_tag" */
  coupon_tag_aggregate: Coupon_Tag_Aggregate;
  /** fetch data from the table: "coupon_tag" using primary key columns */
  coupon_tag_by_pk?: Maybe<Coupon_Tag>;
  /** fetch data from the table: "coupon_user_group" */
  coupon_user_group: Array<Coupon_User_Group>;
  /** fetch aggregated fields from the table: "coupon_user_group" */
  coupon_user_group_aggregate: Coupon_User_Group_Aggregate;
  /** fetch data from the table: "coupon_user_group" using primary key columns */
  coupon_user_group_by_pk?: Maybe<Coupon_User_Group>;
  /** fetch data from the table: "coupons" */
  coupons: Array<Coupons>;
  /** fetch aggregated fields from the table: "coupons" */
  coupons_aggregate: Coupons_Aggregate;
  /** fetch data from the table: "coupons" using primary key columns */
  coupons_by_pk?: Maybe<Coupons>;
  /** An array relationship */
  deliveries: Array<Deliveries>;
  /** An aggregate relationship */
  deliveries_aggregate: Deliveries_Aggregate;
  /** fetch data from the table: "deliveries" using primary key columns */
  deliveries_by_pk?: Maybe<Deliveries>;
  /** fetch data from the table: "deliveries_group" */
  deliveries_group: Array<Deliveries_Group>;
  /** fetch aggregated fields from the table: "deliveries_group" */
  deliveries_group_aggregate: Deliveries_Group_Aggregate;
  /** fetch data from the table: "deliveries_group" using primary key columns */
  deliveries_group_by_pk?: Maybe<Deliveries_Group>;
  /** fetch data from the table: "delivery_feedbacks" */
  delivery_feedbacks: Array<Delivery_Feedbacks>;
  /** fetch aggregated fields from the table: "delivery_feedbacks" */
  delivery_feedbacks_aggregate: Delivery_Feedbacks_Aggregate;
  /** fetch data from the table: "delivery_feedbacks" using primary key columns */
  delivery_feedbacks_by_pk?: Maybe<Delivery_Feedbacks>;
  /** fetch data from the table: "delivery_method" */
  delivery_method: Array<Delivery_Method>;
  /** fetch aggregated fields from the table: "delivery_method" */
  delivery_method_aggregate: Delivery_Method_Aggregate;
  /** fetch data from the table: "delivery_method" using primary key columns */
  delivery_method_by_pk?: Maybe<Delivery_Method>;
  /** fetch data from the table: "delivery_status" */
  delivery_status: Array<Delivery_Status>;
  /** fetch aggregated fields from the table: "delivery_status" */
  delivery_status_aggregate: Delivery_Status_Aggregate;
  /** fetch data from the table: "delivery_status" using primary key columns */
  delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** fetch data from the table: "discount_type" */
  discount_type: Array<Discount_Type>;
  /** fetch aggregated fields from the table: "discount_type" */
  discount_type_aggregate: Discount_Type_Aggregate;
  /** fetch data from the table: "discount_type" using primary key columns */
  discount_type_by_pk?: Maybe<Discount_Type>;
  /** An array relationship */
  discounts: Array<Discounts>;
  /** An aggregate relationship */
  discounts_aggregate: Discounts_Aggregate;
  /** fetch data from the table: "discounts" using primary key columns */
  discounts_by_pk?: Maybe<Discounts>;
  /** fetch data from the table: "feedback_answer" */
  feedback_answer: Array<Feedback_Answer>;
  /** fetch aggregated fields from the table: "feedback_answer" */
  feedback_answer_aggregate: Feedback_Answer_Aggregate;
  /** fetch data from the table: "feedback_answer" using primary key columns */
  feedback_answer_by_pk?: Maybe<Feedback_Answer>;
  getUserWarehouseDeliveryETA?: Maybe<DeliveryEtaOutput>;
  /** fetch data from the table: "gift_rules" */
  gift_rules: Array<Gift_Rules>;
  /** fetch aggregated fields from the table: "gift_rules" */
  gift_rules_aggregate: Gift_Rules_Aggregate;
  /** fetch data from the table: "gift_rules" using primary key columns */
  gift_rules_by_pk?: Maybe<Gift_Rules>;
  /** fetch data from the table: "gift_rules_category" */
  gift_rules_category: Array<Gift_Rules_Category>;
  /** fetch aggregated fields from the table: "gift_rules_category" */
  gift_rules_category_aggregate: Gift_Rules_Category_Aggregate;
  /** fetch data from the table: "gift_rules_category" using primary key columns */
  gift_rules_category_by_pk?: Maybe<Gift_Rules_Category>;
  /** fetch data from the table: "gift_rules_product" */
  gift_rules_product: Array<Gift_Rules_Product>;
  /** fetch aggregated fields from the table: "gift_rules_product" */
  gift_rules_product_aggregate: Gift_Rules_Product_Aggregate;
  /** fetch data from the table: "gift_rules_product" using primary key columns */
  gift_rules_product_by_pk?: Maybe<Gift_Rules_Product>;
  /** fetch data from the table: "gift_rules_warehouse" */
  gift_rules_warehouse: Array<Gift_Rules_Warehouse>;
  /** fetch aggregated fields from the table: "gift_rules_warehouse" */
  gift_rules_warehouse_aggregate: Gift_Rules_Warehouse_Aggregate;
  /** fetch data from the table: "gift_rules_warehouse" using primary key columns */
  gift_rules_warehouse_by_pk?: Maybe<Gift_Rules_Warehouse>;
  /** fetch data from the table: "gifts" */
  gifts: Array<Gifts>;
  /** fetch aggregated fields from the table: "gifts" */
  gifts_aggregate: Gifts_Aggregate;
  /** fetch data from the table: "gifts" using primary key columns */
  gifts_by_pk?: Maybe<Gifts>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  /** fetch data from the table: "inventory_products" using primary key columns */
  inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** fetch data from the table: "log_operator_events" */
  log_operator_events: Array<Log_Operator_Events>;
  /** fetch aggregated fields from the table: "log_operator_events" */
  log_operator_events_aggregate: Log_Operator_Events_Aggregate;
  /** fetch data from the table: "log_operator_events" using primary key columns */
  log_operator_events_by_pk?: Maybe<Log_Operator_Events>;
  /** fetch data from the table: "operation_rule_handle" */
  operation_rule_handle: Array<Operation_Rule_Handle>;
  /** fetch aggregated fields from the table: "operation_rule_handle" */
  operation_rule_handle_aggregate: Operation_Rule_Handle_Aggregate;
  /** fetch data from the table: "operation_rule_handle" using primary key columns */
  operation_rule_handle_by_pk?: Maybe<Operation_Rule_Handle>;
  /** fetch data from the table: "operation_rules" */
  operation_rules: Array<Operation_Rules>;
  /** fetch aggregated fields from the table: "operation_rules" */
  operation_rules_aggregate: Operation_Rules_Aggregate;
  /** fetch data from the table: "operation_rules" using primary key columns */
  operation_rules_by_pk?: Maybe<Operation_Rules>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "payment_method" */
  payment_method: Array<Payment_Method>;
  /** fetch aggregated fields from the table: "payment_method" */
  payment_method_aggregate: Payment_Method_Aggregate;
  /** fetch data from the table: "payment_method" using primary key columns */
  payment_method_by_pk?: Maybe<Payment_Method>;
  /** fetch data from the table: "payment_status" */
  payment_status: Array<Payment_Status>;
  /** fetch aggregated fields from the table: "payment_status" */
  payment_status_aggregate: Payment_Status_Aggregate;
  /** fetch data from the table: "payment_status" using primary key columns */
  payment_status_by_pk?: Maybe<Payment_Status>;
  /** fetch data from the table: "popular_searches" */
  popular_searches: Array<Popular_Searches>;
  /** fetch aggregated fields from the table: "popular_searches" */
  popular_searches_aggregate: Popular_Searches_Aggregate;
  /** fetch data from the table: "popular_searches" using primary key columns */
  popular_searches_by_pk?: Maybe<Popular_Searches>;
  /** An array relationship */
  product_properties: Array<Product_Properties>;
  /** An aggregate relationship */
  product_properties_aggregate: Product_Properties_Aggregate;
  /** fetch data from the table: "product_properties" using primary key columns */
  product_properties_by_pk?: Maybe<Product_Properties>;
  /** fetch data from the table: "product_subcategory" */
  product_subcategory: Array<Product_Subcategory>;
  /** fetch aggregated fields from the table: "product_subcategory" */
  product_subcategory_aggregate: Product_Subcategory_Aggregate;
  /** fetch data from the table: "product_subcategory" using primary key columns */
  product_subcategory_by_pk?: Maybe<Product_Subcategory>;
  /** fetch data from the table: "product_suggestions" */
  product_suggestions: Array<Product_Suggestions>;
  /** fetch aggregated fields from the table: "product_suggestions" */
  product_suggestions_aggregate: Product_Suggestions_Aggregate;
  /** fetch data from the table: "product_suggestions" using primary key columns */
  product_suggestions_by_pk?: Maybe<Product_Suggestions>;
  /** fetch data from the table: "product_tag" */
  product_tag: Array<Product_Tag>;
  /** fetch aggregated fields from the table: "product_tag" */
  product_tag_aggregate: Product_Tag_Aggregate;
  /** fetch data from the table: "product_tag" using primary key columns */
  product_tag_by_pk?: Maybe<Product_Tag>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "rider_status" */
  rider_status: Array<Rider_Status>;
  /** fetch aggregated fields from the table: "rider_status" */
  rider_status_aggregate: Rider_Status_Aggregate;
  /** fetch data from the table: "rider_status" using primary key columns */
  rider_status_by_pk?: Maybe<Rider_Status>;
  /** fetch data from the table: "riders" */
  riders: Array<Riders>;
  /** fetch aggregated fields from the table: "riders" */
  riders_aggregate: Riders_Aggregate;
  /** fetch data from the table: "riders" using primary key columns */
  riders_by_pk?: Maybe<Riders>;
  /** fetch data from the table: "role_type" */
  role_type: Array<Role_Type>;
  /** fetch aggregated fields from the table: "role_type" */
  role_type_aggregate: Role_Type_Aggregate;
  /** fetch data from the table: "role_type" using primary key columns */
  role_type_by_pk?: Maybe<Role_Type>;
  /** execute function "search_products" which returns "products" */
  search_products: Array<Products>;
  /** execute function "search_products" and query aggregates on result of table type "products" */
  search_products_aggregate: Products_Aggregate;
  /** fetch data from the table: "staff_users" */
  staff_users: Array<Staff_Users>;
  /** fetch aggregated fields from the table: "staff_users" */
  staff_users_aggregate: Staff_Users_Aggregate;
  /** fetch data from the table: "staff_users" using primary key columns */
  staff_users_by_pk?: Maybe<Staff_Users>;
  /** fetch data from the table: "store_category" */
  store_category: Array<Store_Category>;
  /** fetch aggregated fields from the table: "store_category" */
  store_category_aggregate: Store_Category_Aggregate;
  /** fetch data from the table: "store_category" using primary key columns */
  store_category_by_pk?: Maybe<Store_Category>;
  /** An array relationship */
  store_hours: Array<Store_Hours>;
  /** An aggregate relationship */
  store_hours_aggregate: Store_Hours_Aggregate;
  /** fetch data from the table: "store_hours" using primary key columns */
  store_hours_by_pk?: Maybe<Store_Hours>;
  /** An array relationship */
  store_products: Array<Store_Products>;
  /** An aggregate relationship */
  store_products_aggregate: Store_Products_Aggregate;
  /** fetch data from the table: "store_products" using primary key columns */
  store_products_by_pk?: Maybe<Store_Products>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  stripe_user?: Maybe<StripeUser>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** fetch data from the table: "system_information" */
  system_information: Array<System_Information>;
  /** fetch aggregated fields from the table: "system_information" */
  system_information_aggregate: System_Information_Aggregate;
  /** fetch data from the table: "system_information" using primary key columns */
  system_information_by_pk?: Maybe<System_Information>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "transporter_criterias" */
  transporter_criterias: Array<Transporter_Criterias>;
  /** fetch aggregated fields from the table: "transporter_criterias" */
  transporter_criterias_aggregate: Transporter_Criterias_Aggregate;
  /** fetch data from the table: "transporter_criterias" using primary key columns */
  transporter_criterias_by_pk?: Maybe<Transporter_Criterias>;
  /** fetch data from the table: "transports" */
  transports: Array<Transports>;
  /** fetch aggregated fields from the table: "transports" */
  transports_aggregate: Transports_Aggregate;
  /** fetch data from the table: "transports" using primary key columns */
  transports_by_pk?: Maybe<Transports>;
  /** An array relationship */
  user_addresses: Array<User_Addresses>;
  /** An aggregate relationship */
  user_addresses_aggregate: User_Addresses_Aggregate;
  /** fetch data from the table: "user_addresses" using primary key columns */
  user_addresses_by_pk?: Maybe<User_Addresses>;
  /** An array relationship */
  user_consents: Array<User_Consents>;
  /** An aggregate relationship */
  user_consents_aggregate: User_Consents_Aggregate;
  /** fetch data from the table: "user_consents" using primary key columns */
  user_consents_by_pk?: Maybe<User_Consents>;
  /** fetch data from the table: "user_coupon" */
  user_coupon: Array<User_Coupon>;
  /** fetch aggregated fields from the table: "user_coupon" */
  user_coupon_aggregate: User_Coupon_Aggregate;
  /** fetch data from the table: "user_coupon" using primary key columns */
  user_coupon_by_pk?: Maybe<User_Coupon>;
  /** fetch data from the table: "user_favorite_product" */
  user_favorite_product: Array<User_Favorite_Product>;
  /** fetch aggregated fields from the table: "user_favorite_product" */
  user_favorite_product_aggregate: User_Favorite_Product_Aggregate;
  /** fetch data from the table: "user_favorite_product" using primary key columns */
  user_favorite_product_by_pk?: Maybe<User_Favorite_Product>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "warehouse_category" */
  warehouse_category: Array<Warehouse_Category>;
  /** fetch aggregated fields from the table: "warehouse_category" */
  warehouse_category_aggregate: Warehouse_Category_Aggregate;
  /** fetch data from the table: "warehouse_category" using primary key columns */
  warehouse_category_by_pk?: Maybe<Warehouse_Category>;
  /** An array relationship */
  warehouse_hours: Array<Warehouse_Hours>;
  /** An aggregate relationship */
  warehouse_hours_aggregate: Warehouse_Hours_Aggregate;
  /** fetch data from the table: "warehouse_hours" using primary key columns */
  warehouse_hours_by_pk?: Maybe<Warehouse_Hours>;
  /** fetch data from the table: "warehouse_operation_rule" */
  warehouse_operation_rule: Array<Warehouse_Operation_Rule>;
  /** fetch aggregated fields from the table: "warehouse_operation_rule" */
  warehouse_operation_rule_aggregate: Warehouse_Operation_Rule_Aggregate;
  /** fetch data from the table: "warehouse_operation_rule" using primary key columns */
  warehouse_operation_rule_by_pk?: Maybe<Warehouse_Operation_Rule>;
  /** fetch data from the table: "warehouse_status" */
  warehouse_status: Array<Warehouse_Status>;
  /** fetch aggregated fields from the table: "warehouse_status" */
  warehouse_status_aggregate: Warehouse_Status_Aggregate;
  /** fetch data from the table: "warehouse_status" using primary key columns */
  warehouse_status_by_pk?: Maybe<Warehouse_Status>;
  /** fetch data from the table: "warehouse_user_address" */
  warehouse_user_address: Array<Warehouse_User_Address>;
  /** fetch aggregated fields from the table: "warehouse_user_address" */
  warehouse_user_address_aggregate: Warehouse_User_Address_Aggregate;
  /** fetch data from the table: "warehouse_user_address" using primary key columns */
  warehouse_user_address_by_pk?: Maybe<Warehouse_User_Address>;
  /** fetch data from the table: "warehouses" */
  warehouses: Array<Warehouses>;
  /** fetch aggregated fields from the table: "warehouses" */
  warehouses_aggregate: Warehouses_Aggregate;
  /** fetch data from the table: "warehouses" using primary key columns */
  warehouses_by_pk?: Maybe<Warehouses>;
  /** fetch data from the table: "warehouses_text" */
  warehouses_text: Array<Warehouses_Text>;
  /** fetch aggregated fields from the table: "warehouses_text" */
  warehouses_text_aggregate: Warehouses_Text_Aggregate;
};


export type Query_RootAddress_LabelArgs = {
  distinct_on?: Maybe<Array<Address_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Label_Order_By>>;
  where?: Maybe<Address_Label_Bool_Exp>;
};


export type Query_RootAddress_Label_AggregateArgs = {
  distinct_on?: Maybe<Array<Address_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Label_Order_By>>;
  where?: Maybe<Address_Label_Bool_Exp>;
};


export type Query_RootAddress_Label_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootBannersArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


export type Query_RootBanners_AggregateArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


export type Query_RootBanners_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCart_ItemsArgs = {
  distinct_on?: Maybe<Array<Cart_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Items_Order_By>>;
  where?: Maybe<Cart_Items_Bool_Exp>;
};


export type Query_RootCart_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Items_Order_By>>;
  where?: Maybe<Cart_Items_Bool_Exp>;
};


export type Query_RootCart_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootConsent_TypeArgs = {
  distinct_on?: Maybe<Array<Consent_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Consent_Type_Order_By>>;
  where?: Maybe<Consent_Type_Bool_Exp>;
};


export type Query_RootConsent_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Consent_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Consent_Type_Order_By>>;
  where?: Maybe<Consent_Type_Bool_Exp>;
};


export type Query_RootConsent_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCoupon_CategoryArgs = {
  distinct_on?: Maybe<Array<Coupon_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Category_Order_By>>;
  where?: Maybe<Coupon_Category_Bool_Exp>;
};


export type Query_RootCoupon_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Category_Order_By>>;
  where?: Maybe<Coupon_Category_Bool_Exp>;
};


export type Query_RootCoupon_Category_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCoupon_TagArgs = {
  distinct_on?: Maybe<Array<Coupon_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Tag_Order_By>>;
  where?: Maybe<Coupon_Tag_Bool_Exp>;
};


export type Query_RootCoupon_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Tag_Order_By>>;
  where?: Maybe<Coupon_Tag_Bool_Exp>;
};


export type Query_RootCoupon_Tag_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCoupon_User_GroupArgs = {
  distinct_on?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_User_Group_Order_By>>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};


export type Query_RootCoupon_User_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_User_Group_Order_By>>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};


export type Query_RootCoupon_User_Group_By_PkArgs = {
  coupon_code: Scalars['String'];
  group_id: Scalars['uuid'];
};


export type Query_RootCouponsArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


export type Query_RootCoupons_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


export type Query_RootCoupons_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


export type Query_RootDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


export type Query_RootDeliveries_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeliveries_GroupArgs = {
  distinct_on?: Maybe<Array<Deliveries_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Group_Order_By>>;
  where?: Maybe<Deliveries_Group_Bool_Exp>;
};


export type Query_RootDeliveries_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Group_Order_By>>;
  where?: Maybe<Deliveries_Group_Bool_Exp>;
};


export type Query_RootDeliveries_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDelivery_FeedbacksArgs = {
  distinct_on?: Maybe<Array<Delivery_Feedbacks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Feedbacks_Order_By>>;
  where?: Maybe<Delivery_Feedbacks_Bool_Exp>;
};


export type Query_RootDelivery_Feedbacks_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Feedbacks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Feedbacks_Order_By>>;
  where?: Maybe<Delivery_Feedbacks_Bool_Exp>;
};


export type Query_RootDelivery_Feedbacks_By_PkArgs = {
  order_id: Scalars['uuid'];
};


export type Query_RootDelivery_MethodArgs = {
  distinct_on?: Maybe<Array<Delivery_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Method_Order_By>>;
  where?: Maybe<Delivery_Method_Bool_Exp>;
};


export type Query_RootDelivery_Method_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Method_Order_By>>;
  where?: Maybe<Delivery_Method_Bool_Exp>;
};


export type Query_RootDelivery_Method_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDelivery_StatusArgs = {
  distinct_on?: Maybe<Array<Delivery_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Status_Order_By>>;
  where?: Maybe<Delivery_Status_Bool_Exp>;
};


export type Query_RootDelivery_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Status_Order_By>>;
  where?: Maybe<Delivery_Status_Bool_Exp>;
};


export type Query_RootDelivery_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDiscount_TypeArgs = {
  distinct_on?: Maybe<Array<Discount_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discount_Type_Order_By>>;
  where?: Maybe<Discount_Type_Bool_Exp>;
};


export type Query_RootDiscount_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Discount_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discount_Type_Order_By>>;
  where?: Maybe<Discount_Type_Bool_Exp>;
};


export type Query_RootDiscount_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDiscountsArgs = {
  distinct_on?: Maybe<Array<Discounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discounts_Order_By>>;
  where?: Maybe<Discounts_Bool_Exp>;
};


export type Query_RootDiscounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Discounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discounts_Order_By>>;
  where?: Maybe<Discounts_Bool_Exp>;
};


export type Query_RootDiscounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFeedback_AnswerArgs = {
  distinct_on?: Maybe<Array<Feedback_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feedback_Answer_Order_By>>;
  where?: Maybe<Feedback_Answer_Bool_Exp>;
};


export type Query_RootFeedback_Answer_AggregateArgs = {
  distinct_on?: Maybe<Array<Feedback_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feedback_Answer_Order_By>>;
  where?: Maybe<Feedback_Answer_Bool_Exp>;
};


export type Query_RootFeedback_Answer_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGetUserWarehouseDeliveryEtaArgs = {
  address_id: Scalars['uuid'];
  precision?: Maybe<Precision>;
  warehouse_id: Scalars['uuid'];
};


export type Query_RootGift_RulesArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Order_By>>;
  where?: Maybe<Gift_Rules_Bool_Exp>;
};


export type Query_RootGift_Rules_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Order_By>>;
  where?: Maybe<Gift_Rules_Bool_Exp>;
};


export type Query_RootGift_Rules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGift_Rules_CategoryArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Category_Order_By>>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};


export type Query_RootGift_Rules_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Category_Order_By>>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};


export type Query_RootGift_Rules_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  gift_rules_id: Scalars['uuid'];
};


export type Query_RootGift_Rules_ProductArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Product_Order_By>>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};


export type Query_RootGift_Rules_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Product_Order_By>>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};


export type Query_RootGift_Rules_Product_By_PkArgs = {
  gift_rules_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};


export type Query_RootGift_Rules_WarehouseArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Warehouse_Order_By>>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};


export type Query_RootGift_Rules_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Warehouse_Order_By>>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};


export type Query_RootGift_Rules_Warehouse_By_PkArgs = {
  gift_rules_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Query_RootGiftsArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gifts_Order_By>>;
  where?: Maybe<Gifts_Bool_Exp>;
};


export type Query_RootGifts_AggregateArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gifts_Order_By>>;
  where?: Maybe<Gifts_Bool_Exp>;
};


export type Query_RootGifts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInventory_ProductsArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


export type Query_RootInventory_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


export type Query_RootInventory_Products_By_PkArgs = {
  product_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Query_RootLog_Operator_EventsArgs = {
  distinct_on?: Maybe<Array<Log_Operator_Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Operator_Events_Order_By>>;
  where?: Maybe<Log_Operator_Events_Bool_Exp>;
};


export type Query_RootLog_Operator_Events_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Operator_Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Operator_Events_Order_By>>;
  where?: Maybe<Log_Operator_Events_Bool_Exp>;
};


export type Query_RootLog_Operator_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOperation_Rule_HandleArgs = {
  distinct_on?: Maybe<Array<Operation_Rule_Handle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rule_Handle_Order_By>>;
  where?: Maybe<Operation_Rule_Handle_Bool_Exp>;
};


export type Query_RootOperation_Rule_Handle_AggregateArgs = {
  distinct_on?: Maybe<Array<Operation_Rule_Handle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rule_Handle_Order_By>>;
  where?: Maybe<Operation_Rule_Handle_Bool_Exp>;
};


export type Query_RootOperation_Rule_Handle_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootOperation_RulesArgs = {
  distinct_on?: Maybe<Array<Operation_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rules_Order_By>>;
  where?: Maybe<Operation_Rules_Bool_Exp>;
};


export type Query_RootOperation_Rules_AggregateArgs = {
  distinct_on?: Maybe<Array<Operation_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rules_Order_By>>;
  where?: Maybe<Operation_Rules_Bool_Exp>;
};


export type Query_RootOperation_Rules_By_PkArgs = {
  handle: Operation_Rule_Handle_Enum;
};


export type Query_RootOrder_ItemsArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrder_StatusArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPayment_MethodArgs = {
  distinct_on?: Maybe<Array<Payment_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Method_Order_By>>;
  where?: Maybe<Payment_Method_Bool_Exp>;
};


export type Query_RootPayment_Method_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Method_Order_By>>;
  where?: Maybe<Payment_Method_Bool_Exp>;
};


export type Query_RootPayment_Method_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootPayment_StatusArgs = {
  distinct_on?: Maybe<Array<Payment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Status_Order_By>>;
  where?: Maybe<Payment_Status_Bool_Exp>;
};


export type Query_RootPayment_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Status_Order_By>>;
  where?: Maybe<Payment_Status_Bool_Exp>;
};


export type Query_RootPayment_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootPopular_SearchesArgs = {
  distinct_on?: Maybe<Array<Popular_Searches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Popular_Searches_Order_By>>;
  where?: Maybe<Popular_Searches_Bool_Exp>;
};


export type Query_RootPopular_Searches_AggregateArgs = {
  distinct_on?: Maybe<Array<Popular_Searches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Popular_Searches_Order_By>>;
  where?: Maybe<Popular_Searches_Bool_Exp>;
};


export type Query_RootPopular_Searches_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProduct_PropertiesArgs = {
  distinct_on?: Maybe<Array<Product_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Properties_Order_By>>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};


export type Query_RootProduct_Properties_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Properties_Order_By>>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};


export type Query_RootProduct_Properties_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProduct_SubcategoryArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


export type Query_RootProduct_Subcategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


export type Query_RootProduct_Subcategory_By_PkArgs = {
  product_id: Scalars['uuid'];
  subcategory_id: Scalars['uuid'];
};


export type Query_RootProduct_SuggestionsArgs = {
  distinct_on?: Maybe<Array<Product_Suggestions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Suggestions_Order_By>>;
  where?: Maybe<Product_Suggestions_Bool_Exp>;
};


export type Query_RootProduct_Suggestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Suggestions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Suggestions_Order_By>>;
  where?: Maybe<Product_Suggestions_Bool_Exp>;
};


export type Query_RootProduct_Suggestions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProduct_TagArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};


export type Query_RootProduct_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};


export type Query_RootProduct_Tag_By_PkArgs = {
  product_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};


export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRider_StatusArgs = {
  distinct_on?: Maybe<Array<Rider_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rider_Status_Order_By>>;
  where?: Maybe<Rider_Status_Bool_Exp>;
};


export type Query_RootRider_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Rider_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rider_Status_Order_By>>;
  where?: Maybe<Rider_Status_Bool_Exp>;
};


export type Query_RootRider_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootRidersArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


export type Query_RootRiders_AggregateArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


export type Query_RootRiders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRole_TypeArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


export type Query_RootRole_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


export type Query_RootRole_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSearch_ProductsArgs = {
  args: Search_Products_Args;
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootSearch_Products_AggregateArgs = {
  args: Search_Products_Args;
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootStaff_UsersArgs = {
  distinct_on?: Maybe<Array<Staff_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staff_Users_Order_By>>;
  where?: Maybe<Staff_Users_Bool_Exp>;
};


export type Query_RootStaff_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Staff_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staff_Users_Order_By>>;
  where?: Maybe<Staff_Users_Bool_Exp>;
};


export type Query_RootStaff_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStore_CategoryArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


export type Query_RootStore_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


export type Query_RootStore_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};


export type Query_RootStore_HoursArgs = {
  distinct_on?: Maybe<Array<Store_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Hours_Order_By>>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};


export type Query_RootStore_Hours_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Hours_Order_By>>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};


export type Query_RootStore_Hours_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStore_ProductsArgs = {
  distinct_on?: Maybe<Array<Store_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Products_Order_By>>;
  where?: Maybe<Store_Products_Bool_Exp>;
};


export type Query_RootStore_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Products_Order_By>>;
  where?: Maybe<Store_Products_Bool_Exp>;
};


export type Query_RootStore_Products_By_PkArgs = {
  inventory_product_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};


export type Query_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


export type Query_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


export type Query_RootStores_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStripe_UserArgs = {
  stripe_customer_id: Scalars['String'];
};


export type Query_RootSubcategoriesArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Query_RootSubcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Query_RootSubcategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSystem_InformationArgs = {
  distinct_on?: Maybe<Array<System_Information_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<System_Information_Order_By>>;
  where?: Maybe<System_Information_Bool_Exp>;
};


export type Query_RootSystem_Information_AggregateArgs = {
  distinct_on?: Maybe<Array<System_Information_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<System_Information_Order_By>>;
  where?: Maybe<System_Information_Bool_Exp>;
};


export type Query_RootSystem_Information_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


export type Query_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransporter_CriteriasArgs = {
  distinct_on?: Maybe<Array<Transporter_Criterias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transporter_Criterias_Order_By>>;
  where?: Maybe<Transporter_Criterias_Bool_Exp>;
};


export type Query_RootTransporter_Criterias_AggregateArgs = {
  distinct_on?: Maybe<Array<Transporter_Criterias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transporter_Criterias_Order_By>>;
  where?: Maybe<Transporter_Criterias_Bool_Exp>;
};


export type Query_RootTransporter_Criterias_By_PkArgs = {
  transport_mode: Scalars['String'];
  transporter_name: Delivery_Method_Enum;
};


export type Query_RootTransportsArgs = {
  distinct_on?: Maybe<Array<Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transports_Order_By>>;
  where?: Maybe<Transports_Bool_Exp>;
};


export type Query_RootTransports_AggregateArgs = {
  distinct_on?: Maybe<Array<Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transports_Order_By>>;
  where?: Maybe<Transports_Bool_Exp>;
};


export type Query_RootTransports_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUser_AddressesArgs = {
  distinct_on?: Maybe<Array<User_Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Addresses_Order_By>>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};


export type Query_RootUser_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Addresses_Order_By>>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};


export type Query_RootUser_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_ConsentsArgs = {
  distinct_on?: Maybe<Array<User_Consents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Consents_Order_By>>;
  where?: Maybe<User_Consents_Bool_Exp>;
};


export type Query_RootUser_Consents_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Consents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Consents_Order_By>>;
  where?: Maybe<User_Consents_Bool_Exp>;
};


export type Query_RootUser_Consents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_CouponArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


export type Query_RootUser_Coupon_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


export type Query_RootUser_Coupon_By_PkArgs = {
  coupon_code: Scalars['String'];
  user_id: Scalars['uuid'];
};


export type Query_RootUser_Favorite_ProductArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


export type Query_RootUser_Favorite_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


export type Query_RootUser_Favorite_Product_By_PkArgs = {
  product_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootUser_GroupArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


export type Query_RootUser_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


export type Query_RootUser_Group_By_PkArgs = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  role: Role_Type_Enum;
  user_id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWarehouse_CategoryArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


export type Query_RootWarehouse_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


export type Query_RootWarehouse_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Query_RootWarehouse_HoursArgs = {
  distinct_on?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Hours_Order_By>>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};


export type Query_RootWarehouse_Hours_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Hours_Order_By>>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};


export type Query_RootWarehouse_Hours_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWarehouse_Operation_RuleArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};


export type Query_RootWarehouse_Operation_Rule_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};


export type Query_RootWarehouse_Operation_Rule_By_PkArgs = {
  operation_rule_handle: Scalars['String'];
  warehouse_id: Scalars['uuid'];
};


export type Query_RootWarehouse_StatusArgs = {
  distinct_on?: Maybe<Array<Warehouse_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Status_Order_By>>;
  where?: Maybe<Warehouse_Status_Bool_Exp>;
};


export type Query_RootWarehouse_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Status_Order_By>>;
  where?: Maybe<Warehouse_Status_Bool_Exp>;
};


export type Query_RootWarehouse_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootWarehouse_User_AddressArgs = {
  distinct_on?: Maybe<Array<Warehouse_User_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_User_Address_Order_By>>;
  where?: Maybe<Warehouse_User_Address_Bool_Exp>;
};


export type Query_RootWarehouse_User_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_User_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_User_Address_Order_By>>;
  where?: Maybe<Warehouse_User_Address_Bool_Exp>;
};


export type Query_RootWarehouse_User_Address_By_PkArgs = {
  user_address_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Query_RootWarehousesArgs = {
  distinct_on?: Maybe<Array<Warehouses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Order_By>>;
  where?: Maybe<Warehouses_Bool_Exp>;
};


export type Query_RootWarehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Order_By>>;
  where?: Maybe<Warehouses_Bool_Exp>;
};


export type Query_RootWarehouses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWarehouses_TextArgs = {
  distinct_on?: Maybe<Array<Warehouses_Text_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Text_Order_By>>;
  where?: Maybe<Warehouses_Text_Bool_Exp>;
};


export type Query_RootWarehouses_Text_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouses_Text_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Text_Order_By>>;
  where?: Maybe<Warehouses_Text_Bool_Exp>;
};

/** columns and relationships of "rider_status" */
export type Rider_Status = {
  __typename?: 'rider_status';
  value: Scalars['String'];
};

/** aggregated selection of "rider_status" */
export type Rider_Status_Aggregate = {
  __typename?: 'rider_status_aggregate';
  aggregate?: Maybe<Rider_Status_Aggregate_Fields>;
  nodes: Array<Rider_Status>;
};

/** aggregate fields of "rider_status" */
export type Rider_Status_Aggregate_Fields = {
  __typename?: 'rider_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rider_Status_Max_Fields>;
  min?: Maybe<Rider_Status_Min_Fields>;
};


/** aggregate fields of "rider_status" */
export type Rider_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rider_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rider_status". All fields are combined with a logical 'AND'. */
export type Rider_Status_Bool_Exp = {
  _and?: Maybe<Array<Rider_Status_Bool_Exp>>;
  _not?: Maybe<Rider_Status_Bool_Exp>;
  _or?: Maybe<Array<Rider_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rider_status" */
export enum Rider_Status_Constraint {
  /** unique or primary key constraint */
  RiderStatusPkey = 'rider_status_pkey'
}

export enum Rider_Status_Enum {
  Busy = 'busy',
  ComingBack = 'coming_back',
  Idle = 'idle',
  Invited = 'invited',
  Offline = 'offline',
  Online = 'online'
}

/** Boolean expression to compare columns of type "rider_status_enum". All fields are combined with logical 'AND'. */
export type Rider_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Rider_Status_Enum>;
  _in?: Maybe<Array<Rider_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Rider_Status_Enum>;
  _nin?: Maybe<Array<Rider_Status_Enum>>;
};

/** input type for inserting data into table "rider_status" */
export type Rider_Status_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rider_Status_Max_Fields = {
  __typename?: 'rider_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rider_Status_Min_Fields = {
  __typename?: 'rider_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rider_status" */
export type Rider_Status_Mutation_Response = {
  __typename?: 'rider_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rider_Status>;
};

/** on conflict condition type for table "rider_status" */
export type Rider_Status_On_Conflict = {
  constraint: Rider_Status_Constraint;
  update_columns?: Array<Rider_Status_Update_Column>;
  where?: Maybe<Rider_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "rider_status". */
export type Rider_Status_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: rider_status */
export type Rider_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "rider_status" */
export enum Rider_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "rider_status" */
export type Rider_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "rider_status" */
export enum Rider_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "riders" */
export type Riders = {
  __typename?: 'riders';
  created_at: Scalars['timestamptz'];
  /** A computed field, executes function "current_delivery" */
  current_delivery?: Maybe<Scalars['uuid']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  phone_number?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  status?: Maybe<Rider_Status_Enum>;
  temp_password?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  warehouse?: Maybe<Warehouses>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "riders" */
export type Riders_Aggregate = {
  __typename?: 'riders_aggregate';
  aggregate?: Maybe<Riders_Aggregate_Fields>;
  nodes: Array<Riders>;
};

/** aggregate fields of "riders" */
export type Riders_Aggregate_Fields = {
  __typename?: 'riders_aggregate_fields';
  avg?: Maybe<Riders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Riders_Max_Fields>;
  min?: Maybe<Riders_Min_Fields>;
  stddev?: Maybe<Riders_Stddev_Fields>;
  stddev_pop?: Maybe<Riders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Riders_Stddev_Samp_Fields>;
  sum?: Maybe<Riders_Sum_Fields>;
  var_pop?: Maybe<Riders_Var_Pop_Fields>;
  var_samp?: Maybe<Riders_Var_Samp_Fields>;
  variance?: Maybe<Riders_Variance_Fields>;
};


/** aggregate fields of "riders" */
export type Riders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Riders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Riders_Avg_Fields = {
  __typename?: 'riders_avg_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "riders". All fields are combined with a logical 'AND'. */
export type Riders_Bool_Exp = {
  _and?: Maybe<Array<Riders_Bool_Exp>>;
  _not?: Maybe<Riders_Bool_Exp>;
  _or?: Maybe<Array<Riders_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  current_delivery?: Maybe<Uuid_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Rider_Status_Enum_Comparison_Exp>;
  temp_password?: Maybe<String_Comparison_Exp>;
  third_party_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "riders" */
export enum Riders_Constraint {
  /** unique or primary key constraint */
  RidersPkey = 'riders_pkey'
}

/** input type for incrementing numeric columns in table "riders" */
export type Riders_Inc_Input = {
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "riders" */
export type Riders_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  phone_number?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  status?: Maybe<Rider_Status_Enum>;
  temp_password?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Riders_Max_Fields = {
  __typename?: 'riders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  phone_number?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Riders_Min_Fields = {
  __typename?: 'riders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  phone_number?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "riders" */
export type Riders_Mutation_Response = {
  __typename?: 'riders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Riders>;
};

/** input type for inserting object relation for remote table "riders" */
export type Riders_Obj_Rel_Insert_Input = {
  data: Riders_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Riders_On_Conflict>;
};

/** on conflict condition type for table "riders" */
export type Riders_On_Conflict = {
  constraint: Riders_Constraint;
  update_columns?: Array<Riders_Update_Column>;
  where?: Maybe<Riders_Bool_Exp>;
};

/** Ordering options when selecting data from "riders". */
export type Riders_Order_By = {
  created_at?: Maybe<Order_By>;
  current_delivery?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  temp_password?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: riders */
export type Riders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "riders" */
export enum Riders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Picture = 'picture',
  /** column name */
  Status = 'status',
  /** column name */
  TempPassword = 'temp_password',
  /** column name */
  ThirdPartyId = 'third_party_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "riders" */
export type Riders_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  phone_number?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  status?: Maybe<Rider_Status_Enum>;
  temp_password?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Riders_Stddev_Fields = {
  __typename?: 'riders_stddev_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Riders_Stddev_Pop_Fields = {
  __typename?: 'riders_stddev_pop_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Riders_Stddev_Samp_Fields = {
  __typename?: 'riders_stddev_samp_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Riders_Sum_Fields = {
  __typename?: 'riders_sum_fields';
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
};

/** update columns of table "riders" */
export enum Riders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Picture = 'picture',
  /** column name */
  Status = 'status',
  /** column name */
  TempPassword = 'temp_password',
  /** column name */
  ThirdPartyId = 'third_party_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Riders_Var_Pop_Fields = {
  __typename?: 'riders_var_pop_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Riders_Var_Samp_Fields = {
  __typename?: 'riders_var_samp_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Riders_Variance_Fields = {
  __typename?: 'riders_variance_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "role_type" */
export type Role_Type = {
  __typename?: 'role_type';
  value: Scalars['String'];
};

/** aggregated selection of "role_type" */
export type Role_Type_Aggregate = {
  __typename?: 'role_type_aggregate';
  aggregate?: Maybe<Role_Type_Aggregate_Fields>;
  nodes: Array<Role_Type>;
};

/** aggregate fields of "role_type" */
export type Role_Type_Aggregate_Fields = {
  __typename?: 'role_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Type_Max_Fields>;
  min?: Maybe<Role_Type_Min_Fields>;
};


/** aggregate fields of "role_type" */
export type Role_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role_type". All fields are combined with a logical 'AND'. */
export type Role_Type_Bool_Exp = {
  _and?: Maybe<Array<Role_Type_Bool_Exp>>;
  _not?: Maybe<Role_Type_Bool_Exp>;
  _or?: Maybe<Array<Role_Type_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_type" */
export enum Role_Type_Constraint {
  /** unique or primary key constraint */
  RoleTypePkey = 'role_type_pkey'
}

export enum Role_Type_Enum {
  Admin = 'admin',
  Anonymous = 'anonymous',
  Catman = 'catman',
  CustomerService = 'customer_service',
  CustomerServiceTemp = 'customer_service_temp',
  Expansion = 'expansion',
  Marketing = 'marketing',
  Product = 'product',
  Rider = 'rider',
  User = 'user'
}

/** Boolean expression to compare columns of type "role_type_enum". All fields are combined with logical 'AND'. */
export type Role_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Role_Type_Enum>;
  _in?: Maybe<Array<Role_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Role_Type_Enum>;
  _nin?: Maybe<Array<Role_Type_Enum>>;
};

/** input type for inserting data into table "role_type" */
export type Role_Type_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Type_Max_Fields = {
  __typename?: 'role_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Type_Min_Fields = {
  __typename?: 'role_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role_type" */
export type Role_Type_Mutation_Response = {
  __typename?: 'role_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Type>;
};

/** on conflict condition type for table "role_type" */
export type Role_Type_On_Conflict = {
  constraint: Role_Type_Constraint;
  update_columns?: Array<Role_Type_Update_Column>;
  where?: Maybe<Role_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "role_type". */
export type Role_Type_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: role_type */
export type Role_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "role_type" */
export enum Role_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "role_type" */
export type Role_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "role_type" */
export enum Role_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Search_Products_Args = {
  search?: Maybe<Scalars['String']>;
};

export type SocialLoginOutput = {
  __typename?: 'socialLoginOutput';
  access_token?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  token_type: Scalars['String'];
};

export type SocialLoginVerifyOutput = {
  __typename?: 'socialLoginVerifyOutput';
  access_token?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

/** columns and relationships of "staff_users" */
export type Staff_Users = {
  __typename?: 'staff_users';
  email: Scalars['String'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
};


/** columns and relationships of "staff_users" */
export type Staff_UsersUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** columns and relationships of "staff_users" */
export type Staff_UsersUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "staff_users" */
export type Staff_Users_Aggregate = {
  __typename?: 'staff_users_aggregate';
  aggregate?: Maybe<Staff_Users_Aggregate_Fields>;
  nodes: Array<Staff_Users>;
};

/** aggregate fields of "staff_users" */
export type Staff_Users_Aggregate_Fields = {
  __typename?: 'staff_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Staff_Users_Max_Fields>;
  min?: Maybe<Staff_Users_Min_Fields>;
};


/** aggregate fields of "staff_users" */
export type Staff_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Staff_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "staff_users". All fields are combined with a logical 'AND'. */
export type Staff_Users_Bool_Exp = {
  _and?: Maybe<Array<Staff_Users_Bool_Exp>>;
  _not?: Maybe<Staff_Users_Bool_Exp>;
  _or?: Maybe<Array<Staff_Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  user_roles?: Maybe<User_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "staff_users" */
export enum Staff_Users_Constraint {
  /** unique or primary key constraint */
  StaffUsersEmailKey = 'staff_users_email_key',
  /** unique or primary key constraint */
  StaffUsersPkey = 'staff_users_pkey'
}

/** input type for inserting data into table "staff_users" */
export type Staff_Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  user_roles?: Maybe<User_Role_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Staff_Users_Max_Fields = {
  __typename?: 'staff_users_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Staff_Users_Min_Fields = {
  __typename?: 'staff_users_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "staff_users" */
export type Staff_Users_Mutation_Response = {
  __typename?: 'staff_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staff_Users>;
};

/** input type for inserting object relation for remote table "staff_users" */
export type Staff_Users_Obj_Rel_Insert_Input = {
  data: Staff_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Staff_Users_On_Conflict>;
};

/** on conflict condition type for table "staff_users" */
export type Staff_Users_On_Conflict = {
  constraint: Staff_Users_Constraint;
  update_columns?: Array<Staff_Users_Update_Column>;
  where?: Maybe<Staff_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "staff_users". */
export type Staff_Users_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  user_roles_aggregate?: Maybe<User_Role_Aggregate_Order_By>;
};

/** primary key columns input for table: staff_users */
export type Staff_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "staff_users" */
export enum Staff_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "staff_users" */
export type Staff_Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
};

/** update columns of table "staff_users" */
export enum Staff_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password'
}

/** columns and relationships of "store_category" */
export type Store_Category = {
  __typename?: 'store_category';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
  order: Scalars['Int'];
  picture?: Maybe<Scalars['String']>;
  store_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "store_category" */
export type Store_Category_Aggregate = {
  __typename?: 'store_category_aggregate';
  aggregate?: Maybe<Store_Category_Aggregate_Fields>;
  nodes: Array<Store_Category>;
};

/** aggregate fields of "store_category" */
export type Store_Category_Aggregate_Fields = {
  __typename?: 'store_category_aggregate_fields';
  avg?: Maybe<Store_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Store_Category_Max_Fields>;
  min?: Maybe<Store_Category_Min_Fields>;
  stddev?: Maybe<Store_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Category_Sum_Fields>;
  var_pop?: Maybe<Store_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Category_Var_Samp_Fields>;
  variance?: Maybe<Store_Category_Variance_Fields>;
};


/** aggregate fields of "store_category" */
export type Store_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Store_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "store_category" */
export type Store_Category_Aggregate_Order_By = {
  avg?: Maybe<Store_Category_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Store_Category_Max_Order_By>;
  min?: Maybe<Store_Category_Min_Order_By>;
  stddev?: Maybe<Store_Category_Stddev_Order_By>;
  stddev_pop?: Maybe<Store_Category_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Store_Category_Stddev_Samp_Order_By>;
  sum?: Maybe<Store_Category_Sum_Order_By>;
  var_pop?: Maybe<Store_Category_Var_Pop_Order_By>;
  var_samp?: Maybe<Store_Category_Var_Samp_Order_By>;
  variance?: Maybe<Store_Category_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "store_category" */
export type Store_Category_Arr_Rel_Insert_Input = {
  data: Array<Store_Category_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Store_Category_On_Conflict>;
};

/** aggregate avg on columns */
export type Store_Category_Avg_Fields = {
  __typename?: 'store_category_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "store_category" */
export type Store_Category_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "store_category". All fields are combined with a logical 'AND'. */
export type Store_Category_Bool_Exp = {
  _and?: Maybe<Array<Store_Category_Bool_Exp>>;
  _not?: Maybe<Store_Category_Bool_Exp>;
  _or?: Maybe<Array<Store_Category_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "store_category" */
export enum Store_Category_Constraint {
  /** unique or primary key constraint */
  StoreCategoryPkey = 'store_category_pkey'
}

/** input type for incrementing numeric columns in table "store_category" */
export type Store_Category_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "store_category" */
export type Store_Category_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Store_Category_Max_Fields = {
  __typename?: 'store_category_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "store_category" */
export type Store_Category_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Store_Category_Min_Fields = {
  __typename?: 'store_category_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "store_category" */
export type Store_Category_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "store_category" */
export type Store_Category_Mutation_Response = {
  __typename?: 'store_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Store_Category>;
};

/** on conflict condition type for table "store_category" */
export type Store_Category_On_Conflict = {
  constraint: Store_Category_Constraint;
  update_columns?: Array<Store_Category_Update_Column>;
  where?: Maybe<Store_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "store_category". */
export type Store_Category_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: store_category */
export type Store_Category_Pk_Columns_Input = {
  category_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};

/** select columns of table "store_category" */
export enum Store_Category_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Order = 'order',
  /** column name */
  Picture = 'picture',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "store_category" */
export type Store_Category_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Store_Category_Stddev_Fields = {
  __typename?: 'store_category_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "store_category" */
export type Store_Category_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Store_Category_Stddev_Pop_Fields = {
  __typename?: 'store_category_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "store_category" */
export type Store_Category_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Store_Category_Stddev_Samp_Fields = {
  __typename?: 'store_category_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "store_category" */
export type Store_Category_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Store_Category_Sum_Fields = {
  __typename?: 'store_category_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "store_category" */
export type Store_Category_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "store_category" */
export enum Store_Category_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Order = 'order',
  /** column name */
  Picture = 'picture',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Store_Category_Var_Pop_Fields = {
  __typename?: 'store_category_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "store_category" */
export type Store_Category_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Store_Category_Var_Samp_Fields = {
  __typename?: 'store_category_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "store_category" */
export type Store_Category_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Store_Category_Variance_Fields = {
  __typename?: 'store_category_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "store_category" */
export type Store_Category_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

/** columns and relationships of "store_hours" */
export type Store_Hours = {
  __typename?: 'store_hours';
  close_time_minutes: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  day: Scalars['Int'];
  id: Scalars['uuid'];
  open_time_minutes: Scalars['Int'];
  store_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "store_hours" */
export type Store_Hours_Aggregate = {
  __typename?: 'store_hours_aggregate';
  aggregate?: Maybe<Store_Hours_Aggregate_Fields>;
  nodes: Array<Store_Hours>;
};

/** aggregate fields of "store_hours" */
export type Store_Hours_Aggregate_Fields = {
  __typename?: 'store_hours_aggregate_fields';
  avg?: Maybe<Store_Hours_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Store_Hours_Max_Fields>;
  min?: Maybe<Store_Hours_Min_Fields>;
  stddev?: Maybe<Store_Hours_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Hours_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Hours_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Hours_Sum_Fields>;
  var_pop?: Maybe<Store_Hours_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Hours_Var_Samp_Fields>;
  variance?: Maybe<Store_Hours_Variance_Fields>;
};


/** aggregate fields of "store_hours" */
export type Store_Hours_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Store_Hours_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "store_hours" */
export type Store_Hours_Aggregate_Order_By = {
  avg?: Maybe<Store_Hours_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Store_Hours_Max_Order_By>;
  min?: Maybe<Store_Hours_Min_Order_By>;
  stddev?: Maybe<Store_Hours_Stddev_Order_By>;
  stddev_pop?: Maybe<Store_Hours_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Store_Hours_Stddev_Samp_Order_By>;
  sum?: Maybe<Store_Hours_Sum_Order_By>;
  var_pop?: Maybe<Store_Hours_Var_Pop_Order_By>;
  var_samp?: Maybe<Store_Hours_Var_Samp_Order_By>;
  variance?: Maybe<Store_Hours_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "store_hours" */
export type Store_Hours_Arr_Rel_Insert_Input = {
  data: Array<Store_Hours_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Store_Hours_On_Conflict>;
};

/** aggregate avg on columns */
export type Store_Hours_Avg_Fields = {
  __typename?: 'store_hours_avg_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "store_hours" */
export type Store_Hours_Avg_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "store_hours". All fields are combined with a logical 'AND'. */
export type Store_Hours_Bool_Exp = {
  _and?: Maybe<Array<Store_Hours_Bool_Exp>>;
  _not?: Maybe<Store_Hours_Bool_Exp>;
  _or?: Maybe<Array<Store_Hours_Bool_Exp>>;
  close_time_minutes?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  day?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  open_time_minutes?: Maybe<Int_Comparison_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "store_hours" */
export enum Store_Hours_Constraint {
  /** unique or primary key constraint */
  StoreHoursPkey = 'store_hours_pkey'
}

/** input type for incrementing numeric columns in table "store_hours" */
export type Store_Hours_Inc_Input = {
  close_time_minutes?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "store_hours" */
export type Store_Hours_Insert_Input = {
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Store_Hours_Max_Fields = {
  __typename?: 'store_hours_max_fields';
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "store_hours" */
export type Store_Hours_Max_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Store_Hours_Min_Fields = {
  __typename?: 'store_hours_min_fields';
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "store_hours" */
export type Store_Hours_Min_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "store_hours" */
export type Store_Hours_Mutation_Response = {
  __typename?: 'store_hours_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Store_Hours>;
};

/** on conflict condition type for table "store_hours" */
export type Store_Hours_On_Conflict = {
  constraint: Store_Hours_Constraint;
  update_columns?: Array<Store_Hours_Update_Column>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};

/** Ordering options when selecting data from "store_hours". */
export type Store_Hours_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: store_hours */
export type Store_Hours_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "store_hours" */
export enum Store_Hours_Select_Column {
  /** column name */
  CloseTimeMinutes = 'close_time_minutes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  OpenTimeMinutes = 'open_time_minutes',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "store_hours" */
export type Store_Hours_Set_Input = {
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Store_Hours_Stddev_Fields = {
  __typename?: 'store_hours_stddev_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "store_hours" */
export type Store_Hours_Stddev_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Store_Hours_Stddev_Pop_Fields = {
  __typename?: 'store_hours_stddev_pop_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "store_hours" */
export type Store_Hours_Stddev_Pop_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Store_Hours_Stddev_Samp_Fields = {
  __typename?: 'store_hours_stddev_samp_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "store_hours" */
export type Store_Hours_Stddev_Samp_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Store_Hours_Sum_Fields = {
  __typename?: 'store_hours_sum_fields';
  close_time_minutes?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "store_hours" */
export type Store_Hours_Sum_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** update columns of table "store_hours" */
export enum Store_Hours_Update_Column {
  /** column name */
  CloseTimeMinutes = 'close_time_minutes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  OpenTimeMinutes = 'open_time_minutes',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Store_Hours_Var_Pop_Fields = {
  __typename?: 'store_hours_var_pop_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "store_hours" */
export type Store_Hours_Var_Pop_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Store_Hours_Var_Samp_Fields = {
  __typename?: 'store_hours_var_samp_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "store_hours" */
export type Store_Hours_Var_Samp_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Store_Hours_Variance_Fields = {
  __typename?: 'store_hours_variance_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "store_hours" */
export type Store_Hours_Variance_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** columns and relationships of "store_products" */
export type Store_Products = {
  __typename?: 'store_products';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  inventory_product: Inventory_Products;
  inventory_product_id: Scalars['uuid'];
  is_displayed: Scalars['Boolean'];
  /** An object relationship */
  store: Stores;
  store_id: Scalars['uuid'];
  ttc_price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "store_products" */
export type Store_Products_Aggregate = {
  __typename?: 'store_products_aggregate';
  aggregate?: Maybe<Store_Products_Aggregate_Fields>;
  nodes: Array<Store_Products>;
};

/** aggregate fields of "store_products" */
export type Store_Products_Aggregate_Fields = {
  __typename?: 'store_products_aggregate_fields';
  avg?: Maybe<Store_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Store_Products_Max_Fields>;
  min?: Maybe<Store_Products_Min_Fields>;
  stddev?: Maybe<Store_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Products_Sum_Fields>;
  var_pop?: Maybe<Store_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Products_Var_Samp_Fields>;
  variance?: Maybe<Store_Products_Variance_Fields>;
};


/** aggregate fields of "store_products" */
export type Store_Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Store_Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "store_products" */
export type Store_Products_Aggregate_Order_By = {
  avg?: Maybe<Store_Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Store_Products_Max_Order_By>;
  min?: Maybe<Store_Products_Min_Order_By>;
  stddev?: Maybe<Store_Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Store_Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Store_Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Store_Products_Sum_Order_By>;
  var_pop?: Maybe<Store_Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Store_Products_Var_Samp_Order_By>;
  variance?: Maybe<Store_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "store_products" */
export type Store_Products_Arr_Rel_Insert_Input = {
  data: Array<Store_Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Store_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Store_Products_Avg_Fields = {
  __typename?: 'store_products_avg_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "store_products" */
export type Store_Products_Avg_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "store_products". All fields are combined with a logical 'AND'. */
export type Store_Products_Bool_Exp = {
  _and?: Maybe<Array<Store_Products_Bool_Exp>>;
  _not?: Maybe<Store_Products_Bool_Exp>;
  _or?: Maybe<Array<Store_Products_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventory_product?: Maybe<Inventory_Products_Bool_Exp>;
  inventory_product_id?: Maybe<Uuid_Comparison_Exp>;
  is_displayed?: Maybe<Boolean_Comparison_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_id?: Maybe<Uuid_Comparison_Exp>;
  ttc_price?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "store_products" */
export enum Store_Products_Constraint {
  /** unique or primary key constraint */
  StoreProductsIdKey = 'store_products_id_key',
  /** unique or primary key constraint */
  StoreProductsPkey = 'store_products_pkey'
}

/** input type for incrementing numeric columns in table "store_products" */
export type Store_Products_Inc_Input = {
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "store_products" */
export type Store_Products_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product?: Maybe<Inventory_Products_Obj_Rel_Insert_Input>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  is_displayed?: Maybe<Scalars['Boolean']>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['uuid']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Store_Products_Max_Fields = {
  __typename?: 'store_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "store_products" */
export type Store_Products_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Store_Products_Min_Fields = {
  __typename?: 'store_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['uuid']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "store_products" */
export type Store_Products_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "store_products" */
export type Store_Products_Mutation_Response = {
  __typename?: 'store_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Store_Products>;
};

/** on conflict condition type for table "store_products" */
export type Store_Products_On_Conflict = {
  constraint: Store_Products_Constraint;
  update_columns?: Array<Store_Products_Update_Column>;
  where?: Maybe<Store_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "store_products". */
export type Store_Products_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product?: Maybe<Inventory_Products_Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  is_displayed?: Maybe<Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_id?: Maybe<Order_By>;
  ttc_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: store_products */
export type Store_Products_Pk_Columns_Input = {
  inventory_product_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};

/** select columns of table "store_products" */
export enum Store_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  IsDisplayed = 'is_displayed',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "store_products" */
export type Store_Products_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  is_displayed?: Maybe<Scalars['Boolean']>;
  store_id?: Maybe<Scalars['uuid']>;
  ttc_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Store_Products_Stddev_Fields = {
  __typename?: 'store_products_stddev_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "store_products" */
export type Store_Products_Stddev_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Store_Products_Stddev_Pop_Fields = {
  __typename?: 'store_products_stddev_pop_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "store_products" */
export type Store_Products_Stddev_Pop_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Store_Products_Stddev_Samp_Fields = {
  __typename?: 'store_products_stddev_samp_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "store_products" */
export type Store_Products_Stddev_Samp_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Store_Products_Sum_Fields = {
  __typename?: 'store_products_sum_fields';
  ttc_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "store_products" */
export type Store_Products_Sum_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** update columns of table "store_products" */
export enum Store_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  IsDisplayed = 'is_displayed',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TtcPrice = 'ttc_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Store_Products_Var_Pop_Fields = {
  __typename?: 'store_products_var_pop_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "store_products" */
export type Store_Products_Var_Pop_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Store_Products_Var_Samp_Fields = {
  __typename?: 'store_products_var_samp_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "store_products" */
export type Store_Products_Var_Samp_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Store_Products_Variance_Fields = {
  __typename?: 'store_products_variance_fields';
  ttc_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "store_products" */
export type Store_Products_Variance_Order_By = {
  ttc_price?: Maybe<Order_By>;
};

/** columns and relationships of "stores" */
export type Stores = {
  __typename?: 'stores';
  created_at: Scalars['timestamp'];
  handle: Scalars['String'];
  id: Scalars['uuid'];
  is_paused: Scalars['Boolean'];
  name: Scalars['String'];
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** An array relationship */
  store_categories: Array<Store_Category>;
  /** An aggregate relationship */
  store_categories_aggregate: Store_Category_Aggregate;
  /** An array relationship */
  store_hours: Array<Store_Hours>;
  /** An aggregate relationship */
  store_hours_aggregate: Store_Hours_Aggregate;
  uber_eats_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};


/** columns and relationships of "stores" */
export type StoresOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresStore_CategoriesArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresStore_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresStore_HoursArgs = {
  distinct_on?: Maybe<Array<Store_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Hours_Order_By>>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresStore_Hours_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Hours_Order_By>>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};

/** aggregated selection of "stores" */
export type Stores_Aggregate = {
  __typename?: 'stores_aggregate';
  aggregate?: Maybe<Stores_Aggregate_Fields>;
  nodes: Array<Stores>;
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_Fields = {
  __typename?: 'stores_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Stores_Max_Fields>;
  min?: Maybe<Stores_Min_Fields>;
};


/** aggregate fields of "stores" */
export type Stores_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stores_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: Maybe<Array<Stores_Bool_Exp>>;
  _not?: Maybe<Stores_Bool_Exp>;
  _or?: Maybe<Array<Stores_Bool_Exp>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  handle?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_paused?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  store_categories?: Maybe<Store_Category_Bool_Exp>;
  store_hours?: Maybe<Store_Hours_Bool_Exp>;
  uber_eats_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stores" */
export enum Stores_Constraint {
  /** unique or primary key constraint */
  StoresHandleKey = 'stores_handle_key',
  /** unique or primary key constraint */
  StoresIdKey = 'stores_id_key',
  /** unique or primary key constraint */
  StoresNameKey = 'stores_name_key',
  /** unique or primary key constraint */
  StoresPkey = 'stores_pkey'
}

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_paused?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  store_categories?: Maybe<Store_Category_Arr_Rel_Insert_Input>;
  store_hours?: Maybe<Store_Hours_Arr_Rel_Insert_Input>;
  uber_eats_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
  __typename?: 'stores_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
  __typename?: 'stores_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "stores" */
export type Stores_Mutation_Response = {
  __typename?: 'stores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stores>;
};

/** input type for inserting object relation for remote table "stores" */
export type Stores_Obj_Rel_Insert_Input = {
  data: Stores_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** on conflict condition type for table "stores" */
export type Stores_On_Conflict = {
  constraint: Stores_Constraint;
  update_columns?: Array<Stores_Update_Column>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** Ordering options when selecting data from "stores". */
export type Stores_Order_By = {
  created_at?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_paused?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  store_categories_aggregate?: Maybe<Store_Category_Aggregate_Order_By>;
  store_hours_aggregate?: Maybe<Store_Hours_Aggregate_Order_By>;
  uber_eats_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: stores */
export type Stores_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stores" */
export enum Stores_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  IsPaused = 'is_paused',
  /** column name */
  Name = 'name',
  /** column name */
  UberEatsId = 'uber_eats_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_paused?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "stores" */
export enum Stores_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  IsPaused = 'is_paused',
  /** column name */
  Name = 'name',
  /** column name */
  UberEatsId = 'uber_eats_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** columns and relationships of "subcategories" */
export type Subcategories = {
  __typename?: 'subcategories';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  handle?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  subcategory_products: Array<Product_Subcategory>;
  /** An aggregate relationship */
  subcategory_products_aggregate: Product_Subcategory_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "subcategories" */
export type SubcategoriesSubcategory_ProductsArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


/** columns and relationships of "subcategories" */
export type SubcategoriesSubcategory_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};

/** aggregated selection of "subcategories" */
export type Subcategories_Aggregate = {
  __typename?: 'subcategories_aggregate';
  aggregate?: Maybe<Subcategories_Aggregate_Fields>;
  nodes: Array<Subcategories>;
};

/** aggregate fields of "subcategories" */
export type Subcategories_Aggregate_Fields = {
  __typename?: 'subcategories_aggregate_fields';
  avg?: Maybe<Subcategories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Subcategories_Max_Fields>;
  min?: Maybe<Subcategories_Min_Fields>;
  stddev?: Maybe<Subcategories_Stddev_Fields>;
  stddev_pop?: Maybe<Subcategories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subcategories_Stddev_Samp_Fields>;
  sum?: Maybe<Subcategories_Sum_Fields>;
  var_pop?: Maybe<Subcategories_Var_Pop_Fields>;
  var_samp?: Maybe<Subcategories_Var_Samp_Fields>;
  variance?: Maybe<Subcategories_Variance_Fields>;
};


/** aggregate fields of "subcategories" */
export type Subcategories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Subcategories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "subcategories" */
export type Subcategories_Aggregate_Order_By = {
  avg?: Maybe<Subcategories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Subcategories_Max_Order_By>;
  min?: Maybe<Subcategories_Min_Order_By>;
  stddev?: Maybe<Subcategories_Stddev_Order_By>;
  stddev_pop?: Maybe<Subcategories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Subcategories_Stddev_Samp_Order_By>;
  sum?: Maybe<Subcategories_Sum_Order_By>;
  var_pop?: Maybe<Subcategories_Var_Pop_Order_By>;
  var_samp?: Maybe<Subcategories_Var_Samp_Order_By>;
  variance?: Maybe<Subcategories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subcategories" */
export type Subcategories_Arr_Rel_Insert_Input = {
  data: Array<Subcategories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};

/** aggregate avg on columns */
export type Subcategories_Avg_Fields = {
  __typename?: 'subcategories_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "subcategories" */
export type Subcategories_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subcategories". All fields are combined with a logical 'AND'. */
export type Subcategories_Bool_Exp = {
  _and?: Maybe<Array<Subcategories_Bool_Exp>>;
  _not?: Maybe<Subcategories_Bool_Exp>;
  _or?: Maybe<Array<Subcategories_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  handle?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  static_picture?: Maybe<String_Comparison_Exp>;
  subcategory_products?: Maybe<Product_Subcategory_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "subcategories" */
export enum Subcategories_Constraint {
  /** unique or primary key constraint */
  SubcategoriesHandleKey = 'subcategories_handle_key',
  /** unique or primary key constraint */
  SubcategoriesPkey = 'subcategories_pkey'
}

/** input type for incrementing numeric columns in table "subcategories" */
export type Subcategories_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "subcategories" */
export type Subcategories_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  subcategory_products?: Maybe<Product_Subcategory_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Subcategories_Max_Fields = {
  __typename?: 'subcategories_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "subcategories" */
export type Subcategories_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Subcategories_Min_Fields = {
  __typename?: 'subcategories_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "subcategories" */
export type Subcategories_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "subcategories" */
export type Subcategories_Mutation_Response = {
  __typename?: 'subcategories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subcategories>;
};

/** input type for inserting object relation for remote table "subcategories" */
export type Subcategories_Obj_Rel_Insert_Input = {
  data: Subcategories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};

/** on conflict condition type for table "subcategories" */
export type Subcategories_On_Conflict = {
  constraint: Subcategories_Constraint;
  update_columns?: Array<Subcategories_Update_Column>;
  where?: Maybe<Subcategories_Bool_Exp>;
};

/** Ordering options when selecting data from "subcategories". */
export type Subcategories_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  subcategory_products_aggregate?: Maybe<Product_Subcategory_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: subcategories */
export type Subcategories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "subcategories" */
export enum Subcategories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Picture = 'picture',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subcategories" */
export type Subcategories_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Subcategories_Stddev_Fields = {
  __typename?: 'subcategories_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "subcategories" */
export type Subcategories_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subcategories_Stddev_Pop_Fields = {
  __typename?: 'subcategories_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "subcategories" */
export type Subcategories_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subcategories_Stddev_Samp_Fields = {
  __typename?: 'subcategories_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "subcategories" */
export type Subcategories_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Subcategories_Sum_Fields = {
  __typename?: 'subcategories_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "subcategories" */
export type Subcategories_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "subcategories" */
export enum Subcategories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Picture = 'picture',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Subcategories_Var_Pop_Fields = {
  __typename?: 'subcategories_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "subcategories" */
export type Subcategories_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subcategories_Var_Samp_Fields = {
  __typename?: 'subcategories_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "subcategories" */
export type Subcategories_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Subcategories_Variance_Fields = {
  __typename?: 'subcategories_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "subcategories" */
export type Subcategories_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "address_label" */
  address_label: Array<Address_Label>;
  /** fetch aggregated fields from the table: "address_label" */
  address_label_aggregate: Address_Label_Aggregate;
  /** fetch data from the table: "address_label" using primary key columns */
  address_label_by_pk?: Maybe<Address_Label>;
  /** fetch data from the table: "banners" */
  banners: Array<Banners>;
  /** fetch aggregated fields from the table: "banners" */
  banners_aggregate: Banners_Aggregate;
  /** fetch data from the table: "banners" using primary key columns */
  banners_by_pk?: Maybe<Banners>;
  /** fetch data from the table: "cart_items" */
  cart_items: Array<Cart_Items>;
  /** fetch aggregated fields from the table: "cart_items" */
  cart_items_aggregate: Cart_Items_Aggregate;
  /** fetch data from the table: "cart_items" using primary key columns */
  cart_items_by_pk?: Maybe<Cart_Items>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "consent_type" */
  consent_type: Array<Consent_Type>;
  /** fetch aggregated fields from the table: "consent_type" */
  consent_type_aggregate: Consent_Type_Aggregate;
  /** fetch data from the table: "consent_type" using primary key columns */
  consent_type_by_pk?: Maybe<Consent_Type>;
  /** fetch data from the table: "coupon_category" */
  coupon_category: Array<Coupon_Category>;
  /** fetch aggregated fields from the table: "coupon_category" */
  coupon_category_aggregate: Coupon_Category_Aggregate;
  /** fetch data from the table: "coupon_category" using primary key columns */
  coupon_category_by_pk?: Maybe<Coupon_Category>;
  /** fetch data from the table: "coupon_tag" */
  coupon_tag: Array<Coupon_Tag>;
  /** fetch aggregated fields from the table: "coupon_tag" */
  coupon_tag_aggregate: Coupon_Tag_Aggregate;
  /** fetch data from the table: "coupon_tag" using primary key columns */
  coupon_tag_by_pk?: Maybe<Coupon_Tag>;
  /** fetch data from the table: "coupon_user_group" */
  coupon_user_group: Array<Coupon_User_Group>;
  /** fetch aggregated fields from the table: "coupon_user_group" */
  coupon_user_group_aggregate: Coupon_User_Group_Aggregate;
  /** fetch data from the table: "coupon_user_group" using primary key columns */
  coupon_user_group_by_pk?: Maybe<Coupon_User_Group>;
  /** fetch data from the table: "coupons" */
  coupons: Array<Coupons>;
  /** fetch aggregated fields from the table: "coupons" */
  coupons_aggregate: Coupons_Aggregate;
  /** fetch data from the table: "coupons" using primary key columns */
  coupons_by_pk?: Maybe<Coupons>;
  /** An array relationship */
  deliveries: Array<Deliveries>;
  /** An aggregate relationship */
  deliveries_aggregate: Deliveries_Aggregate;
  /** fetch data from the table: "deliveries" using primary key columns */
  deliveries_by_pk?: Maybe<Deliveries>;
  /** fetch data from the table: "deliveries_group" */
  deliveries_group: Array<Deliveries_Group>;
  /** fetch aggregated fields from the table: "deliveries_group" */
  deliveries_group_aggregate: Deliveries_Group_Aggregate;
  /** fetch data from the table: "deliveries_group" using primary key columns */
  deliveries_group_by_pk?: Maybe<Deliveries_Group>;
  /** fetch data from the table: "delivery_feedbacks" */
  delivery_feedbacks: Array<Delivery_Feedbacks>;
  /** fetch aggregated fields from the table: "delivery_feedbacks" */
  delivery_feedbacks_aggregate: Delivery_Feedbacks_Aggregate;
  /** fetch data from the table: "delivery_feedbacks" using primary key columns */
  delivery_feedbacks_by_pk?: Maybe<Delivery_Feedbacks>;
  /** fetch data from the table: "delivery_method" */
  delivery_method: Array<Delivery_Method>;
  /** fetch aggregated fields from the table: "delivery_method" */
  delivery_method_aggregate: Delivery_Method_Aggregate;
  /** fetch data from the table: "delivery_method" using primary key columns */
  delivery_method_by_pk?: Maybe<Delivery_Method>;
  /** fetch data from the table: "delivery_status" */
  delivery_status: Array<Delivery_Status>;
  /** fetch aggregated fields from the table: "delivery_status" */
  delivery_status_aggregate: Delivery_Status_Aggregate;
  /** fetch data from the table: "delivery_status" using primary key columns */
  delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** fetch data from the table: "discount_type" */
  discount_type: Array<Discount_Type>;
  /** fetch aggregated fields from the table: "discount_type" */
  discount_type_aggregate: Discount_Type_Aggregate;
  /** fetch data from the table: "discount_type" using primary key columns */
  discount_type_by_pk?: Maybe<Discount_Type>;
  /** An array relationship */
  discounts: Array<Discounts>;
  /** An aggregate relationship */
  discounts_aggregate: Discounts_Aggregate;
  /** fetch data from the table: "discounts" using primary key columns */
  discounts_by_pk?: Maybe<Discounts>;
  /** fetch data from the table: "feedback_answer" */
  feedback_answer: Array<Feedback_Answer>;
  /** fetch aggregated fields from the table: "feedback_answer" */
  feedback_answer_aggregate: Feedback_Answer_Aggregate;
  /** fetch data from the table: "feedback_answer" using primary key columns */
  feedback_answer_by_pk?: Maybe<Feedback_Answer>;
  /** fetch data from the table: "gift_rules" */
  gift_rules: Array<Gift_Rules>;
  /** fetch aggregated fields from the table: "gift_rules" */
  gift_rules_aggregate: Gift_Rules_Aggregate;
  /** fetch data from the table: "gift_rules" using primary key columns */
  gift_rules_by_pk?: Maybe<Gift_Rules>;
  /** fetch data from the table: "gift_rules_category" */
  gift_rules_category: Array<Gift_Rules_Category>;
  /** fetch aggregated fields from the table: "gift_rules_category" */
  gift_rules_category_aggregate: Gift_Rules_Category_Aggregate;
  /** fetch data from the table: "gift_rules_category" using primary key columns */
  gift_rules_category_by_pk?: Maybe<Gift_Rules_Category>;
  /** fetch data from the table: "gift_rules_product" */
  gift_rules_product: Array<Gift_Rules_Product>;
  /** fetch aggregated fields from the table: "gift_rules_product" */
  gift_rules_product_aggregate: Gift_Rules_Product_Aggregate;
  /** fetch data from the table: "gift_rules_product" using primary key columns */
  gift_rules_product_by_pk?: Maybe<Gift_Rules_Product>;
  /** fetch data from the table: "gift_rules_warehouse" */
  gift_rules_warehouse: Array<Gift_Rules_Warehouse>;
  /** fetch aggregated fields from the table: "gift_rules_warehouse" */
  gift_rules_warehouse_aggregate: Gift_Rules_Warehouse_Aggregate;
  /** fetch data from the table: "gift_rules_warehouse" using primary key columns */
  gift_rules_warehouse_by_pk?: Maybe<Gift_Rules_Warehouse>;
  /** fetch data from the table: "gifts" */
  gifts: Array<Gifts>;
  /** fetch aggregated fields from the table: "gifts" */
  gifts_aggregate: Gifts_Aggregate;
  /** fetch data from the table: "gifts" using primary key columns */
  gifts_by_pk?: Maybe<Gifts>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  /** fetch data from the table: "inventory_products" using primary key columns */
  inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** fetch data from the table: "log_operator_events" */
  log_operator_events: Array<Log_Operator_Events>;
  /** fetch aggregated fields from the table: "log_operator_events" */
  log_operator_events_aggregate: Log_Operator_Events_Aggregate;
  /** fetch data from the table: "log_operator_events" using primary key columns */
  log_operator_events_by_pk?: Maybe<Log_Operator_Events>;
  /** fetch data from the table: "operation_rule_handle" */
  operation_rule_handle: Array<Operation_Rule_Handle>;
  /** fetch aggregated fields from the table: "operation_rule_handle" */
  operation_rule_handle_aggregate: Operation_Rule_Handle_Aggregate;
  /** fetch data from the table: "operation_rule_handle" using primary key columns */
  operation_rule_handle_by_pk?: Maybe<Operation_Rule_Handle>;
  /** fetch data from the table: "operation_rules" */
  operation_rules: Array<Operation_Rules>;
  /** fetch aggregated fields from the table: "operation_rules" */
  operation_rules_aggregate: Operation_Rules_Aggregate;
  /** fetch data from the table: "operation_rules" using primary key columns */
  operation_rules_by_pk?: Maybe<Operation_Rules>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "payment_method" */
  payment_method: Array<Payment_Method>;
  /** fetch aggregated fields from the table: "payment_method" */
  payment_method_aggregate: Payment_Method_Aggregate;
  /** fetch data from the table: "payment_method" using primary key columns */
  payment_method_by_pk?: Maybe<Payment_Method>;
  /** fetch data from the table: "payment_status" */
  payment_status: Array<Payment_Status>;
  /** fetch aggregated fields from the table: "payment_status" */
  payment_status_aggregate: Payment_Status_Aggregate;
  /** fetch data from the table: "payment_status" using primary key columns */
  payment_status_by_pk?: Maybe<Payment_Status>;
  /** fetch data from the table: "popular_searches" */
  popular_searches: Array<Popular_Searches>;
  /** fetch aggregated fields from the table: "popular_searches" */
  popular_searches_aggregate: Popular_Searches_Aggregate;
  /** fetch data from the table: "popular_searches" using primary key columns */
  popular_searches_by_pk?: Maybe<Popular_Searches>;
  /** An array relationship */
  product_properties: Array<Product_Properties>;
  /** An aggregate relationship */
  product_properties_aggregate: Product_Properties_Aggregate;
  /** fetch data from the table: "product_properties" using primary key columns */
  product_properties_by_pk?: Maybe<Product_Properties>;
  /** fetch data from the table: "product_subcategory" */
  product_subcategory: Array<Product_Subcategory>;
  /** fetch aggregated fields from the table: "product_subcategory" */
  product_subcategory_aggregate: Product_Subcategory_Aggregate;
  /** fetch data from the table: "product_subcategory" using primary key columns */
  product_subcategory_by_pk?: Maybe<Product_Subcategory>;
  /** fetch data from the table: "product_suggestions" */
  product_suggestions: Array<Product_Suggestions>;
  /** fetch aggregated fields from the table: "product_suggestions" */
  product_suggestions_aggregate: Product_Suggestions_Aggregate;
  /** fetch data from the table: "product_suggestions" using primary key columns */
  product_suggestions_by_pk?: Maybe<Product_Suggestions>;
  /** fetch data from the table: "product_tag" */
  product_tag: Array<Product_Tag>;
  /** fetch aggregated fields from the table: "product_tag" */
  product_tag_aggregate: Product_Tag_Aggregate;
  /** fetch data from the table: "product_tag" using primary key columns */
  product_tag_by_pk?: Maybe<Product_Tag>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "rider_status" */
  rider_status: Array<Rider_Status>;
  /** fetch aggregated fields from the table: "rider_status" */
  rider_status_aggregate: Rider_Status_Aggregate;
  /** fetch data from the table: "rider_status" using primary key columns */
  rider_status_by_pk?: Maybe<Rider_Status>;
  /** fetch data from the table: "riders" */
  riders: Array<Riders>;
  /** fetch aggregated fields from the table: "riders" */
  riders_aggregate: Riders_Aggregate;
  /** fetch data from the table: "riders" using primary key columns */
  riders_by_pk?: Maybe<Riders>;
  /** fetch data from the table: "role_type" */
  role_type: Array<Role_Type>;
  /** fetch aggregated fields from the table: "role_type" */
  role_type_aggregate: Role_Type_Aggregate;
  /** fetch data from the table: "role_type" using primary key columns */
  role_type_by_pk?: Maybe<Role_Type>;
  /** execute function "search_products" which returns "products" */
  search_products: Array<Products>;
  /** execute function "search_products" and query aggregates on result of table type "products" */
  search_products_aggregate: Products_Aggregate;
  /** fetch data from the table: "staff_users" */
  staff_users: Array<Staff_Users>;
  /** fetch aggregated fields from the table: "staff_users" */
  staff_users_aggregate: Staff_Users_Aggregate;
  /** fetch data from the table: "staff_users" using primary key columns */
  staff_users_by_pk?: Maybe<Staff_Users>;
  /** fetch data from the table: "store_category" */
  store_category: Array<Store_Category>;
  /** fetch aggregated fields from the table: "store_category" */
  store_category_aggregate: Store_Category_Aggregate;
  /** fetch data from the table: "store_category" using primary key columns */
  store_category_by_pk?: Maybe<Store_Category>;
  /** An array relationship */
  store_hours: Array<Store_Hours>;
  /** An aggregate relationship */
  store_hours_aggregate: Store_Hours_Aggregate;
  /** fetch data from the table: "store_hours" using primary key columns */
  store_hours_by_pk?: Maybe<Store_Hours>;
  /** An array relationship */
  store_products: Array<Store_Products>;
  /** An aggregate relationship */
  store_products_aggregate: Store_Products_Aggregate;
  /** fetch data from the table: "store_products" using primary key columns */
  store_products_by_pk?: Maybe<Store_Products>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** fetch data from the table: "system_information" */
  system_information: Array<System_Information>;
  /** fetch aggregated fields from the table: "system_information" */
  system_information_aggregate: System_Information_Aggregate;
  /** fetch data from the table: "system_information" using primary key columns */
  system_information_by_pk?: Maybe<System_Information>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "transporter_criterias" */
  transporter_criterias: Array<Transporter_Criterias>;
  /** fetch aggregated fields from the table: "transporter_criterias" */
  transporter_criterias_aggregate: Transporter_Criterias_Aggregate;
  /** fetch data from the table: "transporter_criterias" using primary key columns */
  transporter_criterias_by_pk?: Maybe<Transporter_Criterias>;
  /** fetch data from the table: "transports" */
  transports: Array<Transports>;
  /** fetch aggregated fields from the table: "transports" */
  transports_aggregate: Transports_Aggregate;
  /** fetch data from the table: "transports" using primary key columns */
  transports_by_pk?: Maybe<Transports>;
  /** An array relationship */
  user_addresses: Array<User_Addresses>;
  /** An aggregate relationship */
  user_addresses_aggregate: User_Addresses_Aggregate;
  /** fetch data from the table: "user_addresses" using primary key columns */
  user_addresses_by_pk?: Maybe<User_Addresses>;
  /** An array relationship */
  user_consents: Array<User_Consents>;
  /** An aggregate relationship */
  user_consents_aggregate: User_Consents_Aggregate;
  /** fetch data from the table: "user_consents" using primary key columns */
  user_consents_by_pk?: Maybe<User_Consents>;
  /** fetch data from the table: "user_coupon" */
  user_coupon: Array<User_Coupon>;
  /** fetch aggregated fields from the table: "user_coupon" */
  user_coupon_aggregate: User_Coupon_Aggregate;
  /** fetch data from the table: "user_coupon" using primary key columns */
  user_coupon_by_pk?: Maybe<User_Coupon>;
  /** fetch data from the table: "user_favorite_product" */
  user_favorite_product: Array<User_Favorite_Product>;
  /** fetch aggregated fields from the table: "user_favorite_product" */
  user_favorite_product_aggregate: User_Favorite_Product_Aggregate;
  /** fetch data from the table: "user_favorite_product" using primary key columns */
  user_favorite_product_by_pk?: Maybe<User_Favorite_Product>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "warehouse_category" */
  warehouse_category: Array<Warehouse_Category>;
  /** fetch aggregated fields from the table: "warehouse_category" */
  warehouse_category_aggregate: Warehouse_Category_Aggregate;
  /** fetch data from the table: "warehouse_category" using primary key columns */
  warehouse_category_by_pk?: Maybe<Warehouse_Category>;
  /** An array relationship */
  warehouse_hours: Array<Warehouse_Hours>;
  /** An aggregate relationship */
  warehouse_hours_aggregate: Warehouse_Hours_Aggregate;
  /** fetch data from the table: "warehouse_hours" using primary key columns */
  warehouse_hours_by_pk?: Maybe<Warehouse_Hours>;
  /** fetch data from the table: "warehouse_operation_rule" */
  warehouse_operation_rule: Array<Warehouse_Operation_Rule>;
  /** fetch aggregated fields from the table: "warehouse_operation_rule" */
  warehouse_operation_rule_aggregate: Warehouse_Operation_Rule_Aggregate;
  /** fetch data from the table: "warehouse_operation_rule" using primary key columns */
  warehouse_operation_rule_by_pk?: Maybe<Warehouse_Operation_Rule>;
  /** fetch data from the table: "warehouse_status" */
  warehouse_status: Array<Warehouse_Status>;
  /** fetch aggregated fields from the table: "warehouse_status" */
  warehouse_status_aggregate: Warehouse_Status_Aggregate;
  /** fetch data from the table: "warehouse_status" using primary key columns */
  warehouse_status_by_pk?: Maybe<Warehouse_Status>;
  /** fetch data from the table: "warehouse_user_address" */
  warehouse_user_address: Array<Warehouse_User_Address>;
  /** fetch aggregated fields from the table: "warehouse_user_address" */
  warehouse_user_address_aggregate: Warehouse_User_Address_Aggregate;
  /** fetch data from the table: "warehouse_user_address" using primary key columns */
  warehouse_user_address_by_pk?: Maybe<Warehouse_User_Address>;
  /** fetch data from the table: "warehouses" */
  warehouses: Array<Warehouses>;
  /** fetch aggregated fields from the table: "warehouses" */
  warehouses_aggregate: Warehouses_Aggregate;
  /** fetch data from the table: "warehouses" using primary key columns */
  warehouses_by_pk?: Maybe<Warehouses>;
  /** fetch data from the table: "warehouses_text" */
  warehouses_text: Array<Warehouses_Text>;
  /** fetch aggregated fields from the table: "warehouses_text" */
  warehouses_text_aggregate: Warehouses_Text_Aggregate;
};


export type Subscription_RootAddress_LabelArgs = {
  distinct_on?: Maybe<Array<Address_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Label_Order_By>>;
  where?: Maybe<Address_Label_Bool_Exp>;
};


export type Subscription_RootAddress_Label_AggregateArgs = {
  distinct_on?: Maybe<Array<Address_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Label_Order_By>>;
  where?: Maybe<Address_Label_Bool_Exp>;
};


export type Subscription_RootAddress_Label_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootBannersArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


export type Subscription_RootBanners_AggregateArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


export type Subscription_RootBanners_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCart_ItemsArgs = {
  distinct_on?: Maybe<Array<Cart_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Items_Order_By>>;
  where?: Maybe<Cart_Items_Bool_Exp>;
};


export type Subscription_RootCart_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Items_Order_By>>;
  where?: Maybe<Cart_Items_Bool_Exp>;
};


export type Subscription_RootCart_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootConsent_TypeArgs = {
  distinct_on?: Maybe<Array<Consent_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Consent_Type_Order_By>>;
  where?: Maybe<Consent_Type_Bool_Exp>;
};


export type Subscription_RootConsent_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Consent_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Consent_Type_Order_By>>;
  where?: Maybe<Consent_Type_Bool_Exp>;
};


export type Subscription_RootConsent_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCoupon_CategoryArgs = {
  distinct_on?: Maybe<Array<Coupon_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Category_Order_By>>;
  where?: Maybe<Coupon_Category_Bool_Exp>;
};


export type Subscription_RootCoupon_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Category_Order_By>>;
  where?: Maybe<Coupon_Category_Bool_Exp>;
};


export type Subscription_RootCoupon_Category_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCoupon_TagArgs = {
  distinct_on?: Maybe<Array<Coupon_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Tag_Order_By>>;
  where?: Maybe<Coupon_Tag_Bool_Exp>;
};


export type Subscription_RootCoupon_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_Tag_Order_By>>;
  where?: Maybe<Coupon_Tag_Bool_Exp>;
};


export type Subscription_RootCoupon_Tag_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCoupon_User_GroupArgs = {
  distinct_on?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_User_Group_Order_By>>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};


export type Subscription_RootCoupon_User_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupon_User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupon_User_Group_Order_By>>;
  where?: Maybe<Coupon_User_Group_Bool_Exp>;
};


export type Subscription_RootCoupon_User_Group_By_PkArgs = {
  coupon_code: Scalars['String'];
  group_id: Scalars['uuid'];
};


export type Subscription_RootCouponsArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


export type Subscription_RootCoupons_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


export type Subscription_RootCoupons_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


export type Subscription_RootDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


export type Subscription_RootDeliveries_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDeliveries_GroupArgs = {
  distinct_on?: Maybe<Array<Deliveries_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Group_Order_By>>;
  where?: Maybe<Deliveries_Group_Bool_Exp>;
};


export type Subscription_RootDeliveries_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Group_Order_By>>;
  where?: Maybe<Deliveries_Group_Bool_Exp>;
};


export type Subscription_RootDeliveries_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDelivery_FeedbacksArgs = {
  distinct_on?: Maybe<Array<Delivery_Feedbacks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Feedbacks_Order_By>>;
  where?: Maybe<Delivery_Feedbacks_Bool_Exp>;
};


export type Subscription_RootDelivery_Feedbacks_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Feedbacks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Feedbacks_Order_By>>;
  where?: Maybe<Delivery_Feedbacks_Bool_Exp>;
};


export type Subscription_RootDelivery_Feedbacks_By_PkArgs = {
  order_id: Scalars['uuid'];
};


export type Subscription_RootDelivery_MethodArgs = {
  distinct_on?: Maybe<Array<Delivery_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Method_Order_By>>;
  where?: Maybe<Delivery_Method_Bool_Exp>;
};


export type Subscription_RootDelivery_Method_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Method_Order_By>>;
  where?: Maybe<Delivery_Method_Bool_Exp>;
};


export type Subscription_RootDelivery_Method_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDelivery_StatusArgs = {
  distinct_on?: Maybe<Array<Delivery_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Status_Order_By>>;
  where?: Maybe<Delivery_Status_Bool_Exp>;
};


export type Subscription_RootDelivery_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Status_Order_By>>;
  where?: Maybe<Delivery_Status_Bool_Exp>;
};


export type Subscription_RootDelivery_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDiscount_TypeArgs = {
  distinct_on?: Maybe<Array<Discount_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discount_Type_Order_By>>;
  where?: Maybe<Discount_Type_Bool_Exp>;
};


export type Subscription_RootDiscount_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Discount_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discount_Type_Order_By>>;
  where?: Maybe<Discount_Type_Bool_Exp>;
};


export type Subscription_RootDiscount_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDiscountsArgs = {
  distinct_on?: Maybe<Array<Discounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discounts_Order_By>>;
  where?: Maybe<Discounts_Bool_Exp>;
};


export type Subscription_RootDiscounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Discounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Discounts_Order_By>>;
  where?: Maybe<Discounts_Bool_Exp>;
};


export type Subscription_RootDiscounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFeedback_AnswerArgs = {
  distinct_on?: Maybe<Array<Feedback_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feedback_Answer_Order_By>>;
  where?: Maybe<Feedback_Answer_Bool_Exp>;
};


export type Subscription_RootFeedback_Answer_AggregateArgs = {
  distinct_on?: Maybe<Array<Feedback_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feedback_Answer_Order_By>>;
  where?: Maybe<Feedback_Answer_Bool_Exp>;
};


export type Subscription_RootFeedback_Answer_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGift_RulesArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Order_By>>;
  where?: Maybe<Gift_Rules_Bool_Exp>;
};


export type Subscription_RootGift_Rules_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Order_By>>;
  where?: Maybe<Gift_Rules_Bool_Exp>;
};


export type Subscription_RootGift_Rules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGift_Rules_CategoryArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Category_Order_By>>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};


export type Subscription_RootGift_Rules_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Category_Order_By>>;
  where?: Maybe<Gift_Rules_Category_Bool_Exp>;
};


export type Subscription_RootGift_Rules_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  gift_rules_id: Scalars['uuid'];
};


export type Subscription_RootGift_Rules_ProductArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Product_Order_By>>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};


export type Subscription_RootGift_Rules_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Product_Order_By>>;
  where?: Maybe<Gift_Rules_Product_Bool_Exp>;
};


export type Subscription_RootGift_Rules_Product_By_PkArgs = {
  gift_rules_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};


export type Subscription_RootGift_Rules_WarehouseArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Warehouse_Order_By>>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};


export type Subscription_RootGift_Rules_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Gift_Rules_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gift_Rules_Warehouse_Order_By>>;
  where?: Maybe<Gift_Rules_Warehouse_Bool_Exp>;
};


export type Subscription_RootGift_Rules_Warehouse_By_PkArgs = {
  gift_rules_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Subscription_RootGiftsArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gifts_Order_By>>;
  where?: Maybe<Gifts_Bool_Exp>;
};


export type Subscription_RootGifts_AggregateArgs = {
  distinct_on?: Maybe<Array<Gifts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gifts_Order_By>>;
  where?: Maybe<Gifts_Bool_Exp>;
};


export type Subscription_RootGifts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInventory_ProductsArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


export type Subscription_RootInventory_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


export type Subscription_RootInventory_Products_By_PkArgs = {
  product_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Subscription_RootLog_Operator_EventsArgs = {
  distinct_on?: Maybe<Array<Log_Operator_Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Operator_Events_Order_By>>;
  where?: Maybe<Log_Operator_Events_Bool_Exp>;
};


export type Subscription_RootLog_Operator_Events_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Operator_Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Operator_Events_Order_By>>;
  where?: Maybe<Log_Operator_Events_Bool_Exp>;
};


export type Subscription_RootLog_Operator_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOperation_Rule_HandleArgs = {
  distinct_on?: Maybe<Array<Operation_Rule_Handle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rule_Handle_Order_By>>;
  where?: Maybe<Operation_Rule_Handle_Bool_Exp>;
};


export type Subscription_RootOperation_Rule_Handle_AggregateArgs = {
  distinct_on?: Maybe<Array<Operation_Rule_Handle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rule_Handle_Order_By>>;
  where?: Maybe<Operation_Rule_Handle_Bool_Exp>;
};


export type Subscription_RootOperation_Rule_Handle_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootOperation_RulesArgs = {
  distinct_on?: Maybe<Array<Operation_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rules_Order_By>>;
  where?: Maybe<Operation_Rules_Bool_Exp>;
};


export type Subscription_RootOperation_Rules_AggregateArgs = {
  distinct_on?: Maybe<Array<Operation_Rules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Operation_Rules_Order_By>>;
  where?: Maybe<Operation_Rules_Bool_Exp>;
};


export type Subscription_RootOperation_Rules_By_PkArgs = {
  handle: Operation_Rule_Handle_Enum;
};


export type Subscription_RootOrder_ItemsArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Items_Order_By>>;
  where?: Maybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPayment_MethodArgs = {
  distinct_on?: Maybe<Array<Payment_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Method_Order_By>>;
  where?: Maybe<Payment_Method_Bool_Exp>;
};


export type Subscription_RootPayment_Method_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Method_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Method_Order_By>>;
  where?: Maybe<Payment_Method_Bool_Exp>;
};


export type Subscription_RootPayment_Method_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootPayment_StatusArgs = {
  distinct_on?: Maybe<Array<Payment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Status_Order_By>>;
  where?: Maybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payment_Status_Order_By>>;
  where?: Maybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootPopular_SearchesArgs = {
  distinct_on?: Maybe<Array<Popular_Searches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Popular_Searches_Order_By>>;
  where?: Maybe<Popular_Searches_Bool_Exp>;
};


export type Subscription_RootPopular_Searches_AggregateArgs = {
  distinct_on?: Maybe<Array<Popular_Searches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Popular_Searches_Order_By>>;
  where?: Maybe<Popular_Searches_Bool_Exp>;
};


export type Subscription_RootPopular_Searches_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProduct_PropertiesArgs = {
  distinct_on?: Maybe<Array<Product_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Properties_Order_By>>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};


export type Subscription_RootProduct_Properties_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Properties_Order_By>>;
  where?: Maybe<Product_Properties_Bool_Exp>;
};


export type Subscription_RootProduct_Properties_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProduct_SubcategoryArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


export type Subscription_RootProduct_Subcategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Subcategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Subcategory_Order_By>>;
  where?: Maybe<Product_Subcategory_Bool_Exp>;
};


export type Subscription_RootProduct_Subcategory_By_PkArgs = {
  product_id: Scalars['uuid'];
  subcategory_id: Scalars['uuid'];
};


export type Subscription_RootProduct_SuggestionsArgs = {
  distinct_on?: Maybe<Array<Product_Suggestions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Suggestions_Order_By>>;
  where?: Maybe<Product_Suggestions_Bool_Exp>;
};


export type Subscription_RootProduct_Suggestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Suggestions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Suggestions_Order_By>>;
  where?: Maybe<Product_Suggestions_Bool_Exp>;
};


export type Subscription_RootProduct_Suggestions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProduct_TagArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};


export type Subscription_RootProduct_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};


export type Subscription_RootProduct_Tag_By_PkArgs = {
  product_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRider_StatusArgs = {
  distinct_on?: Maybe<Array<Rider_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rider_Status_Order_By>>;
  where?: Maybe<Rider_Status_Bool_Exp>;
};


export type Subscription_RootRider_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Rider_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rider_Status_Order_By>>;
  where?: Maybe<Rider_Status_Bool_Exp>;
};


export type Subscription_RootRider_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootRidersArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


export type Subscription_RootRiders_AggregateArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


export type Subscription_RootRiders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRole_TypeArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


export type Subscription_RootRole_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Type_Order_By>>;
  where?: Maybe<Role_Type_Bool_Exp>;
};


export type Subscription_RootRole_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSearch_ProductsArgs = {
  args: Search_Products_Args;
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootSearch_Products_AggregateArgs = {
  args: Search_Products_Args;
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootStaff_UsersArgs = {
  distinct_on?: Maybe<Array<Staff_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staff_Users_Order_By>>;
  where?: Maybe<Staff_Users_Bool_Exp>;
};


export type Subscription_RootStaff_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Staff_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staff_Users_Order_By>>;
  where?: Maybe<Staff_Users_Bool_Exp>;
};


export type Subscription_RootStaff_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStore_CategoryArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


export type Subscription_RootStore_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Category_Order_By>>;
  where?: Maybe<Store_Category_Bool_Exp>;
};


export type Subscription_RootStore_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};


export type Subscription_RootStore_HoursArgs = {
  distinct_on?: Maybe<Array<Store_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Hours_Order_By>>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};


export type Subscription_RootStore_Hours_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Hours_Order_By>>;
  where?: Maybe<Store_Hours_Bool_Exp>;
};


export type Subscription_RootStore_Hours_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStore_ProductsArgs = {
  distinct_on?: Maybe<Array<Store_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Products_Order_By>>;
  where?: Maybe<Store_Products_Bool_Exp>;
};


export type Subscription_RootStore_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Products_Order_By>>;
  where?: Maybe<Store_Products_Bool_Exp>;
};


export type Subscription_RootStore_Products_By_PkArgs = {
  inventory_product_id: Scalars['uuid'];
  store_id: Scalars['uuid'];
};


export type Subscription_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


export type Subscription_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


export type Subscription_RootStores_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSubcategoriesArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Subscription_RootSubcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Subscription_RootSubcategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSystem_InformationArgs = {
  distinct_on?: Maybe<Array<System_Information_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<System_Information_Order_By>>;
  where?: Maybe<System_Information_Bool_Exp>;
};


export type Subscription_RootSystem_Information_AggregateArgs = {
  distinct_on?: Maybe<Array<System_Information_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<System_Information_Order_By>>;
  where?: Maybe<System_Information_Bool_Exp>;
};


export type Subscription_RootSystem_Information_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransporter_CriteriasArgs = {
  distinct_on?: Maybe<Array<Transporter_Criterias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transporter_Criterias_Order_By>>;
  where?: Maybe<Transporter_Criterias_Bool_Exp>;
};


export type Subscription_RootTransporter_Criterias_AggregateArgs = {
  distinct_on?: Maybe<Array<Transporter_Criterias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transporter_Criterias_Order_By>>;
  where?: Maybe<Transporter_Criterias_Bool_Exp>;
};


export type Subscription_RootTransporter_Criterias_By_PkArgs = {
  transport_mode: Scalars['String'];
  transporter_name: Delivery_Method_Enum;
};


export type Subscription_RootTransportsArgs = {
  distinct_on?: Maybe<Array<Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transports_Order_By>>;
  where?: Maybe<Transports_Bool_Exp>;
};


export type Subscription_RootTransports_AggregateArgs = {
  distinct_on?: Maybe<Array<Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transports_Order_By>>;
  where?: Maybe<Transports_Bool_Exp>;
};


export type Subscription_RootTransports_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUser_AddressesArgs = {
  distinct_on?: Maybe<Array<User_Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Addresses_Order_By>>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};


export type Subscription_RootUser_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Addresses_Order_By>>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};


export type Subscription_RootUser_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_ConsentsArgs = {
  distinct_on?: Maybe<Array<User_Consents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Consents_Order_By>>;
  where?: Maybe<User_Consents_Bool_Exp>;
};


export type Subscription_RootUser_Consents_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Consents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Consents_Order_By>>;
  where?: Maybe<User_Consents_Bool_Exp>;
};


export type Subscription_RootUser_Consents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_CouponArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


export type Subscription_RootUser_Coupon_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


export type Subscription_RootUser_Coupon_By_PkArgs = {
  coupon_code: Scalars['String'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_Favorite_ProductArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


export type Subscription_RootUser_Favorite_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


export type Subscription_RootUser_Favorite_Product_By_PkArgs = {
  product_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_GroupArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


export type Subscription_RootUser_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


export type Subscription_RootUser_Group_By_PkArgs = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  role: Role_Type_Enum;
  user_id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWarehouse_CategoryArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


export type Subscription_RootWarehouse_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


export type Subscription_RootWarehouse_Category_By_PkArgs = {
  category_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Subscription_RootWarehouse_HoursArgs = {
  distinct_on?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Hours_Order_By>>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};


export type Subscription_RootWarehouse_Hours_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Hours_Order_By>>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};


export type Subscription_RootWarehouse_Hours_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWarehouse_Operation_RuleArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};


export type Subscription_RootWarehouse_Operation_Rule_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};


export type Subscription_RootWarehouse_Operation_Rule_By_PkArgs = {
  operation_rule_handle: Scalars['String'];
  warehouse_id: Scalars['uuid'];
};


export type Subscription_RootWarehouse_StatusArgs = {
  distinct_on?: Maybe<Array<Warehouse_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Status_Order_By>>;
  where?: Maybe<Warehouse_Status_Bool_Exp>;
};


export type Subscription_RootWarehouse_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Status_Order_By>>;
  where?: Maybe<Warehouse_Status_Bool_Exp>;
};


export type Subscription_RootWarehouse_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootWarehouse_User_AddressArgs = {
  distinct_on?: Maybe<Array<Warehouse_User_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_User_Address_Order_By>>;
  where?: Maybe<Warehouse_User_Address_Bool_Exp>;
};


export type Subscription_RootWarehouse_User_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_User_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_User_Address_Order_By>>;
  where?: Maybe<Warehouse_User_Address_Bool_Exp>;
};


export type Subscription_RootWarehouse_User_Address_By_PkArgs = {
  user_address_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};


export type Subscription_RootWarehousesArgs = {
  distinct_on?: Maybe<Array<Warehouses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Order_By>>;
  where?: Maybe<Warehouses_Bool_Exp>;
};


export type Subscription_RootWarehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Order_By>>;
  where?: Maybe<Warehouses_Bool_Exp>;
};


export type Subscription_RootWarehouses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWarehouses_TextArgs = {
  distinct_on?: Maybe<Array<Warehouses_Text_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Text_Order_By>>;
  where?: Maybe<Warehouses_Text_Bool_Exp>;
};


export type Subscription_RootWarehouses_Text_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouses_Text_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouses_Text_Order_By>>;
  where?: Maybe<Warehouses_Text_Bool_Exp>;
};

/** columns and relationships of "system_information" */
export type System_Information = {
  __typename?: 'system_information';
  name: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "system_information" */
export type System_Information_Aggregate = {
  __typename?: 'system_information_aggregate';
  aggregate?: Maybe<System_Information_Aggregate_Fields>;
  nodes: Array<System_Information>;
};

/** aggregate fields of "system_information" */
export type System_Information_Aggregate_Fields = {
  __typename?: 'system_information_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<System_Information_Max_Fields>;
  min?: Maybe<System_Information_Min_Fields>;
};


/** aggregate fields of "system_information" */
export type System_Information_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<System_Information_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "system_information". All fields are combined with a logical 'AND'. */
export type System_Information_Bool_Exp = {
  _and?: Maybe<Array<System_Information_Bool_Exp>>;
  _not?: Maybe<System_Information_Bool_Exp>;
  _or?: Maybe<Array<System_Information_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "system_information" */
export enum System_Information_Constraint {
  /** unique or primary key constraint */
  SystemInformationPkey = 'system_information_pkey'
}

/** input type for inserting data into table "system_information" */
export type System_Information_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type System_Information_Max_Fields = {
  __typename?: 'system_information_max_fields';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type System_Information_Min_Fields = {
  __typename?: 'system_information_min_fields';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "system_information" */
export type System_Information_Mutation_Response = {
  __typename?: 'system_information_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<System_Information>;
};

/** on conflict condition type for table "system_information" */
export type System_Information_On_Conflict = {
  constraint: System_Information_Constraint;
  update_columns?: Array<System_Information_Update_Column>;
  where?: Maybe<System_Information_Bool_Exp>;
};

/** Ordering options when selecting data from "system_information". */
export type System_Information_Order_By = {
  name?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: system_information */
export type System_Information_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "system_information" */
export enum System_Information_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "system_information" */
export type System_Information_Set_Input = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "system_information" */
export enum System_Information_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags';
  id: Scalars['uuid'];
  /** An array relationship */
  tag_products: Array<Product_Tag>;
  /** An aggregate relationship */
  tag_products_aggregate: Product_Tag_Aggregate;
  tag_value: Scalars['String'];
};


/** columns and relationships of "tags" */
export type TagsTag_ProductsArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsTag_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Tag_Order_By>>;
  where?: Maybe<Product_Tag_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Maybe<Array<Tags_Bool_Exp>>;
  _not?: Maybe<Tags_Bool_Exp>;
  _or?: Maybe<Array<Tags_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  tag_products?: Maybe<Product_Tag_Bool_Exp>;
  tag_value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey'
}

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  tag_products?: Maybe<Product_Tag_Arr_Rel_Insert_Input>;
  tag_value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  id?: Maybe<Scalars['uuid']>;
  tag_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  id?: Maybe<Scalars['uuid']>;
  tag_value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tags_On_Conflict>;
};

/** on conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: Maybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  id?: Maybe<Order_By>;
  tag_products_aggregate?: Maybe<Product_Tag_Aggregate_Order_By>;
  tag_value?: Maybe<Order_By>;
};

/** primary key columns input for table: tags */
export type Tags_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TagValue = 'tag_value'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  tag_value?: Maybe<Scalars['String']>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TagValue = 'tag_value'
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transporter_criterias" */
export type Transporter_Criterias = {
  __typename?: 'transporter_criterias';
  availability_by_cities: Scalars['String'];
  transport_mode: Scalars['String'];
  transporter_name: Delivery_Method_Enum;
  weight_criterias: Scalars['String'];
};

/** aggregated selection of "transporter_criterias" */
export type Transporter_Criterias_Aggregate = {
  __typename?: 'transporter_criterias_aggregate';
  aggregate?: Maybe<Transporter_Criterias_Aggregate_Fields>;
  nodes: Array<Transporter_Criterias>;
};

/** aggregate fields of "transporter_criterias" */
export type Transporter_Criterias_Aggregate_Fields = {
  __typename?: 'transporter_criterias_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transporter_Criterias_Max_Fields>;
  min?: Maybe<Transporter_Criterias_Min_Fields>;
};


/** aggregate fields of "transporter_criterias" */
export type Transporter_Criterias_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transporter_Criterias_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transporter_criterias". All fields are combined with a logical 'AND'. */
export type Transporter_Criterias_Bool_Exp = {
  _and?: Maybe<Array<Transporter_Criterias_Bool_Exp>>;
  _not?: Maybe<Transporter_Criterias_Bool_Exp>;
  _or?: Maybe<Array<Transporter_Criterias_Bool_Exp>>;
  availability_by_cities?: Maybe<String_Comparison_Exp>;
  transport_mode?: Maybe<String_Comparison_Exp>;
  transporter_name?: Maybe<Delivery_Method_Enum_Comparison_Exp>;
  weight_criterias?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transporter_criterias" */
export enum Transporter_Criterias_Constraint {
  /** unique or primary key constraint */
  TransporterCriteriasPkey = 'transporter_criterias_pkey'
}

/** input type for inserting data into table "transporter_criterias" */
export type Transporter_Criterias_Insert_Input = {
  availability_by_cities?: Maybe<Scalars['String']>;
  transport_mode?: Maybe<Scalars['String']>;
  transporter_name?: Maybe<Delivery_Method_Enum>;
  weight_criterias?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transporter_Criterias_Max_Fields = {
  __typename?: 'transporter_criterias_max_fields';
  availability_by_cities?: Maybe<Scalars['String']>;
  transport_mode?: Maybe<Scalars['String']>;
  weight_criterias?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transporter_Criterias_Min_Fields = {
  __typename?: 'transporter_criterias_min_fields';
  availability_by_cities?: Maybe<Scalars['String']>;
  transport_mode?: Maybe<Scalars['String']>;
  weight_criterias?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transporter_criterias" */
export type Transporter_Criterias_Mutation_Response = {
  __typename?: 'transporter_criterias_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transporter_Criterias>;
};

/** on conflict condition type for table "transporter_criterias" */
export type Transporter_Criterias_On_Conflict = {
  constraint: Transporter_Criterias_Constraint;
  update_columns?: Array<Transporter_Criterias_Update_Column>;
  where?: Maybe<Transporter_Criterias_Bool_Exp>;
};

/** Ordering options when selecting data from "transporter_criterias". */
export type Transporter_Criterias_Order_By = {
  availability_by_cities?: Maybe<Order_By>;
  transport_mode?: Maybe<Order_By>;
  transporter_name?: Maybe<Order_By>;
  weight_criterias?: Maybe<Order_By>;
};

/** primary key columns input for table: transporter_criterias */
export type Transporter_Criterias_Pk_Columns_Input = {
  transport_mode: Scalars['String'];
  transporter_name: Delivery_Method_Enum;
};

/** select columns of table "transporter_criterias" */
export enum Transporter_Criterias_Select_Column {
  /** column name */
  AvailabilityByCities = 'availability_by_cities',
  /** column name */
  TransportMode = 'transport_mode',
  /** column name */
  TransporterName = 'transporter_name',
  /** column name */
  WeightCriterias = 'weight_criterias'
}

/** input type for updating data in table "transporter_criterias" */
export type Transporter_Criterias_Set_Input = {
  availability_by_cities?: Maybe<Scalars['String']>;
  transport_mode?: Maybe<Scalars['String']>;
  transporter_name?: Maybe<Delivery_Method_Enum>;
  weight_criterias?: Maybe<Scalars['String']>;
};

/** update columns of table "transporter_criterias" */
export enum Transporter_Criterias_Update_Column {
  /** column name */
  AvailabilityByCities = 'availability_by_cities',
  /** column name */
  TransportMode = 'transport_mode',
  /** column name */
  TransporterName = 'transporter_name',
  /** column name */
  WeightCriterias = 'weight_criterias'
}

/** columns and relationships of "transports" */
export type Transports = {
  __typename?: 'transports';
  value: Scalars['String'];
};

/** aggregated selection of "transports" */
export type Transports_Aggregate = {
  __typename?: 'transports_aggregate';
  aggregate?: Maybe<Transports_Aggregate_Fields>;
  nodes: Array<Transports>;
};

/** aggregate fields of "transports" */
export type Transports_Aggregate_Fields = {
  __typename?: 'transports_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transports_Max_Fields>;
  min?: Maybe<Transports_Min_Fields>;
};


/** aggregate fields of "transports" */
export type Transports_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transports_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transports". All fields are combined with a logical 'AND'. */
export type Transports_Bool_Exp = {
  _and?: Maybe<Array<Transports_Bool_Exp>>;
  _not?: Maybe<Transports_Bool_Exp>;
  _or?: Maybe<Array<Transports_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transports" */
export enum Transports_Constraint {
  /** unique or primary key constraint */
  TransportsPkey = 'transports_pkey'
}

/** input type for inserting data into table "transports" */
export type Transports_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transports_Max_Fields = {
  __typename?: 'transports_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transports_Min_Fields = {
  __typename?: 'transports_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transports" */
export type Transports_Mutation_Response = {
  __typename?: 'transports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transports>;
};

/** on conflict condition type for table "transports" */
export type Transports_On_Conflict = {
  constraint: Transports_Constraint;
  update_columns?: Array<Transports_Update_Column>;
  where?: Maybe<Transports_Bool_Exp>;
};

/** Ordering options when selecting data from "transports". */
export type Transports_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: transports */
export type Transports_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "transports" */
export enum Transports_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "transports" */
export type Transports_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "transports" */
export enum Transports_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "user_addresses" */
export type User_Addresses = {
  __typename?: 'user_addresses';
  address_line_1: Scalars['String'];
  address_line_2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  instructions?: Maybe<Scalars['String']>;
  is_outside: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  label_enum?: Maybe<Address_Label_Enum>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  postal_code: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_addresses" */
export type User_Addresses_Aggregate = {
  __typename?: 'user_addresses_aggregate';
  aggregate?: Maybe<User_Addresses_Aggregate_Fields>;
  nodes: Array<User_Addresses>;
};

/** aggregate fields of "user_addresses" */
export type User_Addresses_Aggregate_Fields = {
  __typename?: 'user_addresses_aggregate_fields';
  avg?: Maybe<User_Addresses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Addresses_Max_Fields>;
  min?: Maybe<User_Addresses_Min_Fields>;
  stddev?: Maybe<User_Addresses_Stddev_Fields>;
  stddev_pop?: Maybe<User_Addresses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Addresses_Stddev_Samp_Fields>;
  sum?: Maybe<User_Addresses_Sum_Fields>;
  var_pop?: Maybe<User_Addresses_Var_Pop_Fields>;
  var_samp?: Maybe<User_Addresses_Var_Samp_Fields>;
  variance?: Maybe<User_Addresses_Variance_Fields>;
};


/** aggregate fields of "user_addresses" */
export type User_Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Addresses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_addresses" */
export type User_Addresses_Aggregate_Order_By = {
  avg?: Maybe<User_Addresses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Addresses_Max_Order_By>;
  min?: Maybe<User_Addresses_Min_Order_By>;
  stddev?: Maybe<User_Addresses_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Addresses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Addresses_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Addresses_Sum_Order_By>;
  var_pop?: Maybe<User_Addresses_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Addresses_Var_Samp_Order_By>;
  variance?: Maybe<User_Addresses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_addresses" */
export type User_Addresses_Arr_Rel_Insert_Input = {
  data: Array<User_Addresses_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Addresses_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Addresses_Avg_Fields = {
  __typename?: 'user_addresses_avg_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_addresses" */
export type User_Addresses_Avg_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_addresses". All fields are combined with a logical 'AND'. */
export type User_Addresses_Bool_Exp = {
  _and?: Maybe<Array<User_Addresses_Bool_Exp>>;
  _not?: Maybe<User_Addresses_Bool_Exp>;
  _or?: Maybe<Array<User_Addresses_Bool_Exp>>;
  address_line_1?: Maybe<String_Comparison_Exp>;
  address_line_2?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  instructions?: Maybe<String_Comparison_Exp>;
  is_outside?: Maybe<Boolean_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  label_enum?: Maybe<Address_Label_Enum_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_addresses" */
export enum User_Addresses_Constraint {
  /** unique or primary key constraint */
  UserAddressesPkey = 'user_addresses_pkey'
}

/** input type for incrementing numeric columns in table "user_addresses" */
export type User_Addresses_Inc_Input = {
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "user_addresses" */
export type User_Addresses_Insert_Input = {
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  is_outside?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  label_enum?: Maybe<Address_Label_Enum>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  postal_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Addresses_Max_Fields = {
  __typename?: 'user_addresses_max_fields';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  postal_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_addresses" */
export type User_Addresses_Max_Order_By = {
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instructions?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Addresses_Min_Fields = {
  __typename?: 'user_addresses_min_fields';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  postal_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_addresses" */
export type User_Addresses_Min_Order_By = {
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instructions?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_addresses" */
export type User_Addresses_Mutation_Response = {
  __typename?: 'user_addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Addresses>;
};

/** input type for inserting object relation for remote table "user_addresses" */
export type User_Addresses_Obj_Rel_Insert_Input = {
  data: User_Addresses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<User_Addresses_On_Conflict>;
};

/** on conflict condition type for table "user_addresses" */
export type User_Addresses_On_Conflict = {
  constraint: User_Addresses_Constraint;
  update_columns?: Array<User_Addresses_Update_Column>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "user_addresses". */
export type User_Addresses_Order_By = {
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instructions?: Maybe<Order_By>;
  is_outside?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  label_enum?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_addresses */
export type User_Addresses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_addresses" */
export enum User_Addresses_Select_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  IsOutside = 'is_outside',
  /** column name */
  Label = 'label',
  /** column name */
  LabelEnum = 'label_enum',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_addresses" */
export type User_Addresses_Set_Input = {
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  is_outside?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  label_enum?: Maybe<Address_Label_Enum>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  postal_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Addresses_Stddev_Fields = {
  __typename?: 'user_addresses_stddev_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_addresses" */
export type User_Addresses_Stddev_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Addresses_Stddev_Pop_Fields = {
  __typename?: 'user_addresses_stddev_pop_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_addresses" */
export type User_Addresses_Stddev_Pop_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Addresses_Stddev_Samp_Fields = {
  __typename?: 'user_addresses_stddev_samp_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_addresses" */
export type User_Addresses_Stddev_Samp_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Addresses_Sum_Fields = {
  __typename?: 'user_addresses_sum_fields';
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "user_addresses" */
export type User_Addresses_Sum_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** update columns of table "user_addresses" */
export enum User_Addresses_Update_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  IsOutside = 'is_outside',
  /** column name */
  Label = 'label',
  /** column name */
  LabelEnum = 'label_enum',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Addresses_Var_Pop_Fields = {
  __typename?: 'user_addresses_var_pop_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_addresses" */
export type User_Addresses_Var_Pop_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Addresses_Var_Samp_Fields = {
  __typename?: 'user_addresses_var_samp_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_addresses" */
export type User_Addresses_Var_Samp_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Addresses_Variance_Fields = {
  __typename?: 'user_addresses_variance_fields';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_addresses" */
export type User_Addresses_Variance_Order_By = {
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** columns and relationships of "user_consents" */
export type User_Consents = {
  __typename?: 'user_consents';
  agreed: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  type: Consent_Type_Enum;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_consents" */
export type User_Consents_Aggregate = {
  __typename?: 'user_consents_aggregate';
  aggregate?: Maybe<User_Consents_Aggregate_Fields>;
  nodes: Array<User_Consents>;
};

/** aggregate fields of "user_consents" */
export type User_Consents_Aggregate_Fields = {
  __typename?: 'user_consents_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Consents_Max_Fields>;
  min?: Maybe<User_Consents_Min_Fields>;
};


/** aggregate fields of "user_consents" */
export type User_Consents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Consents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_consents" */
export type User_Consents_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Consents_Max_Order_By>;
  min?: Maybe<User_Consents_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_consents" */
export type User_Consents_Arr_Rel_Insert_Input = {
  data: Array<User_Consents_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Consents_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_consents". All fields are combined with a logical 'AND'. */
export type User_Consents_Bool_Exp = {
  _and?: Maybe<Array<User_Consents_Bool_Exp>>;
  _not?: Maybe<User_Consents_Bool_Exp>;
  _or?: Maybe<Array<User_Consents_Bool_Exp>>;
  agreed?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<Consent_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_consents" */
export enum User_Consents_Constraint {
  /** unique or primary key constraint */
  UserConsentsPkey = 'user_consents_pkey'
}

/** input type for inserting data into table "user_consents" */
export type User_Consents_Insert_Input = {
  agreed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Consent_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Consents_Max_Fields = {
  __typename?: 'user_consents_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_consents" */
export type User_Consents_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Consents_Min_Fields = {
  __typename?: 'user_consents_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_consents" */
export type User_Consents_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_consents" */
export type User_Consents_Mutation_Response = {
  __typename?: 'user_consents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Consents>;
};

/** on conflict condition type for table "user_consents" */
export type User_Consents_On_Conflict = {
  constraint: User_Consents_Constraint;
  update_columns?: Array<User_Consents_Update_Column>;
  where?: Maybe<User_Consents_Bool_Exp>;
};

/** Ordering options when selecting data from "user_consents". */
export type User_Consents_Order_By = {
  agreed?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_consents */
export type User_Consents_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_consents" */
export enum User_Consents_Select_Column {
  /** column name */
  Agreed = 'agreed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_consents" */
export type User_Consents_Set_Input = {
  agreed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Consent_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_consents" */
export enum User_Consents_Update_Column {
  /** column name */
  Agreed = 'agreed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "user_coupon" */
export type User_Coupon = {
  __typename?: 'user_coupon';
  /** An object relationship */
  coupon: Coupons;
  coupon_code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  redeem_count: Scalars['Int'];
  redeemed: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_coupon" */
export type User_Coupon_Aggregate = {
  __typename?: 'user_coupon_aggregate';
  aggregate?: Maybe<User_Coupon_Aggregate_Fields>;
  nodes: Array<User_Coupon>;
};

/** aggregate fields of "user_coupon" */
export type User_Coupon_Aggregate_Fields = {
  __typename?: 'user_coupon_aggregate_fields';
  avg?: Maybe<User_Coupon_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Coupon_Max_Fields>;
  min?: Maybe<User_Coupon_Min_Fields>;
  stddev?: Maybe<User_Coupon_Stddev_Fields>;
  stddev_pop?: Maybe<User_Coupon_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Coupon_Stddev_Samp_Fields>;
  sum?: Maybe<User_Coupon_Sum_Fields>;
  var_pop?: Maybe<User_Coupon_Var_Pop_Fields>;
  var_samp?: Maybe<User_Coupon_Var_Samp_Fields>;
  variance?: Maybe<User_Coupon_Variance_Fields>;
};


/** aggregate fields of "user_coupon" */
export type User_Coupon_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Coupon_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_coupon" */
export type User_Coupon_Aggregate_Order_By = {
  avg?: Maybe<User_Coupon_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Coupon_Max_Order_By>;
  min?: Maybe<User_Coupon_Min_Order_By>;
  stddev?: Maybe<User_Coupon_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Coupon_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Coupon_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Coupon_Sum_Order_By>;
  var_pop?: Maybe<User_Coupon_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Coupon_Var_Samp_Order_By>;
  variance?: Maybe<User_Coupon_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_coupon" */
export type User_Coupon_Arr_Rel_Insert_Input = {
  data: Array<User_Coupon_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Coupon_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Coupon_Avg_Fields = {
  __typename?: 'user_coupon_avg_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_coupon" */
export type User_Coupon_Avg_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_coupon". All fields are combined with a logical 'AND'. */
export type User_Coupon_Bool_Exp = {
  _and?: Maybe<Array<User_Coupon_Bool_Exp>>;
  _not?: Maybe<User_Coupon_Bool_Exp>;
  _or?: Maybe<Array<User_Coupon_Bool_Exp>>;
  coupon?: Maybe<Coupons_Bool_Exp>;
  coupon_code?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  redeem_count?: Maybe<Int_Comparison_Exp>;
  redeemed?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_coupon" */
export enum User_Coupon_Constraint {
  /** unique or primary key constraint */
  UserCouponPkey = 'user_coupon_pkey'
}

/** input type for incrementing numeric columns in table "user_coupon" */
export type User_Coupon_Inc_Input = {
  redeem_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_coupon" */
export type User_Coupon_Insert_Input = {
  coupon?: Maybe<Coupons_Obj_Rel_Insert_Input>;
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  redeem_count?: Maybe<Scalars['Int']>;
  redeemed?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Coupon_Max_Fields = {
  __typename?: 'user_coupon_max_fields';
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  redeem_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_coupon" */
export type User_Coupon_Max_Order_By = {
  coupon_code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  redeem_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Coupon_Min_Fields = {
  __typename?: 'user_coupon_min_fields';
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  redeem_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_coupon" */
export type User_Coupon_Min_Order_By = {
  coupon_code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  redeem_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_coupon" */
export type User_Coupon_Mutation_Response = {
  __typename?: 'user_coupon_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Coupon>;
};

/** on conflict condition type for table "user_coupon" */
export type User_Coupon_On_Conflict = {
  constraint: User_Coupon_Constraint;
  update_columns?: Array<User_Coupon_Update_Column>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};

/** Ordering options when selecting data from "user_coupon". */
export type User_Coupon_Order_By = {
  coupon?: Maybe<Coupons_Order_By>;
  coupon_code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  redeem_count?: Maybe<Order_By>;
  redeemed?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_coupon */
export type User_Coupon_Pk_Columns_Input = {
  coupon_code: Scalars['String'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_coupon" */
export enum User_Coupon_Select_Column {
  /** column name */
  CouponCode = 'coupon_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  RedeemCount = 'redeem_count',
  /** column name */
  Redeemed = 'redeemed',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_coupon" */
export type User_Coupon_Set_Input = {
  coupon_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  redeem_count?: Maybe<Scalars['Int']>;
  redeemed?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Coupon_Stddev_Fields = {
  __typename?: 'user_coupon_stddev_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_coupon" */
export type User_Coupon_Stddev_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Coupon_Stddev_Pop_Fields = {
  __typename?: 'user_coupon_stddev_pop_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_coupon" */
export type User_Coupon_Stddev_Pop_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Coupon_Stddev_Samp_Fields = {
  __typename?: 'user_coupon_stddev_samp_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_coupon" */
export type User_Coupon_Stddev_Samp_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Coupon_Sum_Fields = {
  __typename?: 'user_coupon_sum_fields';
  redeem_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_coupon" */
export type User_Coupon_Sum_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** update columns of table "user_coupon" */
export enum User_Coupon_Update_Column {
  /** column name */
  CouponCode = 'coupon_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  RedeemCount = 'redeem_count',
  /** column name */
  Redeemed = 'redeemed',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Coupon_Var_Pop_Fields = {
  __typename?: 'user_coupon_var_pop_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_coupon" */
export type User_Coupon_Var_Pop_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Coupon_Var_Samp_Fields = {
  __typename?: 'user_coupon_var_samp_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_coupon" */
export type User_Coupon_Var_Samp_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Coupon_Variance_Fields = {
  __typename?: 'user_coupon_variance_fields';
  redeem_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_coupon" */
export type User_Coupon_Variance_Order_By = {
  redeem_count?: Maybe<Order_By>;
};

/** columns and relationships of "user_favorite_product" */
export type User_Favorite_Product = {
  __typename?: 'user_favorite_product';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_favorite_product" */
export type User_Favorite_Product_Aggregate = {
  __typename?: 'user_favorite_product_aggregate';
  aggregate?: Maybe<User_Favorite_Product_Aggregate_Fields>;
  nodes: Array<User_Favorite_Product>;
};

/** aggregate fields of "user_favorite_product" */
export type User_Favorite_Product_Aggregate_Fields = {
  __typename?: 'user_favorite_product_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Favorite_Product_Max_Fields>;
  min?: Maybe<User_Favorite_Product_Min_Fields>;
};


/** aggregate fields of "user_favorite_product" */
export type User_Favorite_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_favorite_product" */
export type User_Favorite_Product_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Favorite_Product_Max_Order_By>;
  min?: Maybe<User_Favorite_Product_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_favorite_product" */
export type User_Favorite_Product_Arr_Rel_Insert_Input = {
  data: Array<User_Favorite_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Favorite_Product_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_favorite_product". All fields are combined with a logical 'AND'. */
export type User_Favorite_Product_Bool_Exp = {
  _and?: Maybe<Array<User_Favorite_Product_Bool_Exp>>;
  _not?: Maybe<User_Favorite_Product_Bool_Exp>;
  _or?: Maybe<Array<User_Favorite_Product_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_favorite_product" */
export enum User_Favorite_Product_Constraint {
  /** unique or primary key constraint */
  UserFavoriteProductPkey = 'user_favorite_product_pkey'
}

/** input type for inserting data into table "user_favorite_product" */
export type User_Favorite_Product_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Favorite_Product_Max_Fields = {
  __typename?: 'user_favorite_product_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  product_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_favorite_product" */
export type User_Favorite_Product_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Favorite_Product_Min_Fields = {
  __typename?: 'user_favorite_product_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  product_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_favorite_product" */
export type User_Favorite_Product_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_favorite_product" */
export type User_Favorite_Product_Mutation_Response = {
  __typename?: 'user_favorite_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Favorite_Product>;
};

/** on conflict condition type for table "user_favorite_product" */
export type User_Favorite_Product_On_Conflict = {
  constraint: User_Favorite_Product_Constraint;
  update_columns?: Array<User_Favorite_Product_Update_Column>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "user_favorite_product". */
export type User_Favorite_Product_Order_By = {
  created_at?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_favorite_product */
export type User_Favorite_Product_Pk_Columns_Input = {
  product_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_favorite_product" */
export enum User_Favorite_Product_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_favorite_product" */
export type User_Favorite_Product_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  product_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_favorite_product" */
export enum User_Favorite_Product_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "user_group" */
export type User_Group = {
  __typename?: 'user_group';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_group" */
export type User_Group_Aggregate = {
  __typename?: 'user_group_aggregate';
  aggregate?: Maybe<User_Group_Aggregate_Fields>;
  nodes: Array<User_Group>;
};

/** aggregate fields of "user_group" */
export type User_Group_Aggregate_Fields = {
  __typename?: 'user_group_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Group_Max_Fields>;
  min?: Maybe<User_Group_Min_Fields>;
};


/** aggregate fields of "user_group" */
export type User_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_group" */
export type User_Group_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Group_Max_Order_By>;
  min?: Maybe<User_Group_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_group" */
export type User_Group_Arr_Rel_Insert_Input = {
  data: Array<User_Group_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Group_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_group". All fields are combined with a logical 'AND'. */
export type User_Group_Bool_Exp = {
  _and?: Maybe<Array<User_Group_Bool_Exp>>;
  _not?: Maybe<User_Group_Bool_Exp>;
  _or?: Maybe<Array<User_Group_Bool_Exp>>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_group" */
export enum User_Group_Constraint {
  /** unique or primary key constraint */
  UserGroupPkey = 'user_group_pkey'
}

/** input type for inserting data into table "user_group" */
export type User_Group_Insert_Input = {
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Group_Max_Fields = {
  __typename?: 'user_group_max_fields';
  group_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_group" */
export type User_Group_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Group_Min_Fields = {
  __typename?: 'user_group_min_fields';
  group_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_group" */
export type User_Group_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_group" */
export type User_Group_Mutation_Response = {
  __typename?: 'user_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Group>;
};

/** on conflict condition type for table "user_group" */
export type User_Group_On_Conflict = {
  constraint: User_Group_Constraint;
  update_columns?: Array<User_Group_Update_Column>;
  where?: Maybe<User_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "user_group". */
export type User_Group_Order_By = {
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_group */
export type User_Group_Pk_Columns_Input = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_group" */
export enum User_Group_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_group" */
export type User_Group_Set_Input = {
  group_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_group" */
export enum User_Group_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  role: Role_Type_Enum;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Role_Max_Order_By>;
  min?: Maybe<User_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: Maybe<Array<User_Role_Bool_Exp>>;
  _not?: Maybe<User_Role_Bool_Exp>;
  _or?: Maybe<Array<User_Role_Bool_Exp>>;
  role?: Maybe<Role_Type_Enum_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  role?: Maybe<Role_Type_Enum>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** on conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  role?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  role: Role_Type_Enum;
  user_id: Scalars['uuid'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  role?: Maybe<Role_Type_Enum>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  apple_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  legacy_shopify_customer_id?: Maybe<Scalars['String']>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone_number: Scalars['String'];
  phone_number_confirmed: Scalars['Boolean'];
  push_notification_token?: Maybe<Scalars['String']>;
  /** An array relationship */
  referral_coupons: Array<Coupons>;
  /** An aggregate relationship */
  referral_coupons_aggregate: Coupons_Aggregate;
  stripe?: Maybe<StripeUser>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_addresses: Array<User_Addresses>;
  /** An aggregate relationship */
  user_addresses_aggregate: User_Addresses_Aggregate;
  /** An array relationship */
  user_consents: Array<User_Consents>;
  /** An aggregate relationship */
  user_consents_aggregate: User_Consents_Aggregate;
  /** An array relationship */
  user_coupons: Array<User_Coupon>;
  /** An aggregate relationship */
  user_coupons_aggregate: User_Coupon_Aggregate;
  /** An array relationship */
  user_favorite_products: Array<User_Favorite_Product>;
  /** An aggregate relationship */
  user_favorite_products_aggregate: User_Favorite_Product_Aggregate;
  /** An array relationship */
  user_groups: Array<User_Group>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Group_Aggregate;
  user_number: Scalars['Int'];
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReferral_CouponsArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReferral_Coupons_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_AddressesArgs = {
  distinct_on?: Maybe<Array<User_Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Addresses_Order_By>>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Addresses_Order_By>>;
  where?: Maybe<User_Addresses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_ConsentsArgs = {
  distinct_on?: Maybe<Array<User_Consents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Consents_Order_By>>;
  where?: Maybe<User_Consents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Consents_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Consents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Consents_Order_By>>;
  where?: Maybe<User_Consents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_CouponsArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Coupons_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Coupon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Coupon_Order_By>>;
  where?: Maybe<User_Coupon_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Favorite_ProductsArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Favorite_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Favorite_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Favorite_Product_Order_By>>;
  where?: Maybe<User_Favorite_Product_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_GroupsArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  apple_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  facebook_id?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  google_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  legacy_shopify_customer_id?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
  phone_number_confirmed?: Maybe<Boolean_Comparison_Exp>;
  push_notification_token?: Maybe<String_Comparison_Exp>;
  referral_coupons?: Maybe<Coupons_Bool_Exp>;
  stripe_customer_id?: Maybe<String_Comparison_Exp>;
  temp_password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_addresses?: Maybe<User_Addresses_Bool_Exp>;
  user_consents?: Maybe<User_Consents_Bool_Exp>;
  user_coupons?: Maybe<User_Coupon_Bool_Exp>;
  user_favorite_products?: Maybe<User_Favorite_Product_Bool_Exp>;
  user_groups?: Maybe<User_Group_Bool_Exp>;
  user_number?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersAppleIdKey = 'users_apple_id_key',
  /** unique or primary key constraint */
  UsersFacebookIdKey = 'users_facebook_id_key',
  /** unique or primary key constraint */
  UsersGoogleIdKey = 'users_google_id_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUserNumberKey = 'users_user_number_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  user_number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  apple_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  legacy_shopify_customer_id?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phone_number?: Maybe<Scalars['String']>;
  phone_number_confirmed?: Maybe<Scalars['Boolean']>;
  push_notification_token?: Maybe<Scalars['String']>;
  referral_coupons?: Maybe<Coupons_Arr_Rel_Insert_Input>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_addresses?: Maybe<User_Addresses_Arr_Rel_Insert_Input>;
  user_consents?: Maybe<User_Consents_Arr_Rel_Insert_Input>;
  user_coupons?: Maybe<User_Coupon_Arr_Rel_Insert_Input>;
  user_favorite_products?: Maybe<User_Favorite_Product_Arr_Rel_Insert_Input>;
  user_groups?: Maybe<User_Group_Arr_Rel_Insert_Input>;
  user_number?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  apple_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  legacy_shopify_customer_id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  push_notification_token?: Maybe<Scalars['String']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_number?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  apple_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  legacy_shopify_customer_id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  push_notification_token?: Maybe<Scalars['String']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_number?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  apple_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  facebook_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  google_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  legacy_shopify_customer_id?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phone_number?: Maybe<Order_By>;
  phone_number_confirmed?: Maybe<Order_By>;
  push_notification_token?: Maybe<Order_By>;
  referral_coupons_aggregate?: Maybe<Coupons_Aggregate_Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  temp_password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_addresses_aggregate?: Maybe<User_Addresses_Aggregate_Order_By>;
  user_consents_aggregate?: Maybe<User_Consents_Aggregate_Order_By>;
  user_coupons_aggregate?: Maybe<User_Coupon_Aggregate_Order_By>;
  user_favorite_products_aggregate?: Maybe<User_Favorite_Product_Aggregate_Order_By>;
  user_groups_aggregate?: Maybe<User_Group_Aggregate_Order_By>;
  user_number?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AppleId = 'apple_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  FacebookId = 'facebook_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LegacyShopifyCustomerId = 'legacy_shopify_customer_id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  PhoneNumberConfirmed = 'phone_number_confirmed',
  /** column name */
  PushNotificationToken = 'push_notification_token',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  TempPassword = 'temp_password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserNumber = 'user_number'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  apple_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  legacy_shopify_customer_id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  phone_number_confirmed?: Maybe<Scalars['Boolean']>;
  push_notification_token?: Maybe<Scalars['String']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  temp_password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_number?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  user_number?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AppleId = 'apple_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  FacebookId = 'facebook_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LegacyShopifyCustomerId = 'legacy_shopify_customer_id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  PhoneNumberConfirmed = 'phone_number_confirmed',
  /** column name */
  PushNotificationToken = 'push_notification_token',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  TempPassword = 'temp_password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserNumber = 'user_number'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  user_number?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "warehouse_category" */
export type Warehouse_Category = {
  __typename?: 'warehouse_category';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};

/** aggregated selection of "warehouse_category" */
export type Warehouse_Category_Aggregate = {
  __typename?: 'warehouse_category_aggregate';
  aggregate?: Maybe<Warehouse_Category_Aggregate_Fields>;
  nodes: Array<Warehouse_Category>;
};

/** aggregate fields of "warehouse_category" */
export type Warehouse_Category_Aggregate_Fields = {
  __typename?: 'warehouse_category_aggregate_fields';
  avg?: Maybe<Warehouse_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Warehouse_Category_Max_Fields>;
  min?: Maybe<Warehouse_Category_Min_Fields>;
  stddev?: Maybe<Warehouse_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Warehouse_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Warehouse_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Warehouse_Category_Sum_Fields>;
  var_pop?: Maybe<Warehouse_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Warehouse_Category_Var_Samp_Fields>;
  variance?: Maybe<Warehouse_Category_Variance_Fields>;
};


/** aggregate fields of "warehouse_category" */
export type Warehouse_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouse_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "warehouse_category" */
export type Warehouse_Category_Aggregate_Order_By = {
  avg?: Maybe<Warehouse_Category_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Warehouse_Category_Max_Order_By>;
  min?: Maybe<Warehouse_Category_Min_Order_By>;
  stddev?: Maybe<Warehouse_Category_Stddev_Order_By>;
  stddev_pop?: Maybe<Warehouse_Category_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Warehouse_Category_Stddev_Samp_Order_By>;
  sum?: Maybe<Warehouse_Category_Sum_Order_By>;
  var_pop?: Maybe<Warehouse_Category_Var_Pop_Order_By>;
  var_samp?: Maybe<Warehouse_Category_Var_Samp_Order_By>;
  variance?: Maybe<Warehouse_Category_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "warehouse_category" */
export type Warehouse_Category_Arr_Rel_Insert_Input = {
  data: Array<Warehouse_Category_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Warehouse_Category_On_Conflict>;
};

/** aggregate avg on columns */
export type Warehouse_Category_Avg_Fields = {
  __typename?: 'warehouse_category_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "warehouse_category" */
export type Warehouse_Category_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "warehouse_category". All fields are combined with a logical 'AND'. */
export type Warehouse_Category_Bool_Exp = {
  _and?: Maybe<Array<Warehouse_Category_Bool_Exp>>;
  _not?: Maybe<Warehouse_Category_Bool_Exp>;
  _or?: Maybe<Array<Warehouse_Category_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  static_picture?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "warehouse_category" */
export enum Warehouse_Category_Constraint {
  /** unique or primary key constraint */
  WarehouseCategoryPkey = 'warehouse_category_pkey'
}

/** input type for incrementing numeric columns in table "warehouse_category" */
export type Warehouse_Category_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "warehouse_category" */
export type Warehouse_Category_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Warehouse_Category_Max_Fields = {
  __typename?: 'warehouse_category_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "warehouse_category" */
export type Warehouse_Category_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Warehouse_Category_Min_Fields = {
  __typename?: 'warehouse_category_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "warehouse_category" */
export type Warehouse_Category_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "warehouse_category" */
export type Warehouse_Category_Mutation_Response = {
  __typename?: 'warehouse_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouse_Category>;
};

/** on conflict condition type for table "warehouse_category" */
export type Warehouse_Category_On_Conflict = {
  constraint: Warehouse_Category_Constraint;
  update_columns?: Array<Warehouse_Category_Update_Column>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "warehouse_category". */
export type Warehouse_Category_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  static_picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: warehouse_category */
export type Warehouse_Category_Pk_Columns_Input = {
  category_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};

/** select columns of table "warehouse_category" */
export enum Warehouse_Category_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Order = 'order',
  /** column name */
  Picture = 'picture',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "warehouse_category" */
export type Warehouse_Category_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  static_picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Warehouse_Category_Stddev_Fields = {
  __typename?: 'warehouse_category_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "warehouse_category" */
export type Warehouse_Category_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Warehouse_Category_Stddev_Pop_Fields = {
  __typename?: 'warehouse_category_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "warehouse_category" */
export type Warehouse_Category_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Warehouse_Category_Stddev_Samp_Fields = {
  __typename?: 'warehouse_category_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "warehouse_category" */
export type Warehouse_Category_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Warehouse_Category_Sum_Fields = {
  __typename?: 'warehouse_category_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "warehouse_category" */
export type Warehouse_Category_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "warehouse_category" */
export enum Warehouse_Category_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Order = 'order',
  /** column name */
  Picture = 'picture',
  /** column name */
  StaticPicture = 'static_picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Warehouse_Category_Var_Pop_Fields = {
  __typename?: 'warehouse_category_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "warehouse_category" */
export type Warehouse_Category_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Warehouse_Category_Var_Samp_Fields = {
  __typename?: 'warehouse_category_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "warehouse_category" */
export type Warehouse_Category_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Warehouse_Category_Variance_Fields = {
  __typename?: 'warehouse_category_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "warehouse_category" */
export type Warehouse_Category_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

/** columns and relationships of "warehouse_hours" */
export type Warehouse_Hours = {
  __typename?: 'warehouse_hours';
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  day?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  open_time_minutes?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "warehouse_hours" */
export type Warehouse_Hours_Aggregate = {
  __typename?: 'warehouse_hours_aggregate';
  aggregate?: Maybe<Warehouse_Hours_Aggregate_Fields>;
  nodes: Array<Warehouse_Hours>;
};

/** aggregate fields of "warehouse_hours" */
export type Warehouse_Hours_Aggregate_Fields = {
  __typename?: 'warehouse_hours_aggregate_fields';
  avg?: Maybe<Warehouse_Hours_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Warehouse_Hours_Max_Fields>;
  min?: Maybe<Warehouse_Hours_Min_Fields>;
  stddev?: Maybe<Warehouse_Hours_Stddev_Fields>;
  stddev_pop?: Maybe<Warehouse_Hours_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Warehouse_Hours_Stddev_Samp_Fields>;
  sum?: Maybe<Warehouse_Hours_Sum_Fields>;
  var_pop?: Maybe<Warehouse_Hours_Var_Pop_Fields>;
  var_samp?: Maybe<Warehouse_Hours_Var_Samp_Fields>;
  variance?: Maybe<Warehouse_Hours_Variance_Fields>;
};


/** aggregate fields of "warehouse_hours" */
export type Warehouse_Hours_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "warehouse_hours" */
export type Warehouse_Hours_Aggregate_Order_By = {
  avg?: Maybe<Warehouse_Hours_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Warehouse_Hours_Max_Order_By>;
  min?: Maybe<Warehouse_Hours_Min_Order_By>;
  stddev?: Maybe<Warehouse_Hours_Stddev_Order_By>;
  stddev_pop?: Maybe<Warehouse_Hours_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Warehouse_Hours_Stddev_Samp_Order_By>;
  sum?: Maybe<Warehouse_Hours_Sum_Order_By>;
  var_pop?: Maybe<Warehouse_Hours_Var_Pop_Order_By>;
  var_samp?: Maybe<Warehouse_Hours_Var_Samp_Order_By>;
  variance?: Maybe<Warehouse_Hours_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "warehouse_hours" */
export type Warehouse_Hours_Arr_Rel_Insert_Input = {
  data: Array<Warehouse_Hours_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Warehouse_Hours_On_Conflict>;
};

/** aggregate avg on columns */
export type Warehouse_Hours_Avg_Fields = {
  __typename?: 'warehouse_hours_avg_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Avg_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "warehouse_hours". All fields are combined with a logical 'AND'. */
export type Warehouse_Hours_Bool_Exp = {
  _and?: Maybe<Array<Warehouse_Hours_Bool_Exp>>;
  _not?: Maybe<Warehouse_Hours_Bool_Exp>;
  _or?: Maybe<Array<Warehouse_Hours_Bool_Exp>>;
  close_time_minutes?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  day?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  open_time_minutes?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "warehouse_hours" */
export enum Warehouse_Hours_Constraint {
  /** unique or primary key constraint */
  WarehouseHoursPkey = 'warehouse_hours_pkey'
}

/** input type for incrementing numeric columns in table "warehouse_hours" */
export type Warehouse_Hours_Inc_Input = {
  close_time_minutes?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "warehouse_hours" */
export type Warehouse_Hours_Insert_Input = {
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Warehouse_Hours_Max_Fields = {
  __typename?: 'warehouse_hours_max_fields';
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Max_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Warehouse_Hours_Min_Fields = {
  __typename?: 'warehouse_hours_min_fields';
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Min_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "warehouse_hours" */
export type Warehouse_Hours_Mutation_Response = {
  __typename?: 'warehouse_hours_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouse_Hours>;
};

/** on conflict condition type for table "warehouse_hours" */
export type Warehouse_Hours_On_Conflict = {
  constraint: Warehouse_Hours_Constraint;
  update_columns?: Array<Warehouse_Hours_Update_Column>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};

/** Ordering options when selecting data from "warehouse_hours". */
export type Warehouse_Hours_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: warehouse_hours */
export type Warehouse_Hours_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "warehouse_hours" */
export enum Warehouse_Hours_Select_Column {
  /** column name */
  CloseTimeMinutes = 'close_time_minutes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  OpenTimeMinutes = 'open_time_minutes',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "warehouse_hours" */
export type Warehouse_Hours_Set_Input = {
  close_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  day?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Warehouse_Hours_Stddev_Fields = {
  __typename?: 'warehouse_hours_stddev_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Stddev_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Warehouse_Hours_Stddev_Pop_Fields = {
  __typename?: 'warehouse_hours_stddev_pop_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Stddev_Pop_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Warehouse_Hours_Stddev_Samp_Fields = {
  __typename?: 'warehouse_hours_stddev_samp_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Stddev_Samp_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Warehouse_Hours_Sum_Fields = {
  __typename?: 'warehouse_hours_sum_fields';
  close_time_minutes?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  open_time_minutes?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Sum_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** update columns of table "warehouse_hours" */
export enum Warehouse_Hours_Update_Column {
  /** column name */
  CloseTimeMinutes = 'close_time_minutes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  OpenTimeMinutes = 'open_time_minutes',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Warehouse_Hours_Var_Pop_Fields = {
  __typename?: 'warehouse_hours_var_pop_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Var_Pop_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Warehouse_Hours_Var_Samp_Fields = {
  __typename?: 'warehouse_hours_var_samp_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Var_Samp_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Warehouse_Hours_Variance_Fields = {
  __typename?: 'warehouse_hours_variance_fields';
  close_time_minutes?: Maybe<Scalars['Float']>;
  day?: Maybe<Scalars['Float']>;
  open_time_minutes?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "warehouse_hours" */
export type Warehouse_Hours_Variance_Order_By = {
  close_time_minutes?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  open_time_minutes?: Maybe<Order_By>;
};

/** columns and relationships of "warehouse_operation_rule" */
export type Warehouse_Operation_Rule = {
  __typename?: 'warehouse_operation_rule';
  active_until?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  operation_rule: Operation_Rules;
  operation_rule_handle: Scalars['String'];
  spec?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};


/** columns and relationships of "warehouse_operation_rule" */
export type Warehouse_Operation_RuleSpecArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Aggregate = {
  __typename?: 'warehouse_operation_rule_aggregate';
  aggregate?: Maybe<Warehouse_Operation_Rule_Aggregate_Fields>;
  nodes: Array<Warehouse_Operation_Rule>;
};

/** aggregate fields of "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Aggregate_Fields = {
  __typename?: 'warehouse_operation_rule_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Warehouse_Operation_Rule_Max_Fields>;
  min?: Maybe<Warehouse_Operation_Rule_Min_Fields>;
};


/** aggregate fields of "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Warehouse_Operation_Rule_Max_Order_By>;
  min?: Maybe<Warehouse_Operation_Rule_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Warehouse_Operation_Rule_Append_Input = {
  spec?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Arr_Rel_Insert_Input = {
  data: Array<Warehouse_Operation_Rule_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Warehouse_Operation_Rule_On_Conflict>;
};

/** Boolean expression to filter rows from the table "warehouse_operation_rule". All fields are combined with a logical 'AND'. */
export type Warehouse_Operation_Rule_Bool_Exp = {
  _and?: Maybe<Array<Warehouse_Operation_Rule_Bool_Exp>>;
  _not?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
  _or?: Maybe<Array<Warehouse_Operation_Rule_Bool_Exp>>;
  active_until?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  operation_rule?: Maybe<Operation_Rules_Bool_Exp>;
  operation_rule_handle?: Maybe<String_Comparison_Exp>;
  spec?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "warehouse_operation_rule" */
export enum Warehouse_Operation_Rule_Constraint {
  /** unique or primary key constraint */
  WarehouseOperationRulePkey = 'warehouse_operation_rule_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Warehouse_Operation_Rule_Delete_At_Path_Input = {
  spec?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Warehouse_Operation_Rule_Delete_Elem_Input = {
  spec?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Warehouse_Operation_Rule_Delete_Key_Input = {
  spec?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Insert_Input = {
  active_until?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  operation_rule?: Maybe<Operation_Rules_Obj_Rel_Insert_Input>;
  operation_rule_handle?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Warehouse_Operation_Rule_Max_Fields = {
  __typename?: 'warehouse_operation_rule_max_fields';
  active_until?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  operation_rule_handle?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Max_Order_By = {
  active_until?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  operation_rule_handle?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Warehouse_Operation_Rule_Min_Fields = {
  __typename?: 'warehouse_operation_rule_min_fields';
  active_until?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  operation_rule_handle?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Min_Order_By = {
  active_until?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  operation_rule_handle?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Mutation_Response = {
  __typename?: 'warehouse_operation_rule_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouse_Operation_Rule>;
};

/** on conflict condition type for table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_On_Conflict = {
  constraint: Warehouse_Operation_Rule_Constraint;
  update_columns?: Array<Warehouse_Operation_Rule_Update_Column>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};

/** Ordering options when selecting data from "warehouse_operation_rule". */
export type Warehouse_Operation_Rule_Order_By = {
  active_until?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  operation_rule?: Maybe<Operation_Rules_Order_By>;
  operation_rule_handle?: Maybe<Order_By>;
  spec?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: warehouse_operation_rule */
export type Warehouse_Operation_Rule_Pk_Columns_Input = {
  operation_rule_handle: Scalars['String'];
  warehouse_id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Warehouse_Operation_Rule_Prepend_Input = {
  spec?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "warehouse_operation_rule" */
export enum Warehouse_Operation_Rule_Select_Column {
  /** column name */
  ActiveUntil = 'active_until',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  OperationRuleHandle = 'operation_rule_handle',
  /** column name */
  Spec = 'spec',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "warehouse_operation_rule" */
export type Warehouse_Operation_Rule_Set_Input = {
  active_until?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  operation_rule_handle?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "warehouse_operation_rule" */
export enum Warehouse_Operation_Rule_Update_Column {
  /** column name */
  ActiveUntil = 'active_until',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  OperationRuleHandle = 'operation_rule_handle',
  /** column name */
  Spec = 'spec',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** columns and relationships of "warehouse_status" */
export type Warehouse_Status = {
  __typename?: 'warehouse_status';
  value: Scalars['String'];
};

/** aggregated selection of "warehouse_status" */
export type Warehouse_Status_Aggregate = {
  __typename?: 'warehouse_status_aggregate';
  aggregate?: Maybe<Warehouse_Status_Aggregate_Fields>;
  nodes: Array<Warehouse_Status>;
};

/** aggregate fields of "warehouse_status" */
export type Warehouse_Status_Aggregate_Fields = {
  __typename?: 'warehouse_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Warehouse_Status_Max_Fields>;
  min?: Maybe<Warehouse_Status_Min_Fields>;
};


/** aggregate fields of "warehouse_status" */
export type Warehouse_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouse_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "warehouse_status". All fields are combined with a logical 'AND'. */
export type Warehouse_Status_Bool_Exp = {
  _and?: Maybe<Array<Warehouse_Status_Bool_Exp>>;
  _not?: Maybe<Warehouse_Status_Bool_Exp>;
  _or?: Maybe<Array<Warehouse_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "warehouse_status" */
export enum Warehouse_Status_Constraint {
  /** unique or primary key constraint */
  WarehouseStatusPkey = 'warehouse_status_pkey'
}

export enum Warehouse_Status_Enum {
  Cancelled = 'cancelled',
  Error = 'error',
  InPreparation = 'in_preparation',
  MissingStock = 'missing_stock',
  Prepared = 'prepared',
  Processing = 'processing',
  ToBePrepared = 'to_be_prepared'
}

/** Boolean expression to compare columns of type "warehouse_status_enum". All fields are combined with logical 'AND'. */
export type Warehouse_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Warehouse_Status_Enum>;
  _in?: Maybe<Array<Warehouse_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Warehouse_Status_Enum>;
  _nin?: Maybe<Array<Warehouse_Status_Enum>>;
};

/** input type for inserting data into table "warehouse_status" */
export type Warehouse_Status_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Warehouse_Status_Max_Fields = {
  __typename?: 'warehouse_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Warehouse_Status_Min_Fields = {
  __typename?: 'warehouse_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "warehouse_status" */
export type Warehouse_Status_Mutation_Response = {
  __typename?: 'warehouse_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouse_Status>;
};

/** on conflict condition type for table "warehouse_status" */
export type Warehouse_Status_On_Conflict = {
  constraint: Warehouse_Status_Constraint;
  update_columns?: Array<Warehouse_Status_Update_Column>;
  where?: Maybe<Warehouse_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "warehouse_status". */
export type Warehouse_Status_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: warehouse_status */
export type Warehouse_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "warehouse_status" */
export enum Warehouse_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "warehouse_status" */
export type Warehouse_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "warehouse_status" */
export enum Warehouse_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "warehouse_user_address" */
export type Warehouse_User_Address = {
  __typename?: 'warehouse_user_address';
  created_at: Scalars['timestamptz'];
  eta_seconds: Scalars['numeric'];
  /** An object relationship */
  user_address: User_Addresses;
  user_address_id: Scalars['uuid'];
  /** An object relationship */
  warehouse: Warehouses;
  warehouse_id: Scalars['uuid'];
};

/** aggregated selection of "warehouse_user_address" */
export type Warehouse_User_Address_Aggregate = {
  __typename?: 'warehouse_user_address_aggregate';
  aggregate?: Maybe<Warehouse_User_Address_Aggregate_Fields>;
  nodes: Array<Warehouse_User_Address>;
};

/** aggregate fields of "warehouse_user_address" */
export type Warehouse_User_Address_Aggregate_Fields = {
  __typename?: 'warehouse_user_address_aggregate_fields';
  avg?: Maybe<Warehouse_User_Address_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Warehouse_User_Address_Max_Fields>;
  min?: Maybe<Warehouse_User_Address_Min_Fields>;
  stddev?: Maybe<Warehouse_User_Address_Stddev_Fields>;
  stddev_pop?: Maybe<Warehouse_User_Address_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Warehouse_User_Address_Stddev_Samp_Fields>;
  sum?: Maybe<Warehouse_User_Address_Sum_Fields>;
  var_pop?: Maybe<Warehouse_User_Address_Var_Pop_Fields>;
  var_samp?: Maybe<Warehouse_User_Address_Var_Samp_Fields>;
  variance?: Maybe<Warehouse_User_Address_Variance_Fields>;
};


/** aggregate fields of "warehouse_user_address" */
export type Warehouse_User_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouse_User_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Warehouse_User_Address_Avg_Fields = {
  __typename?: 'warehouse_user_address_avg_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "warehouse_user_address". All fields are combined with a logical 'AND'. */
export type Warehouse_User_Address_Bool_Exp = {
  _and?: Maybe<Array<Warehouse_User_Address_Bool_Exp>>;
  _not?: Maybe<Warehouse_User_Address_Bool_Exp>;
  _or?: Maybe<Array<Warehouse_User_Address_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  eta_seconds?: Maybe<Numeric_Comparison_Exp>;
  user_address?: Maybe<User_Addresses_Bool_Exp>;
  user_address_id?: Maybe<Uuid_Comparison_Exp>;
  warehouse?: Maybe<Warehouses_Bool_Exp>;
  warehouse_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "warehouse_user_address" */
export enum Warehouse_User_Address_Constraint {
  /** unique or primary key constraint */
  WarehouseUserAddressPkey = 'warehouse_user_address_pkey'
}

/** input type for incrementing numeric columns in table "warehouse_user_address" */
export type Warehouse_User_Address_Inc_Input = {
  eta_seconds?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "warehouse_user_address" */
export type Warehouse_User_Address_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  eta_seconds?: Maybe<Scalars['numeric']>;
  user_address?: Maybe<User_Addresses_Obj_Rel_Insert_Input>;
  user_address_id?: Maybe<Scalars['uuid']>;
  warehouse?: Maybe<Warehouses_Obj_Rel_Insert_Input>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Warehouse_User_Address_Max_Fields = {
  __typename?: 'warehouse_user_address_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  eta_seconds?: Maybe<Scalars['numeric']>;
  user_address_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Warehouse_User_Address_Min_Fields = {
  __typename?: 'warehouse_user_address_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  eta_seconds?: Maybe<Scalars['numeric']>;
  user_address_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "warehouse_user_address" */
export type Warehouse_User_Address_Mutation_Response = {
  __typename?: 'warehouse_user_address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouse_User_Address>;
};

/** on conflict condition type for table "warehouse_user_address" */
export type Warehouse_User_Address_On_Conflict = {
  constraint: Warehouse_User_Address_Constraint;
  update_columns?: Array<Warehouse_User_Address_Update_Column>;
  where?: Maybe<Warehouse_User_Address_Bool_Exp>;
};

/** Ordering options when selecting data from "warehouse_user_address". */
export type Warehouse_User_Address_Order_By = {
  created_at?: Maybe<Order_By>;
  eta_seconds?: Maybe<Order_By>;
  user_address?: Maybe<User_Addresses_Order_By>;
  user_address_id?: Maybe<Order_By>;
  warehouse?: Maybe<Warehouses_Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** primary key columns input for table: warehouse_user_address */
export type Warehouse_User_Address_Pk_Columns_Input = {
  user_address_id: Scalars['uuid'];
  warehouse_id: Scalars['uuid'];
};

/** select columns of table "warehouse_user_address" */
export enum Warehouse_User_Address_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EtaSeconds = 'eta_seconds',
  /** column name */
  UserAddressId = 'user_address_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "warehouse_user_address" */
export type Warehouse_User_Address_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  eta_seconds?: Maybe<Scalars['numeric']>;
  user_address_id?: Maybe<Scalars['uuid']>;
  warehouse_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Warehouse_User_Address_Stddev_Fields = {
  __typename?: 'warehouse_user_address_stddev_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Warehouse_User_Address_Stddev_Pop_Fields = {
  __typename?: 'warehouse_user_address_stddev_pop_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Warehouse_User_Address_Stddev_Samp_Fields = {
  __typename?: 'warehouse_user_address_stddev_samp_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Warehouse_User_Address_Sum_Fields = {
  __typename?: 'warehouse_user_address_sum_fields';
  eta_seconds?: Maybe<Scalars['numeric']>;
};

/** update columns of table "warehouse_user_address" */
export enum Warehouse_User_Address_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EtaSeconds = 'eta_seconds',
  /** column name */
  UserAddressId = 'user_address_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Warehouse_User_Address_Var_Pop_Fields = {
  __typename?: 'warehouse_user_address_var_pop_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Warehouse_User_Address_Var_Samp_Fields = {
  __typename?: 'warehouse_user_address_var_samp_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Warehouse_User_Address_Variance_Fields = {
  __typename?: 'warehouse_user_address_variance_fields';
  eta_seconds?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "warehouses" */
export type Warehouses = {
  __typename?: 'warehouses';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['geometry']>;
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  /** A computed field, executes function "average_global_time_seconds" */
  average_global_time_seconds?: Maybe<Scalars['float8']>;
  /** A computed field, executes function "average_preparation_time_second" */
  average_preparation_time_seconds?: Maybe<Scalars['float8']>;
  /** A computed field, executes function "average_transport_time_second" */
  average_transport_time_seconds?: Maybe<Scalars['float8']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_delivery_time_minutes: Scalars['Int'];
  delivery_fee: Scalars['numeric'];
  free_delivery_amount: Scalars['numeric'];
  handle?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  is_experiencing_delays: Scalars['Boolean'];
  is_paused: Scalars['Boolean'];
  latitude?: Maybe<Scalars['float8']>;
  legacy_shopify_id?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value: Scalars['float8'];
  name?: Maybe<Scalars['String']>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  postal_code?: Maybe<Scalars['String']>;
  slack_alert_webhook_url?: Maybe<Scalars['String']>;
  slack_customer_feedback_webhook_url?: Maybe<Scalars['String']>;
  slack_warehouse_user_id?: Maybe<Scalars['String']>;
  slack_webhook_url?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  warehouse_categories: Array<Warehouse_Category>;
  /** An aggregate relationship */
  warehouse_categories_aggregate: Warehouse_Category_Aggregate;
  /** An array relationship */
  warehouse_hours: Array<Warehouse_Hours>;
  /** An aggregate relationship */
  warehouse_hours_aggregate: Warehouse_Hours_Aggregate;
  /** An array relationship */
  warehouse_operation_rules: Array<Warehouse_Operation_Rule>;
  /** An aggregate relationship */
  warehouse_operation_rules_aggregate: Warehouse_Operation_Rule_Aggregate;
};


/** columns and relationships of "warehouses" */
export type WarehousesInventory_ProductsArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesInventory_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Products_Order_By>>;
  where?: Maybe<Inventory_Products_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesWarehouse_CategoriesArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesWarehouse_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Category_Order_By>>;
  where?: Maybe<Warehouse_Category_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesWarehouse_HoursArgs = {
  distinct_on?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Hours_Order_By>>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesWarehouse_Hours_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Hours_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Hours_Order_By>>;
  where?: Maybe<Warehouse_Hours_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesWarehouse_Operation_RulesArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};


/** columns and relationships of "warehouses" */
export type WarehousesWarehouse_Operation_Rules_AggregateArgs = {
  distinct_on?: Maybe<Array<Warehouse_Operation_Rule_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Warehouse_Operation_Rule_Order_By>>;
  where?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};

/** aggregated selection of "warehouses" */
export type Warehouses_Aggregate = {
  __typename?: 'warehouses_aggregate';
  aggregate?: Maybe<Warehouses_Aggregate_Fields>;
  nodes: Array<Warehouses>;
};

/** aggregate fields of "warehouses" */
export type Warehouses_Aggregate_Fields = {
  __typename?: 'warehouses_aggregate_fields';
  avg?: Maybe<Warehouses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Warehouses_Max_Fields>;
  min?: Maybe<Warehouses_Min_Fields>;
  stddev?: Maybe<Warehouses_Stddev_Fields>;
  stddev_pop?: Maybe<Warehouses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Warehouses_Stddev_Samp_Fields>;
  sum?: Maybe<Warehouses_Sum_Fields>;
  var_pop?: Maybe<Warehouses_Var_Pop_Fields>;
  var_samp?: Maybe<Warehouses_Var_Samp_Fields>;
  variance?: Maybe<Warehouses_Variance_Fields>;
};


/** aggregate fields of "warehouses" */
export type Warehouses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Warehouses_Avg_Fields = {
  __typename?: 'warehouses_avg_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "warehouses". All fields are combined with a logical 'AND'. */
export type Warehouses_Bool_Exp = {
  _and?: Maybe<Array<Warehouses_Bool_Exp>>;
  _not?: Maybe<Warehouses_Bool_Exp>;
  _or?: Maybe<Array<Warehouses_Bool_Exp>>;
  address_line_1?: Maybe<String_Comparison_Exp>;
  address_line_2?: Maybe<String_Comparison_Exp>;
  area?: Maybe<Geometry_Comparison_Exp>;
  average_delivery_delay_minutes?: Maybe<Int_Comparison_Exp>;
  average_global_time_seconds?: Maybe<Float8_Comparison_Exp>;
  average_preparation_time_seconds?: Maybe<Float8_Comparison_Exp>;
  average_transport_time_seconds?: Maybe<Float8_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_delivery_time_minutes?: Maybe<Int_Comparison_Exp>;
  delivery_fee?: Maybe<Numeric_Comparison_Exp>;
  free_delivery_amount?: Maybe<Numeric_Comparison_Exp>;
  handle?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventory_products?: Maybe<Inventory_Products_Bool_Exp>;
  is_experiencing_delays?: Maybe<Boolean_Comparison_Exp>;
  is_paused?: Maybe<Boolean_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  legacy_shopify_id?: Maybe<String_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  min_basket_value?: Maybe<Float8_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  slack_alert_webhook_url?: Maybe<String_Comparison_Exp>;
  slack_customer_feedback_webhook_url?: Maybe<String_Comparison_Exp>;
  slack_warehouse_user_id?: Maybe<String_Comparison_Exp>;
  slack_webhook_url?: Maybe<String_Comparison_Exp>;
  uber_eats_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouse_categories?: Maybe<Warehouse_Category_Bool_Exp>;
  warehouse_hours?: Maybe<Warehouse_Hours_Bool_Exp>;
  warehouse_operation_rules?: Maybe<Warehouse_Operation_Rule_Bool_Exp>;
};

/** unique or primary key constraints on table "warehouses" */
export enum Warehouses_Constraint {
  /** unique or primary key constraint */
  WarehousesHandleKey = 'warehouses_handle_key',
  /** unique or primary key constraint */
  WarehousesNameKey = 'warehouses_name_key',
  /** unique or primary key constraint */
  WarehousesPkey = 'warehouses_pkey'
}

/** input type for incrementing numeric columns in table "warehouses" */
export type Warehouses_Inc_Input = {
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  default_delivery_time_minutes?: Maybe<Scalars['Int']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  free_delivery_amount?: Maybe<Scalars['numeric']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "warehouses" */
export type Warehouses_Insert_Input = {
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['geometry']>;
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_delivery_time_minutes?: Maybe<Scalars['Int']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  free_delivery_amount?: Maybe<Scalars['numeric']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_products?: Maybe<Inventory_Products_Arr_Rel_Insert_Input>;
  is_experiencing_delays?: Maybe<Scalars['Boolean']>;
  is_paused?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['float8']>;
  legacy_shopify_id?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  postal_code?: Maybe<Scalars['String']>;
  slack_alert_webhook_url?: Maybe<Scalars['String']>;
  slack_customer_feedback_webhook_url?: Maybe<Scalars['String']>;
  slack_warehouse_user_id?: Maybe<Scalars['String']>;
  slack_webhook_url?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouse_categories?: Maybe<Warehouse_Category_Arr_Rel_Insert_Input>;
  warehouse_hours?: Maybe<Warehouse_Hours_Arr_Rel_Insert_Input>;
  warehouse_operation_rules?: Maybe<Warehouse_Operation_Rule_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Warehouses_Max_Fields = {
  __typename?: 'warehouses_max_fields';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_delivery_time_minutes?: Maybe<Scalars['Int']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  free_delivery_amount?: Maybe<Scalars['numeric']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['float8']>;
  legacy_shopify_id?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  slack_alert_webhook_url?: Maybe<Scalars['String']>;
  slack_customer_feedback_webhook_url?: Maybe<Scalars['String']>;
  slack_warehouse_user_id?: Maybe<Scalars['String']>;
  slack_webhook_url?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Warehouses_Min_Fields = {
  __typename?: 'warehouses_min_fields';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_delivery_time_minutes?: Maybe<Scalars['Int']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  free_delivery_amount?: Maybe<Scalars['numeric']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['float8']>;
  legacy_shopify_id?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  slack_alert_webhook_url?: Maybe<Scalars['String']>;
  slack_customer_feedback_webhook_url?: Maybe<Scalars['String']>;
  slack_warehouse_user_id?: Maybe<Scalars['String']>;
  slack_webhook_url?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "warehouses" */
export type Warehouses_Mutation_Response = {
  __typename?: 'warehouses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouses>;
};

/** input type for inserting object relation for remote table "warehouses" */
export type Warehouses_Obj_Rel_Insert_Input = {
  data: Warehouses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Warehouses_On_Conflict>;
};

/** on conflict condition type for table "warehouses" */
export type Warehouses_On_Conflict = {
  constraint: Warehouses_Constraint;
  update_columns?: Array<Warehouses_Update_Column>;
  where?: Maybe<Warehouses_Bool_Exp>;
};

/** Ordering options when selecting data from "warehouses". */
export type Warehouses_Order_By = {
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  area?: Maybe<Order_By>;
  average_delivery_delay_minutes?: Maybe<Order_By>;
  average_global_time_seconds?: Maybe<Order_By>;
  average_preparation_time_seconds?: Maybe<Order_By>;
  average_transport_time_seconds?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_delivery_time_minutes?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  free_delivery_amount?: Maybe<Order_By>;
  handle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_products_aggregate?: Maybe<Inventory_Products_Aggregate_Order_By>;
  is_experiencing_delays?: Maybe<Order_By>;
  is_paused?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  legacy_shopify_id?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  min_basket_value?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  postal_code?: Maybe<Order_By>;
  slack_alert_webhook_url?: Maybe<Order_By>;
  slack_customer_feedback_webhook_url?: Maybe<Order_By>;
  slack_warehouse_user_id?: Maybe<Order_By>;
  slack_webhook_url?: Maybe<Order_By>;
  uber_eats_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouse_categories_aggregate?: Maybe<Warehouse_Category_Aggregate_Order_By>;
  warehouse_hours_aggregate?: Maybe<Warehouse_Hours_Aggregate_Order_By>;
  warehouse_operation_rules_aggregate?: Maybe<Warehouse_Operation_Rule_Aggregate_Order_By>;
};

/** primary key columns input for table: warehouses */
export type Warehouses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "warehouses" */
export enum Warehouses_Select_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  Area = 'area',
  /** column name */
  AverageDeliveryDelayMinutes = 'average_delivery_delay_minutes',
  /** column name */
  City = 'city',
  /** column name */
  Code = 'code',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultDeliveryTimeMinutes = 'default_delivery_time_minutes',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  FreeDeliveryAmount = 'free_delivery_amount',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  IsExperiencingDelays = 'is_experiencing_delays',
  /** column name */
  IsPaused = 'is_paused',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  LegacyShopifyId = 'legacy_shopify_id',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MinBasketValue = 'min_basket_value',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  SlackAlertWebhookUrl = 'slack_alert_webhook_url',
  /** column name */
  SlackCustomerFeedbackWebhookUrl = 'slack_customer_feedback_webhook_url',
  /** column name */
  SlackWarehouseUserId = 'slack_warehouse_user_id',
  /** column name */
  SlackWebhookUrl = 'slack_webhook_url',
  /** column name */
  UberEatsId = 'uber_eats_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "warehouses" */
export type Warehouses_Set_Input = {
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['geometry']>;
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_delivery_time_minutes?: Maybe<Scalars['Int']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  free_delivery_amount?: Maybe<Scalars['numeric']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_experiencing_delays?: Maybe<Scalars['Boolean']>;
  is_paused?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['float8']>;
  legacy_shopify_id?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  slack_alert_webhook_url?: Maybe<Scalars['String']>;
  slack_customer_feedback_webhook_url?: Maybe<Scalars['String']>;
  slack_warehouse_user_id?: Maybe<Scalars['String']>;
  slack_webhook_url?: Maybe<Scalars['String']>;
  uber_eats_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Warehouses_Stddev_Fields = {
  __typename?: 'warehouses_stddev_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Warehouses_Stddev_Pop_Fields = {
  __typename?: 'warehouses_stddev_pop_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Warehouses_Stddev_Samp_Fields = {
  __typename?: 'warehouses_stddev_samp_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Warehouses_Sum_Fields = {
  __typename?: 'warehouses_sum_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Int']>;
  default_delivery_time_minutes?: Maybe<Scalars['Int']>;
  delivery_fee?: Maybe<Scalars['numeric']>;
  free_delivery_amount?: Maybe<Scalars['numeric']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  min_basket_value?: Maybe<Scalars['float8']>;
};

/** columns and relationships of "warehouses_text" */
export type Warehouses_Text = {
  __typename?: 'warehouses_text';
  area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "warehouses_text" */
export type Warehouses_Text_Aggregate = {
  __typename?: 'warehouses_text_aggregate';
  aggregate?: Maybe<Warehouses_Text_Aggregate_Fields>;
  nodes: Array<Warehouses_Text>;
};

/** aggregate fields of "warehouses_text" */
export type Warehouses_Text_Aggregate_Fields = {
  __typename?: 'warehouses_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Warehouses_Text_Max_Fields>;
  min?: Maybe<Warehouses_Text_Min_Fields>;
};


/** aggregate fields of "warehouses_text" */
export type Warehouses_Text_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warehouses_Text_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "warehouses_text". All fields are combined with a logical 'AND'. */
export type Warehouses_Text_Bool_Exp = {
  _and?: Maybe<Array<Warehouses_Text_Bool_Exp>>;
  _not?: Maybe<Warehouses_Text_Bool_Exp>;
  _or?: Maybe<Array<Warehouses_Text_Bool_Exp>>;
  area?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** input type for inserting data into table "warehouses_text" */
export type Warehouses_Text_Insert_Input = {
  area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Warehouses_Text_Max_Fields = {
  __typename?: 'warehouses_text_max_fields';
  area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Warehouses_Text_Min_Fields = {
  __typename?: 'warehouses_text_min_fields';
  area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "warehouses_text" */
export type Warehouses_Text_Mutation_Response = {
  __typename?: 'warehouses_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Warehouses_Text>;
};

/** Ordering options when selecting data from "warehouses_text". */
export type Warehouses_Text_Order_By = {
  area?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "warehouses_text" */
export enum Warehouses_Text_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "warehouses_text" */
export type Warehouses_Text_Set_Input = {
  area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "warehouses" */
export enum Warehouses_Update_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  Area = 'area',
  /** column name */
  AverageDeliveryDelayMinutes = 'average_delivery_delay_minutes',
  /** column name */
  City = 'city',
  /** column name */
  Code = 'code',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultDeliveryTimeMinutes = 'default_delivery_time_minutes',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  FreeDeliveryAmount = 'free_delivery_amount',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  IsExperiencingDelays = 'is_experiencing_delays',
  /** column name */
  IsPaused = 'is_paused',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  LegacyShopifyId = 'legacy_shopify_id',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MinBasketValue = 'min_basket_value',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  SlackAlertWebhookUrl = 'slack_alert_webhook_url',
  /** column name */
  SlackCustomerFeedbackWebhookUrl = 'slack_customer_feedback_webhook_url',
  /** column name */
  SlackWarehouseUserId = 'slack_warehouse_user_id',
  /** column name */
  SlackWebhookUrl = 'slack_webhook_url',
  /** column name */
  UberEatsId = 'uber_eats_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Warehouses_Var_Pop_Fields = {
  __typename?: 'warehouses_var_pop_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Warehouses_Var_Samp_Fields = {
  __typename?: 'warehouses_var_samp_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Warehouses_Variance_Fields = {
  __typename?: 'warehouses_variance_fields';
  average_delivery_delay_minutes?: Maybe<Scalars['Float']>;
  default_delivery_time_minutes?: Maybe<Scalars['Float']>;
  delivery_fee?: Maybe<Scalars['Float']>;
  free_delivery_amount?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  min_basket_value?: Maybe<Scalars['Float']>;
};

export type GetUserWithOrdersQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserWithOrdersQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, orders: Array<{ __typename?: 'orders', paid_at?: any | null | undefined, order_items: Array<{ __typename?: 'order_items', ttc_price: any, product: { __typename?: 'products', name: string } }> }> } | null | undefined };


export const GetUserWithOrdersDocument = gql`
    query GetUserWithOrders($id: uuid!) {
  users_by_pk(id: $id) {
    first_name
    last_name
    orders {
      paid_at
      order_items {
        ttc_price
        product {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserWithOrdersQuery__
 *
 * To run a query within a React component, call `useGetUserWithOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWithOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWithOrdersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserWithOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetUserWithOrdersQuery, GetUserWithOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWithOrdersQuery, GetUserWithOrdersQueryVariables>(GetUserWithOrdersDocument, options);
      }
export function useGetUserWithOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWithOrdersQuery, GetUserWithOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWithOrdersQuery, GetUserWithOrdersQueryVariables>(GetUserWithOrdersDocument, options);
        }
export type GetUserWithOrdersQueryHookResult = ReturnType<typeof useGetUserWithOrdersQuery>;
export type GetUserWithOrdersLazyQueryHookResult = ReturnType<typeof useGetUserWithOrdersLazyQuery>;
export type GetUserWithOrdersQueryResult = Apollo.QueryResult<GetUserWithOrdersQuery, GetUserWithOrdersQueryVariables>;