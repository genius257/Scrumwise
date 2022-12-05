import { Result } from "../Objects/Result";
import { Data as DataObject } from "../Objects/Data";
import { Error } from "../Objects/Error";
import { BacklogItem } from "../Objects/BacklogItem";
import { Opaque } from "../utils";
import { File } from "../Objects/File";
import { Message } from "../Objects/Message";
import { Project } from "../Objects/Project";
import { Release } from "../Objects/Release";
import { Retrospective } from "../Objects/Retrospective";
import { RetrospectiveCard } from "../Objects/RetrospectiveCard";
import { Sprint } from "../Objects/Sprint";
import { Task } from "../Objects/Task";
import { TimeEntry } from "../Objects/TimeEntry";
import { IObject } from "../Object";

export type ProjectIDs = Opaque<string, "ProjectIDs">;

const projectIDsExpression = /^\d+-\d+-\d+(,\d+-\d+-\d+)*$/; //FIXME: validate regex

export function isProjectIDs(unsafe: string): unsafe is ProjectIDs {
  return projectIDsExpression.test(unsafe);
}

export function assertProjectIDs(unsafe: string): asserts unsafe is ProjectIDs {
  if (!isProjectIDs(unsafe)) {
    throw new Error(`value: "${unsafe}" is not a valid list of project id's`);
  }
}

export function projectIDs(unsafe: string): ProjectIDs {
  assertProjectIDs(unsafe);
  return unsafe;
}

export default class Data {
  public static getData(): Promise<Result<DataObject> | Error>; //FIXME: add support for array of strings for projectIDs also
  public static getData(
    projectIDs: ProjectIDs
  ): Promise<Result<DataObject> | Error>;
  public static getData(
    projectIDs: ProjectIDs | null,
    includeProperties: IncludeProperties
  ): Promise<Result<DataObject> | Error>;
  public static getData(
    projectIDs: ProjectIDs | null = null,
    includeProperties: IncludeProperties | null = null
  ): Promise<Result<DataObject> | Error> {
    const url = new URL("https://api.scrumwise.com/service/api/v1/getData");
    if (projectIDs !== null) {
      url.searchParams.append("projectIDs", projectIDs);
    }
    if (includeProperties !== null) {
      const uniqueIncludeProperties = new Set(includeProperties);
      const uniqueIncludePropertiesString = Array.from(
        uniqueIncludeProperties
      ).join(",");

      url.searchParams.append(
        "includeProperties",
        uniqueIncludePropertiesString
      );
    }
    return fetch(url).then((response) => response.json());
  }
}

type OptionalProperties<
  Object extends IObject,
  Keys extends Exclude<keyof Object, symbol>
> = `${Object["objectType"]}.${Extract<keyof Object, Keys>}`;

type IncludeProperties = Array<IncludeProperty>; //OPTIMIZE: would be nice if it could be indicated as unique, without doing too much ts check computation. Alternative is to make it an object where the keys are the string values.
type IncludeProperty =
  | OptionalBacklogItemPropertyValues
  | OptionalDataPropertyValues
  | OptionalFilePropertyValues
  | OptionalMessagePropertyValues
  | OptionalProjectPropertyValues
  | OptionalReleasePropertyValues
  | OptionalRetrospectivePropertyValues
  | OptionalRetrospectiveCardPropertyValues
  | OptionalSprintPropertyValues
  | OptionalTaskPropertyValues
  | OptionalTimeEntryPropertyValues;

type OptionalBacklogItemPropertyValues = OptionalProperties<
  BacklogItem,
  | "customFieldValues"
  | "checklists"
  | "comments"
  | "attachments"
  | "timeEntries"
  | "commits"
  | "tasks"
>;

type OptionalDataPropertyValues = OptionalProperties<
  DataObject,
  "persons" | "deletedPersons"
>;

type OptionalFilePropertyValues = OptionalProperties<File, "comments">;

type OptionalMessagePropertyValues = OptionalProperties<
  Message,
  "checklists" | "comments" | "attachments"
>;

type OptionalProjectPropertyValues = OptionalProperties<
  Project,
  | "checklists"
  | "comments"
  | "attachments"
  | "customFields"
  | "tags"
  | "teams"
  | "messages"
  | "backlogs"
  | "backlogItems"
  | "releases"
  | "sprints"
  | "boards"
  | "retrospectives"
  | "files"
  | "relationships"
>;

type OptionalReleasePropertyValues = OptionalProperties<
  Release,
  "customFieldValues" | "checklists" | "comments" | "attachments"
>;

type OptionalRetrospectivePropertyValues = OptionalProperties<
  Retrospective,
  "checklists" | "comments" | "attachments"
>;

type OptionalRetrospectiveCardPropertyValues = OptionalProperties<
  RetrospectiveCard,
  "checklists" | "comments" | "attachments"
>;

type OptionalSprintPropertyValues = OptionalProperties<
  Sprint,
  "customFieldValues" | "checklists" | "comments" | "attachments"
>;

type OptionalTaskPropertyValues = OptionalProperties<
  Task,
  | "customFieldValues"
  | "checklists"
  | "comments"
  | "attachments"
  | "timeEntries"
  | "commits"
>;

type OptionalTimeEntryPropertyValues = OptionalProperties<
  TimeEntry,
  "customFieldValues"
>;
