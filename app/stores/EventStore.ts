import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { AppTypes } from "..";

class EventStore extends EventEmitter {
  protected events: AppTypes.Event[] = [
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

  public getAll = () => {
    return this.events;
  }

  public setEvents = (newEvents) => {
    this.events = newEvents;
  }

  public handleActions = (action) => {
    // eslint-disable-next-line no-console
    console.log(action);
    return "";
  }
}

const eventStore = new EventStore();

dispatcher.register(eventStore.handleActions);

export default eventStore;
