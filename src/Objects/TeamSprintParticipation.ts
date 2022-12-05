import { IObject } from "../Object";

export type TeamSprintParticipation = IObject & {
  objectType: "TeamSprintParticipation";
  /** The id of the `TeamSprintParticipation`. */
  id: string;
  /** The id of the project that contains the `TeamSprintParticipation`. */
  projectID: string;
  /** The id of the team. */
  teamID: string;
  /** The id of the sprint. */
  sprintID: string;
  /** The available time for the team in the sprint, in the unit used for detailed estimates in the project, or -1 if not specified. */
  availableTime: number | -1;
  /** The ids of the backlog items that are assigned to the team in the sprint, empty if none. */
  assignedBacklogItemIDs: string[];
};
