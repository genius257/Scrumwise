import { Result } from "../Objects/Result";
import { Data as DataObject } from "../Objects/Data";
import { Error } from "../Objects/Error";
import { Attachment } from "../Objects/Attachment";
import { Backlog } from "../Objects/Backlog";
import { BacklogItem } from "../Objects/BacklogItem";
import { BacklogList } from "../Objects/BacklogList";
import { Board } from "../Objects/Board";
import { BoardColumn } from "../Objects/BoardColumn";
import { ChecklistItem } from "../Objects/ChecklistItem";
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

type IncludeProperties = Array<IncludeProperty>; //FIXME: would be nice if it could be indicated as unique, without doing too much ts check computation. Alternative is to make it an object where the keys are the string values.
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

type OptionalBacklogItemPropertyValues =
  `${BacklogItem["objectType"]}.${OptionalBacklogItemProperties}`;
type OptionalBacklogItemProperties = Extract<
  keyof BacklogItem,
  | "customFieldValues"
  | "checklists"
  | "comments"
  | "attachments"
  | "timeEntries"
  | "commits"
  | "tasks"
>; //FIXME: define the stings in a way that will trigger a ts error, if a property is later removed (string extends keyof X)

type OptionalDataPropertyValues =
  `${DataObject["objectType"]}.${OptionalDataProperties}`;
type OptionalDataProperties = Extract<
  keyof DataObject,
  "persons" | "deletedPersons"
>;

type OptionalFilePropertyValues =
  `${File["objectType"]}.${OptionalFileProperties}`;
type OptionalFileProperties = Extract<keyof File, "comments">;

type OptionalMessagePropertyValues =
  `${Message["objectType"]}.${OptionalMessageProperties}`;
type OptionalMessageProperties = Extract<
  keyof Message,
  "checklists" | "comments" | "attachments"
>;

type OptionalProjectPropertyValues =
  `${Project["objectType"]}.${OptionalProjectProperties}`;
type OptionalProjectProperties = Extract<
  keyof Project,
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

type OptionalReleasePropertyValues =
  `${Release["objectType"]}.${OptionalReleaseProperties}`;
type OptionalReleaseProperties = Extract<
  keyof Release,
  "customFieldValues" | "checklists" | "comments" | "attachments"
>;

type OptionalRetrospectivePropertyValues =
  `${Retrospective["objectType"]}.${OptionalRetrospectiveProperties}`;
type OptionalRetrospectiveProperties = Extract<
  keyof Retrospective,
  "checklists" | "comments" | "attachments"
>;

type OptionalRetrospectiveCardPropertyValues =
  `${RetrospectiveCard["objectType"]}.${OptionalRetrospectiveCardProperties}`;
type OptionalRetrospectiveCardProperties = Extract<
  keyof RetrospectiveCard,
  "checklists" | "comments" | "attachments"
>;

type OptionalSprintPropertyValues =
  `${Sprint["objectType"]}.${OptionalSprintProperties}`;
type OptionalSprintProperties = Extract<
  keyof Sprint,
  "customFieldValues" | "checklists" | "comments" | "attachments"
>;

type OptionalTaskPropertyValues =
  `${Task["objectType"]}.${OptionalTaskProperties}`;
type OptionalTaskProperties = Extract<
  keyof Task,
  | "customFieldValues"
  | "checklists"
  | "comments"
  | "attachments"
  | "timeEntries"
  | "commits"
>;

type OptionalTimeEntryPropertyValues =
  `${TimeEntry["objectType"]}.${OptionalTimeEntryProperties}`;
type OptionalTimeEntryProperties = Extract<
  keyof TimeEntry,
  "customFieldValues"
>;

//FIXME: extract optional properties from Objects via TS util types

/*
type includeProperties = Array<includeProperty>;
type includeProperty = `${Object["objectType"]}.${keyof Object}`
type Objects = [Attachment
  , Backlog
  , BacklogItem
  , BacklogList
  , Board
  , BoardColumn
  ,ChecklistItem];
type Object =
  | Attachment
  | Backlog
  | BacklogItem
  | BacklogList
  | Board
  | BoardColumn
  | ChecklistItem;

type X = Object["objectType"];
const M: includeProperty = "Attachment.fileName";
*/
//type X = "X";
//type Y = `${Object}.${X}`;

/*
type X<T> = {
  [Property in keyof T]: T[Property] extends NonNullable<T[Property]> ? never : Property;
}

type Y = X<ChecklistItem>;
*/

/*
type X = keyof Object;
type Y = ObtainKeys<Attachment, null>;
const x: X = "url";

type ObtainKeys<Obj, Type> = {
  [Prop in keyof Obj]: Obj[Prop] extends Type ? Prop : never;
}[keyof Obj];

type Z2 = NonNullable<Attachment>;
type Z = Exclude<Attachment, NonNullable<Attachment>>

// -------------------

type Optional<T> = T | null;

type A = {
  a: Optional<string>;
  b: number;
  c: null;
}

type B = ObtainKeys<A, null>
*/

type Null = Opaque<null, "Null">;

type A = {
  a: string | Null;
};

//type X = Omit<A["a"], Null>;
/*
type X<T> = {
  [Property in keyof T]: T[Property] extends Omit<T[Property], null>
    ? never
    : Property;
}[keyof T];

type Z = X<Attachment>;
*/
