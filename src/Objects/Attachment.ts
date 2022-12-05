import { ExternalID } from "../ExternalID";
import { IObject } from "../Object";

/** A file attachment on another object. */
export type Attachment = IObject & {
  objectType: "Attachment";
  /** The id of the attachment. */
  id: string;
  /** The external id of the attachment, or `null` if none. Unique among all attachments in your account. */
  externalID: ExternalID | null;
  /** The id of the project that contains the attachment. */
  projectID: string;
  /** The object type of the object that the attachment is attached to, for example `BacklogItem`. */
  ownerObjectType: OwnerObjectType;
  /** The id of the object that the attachment is attached to. */
  ownerObjectID: string;
  /** The name of the attachment, or `null` if none. */
  name: string | null;
  /** The description of the attachment, or `null` if none. */
  description: string | null;
  /** The file name of the attachment, or `null` if none. */
  fileName: string | null;
  /** The URL of a preview image of the file, or `null` if not available. */
  thumbnailURL: string | null;
  /** The URL of the file. */
  url: string;
};

export type OwnerObjectType =  //FIXME: should all ObjectType types use union reference like: (Project | Message | ...)["objectType"]
  | "Project"
  | "Message"
  | "Release"
  | "Sprint"
  | "BacklogItem"
  | "Task"
  | "Retrospective"
  | "RetrospectiveCard";
