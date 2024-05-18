// initial state

import { create } from "zustand";

const initialState = {
  count: 5,
};

// share

const useCountStore = create((set) => {
  return {
    ...initialState,
    increment: () => set(({ count }) => ({ count: count + 1 })),
    // increment: () =>
    //   set((oldState) => {
    //     return {
    //       count: oldState.count + 1,
    //     };
    //   }),

    // decrement: () => {
    //   console.log("i'm decrement");
    //   //   set({ count: 3 });
    //   set((oldState) => {
    //     return {
    //       count: oldState.count - 1,
    //     };
    //   });
    // },
    decrement: () => set((oldState) => ({ count: oldState.count - 1 })),
  };
});

export default useCountStore;
