// App Types file

export namespace GeneralTypes {
  export type Event = {
    name: string;
    location: string;
    city: string;
    date: Date;
    imageUrl: string;
    id: number;
  };

  export type User = {
    username: string;
    email: string;
    picture: number;
  };
}
