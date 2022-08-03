import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";

import { setLogout } from "../store/auth";
import {
  selectSchoolData,
  selectSchoolLoading,
} from "../store/school/selectors";

const SchoolPage: React.FC = () => {
  const dispatch = useDispatch();
  const classData = useSelector(selectSchoolData);
  const isLoading = useSelector(selectSchoolLoading);

  const logout = () => {
    dispatch(setLogout());
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button className="p-3 border" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="flex justify-center flex-col w-96 mx-auto">
        {isLoading ? (
          <div className="font-bold">Loading...</div>
        ) : (
          classData.map((item, index) => <Card data={item} key={index} />)
        )}
      </div>
    </>
  );
};

export default SchoolPage;
