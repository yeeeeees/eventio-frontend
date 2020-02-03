// App Types file

export namespace GeneralTypes {
  export type Event = {
    uuid: number;
    title: string;
    location: string;
    description: string;
    organiserUuid: int;
    organiser: string;
    datePosted: string;
    imageUrl: string;
  };

  export type User = {
    uuid: number;
    username: string;
    email: string;
    profilePic: string;
    fname: string;
    surname: string;
    isVerified: boolean;
  };

  export type Tokens = {
    accessToken: string;
    refreshToken: string;
  }
}
