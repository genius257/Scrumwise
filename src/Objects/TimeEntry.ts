import { DateString } from "../DateString";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { CustomFieldValue } from "./CustomFieldValue";

export type TimeEntry = IObject & {
  objectType: "TimeEntry";
  /** The id of the time entry. */
  id: string;
  /** The external id of the time entry, or `null` if none. Unique among all time entries in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the time entry. */
  projectID: string;
  /** The object type of the object that the time was used on, for example `BacklogItem`. */
  ownerObjectType: OwnerObjectType;
  /** The id of the object that the time was used on. */
  ownerObjectID: string;
  /** The date on which the time was used, as a string in the format YYYY-MM-DD, for example "2019-10-27". */
  date: DateString;
  /** The id of the person that used the time. This can refer to a `Person` or `DeletedPerson` object. */
  personID: string;
  /** The description of the used time, or `null` if none. */
  description: string | null;
  /** The amount of time that was used, in the unit used for detailed time tracking in the project. */
  usedTime: number;
  /** The custom field values on the time entry, empty if none, or `null` if not included. */
  customFieldValues: CustomFieldValue[] | null;
};

export type OwnerObjectType = "BacklogItem" | "Task";
