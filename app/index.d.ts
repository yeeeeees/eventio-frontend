export namespace AppTypes {
  export type Event = {
    name: string;
    location: string;
    city: string;
    date: string;
    time: string;
    id: number;
  };

  export type User = {
    name: string;
    mail: string;
    picture: number;
    isLoggedIn: boolean;
  };
}
