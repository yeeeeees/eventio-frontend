import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

class EventStore extends EventEmitter {
  protected events: GeneralTypes.Event[] = [
    {
      name: "Dump Days",
      location: "FESB",
      city: "Split",
      date: new Date("2020-01-01T18:00:00"),
      imageUrl: "",
      id: 1000
    },
    {
      name: "Test",
      location: "ETŠS",
      city: "Split",
      date: new Date("2020-08-12T17:00"),
      imageUrl: "",
      id: 1001
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
