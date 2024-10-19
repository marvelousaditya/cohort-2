import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [],
});

export const userInputAtom = atom({
  key: "userInputAtom",
  default: "",
});

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const todo = get(todoAtom);
    const filter = get(userInputAtom);
    return todo.filter((todo) => todo.title.includes(filter));
  },
});
