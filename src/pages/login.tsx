import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setLogin } from "../store/auth";
import { getData } from "../store/school/actions";
import { ILogin } from "../types";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<ILogin>();

  const onSubmit = async (data: ILogin) => {
    dispatch(setLogin(data));
    dispatch(getData(data.name));
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center">
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          className="border p-2 ml-2"
          {...register("name", { required: true })}
          required
        />
      </div>
      <div className="mt-4">
        <button className="py-3 px-8 font-bold border" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
