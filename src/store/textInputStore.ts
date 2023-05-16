import { writable, type Updater, readable } from "svelte/store";

export const activeText = writable<string>("")