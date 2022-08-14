import { atom } from "recoil";

const setActive = atom<string>({
  key: "setActive",
  default: "Exterior",
});

const setPaint = atom<string>({
  key: "setPaint",
  default: "Black",
});

const setCar = atom<string>({
  key: "setCar",
  default: "rs6",
});

const setWheel = atom<string>({
  key: "setWheel",
  default: "RS6One",
});

const setInterior = atom<string>({
  key: "setInterior",
  default: "Black&grey",
});

const setCarousel = atom<number>({
  key: "setCarousel",
  default: 1,
});

const setUser = atom<string>({
  key: "setUser",
  default: "",
});
export const configuratorAtoms = {
  setActive,
  setPaint,
  setCar,
  setWheel,
  setInterior,
  setCarousel,
  setUser,
};
