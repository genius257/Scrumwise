import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type DeletedPerson = IObject & {
  objectType: "DeletedPerson";
  /** The id of the person. This is the same id as the `Person` object had for the person before the person was deleted. */
  id: string;
  /** The external id of the person, or `null` if none. */
  externalID: ExternalID | null;
  /** The first name of the person. */
  firstName: string;
  /** The last name of the person, or `null` if none. */
  lastName: string | null;
  /** The nickname of the person, or `null` if none. */
  nickname: string | null;
  /** The email address of the person. */
  emailAddress: string;
  /** The phone info of the person, or `null` if none. */
  phone: string | null;
  /** The instant messaging info of the person, or `null` if none. */
  im: string | null;
  /** The description of the person, or `null` if none. */
  description: string | null;
  /** The URL of the photo of the person, or `null` if none. */
  photoURL: string | null;
};
