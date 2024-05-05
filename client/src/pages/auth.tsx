import { FC, useState } from "react";
import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthService } from "../services/auth.service";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/user/userSlice";

const Auth: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const [isLogin, setIsLogin] = useState<boolean>(false);

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });

      if (data) {
        setTokenToLocalStorage("token", data.token);
        dispatch(login(data));
        toast.success("Вы успешно вошли");
        navigate("/home");
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  return (
    <>
      <div className="authorization">
        <div className="authorization__body">
          <div className="authorization__form">
            <div className="authorization__name">
              <span
                style={{ textShadow: "rgba(58, 178, 235, 0.65) 0.1vw 0.15vh" }}
                className="authorization__name-text roboto"
              >
                по
              </span>
              <span
                style={{
                  color: "rgb(58, 178, 235)",
                  textShadow: "rgba(0, 0, 0, 0.75) 0.1vw 0.15vh",
                }}
                className="authorization__name-text roboto"
              >
                ЧИТАТЕЛЬ
              </span>
              <div className="authorization__library-img"></div>
            </div>
            <form
              onSubmit={loginHandler}
              className="authorization__items roboto"
            >
              <input
                className="authorization__input"
                placeholder="Почта"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="authorization__input"
                placeholder="Пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="authorization__registration">
                <p>Если у вас нет аккаунта!?</p>
                <Link className="authorization__link" to="/reg">
                  Зарегистрируйтесь
                </Link>
              </div>
              <button className="authorization__input-submit">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
