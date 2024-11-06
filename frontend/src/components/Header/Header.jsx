import React, { useContext, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/images/logo.png";
import { authContext } from "../../context/AuthContext.jsx";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/service",
    display: "Service",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/doctor",
    display: "find a Doctor",
  },
];

const Header = () => {
  const headRef = useRef(null);
  const menuRef = useRef(null);
  const { dispatch } = useContext(authContext);

  const { user, role, token } = useContext(authContext);
  console.log("user", user);
  console.log("role", role);
  console.log("token", token);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const handelStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headRef.current.classList.add("sticky_header");
      } else {
        headRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handelStickyHeader();
    return () => {
      window.removeEventListener("scroll", handelStickyHeader);
    };
  });

  return (
    <header className="header flex items-center " ref={headRef}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="company's logo" />
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-[2.7rem] menu">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mt-[40px] gap-4 ">
            {token && user ? (
              <div className="flex justify-center">
                <Link
                  className="flex flex-col items-center"
                  to={`${role === "Doctor"
                      ? "/doctor/profile/me"
                      : "/user/profile/me"
                    }`}
                >
                  <figure className="w-[35px] h-[5px] rounded-full cursor-pointer">
                    <img
                      src={`${user.photo}`}
                      className="w-full rounded-full"
                      alt=""
                    ></img>
                  </figure>
                  <h2 className="">{user?.name}</h2>
                </Link>
              </div>
            ) : (
              <Link className="mb-[35px]" to="/login">
                <button className=" bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]  flex items-center justift-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="lg:hidden mb-8" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
