import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";

export type Commit = IObject & {
  objectType: "Commit";
  /** The id of the commit. */
  id: string;
  /** The external id of the commit, or `null` if none. Unique among all commits in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the commit. */
  projectID: string;
  /** The object type of the object that the commit belongs to, for example `BacklogItem`. */
  ownerObjectType: string;
  /** The id of the object that the commit belongs to. */
  ownerObjectID: string;
  /** The date when the commit was made, as the number of milliseconds since January 1, 1970 00:00:00 GMT. */
  date: Timestamp;
  /** The id of the person that did the commit. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string;
  /** The name of the repository, or `null` if none. */
  repositoryName: string | null;
  /** The URL of the repository, or `null` if none. */
  repositoryURL: string | null;
  /** The repository revision after the commit. */
  revision: string;
  /** The commit message (including the Scrumwise meta info). */
  message: string;
  /** The URL of the commit, or `null` if none. */
  commitURL: string | null;
};
