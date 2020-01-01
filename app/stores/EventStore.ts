import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { GeneralTypes } from "..";

class EventStore extends EventEmitter {
  protected events: GeneralTypes.Event[] = [
    {
      name: "Dump Days",
      location: "FESB",
      city: "Split",
      date: "13-5-2020",
      time: "18:00",
      id: 1000
    },
    {
      name: "Test",
      location: "ETŠS",
      city: "Split",
      date: "12-8-2020",
      time: "18:00",
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
