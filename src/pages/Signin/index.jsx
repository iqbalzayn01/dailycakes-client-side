import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/authSlice";
import { postData } from "../../utils/fetch";

import Sform from "./form";
import SAlert from "../../components/Alert";

export default function SignIn() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await postData(`/cms/auth/signin`, form);

      dispatch(setToken(res.data.data.token));
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "Internal Server Error",
      });
    }
  };

  if (token) return <Navigate to="/" replace={true} />;

  return (
    <section className="container-base w-full h-screen flex flex-col place-content-center gap-5 px-10 py-10">
      <h1 className="font-fontPrimary font-bold text-2xl text-center uppercase tracking-wider">
        DailyCakes
      </h1>
      <h3 className="text-center">Sign In</h3>
      {alert.status && (
        <SAlert
          className="bg-red-100 text-red-600 px-5 py-2 rounded-lg"
          message={alert.message}
        />
      )}
      <Sform
        valueEmail={form.email}
        valuePassword={form.password}
        handleSubmit={handleSubmit}
        onChange={handleChange}
        isLoading={isLoading}
      />
    </section>
  );
}
