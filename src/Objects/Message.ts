import { Color } from "../Color";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";
import { Attachment } from "./Attachment";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";

export type Message = IObject & {
  objectType: "Message";
  /** The id of the message. */
  id: string;
  /** The external id of the message, or `null` if none. Unique among all messages in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the message. */
  projectID: string;
  /** The title of the message. */
  title: string;
  /** The text the message, or `null` if none. */
  text: string | null;
  /** The link URL of the message, or `null` if none. */
  link: string | null;
  /** The type of the message, or `null` if none. */
  type: Type | null;
  /** The id of the person that created the message, or `null` if none. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string | null;
  /** The date when the message was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT. */
  date: Timestamp;
  /** The color of the message, or `null` if none. */
  color: Color;
  /** True if the message is archived, false if not. */
  isArchived: boolean;
  /** The ids of the tags on the message, empty if none. */
  tagIDs: string[];
  /** The checklists on the message, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the message, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The attachments on the message, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
};

export type Type =
  | "Announcement"
  | "Information"
  | "Question"
  | "Idea"
  | "To do"
  | "Other";
