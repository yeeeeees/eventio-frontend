import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

const DUMMY_DATA: GeneralTypes.Event[] = [
  {
    uuid: 1000,
    title: "Dump Days",
    description: "Event",
    location: "FESB, Split",
    organizer: undefined,
    organizerUuid: 1,
    datePosted: undefined,
    joinedUsers: [],
    eventThumbnail: "",
  },
  {
    uuid: 1001,
    title: "Test",
    description: "Event",
    location: "ETŠS, Split",
    organizer: undefined,
    organizerUuid: 1,
    datePosted: undefined,
    joinedUsers: [],
    eventThumbnail: "",
  },
];

type Lists = "favorite" | "hosted" | "searched";

class EventStore extends EventEmitter {
  protected favoriteEvents: GeneralTypes.Event[];
  protected hostedEvents: GeneralTypes.Event[];
  protected searchedEvents: GeneralTypes.Event[] = [...DUMMY_DATA];

  public getFavorite: () => GeneralTypes.Event[] = () => {
    return this.favoriteEvents;
  }

  public getHosted: () => GeneralTypes.Event[] = () => {
    return this.hostedEvents;
  }

  public getSearched: () => GeneralTypes.Event[] = () => {
    return this.searchedEvents;
  }

  public setEvents = (list: Lists, newEvents: GeneralTypes.Event[]) => {
    switch (list) {
      case "favorite":
        this.favoriteEvents = newEvents;
        this.emit("favoriteEventChange");
        break;
      case "hosted":
        this.hostedEvents = newEvents;
        this.emit("hostedEventChange");
        break;
      case "searched":
        this.searchedEvents = newEvents;
        this.emit("searchedEventChange");
        break;
      default:
        // do ovde ne bi tribalo doc
    }
  }

  public handleActions = (action) => {
    switch (action.type) {
      case "SET_EVENTS":
        this.setEvents(action.payload.eventType, action.payload.newEvents);
        break;
      case "LOGOUT":
        this.favoriteEvents = undefined;
        this.hostedEvents = undefined;
        this.searchedEvents = undefined;
        break;
      default:
        break;
    }
  }
}

const eventStore = new EventStore();

dispatcher.register(eventStore.handleActions);

export default eventStore;
