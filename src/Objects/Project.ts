import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Attachment } from "./Attachment";
import { Backlog } from "./Backlog";
import { BacklogItem } from "./BacklogItem";
import { Board } from "./Board";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";
import { CustomField } from "./CustomField";
import { File } from "./File";
import { Message } from "./Message";
import { Relationship } from "./Relationship";
import { Release } from "./Release";
import { Retrospective } from "./Retrospective";
import { Sprint } from "./Sprint";
import { Tag } from "./Tag";
import { Team } from "./Team";

export type Project = IObject & {
  objectType: "Project";
  /** The id of the project. */
  id: string;
  /** The external id of the project, or `null` if none. Unique among all projects in your account. */
  externalID: ExternalID | null;
  /** The name of the project. */
  name: string;
  /** The description of the project, or null if none. */
  description: string | null;
  /** The link URL of the project, or `null` if none. */
  link: string | null;
  /** The status of the project. */
  status: Status;
  /** The unit used for rough estimates in the project. */
  roughEstimateUnit: Unit;
  /** The unit used for detailed estimates in the project. */
  detailedEstimateUnit: Unit;
  /** The unit used for detailed time tracking in the project. */
  timeTrackingUnit: Unit;
  /** The checklists on the project, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the project, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The attachments on the project, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
  /** The custom fields in the project, empty if none, or `null` if not included. */
  customFields: CustomField[] | null;
  /** The tags in the project, empty if none, or `null` if not included. */
  tags: Tag[] | null;
  /** The ids of the persons that are product owners in the project, empty if none. */
  productOwnerIDs: string[];
  /** The ids of the persons that are stakeholders in the project, empty if none. */
  stakeholderIDs: string[];
  /** The teams in the project, empty if none, or `null` if not included. */
  teams: Team[] | null;
  /** The messages in the project, empty if none, or `null` if not included. */
  messages: Message[] | null;
  /** The backlogs in the project, at least one, or `null` if not included. */
  backlogs: Backlog[] | null;
  /** The backlog items in the project, empty if none, or `null` if not included. Note: This property contains all backlog items in the project, regardless of which backlogs and backlog lists they belong to. To get the backlog items organized by backlogs and backlog lists, use the `backlogs` property instead. */
  backlogItems: BacklogItem[] | null;
  /** The releases in the project, empty if none, or `null` if not included. */
  releases: Release[] | null;
  /** The sprints in the project, empty if none, or `null` if not included. */
  sprints: Sprint[] | null;
  /** The boards in the project, empty if none, or `null` if not included. */
  boards: Board[] | null;
  /** The retrospectives in the project, empty if none, or `null` if not included. */
  retrospectives: Retrospective[] | null;
  /** The files in the project, empty if none, or `null` if not included. */
  files: File[] | null;
  /** The relationships in the project, empty if none, or `null` if not included. */
  relationships: Relationship[] | null;
};

export type Status = "Active" | "Archived";

export type Unit = "Points" | "Days" | "Hours";
