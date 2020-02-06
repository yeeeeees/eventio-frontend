import { SALT } from "../constants";

export function salt(pw: string): string {
  return SALT + pw;
}
