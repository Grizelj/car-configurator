import { atom } from "recoil";

const setActive = atom<string>({
  key: "setActive",
  default: "Exterior",
});

export const configuratorAtoms = { setActive };
