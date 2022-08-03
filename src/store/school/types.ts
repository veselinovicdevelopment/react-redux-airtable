export type Student = {
  id: string;
  name: string;
};

export type ClassMembers = {
  name: string;
  students: string;
};

export type SchoolState = {
  isLoading: boolean;
  classMembers: ClassMembers[];
};
