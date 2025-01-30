import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom);
    return todos.filter(
      (todo) => todo.title.includes(filter) || todo.description.includes(filter)
    );
  },
});
