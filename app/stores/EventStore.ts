import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

class EventStore extends EventEmitter {
  protected events: GeneralTypes.Event[] = [
    {
      uuid: 1000,
      title: "Dump Days",
      description: "Event",
      location: "FESB, Split",
      organiser: "Spinzed",
      organiserUuid: 1,
      datePosted: undefined,
      imageUrl: "",
    },
    {
      uuid: 1001,
      title: "Test",
      description: "Event",
      location: "ETŠS, Split",
      organiser: "Spinzed",
      organiserUuid: 1,
      datePosted: undefined,
      imageUrl: "",
    },
  ];

  public getAll: () => GeneralTypes.Event[] = () => {
    return this.events;
  }

  public setEvents = (newEvents) => {
    this.events = newEvents;
  }

  public handleActions = (action) => {
    switch (action.type) {
      case "LOGOUT":
        // this is an user action ikr but I'll need it here later
        break;
      default:
        break;
    }
  }
}

const eventStore = new EventStore();

dispatcher.register(eventStore.handleActions);

export default eventStore;
