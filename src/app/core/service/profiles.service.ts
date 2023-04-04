export type ProfileType = "file" | "remote";

export interface Profile {
  /**
   * unique
   */
  id: string;
  order?: number;
  /**
   * unique
   */
  name: string;
  type: ProfileType;
  createTimestamp: number;
  updateTimestamp?: number;
}

export interface FileProfile extends Profile {
  type: "file";
  path: string;
  subscribeUrl?: string;
}

export interface RemoteProfile extends Profile {
  type: "remote";
  schema: string;
  host: string;
  port: number;
  authorization: string;
  version: string;
}

export type syncProfileStatusType = "synchronizing" | "success" | "failed";

export interface SyncProfileStatus {
  profileId: string;
  status: syncProfileStatusType;
}
