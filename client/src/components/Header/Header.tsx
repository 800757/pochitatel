import { FC } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/user/userSlice";
import { removeTokenFromLocalStorage } from "../../helpers/localstorage.helper";
import { toast } from "react-toastify";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHanler = () => {
    dispatch(logout());
    removeTokenFromLocalStorage("token");
    toast.success("Вы вышли из системы");
    navigate("/");
  };

  return (
    <>
      <div className="admirer">
        <div className="admirer__header">
          <div className="admirer__name">
            <span
              style={{ textShadow: "rgba(58, 178, 235, 0.65) 0.1vw 0.15vh" }}
              className="admirer__name-text roboto"
            >
              по
            </span>
            <span
              style={{
                color: "rgb(58, 178, 235)",
                textShadow: "rgba(0, 0, 0, 0.75) 0.1vw 0.15vh",
              }}
              className="admirer__name-text roboto"
            >
              ЧИТАТЕЛЬ
            </span>
            <div className="admirer__library-img"></div>
          </div>
          <div className="admirer__space-img">
            <p className="admirer__space-text roboto-condensed">
              «Хорошая библиотека есть книжное отражение вселенной»
              <br />
              Н. Рубакин
            </p>
          </div>
          <div className="admirer__account">
            <button
              onClick={logoutHanler}
              className="admirer__authorization roboto"
            >
              №????? <p>(выход)</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
