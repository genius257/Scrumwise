import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";
import { Timestamp } from "../Timestamp";
import { Comment } from "./Comment";

export type File = IObject & {
  objectType: "File";
  /** The id of the file. */
  id: string;
  /** The external id of the file, or `null` if none. Unique among all files in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the file. */
  projectID: string;
  /** The id of the folder that contains the file, or `null` if the file is not contained in any folder. */
  parentFolderID: string;
  /** True if this is a folder, false if it is a file. */
  isFolder: boolean;
  /** The name of the file, or `null` if none. Cannot be `null` if this is a folder. */
  name: string | null;
  /** The description of the file, or `null` if none. */
  description: string | null;
  /** The id of the person that created the file, or `null` if none. This can refer to a `Person` or `DeletedPerson` object. */
  creatorID: string | null;
  /** The date when the file was created, as the number of milliseconds since January 1, 1970 00:00:00 GMT. */
  date: Timestamp;
  /** True if the file is archived, false if not. */
  isArchived: boolean;
  /** The file name of the file, or `null` if none or if this is a folder. */
  fileName: string | null;
  /** The URL of a preview image of the file, or `null` if not available or if this is a folder. */
  thumbnailURL: string | null;
  /** The URL of the file, or `null` if this is a folder. */
  url: string | null;
  /** The ids of the tags on the file, empty if none. */
  tagIDs: string[];
  /** The comments on the file, empty if none, or `null` if not included. */
  comments: Comment[] | null;
  /** The files in this folder, empty if none or if this is not a folder. */
  files: File[];
};
