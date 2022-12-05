import { Color } from "../Color";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";
import { Attachment } from "./Attachment";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";
import { RetrospectiveColumn } from "./RetrospectiveColumn";

export type Retrospective = IObject & {
  objectType: "Retrospective";
  /** The id of the retrospective. */
  id: string;
  /** The external id of the retrospective, or `null` if none. Unique among all retrospectives in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the retrospective. */
  projectID: string;
  /** The name of the retrospective. */
  name: string;
  /** The description of the retrospective, or `null` if none. */
  description: string | null;
  /** The id of the person that created the retrospective, or `null` if none. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string | null;
  /** The date when the retrospective was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT. */
  creationDate: Timestamp;
  /** The color of the retrospective, or `null` if none. */
  color: Color;
  /** True if the retrospective is archived, false if not. */
  isArchived: boolean;
  /** The ids of the tags on the retrospective, empty if none. */
  tagIDs: string[];
  /** The checklists on the retrospective, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the retrospective, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The attachments on the retrospective, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
  /** The columns in the retrospective, at least 2. */
  columns: RetrospectiveColumn[]; // FIXME: should this be changed to [RetrospectiveColumn, RetrospectiveColumn, ...RetrospectiveColumn[]] to address "at least 2"
};
