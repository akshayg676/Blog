import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = async (e) => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    // <div className="top">
    //   <div className="topLeft">
    //     <a href="/" className="logo">
    //       <img src={require(`../../assests/Logo-black .png`).default} alt="" />
    //     </a>
    //   </div>

    //   <div className="topCenter">
    //     <ul className="topList">
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           home
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           contact
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           about
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/write">
    //           write
    //         </Link>
    //       </li>
    //       <li className="topListItem" onClick={handleLogout}>
    //         {user && "logout"}
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="topRight">
    //     {user ? (
    //       <>
    //         <Link to="/settings">
    //           <img className="topImg" src={PF + user.profilePic} alt="" />
    //         </Link>
    //       </>
    //     ) : (
    //       <>
    //         <ul className="topList">
    //           <li className="topListItem">
    //             <Link className="link" to="/login">
    //               login
    //             </Link>
    //           </li>

    //           <li className="topListItem">
    //             <Link className="link" to="/register">
    //               register
    //             </Link>
    //           </li>
    //         </ul>
    //       </>
    //     )}
    //   </div>
    // </div>
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        <img src={require(`../../assests/Logo-black .png`).default} alt="" />
      </label>
      <ul class="ul">
        <li className="topListItem">
          <Link className="link" to="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">
            <a>About</a>
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">
            <a>Contact</a>
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">
            <a>Write</a>
          </Link>
        </li>
        <li className="topListItem" onClick={handleLogout}>
          <a>{user && "logout"}</a>
        </li>

        <li>
          {user ? (
            <>
              <Link to="/settings">
                {user.profilePic ? (
                  <img className="topImg" src={PF + user.profilePic} alt="" />
                ) : (
                  <img
                    className="topImg"
                    src={require(`../../assests/prflpic-min.png`).default}
                    alt=""
                  />
                )}
              </Link>
            </>
          ) : (
            <>
              <li className="topListItem">
                <Link className="link" to="/login">
                  <a>login</a>
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/register">
                  <a>register</a>
                </Link>
              </li>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}
