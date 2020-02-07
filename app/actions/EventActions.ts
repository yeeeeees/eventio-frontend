import dispatcher from "../dispatcher";

export function setFavorite(newEvents) {
  dispatcher.dispatch({
    type: "SET_EVENTS",
    payload: {
      eventType: "favorite",
      newEvents
    }
  });
}

export function setHosted(newEvents) {
  dispatcher.dispatch({
    type: "SET_EVENTS",
    payload: {
      eventType: "hosted",
      newEvents
    }
  });
}

export function setSearched(newEvents) {
  dispatcher.dispatch({
    type: "SET_EVENTS",
    payload: {
      eventType: "searched",
      newEvents
    }
  });
}
