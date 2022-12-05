import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";

export type Comment = IObject & {
  objectType: "Comment";
  /** The id of the comment. */
  id: string;
  /** The external id of the comment, or `null` if none. Unique among all comments in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the comment. */
  projectID: string;
  /** The object type of the object that the comment belongs to, for example `BacklogItem`. */
  ownerObjectType: OwnerObjectType;
  /** The id of the object that the comment belongs to. */
  ownerObjectID: string;
  /** The id of the parent comment if this comment is a reply to another comment, or `null` if this comment is a top-level comment. */
  parentCommentID: string | null;
  /** The id of the person that created the comment, or `null` if none. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string | null;
  /** The date when the comment was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT. */
  date: Timestamp;
  /** The text of the comment, or `null` if the comment is empty. */
  text: string | null;
  /** The replies to the comment, empty if none. */
  replies: Comment[];
};

export type OwnerObjectType =
  | "Project"
  | "Message"
  | "Release"
  | "Sprint"
  | "BacklogItem"
  | "Task"
  | "Retrospective"
  | "RetrospectiveCard"
  | "File";
