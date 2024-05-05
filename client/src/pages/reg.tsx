import React, { FC, useState } from "react";
import "./reg.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";

const Reg: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [library_card, setLibrary_card] = useState<string>("");
  const navigate = useNavigate();

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registration({
        email,
        password,
        library_card,
      });
      if (data) {
        setTokenToLocalStorage("token", data.token);
        toast.success("Аккаунт зарегестрирован!");
        navigate("/home");
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  return (
    <>
      <div className="registration">
        <div className="registration__body">
          <div className="registration__form">
            <div className="registration__name">
              <span
                style={{ textShadow: "rgba(58, 178, 235, 0.65) 0.1vw 0.15vh" }}
                className="registration__name-text roboto"
              >
                по
              </span>
              <span
                style={{
                  color: "rgb(58, 178, 235)",
                  textShadow: "rgba(0, 0, 0, 0.75) 0.1vw 0.15vh",
                }}
                className="registration__name-text roboto"
              >
                ЧИТАТЕЛЬ
              </span>
              <div className="registration__library-img"></div>
            </div>
            <form
              onSubmit={registrationHandler}
              className="registration__items roboto"
            >
              <input
                className="registration__input"
                placeholder="Почта"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="registration__input"
                placeholder="Пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="registration__input"
                placeholder="№ читательского билета"
                type="library_card"
                onChange={(e) => setLibrary_card(e.target.value)}
              />
              <div className="registration__registration">
                <p>Если у вас есть аккаунт!</p>
                <Link className="registration__link" to={"/"}>
                  Авторизуйтесь
                </Link>
              </div>
              <button className="registration__input-submit">
                Зарегестрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reg;
