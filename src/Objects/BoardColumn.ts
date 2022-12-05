import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type BoardColumn = IObject & {
  objectType: "BoardColumn";
  /** The id of the board column. */
  id: string;
  /** The external id of the board column, or `null` if none. Unique among all board columns in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the board column. */
  projectID: string;
  /** The id of the board that the board column belongs to. */
  boardID: string;
  /** The name of the board column. */
  name: string;
  /** The description of the board column, or `null` if none. */
  description: string | null;
  /** The status that backlog items and tasks will have when they are in this column. */
  status: Status;
};

export type Status = "To do" | "In progress" | "To test" | "Done";
