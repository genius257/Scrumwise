import { DateString } from "../DateString";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Attachment } from "./Attachment";
import { Checklist } from "./Checklist";
import { Comment } from "./Comment";
import { CustomFieldValue } from "./CustomFieldValue";

export type Release = IObject & {
  objectType: "Release";
  /** The id of the release. */
  id: string;
  /** The external id of the release, or `null` if none. Unique among all releases in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the release. */
  projectID: string;
  /** The name of the release. */
  name: string;
  /** The description of the release, or `null` if none. */
  description: string | null;
  /** The link URL of the release, or `null` if none. */
  link: string;
  /** The start date of the release, as a string in the format YYYY-MM-DD, for example "2019-10-27", or `null` if none. */
  startDate: DateString | null;
  /** The planned release date of the release, as a string in the format YYYY-MM-DD, for example "2019-10-27", or `null` if none. */
  releaseDate: DateString | null;
  /** The status of the release. */
  status: Status;
  /** The best-case velocity per week of the release, in the unit used for rough estimates in the project, or -1 if none. */
  bestCaseVelocityPerWeek: number | -1;
  /** The expected velocity per week of the release, in the unit used for rough estimates in the project, or -1 if none. */
  expectedVelocityPerWeek: number | -1;
  /** The worst-case velocity per week of the release, in the unit used for rough estimates in the project, or -1 if none. */
  worstCaseVelocityPerWeek: number | -1;
  /** The custom field values on the release, empty if none, or `null` if not included. */
  customFieldValues: CustomFieldValue[] | null;
  /** The ids of the tags on the release, empty if none. */
  tagIDs: string[];
  /** The checklists on the release, empty if none, or `null` if not included. */
  checklists: Checklist[] | null;
  /** The comments on the release, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The attachments on the release, empty if none, or `null` if not included. */
  attachments: Attachment[] | null;
  /** The ids of the backlog items that are assigned to the release, empty if none. */
  assignedBacklogItemIDs: string[];
};

export type Status = "In planning" | "In progress" | "Completed";
