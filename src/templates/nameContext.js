import { createContext } from "react";

type StateType = boolean; // change according to context

const state:StateType = false;

export const NameContext = createContext(state);