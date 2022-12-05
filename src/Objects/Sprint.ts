import { DateString } from "../DateString";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Attachment } from "./Attachment";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";
import { CustomFieldValue } from "./CustomFieldValue";
import { TeamSprintParticipation } from "./TeamSprintParticipation";

export type Sprint = IObject & {
  objectType: "Sprint";
  /** The id of the sprint. */
  id: string;
  /** The external id of the sprint, or `null` if none. Unique among all sprints in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the sprint. */
  projectID: string;
  /** The name of the sprint. */
  name: string;
  /** The description of the sprint, or `null` if none. */
  description: string | null;
  /** The link URL of the sprint, or `null` if none. */
  link: string;
  /** The start date of the sprint, as a string in the format YYYY-MM-DD, for example "2019-10-27", or `null` if none. */
  startDate: DateString | null;
  /** The end date of the sprint, as a string in the format YYYY-MM-DD, for example "2019-10-27", or `null` if none. */
  endDate: DateString | null;
  /** The id of the board that the sprint uses, or `null` if none. */
  boardID: string | null;
  /** The status of the sprint. */
  status: Status;
  /** True if the sprint is archived, false if not. */
  isArchived: boolean;
  /** The custom field values on the sprint, empty if none, or `null` if not included. */
  customFieldValues: CustomFieldValue[] | null;
  /** The ids of the tags on the sprint, empty if none. */
  tagIDs: string[];
  /** The checklists on the sprint, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the sprint, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The attachments on the sprint, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
  /** For each team that participates in the sprint, a `TeamSprintParticipation` object, empty if no teams participate. */
  teamSprintParticipations: TeamSprintParticipation[];
};

export type Status = "In planning" | "In progress" | "Completed" | "Aborted";
