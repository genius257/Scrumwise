import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type Person = IObject & {
  objectType: "Person";
  /** The id of the person. */
  id: string;
  /** The external id of the person, or `null` if none. Unique among all persons in your account. */
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
  /** True if the person has activated his/her account, false if not. */
  isActivated: boolean;
  /** True if the person is administrator, false if not. */
  isAdministrator: boolean;
};
