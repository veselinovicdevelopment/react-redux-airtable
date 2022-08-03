import React from "react";
import { useSelector } from "react-redux";

import LoginPage from "./pages/login";
import SchoolPage from "./pages/school";
import { selectLoginStatus } from "./store/auth/selectors";

const App = () => {
  const isLogin = useSelector(selectLoginStatus);

  return (
    <div className="h-screen p-10">
      {isLogin ? <SchoolPage /> : <LoginPage />}
    </div>
  );
};

export default App;
