import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => {
    const network = get(networkAtom);
    const message = get(messageAtom);
    const notification = get(notificationAtom);
    const job = get(jobsAtom);
    return network + job + message + notification;
  },
});
