// App Types file

export namespace GeneralTypes {
  export type Event = {
    uuid: number;
    title: string;
    location: string;
    description: string;
    organizerUuid: int;
    organizer: User;
    datePosted: Date;
    joinedUsers: User[];
    eventThumbnail?: string;
  };

  export type User = {
    uuid: number;
    username: string;
    email: string;
    profilePic: string;
    fname: string;
    surname: string;
  };

  export type Tokens = {
    accessToken: string;
    refreshToken: string;
  }
}
