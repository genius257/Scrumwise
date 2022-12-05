import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { ChecklistItem } from "./ChecklistItem";

export type Checklist = IObject & {
  objectType: "Checklist";
  /** The id of the checklist. */
  id: string;
  /** The external id of the checklist, or `null` if none. Unique among all checklists in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the checklist. */
  projectID: string;
  /** The object type of the object that the checklist belongs to, for example `BacklogItem`. */
  ownerObjectType: OwnerObjectType;
  /** The id of the object that the checklist belongs to. */
  ownerObjectID: string;
  /** The name of the checklist. */
  name: string;
  /** The description of the checklist, or `null` if none. */
  description: string | null;
  /** The checklist items in the checklist, empty if none. */
  checklistItems: ChecklistItem[];
};

export type OwnerObjectType =
  | "Project"
  | "Message"
  | "Release"
  | "Sprint"
  | "BacklogItem"
  | "Task"
  | "Retrospective"
  | "RetrospectiveCard";
