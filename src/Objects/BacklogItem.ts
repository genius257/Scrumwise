import { Color } from "../Color";
import { DateString } from "../DateString";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";
import { Attachment } from "./Attachment";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";
import { Commit } from "./Commit";
import { CustomFieldValue } from "./CustomFieldValue";
import { Task } from "./Task";
import { TimeEntry } from "./TimeEntry";

/**
 * A backlog item.
 */
export type BacklogItem = IObject & {
  objectType: "BacklogItem";
  /** The id of the backlog item. */
  id: string;
  /** The external id of the backlog item, or `null` if none. Unique among all backlog items in your account. */
  externalID: ExternalID | null;
  /** The item number of the backlog item, starting from 1. Unique among all backlog items in your account. */
  itemNumber: number;
  /** The id of the project that contains the backlog item. */
  projectID: string;
  /** The id of the parent epic that the backlog item belongs to, or `null` if none. */
  parentEpicID: string | null;
  /** The id of the backlog list that contains the backlog item. */
  backlogListID: string;
  /** The name of the backlog item. */
  name: string;
  /** The description of the backlog item, or `null` if none. */
  description: string | null;
  /** The link URL of the backlog item, or `null` if none. */
  link: string | null;
  /** The priority of the backlog item, or `null` if none. */
  priority: Priority | null;
  /** The type of the backlog item, or `null` if none. */
  type: Type | null;
  /** The color of the backlog item, or `null` if none. */
  color: Color | null;
  /** The id of the person that created the backlog item, or `null` if none. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string; //FIXME: check scrumwise id's for unique parts, and if found replace all id types "string" with type guard-able types.
  /** The date where the backlog item was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if not available. */
  creationDate: Timestamp | null;
  /** The bug state of the backlog item, or `null` if the backlog item is not a bug. */
  bugState: BugState | null;
  /** The reproducibility of the bug, or `null` if not specified or if the backlog item is not a bug. */
  reproducible: Reproducible | null;
  /** The resolution the backlog item, or `null` if not specified or if the backlog item is not a bug. */
  resolution: Resolution | null;
  /** The id of the release that the backlog item is assigned to, or `null` if the backlog item is not assigned to a release. */
  releaseID: string | null;
  /** The status of the backlog item. */
  status: Status;
  /** The date where the backlog item was set to status `To do`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the backlog item has not had this status or the date is not available. */
  toDoDate: Timestamp | null;
  /** The date where the backlog item was set to status `In progress`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the backlog item has not had this status or the date is not available. */
  inProgressDate: Timestamp | null;
  /** The date where the backlog item was set to status `To test`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the backlog item has not had this status or the date is not available. */
  toTestDate: Timestamp | null;
  /** The date where the backlog item was set to status `Done`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the backlog item has not had this status or the date is not available. */
  doneDate: Timestamp | null;
  /** The rough estimate of the backlog item, in the unit used for rough estimates in the project, or -1 if none. */
  roughEstimate: number | -1; //FIXME: should number for time and estimate fields be made to an Opaque type for validation.
  /** The estimate of the backlog item, in the unit used for detailed estimates in the project, or -1 if none. */
  estimate: number | -1;
  /** The time used on the backlog item, or -1 if not specified. If detailed time tracking is used, this is in the unit used for detailed time tracking in the project, else the unit used for detailed estimates. */
  usedTime: number | -1;
  /** The remaining work on the backlog item, in the unit used for detailed estimates in the project, or -1 if not specified. */
  remainingWork: number | -1;
  /** The id of the sprint that the backlog item is assigned to, or `null` if the backlog item is not assigned to a sprint. */
  sprintID: string | null;
  /** The id of the team that the backlog item is assigned to in the sprint, or `null` if the backlog item is not assigned to a sprint. */
  teamID: string | null;
  /** The id of the board that the backlog item is assigned to, or `null` if the backlog item is not assigned to a board. */
  boardID: string | null;
  /** The id of the board column that the item is in, in the board that it is assigned to, or `null` if none. If the backlog item has tasks, the backlog item is not itself in a board column, so this property is `null`. Instead, each task is in a column. */
  boardColumnID: string | null;
  /** True if the backlog item is archived in the board that it is assigned to, false if not. */
  isArchivedInBoard: boolean;
  /** The ids of the persons that the backlog item is assigned to, empty if none. This can refer to `Person` or `DeletedPerson` objects. */
  assignedPersonIDs: string[];
  /** The due date of the backlog item, as a string in the format YYYY-MM-DD, for example "2019-10-27", or `null` if none. */
  dueDate: DateString | null;
  /** The custom field values on the backlog item, empty if none, or `null` if not included. */
  customFieldValues: CustomFieldValue[] | null;
  /** The ids of the tags on the backlog item, empty if none. */
  tagIDs: string[];
  /** The checklists on the backlog item, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the backlog item, empty if none, or `null` if not included. */
  comments: Comment | null;
  /** The attachments on the backlog item, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
  /** The time entries on the backlog item, empty if none, or `null` if not included. */
  timeEntries: TimeEntry[] | null;
  /** The commits on the backlog item, empty if none, or `null` if not included. */
  commits: Commit[] | null;
  /** The tasks in the backlog item, empty if none, or `null` if not included. */
  tasks: Task[] | null;
  /** The child backlog items of the backlog item, empty if none. This includes only the child backlog items that are placed inside the epic. If a child backlog item is placed outside of the epic, it will occur on its own in the backlog, outside of the parent epic. */
  childBacklogItems: BacklogItem[];
};

export type Priority = "Low" | "Medium" | "High" | "Urgent";

export type Type = "Epic" | "Feature" | "Bug" | "Spike" | "Other";

export type BugState = "Open" | "Closed";

export type Reproducible = "No" | "Sometimes" | "Always";

export type Resolution =
  | "Not enough information"
  | "Cannot reproduce"
  | "Not a bug"
  | "Duplicate"
  | "Postponed"
  | "Won't fix"
  | "Fixed";

export type Status =
  | "New"
  | "Ready for estimation"
  | "Ready for sprint"
  | "Assigned to sprint"
  | "To do"
  | "In progress"
  | "To test"
  | "Done"
  | "Sprint completed"
  | "Released";
