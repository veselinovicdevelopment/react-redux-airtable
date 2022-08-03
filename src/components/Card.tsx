import React from "react";

import { ClassMembers } from "../store/school/types";

export type Props = {
  data: ClassMembers;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-2 p-3 border flex flex-col">
      <span className="font-bold">Name</span>
      <span className="font-semibold">{data.name}</span>
      <span className="font-bold mt-2">Students</span>
      <span className="font-semibold">{data.students}</span>
    </div>
  );
};

export default Card;
