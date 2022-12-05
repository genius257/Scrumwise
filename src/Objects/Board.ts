import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { BoardColumn } from "./BoardColumn";

export type Board = IObject & {
  objectType: "Board";
  /** The id of the board. */
  id: string;
  /** The external id of the board, or `null` if none. Unique among all boards in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the board. */
  projectID: string;
  /** The name of the board. */
  name: string;
  /** The description of the board, or `null` if none. */
  description: string | null;
  /** The type of the board. */
  type: Type;
  /** The columns in the board, empty if none. */
  columns: BoardColumn[];
  /** The ids of the backlog items that are assigned to the board, empty if none. */
  assignedBacklogItemIDs: string[];
};

export type Type = "Scrum" | "Kanban";
