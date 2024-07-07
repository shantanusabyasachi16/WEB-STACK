import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const isCourseLoadingState = selector({
    key: "isCourseLoadingState",
    get: ({ get }) => {
        const state = get(courseState);
        return state.isLoading;
    }
});

export const courseDetailState = selector({
    key: "courseDetailState",
    get: ({ get }) => {
        const state = get(courseState);
        return state.course;
    }
});

export const courseTitleState = selector({
    key: "courseTitleState",
    get: ({ get }) => {
        const state = get(courseState);
        if (state.course) {
            return state.course.title;
        }
        return "";
    }
});

export const coursePriceState = selector({
    key: "coursePriceState",
    get: ({ get }) => {
        const state = get(courseState);
        if (state.course) {
            return state.course.price;
        }
        return "";
    }
});

export const courseImageState = selector({
    key: "courseImageState",
    get: ({ get }) => {
        const state = get(courseState);
        if (state.course) {
            return state.course.image;
        }
        return "";
    }
});