import { Color } from "../Color";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { BacklogItem } from "./BacklogItem";

export type BacklogList = IObject & {
  objectType: "BacklogList";
  /** The id of the backlog list. */
  id: string;
  /** The external id of the backlog list, or `null` if none. Unique among all backlog lists in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the backlog list. */
  projectID: string;
  /** The id of the backlog that contains the backlog list. */
  backlogID: string;
  /** The name of the backlog list. */
  name: string;
  /** The description of the backlog list, or `null` if none. */
  description: string | null;
  /** The color of the backlog list, or `null` if none. */
  color: Color | null;
  /** True if the backlog list is archived, false if not. */
  isArchived: boolean;
  /** The backlog items in the backlog list, empty if none. */
  backlogItems: BacklogItem[];
};
