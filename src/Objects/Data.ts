import { IObject } from "../Object";
import { DeletedPerson } from "./DeletedPerson";
import { Person } from "./Person";
import { Project } from "./Project";

export type Data = IObject & {
  objectType: "Data";
  /** The persons in your account, or `null` if not included. */
  persons: Person[] | null;
  /** The deleted persons in your account, empty if none, or `null` if not included. */
  deletedPersons: DeletedPerson[] | null;
  /** The returned projects, empty if none. */
  projects: Project[];
};
