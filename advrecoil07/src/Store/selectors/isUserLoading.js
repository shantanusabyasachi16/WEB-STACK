import { selector } from "recoil";
import { userState } from "../atoms/user";

export const isUserLoading = selector({
    key: "isUserLoadingState",
    get: ({ get }) => {
          
         // bring the whole atom 
         
        const state = get(userState);

        // now return only the isLoading(subatom/selector)
        return state.isLoading;
    }
});