import { GeneralTypes } from "..";

export function standardiseEvent(event): GeneralTypes.Event {
  const newEvent = Object.assign({}, event);

  newEvent.joinedUsers.edges.map((user) => user.node);
  newEvent.joinedUsers = newEvent.joinedUsers.edges;

  return newEvent;
}
