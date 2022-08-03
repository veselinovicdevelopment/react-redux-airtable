import { RootState } from "..";

export const selectSchoolLoading = (state: RootState) => state.school.isLoading;
export const selectSchoolData = (state: RootState) => state.school.classMembers;
