import { Color } from "../Color";
import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

export type Tag = IObject & {
  objectType: "Tag";
  /** The id of the tag. */
  id: string;
  /** The external id of the tag, or `null` if none. Unique among all tags in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the tag. */
  projectID: string;
  /** The name of the tag. */
  name: string;
  /** The description of the tag, or `null` if none. */
  description: string | null;
  /** The color of the tag. */
  color: Color;
};
