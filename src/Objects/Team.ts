import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type Team = IObject & {
  objectType: "Team";
  /** The id of the team. */
  id: string;
  /** The external id of the team, or `null` if none. Unique among all teams in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the team. */
  projectID: string;
  /** The name of the team. */
  name: string;
  /** The description of the team, or `null` if none. */
  description: string | null;
  /** The ids of the persons that are members of the team, empty if none. */
  teamMemberIDs: string[];
};
