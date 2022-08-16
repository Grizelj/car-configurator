import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const setActive = atom<string>({
  key: "setActive",
  default: "Exterior",
  effects_UNSTABLE: [persistAtom],
});

const setPaint = atom<string>({
  key: "setPaint",
  default: "Black",
  effects_UNSTABLE: [persistAtom],
});

const setCar = atom<string>({
  key: "setCar",
  default: "AUDI RS6 AVANT",
  effects_UNSTABLE: [persistAtom],
});

const setWheel = atom<string>({
  key: "setWheel",
  default: "One",
  effects_UNSTABLE: [persistAtom],
});

const setInterior = atom<string>({
  key: "setInterior",
  default: "Black&grey",
  effects_UNSTABLE: [persistAtom],
});

const setCarousel = atom<number>({
  key: "setCarousel",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

const setUser = atom<string>({
  key: "setUser",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

const setCarEditToId = atom<string | null>({
  key: "setCarEditToId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const configuratorAtoms = {
  setActive,
  setPaint,
  setCar,
  setWheel,
  setInterior,
  setCarousel,
  setUser,
  setCarEditToId,
};
