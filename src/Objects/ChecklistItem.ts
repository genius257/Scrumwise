import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type ChecklistItem = IObject & {
  objectType: "ChecklistItem";
  /** The id of the checklist item. */
  id: string;
  /** The external id of the checklist item, or `null` if none. Unique among all checklist items in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the checklist item. */
  projectID: string;
  /** The id of the checklist that the checklist item belongs to. */
  checklistID: string;
  /** The name of the checklist item. */
  name: string;
  /** The description of the checklist item, or `null` if none. */
  description: string | null;
  /** True if the checklist item is checked, false if not. */
  isChecked: boolean;
};
