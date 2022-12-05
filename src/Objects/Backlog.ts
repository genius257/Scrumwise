import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { BacklogList } from "./BacklogList";
import { Color } from "../Color";

/**
 * A backlog in a project.
 *
 * The backlog items in a project are organized into backlogs and backlog lists.
 * A project has one or more backlogs, which each contain one or more backlog lists, which in turn each contain zero or more backlog items.
 */
export type Backlog = IObject & {
  objectType: "Backlog";
  /** The id of the backlog. */
  id: string;
  /** The external id of the backlog, or `null` if none. Unique among all backlogs in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the backlog. */
  projectID: string;
  /** The name of the backlog. */
  name: string;
  /** The description of the backlog, or `null` if none. */
  description: string | null;
  /** The color of the backlog, or `null` if none. */
  color: Color | null;
  /** True if the backlog is archived, false if not. */
  isArchived: boolean;
  /** The backlog lists in the backlog, at least one. */
  backlogLists: BacklogList[]; //FIXME: should we use [BacklogList, ...BacklogList[]] instead to indicate the "at least one" value, at the cost of readability?
};
