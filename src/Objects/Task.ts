import { Color } from "../Color";
import { DateString } from "../DateString";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";
import { Attachment } from "./Attachment";
import { Status } from "./BoardColumn";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";
import { Commit } from "./Commit";
import { CustomFieldValue } from "./CustomFieldValue";
import { TimeEntry } from "./TimeEntry";

export type Task = IObject & {
  objectType: "Task";
  /** The id of the task. */
  id: string;
  /** The external id of the task, or `null` if none. Unique among all tasks in your account. */
  externalID: ExternalID | null;
  /** The task number of the task, starting from 1. Unique among all tasks in your account. */
  taskNumber: number;
  /** The id of the project that contains the task. */
  projectID: string;
  /** The id of the backlog item that the task belongs to. */
  backlogItemID: string;
  /** The name of the task. */
  name: string;
  /** The description of the task, or `null` if none. */
  description: string | null;
  /** The link URL of the task, or `null` if none. */
  link: string | null;
  /** The color of the task, or `null` if none. */
  color: Color | null;
  /** The date where the task was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if not available. */
  creationDate: Timestamp | null;
  /** The status of the task. */
  status: Status;
  /** The date where the task was set to status `To do`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the task has not had this status or the date is not available. */
  toDoDate: Timestamp | null;
  /** The date where the task was set to status `In progress`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the task has not had this status or the date is not available. */
  inProgressDate: Timestamp | null;
  /** The date where the task was set to status `To test`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the task has not had this status or the date is not available. */
  toTestDate: Timestamp | null;
  /** The date where the task was set to status `Done`, as the number of milliseconds since January 1, 1970 00:00:00 GMT, or `null` if the task has not had this status or the date is not available. */
  doneDate: Timestamp | null;
  /** The id of the board column that the task is in, in the board that its owner item is assigned to, or `null` if none. */
  boardColumnID: string | null;
  /** The estimate of the task, in the unit used for detailed estimates in the project, or -1 if none. */
  estimate: number | -1;
  /** The time used on the task, or -1 if not specified. If detailed time tracking is used, this is in the unit used for detailed time tracking in the project, else the unit used for detailed estimates. */
  usedTime: number | -1;
  /** The remaining work on the task, in the unit used for detailed estimates in the project, or -1 if not specified. */
  remainingWork: number | -1;
  /** The ids of the persons that the task is assigned to, empty if none. This can refer to `Person` or `DeletedPerson` objects. */
  assignedPersonIDs: string[];
  /** The due date of the task, as a string in the format YYYY-MM-DD, for example "2019-10-27", or `null` if none. */
  dueDate: DateString | null;
  /** The custom field values on the task, empty if none, or `null` if not included. */
  customFieldValues: CustomFieldValue[] | null;
  /** The ids of the tags on the task, empty if none. */
  tagIDs: string[];
  /** The checklists on the task, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the task, empty if none, or `null` if not included. */
  comments: Comment | null;
  /** The attachments on the task, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
  /** The time entries on the task, empty if none, or `null` if not included. */
  timeEntries: TimeEntry[] | null;
  /** The commits on the task, empty if none, or `null` if not included. */
  commits: Commit | null;
};
