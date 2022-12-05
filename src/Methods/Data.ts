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

export default class Data {
  public static getData(): Promise<Result<DataObject> | Error> {
    const url = new URL("https://api.scrumwise.com/service/api/v1/getData");
    url.searchParams.append("includeProperties");
    return fetch(url).then((response) => response.json());
  }
}

//FIXME: extract optional properties from Objects

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
