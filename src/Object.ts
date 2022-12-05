import { Attachment } from "./Objects/Attachment";
import { Backlog } from "./Objects/Backlog";
import { BacklogItem } from "./Objects/BacklogItem";
import { BacklogList } from "./Objects/BacklogList";
import { Board } from "./Objects/Board";
import { BoardColumn } from "./Objects/BoardColumn";
import { Checklist } from "./Objects/Checklist";
import { ChecklistItem } from "./Objects/ChecklistItem";
import { Comment } from "./Objects/Comment";
import { Commit } from "./Objects/Commit";
import { CustomField } from "./Objects/CustomField";
import { CustomFieldValue } from "./Objects/CustomFieldValue";
import { Data } from "./Objects/Data";
import { DeletedPerson } from "./Objects/DeletedPerson";
import { Error } from "./Objects/Error";
import { File } from "./Objects/File";
import { Message } from "./Objects/Message";
import { Person } from "./Objects/Person";
import { Project } from "./Objects/Project";
import { Relationship } from "./Objects/Relationship";
import { Release } from "./Objects/Release";
import { Result } from "./Objects/Result";
import { Retrospective } from "./Objects/Retrospective";
import { RetrospectiveCard } from "./Objects/RetrospectiveCard";
import { RetrospectiveColumn } from "./Objects/RetrospectiveColumn";
import { Sprint } from "./Objects/Sprint";
import { Tag } from "./Objects/Tag";
import { Task } from "./Objects/Task";
import { Team } from "./Objects/Team";
import { TeamSprintParticipation } from "./Objects/TeamSprintParticipation";
import { TimeEntry } from "./Objects/TimeEntry";

export interface IObject {
  /** The type of the object. */
  objectType: string;
}

export type Object =
  | Attachment
  | Backlog
  | BacklogItem
  | BacklogList
  | Board
  | BoardColumn
  | Checklist
  | ChecklistItem
  | Comment
  | Commit
  | CustomField
  | CustomFieldValue
  | Data
  | DeletedPerson
  | Error
  | File
  | Message
  | Person
  | Project
  | Relationship
  | Release
  | Result<IObject>
  | Retrospective
  | RetrospectiveCard
  | RetrospectiveColumn
  | Sprint
  | Tag
  | Task
  | Team
  | TeamSprintParticipation
  | TimeEntry;
