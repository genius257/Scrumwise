import { Color } from "../Color";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";
import { Attachment } from "./Attachment";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";

export type RetrospectiveCard = IObject & {
  objectType: "RetrospectiveCard";
  /** The id of the card. */
  id: string;
  /** The external id of the card, or `null` if none. Unique among all retrospective cards in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the card. */
  projectID: string;
  /** The id of the retrospective that contains the card. */
  retrospectiveID: string;
  /** The column number that the card is in, in the retrospective, starting from 1. */
  columnNum: number;
  /** The name of the card. */
  name: string;
  /** The description of the card, or `null` if none. */
  description: string | null;
  /** The id of the person that created the card, or `null` if none. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string | null;
  /** The date when the card was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT. */
  creationDate: Timestamp;
  /** The color of the card, or `null` if none. */
  color: Color | null;
  /** The ids of the tags on the card, empty if none. */
  tagIDs: string[];
  /** The checklists on the card, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the card, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The attachments on the card, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
};
