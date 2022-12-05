import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type Relationship = IObject & {
  objectType: "Relationship";
  /** The id of the relationship. */
  id: string;
  /** The external id of the relationship, or `null` if none. Unique among all relationships in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the relationship. */
  projectID: string;
  /** The type of the relationship. */
  type: Type;
  /** The object type of the object that the relationship starts at, for example `BacklogItem`. */
  fromObjectType: string; //FIXME: extract objectType values
  /** The id of the object that the relationship starts at. */
  fromObjectID: string;
  /** The object type of the object that the relationship ends at, for example `BacklogItem`. */
  toObjectType: string; //FIXME: extract objectType values
  /** The id of the object that the relationship ends at. */
  toObjectID: string;
  /** The description of the relationship, or `null` if none. */
  description: string;
};

export type Type =
  | "Must be done after"
  | "Must be done before"
  | "Is dependent on"
  | "Is dependency for"
  | "Is blocked by"
  | "Is blocking"
  | "Is bug on"
  | "Has bug"
  | "Is duplicate of"
  | "Has duplicate"
  | "Is related to";
