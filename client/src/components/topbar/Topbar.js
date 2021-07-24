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
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        <img src={require(`../../assests/Logo-black .png`).default} alt="" />
      </label>
      <ul className="ul">
        <li className="topListItem">
          <Link className="link" to="/">
            <p>Home</p>
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">
            <p>About</p>
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">
            <p>Contact</p>
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">
            <p>Write</p>
          </Link>
        </li>
        <li className="topListItem" onClick={handleLogout}>
          <p>{user && "logout"}</p>
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
                  <p>login</p>
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/register">
                  <p>register</p>
                </Link>
              </li>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}
