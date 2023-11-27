import { Link, NavLink, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import useAuth from "../../Auth/UseAuth/useAuth";
import Button from "../../Shared/Button";
import useGetUser from "../../Hooks/GetUserInfo/useGetUser";

const Navbar = () => {
  const {userinfo}  = useGetUser()
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const location = useLocation()

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li className={location.pathname=='/'?`hover:scale-110 duration-300 hover:text-main text-main font-bold`:"hover:scale-110 duration-300 hover:text-main"}>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <ul className="lg:flex drop-shadow-2xl ">
          <li className={location.pathname=='/'?`hover:scale-110 duration-300 hover:text-main text-main font-bold`:"hover:scale-110 duration-300 hover:text-main"}>
            <NavLink to={"/allProperties"}>All Properties</NavLink>
          </li>
          <li className={location.pathname=='/'?`hover:scale-110 duration-300 hover:text-main text-main font-bold`:"hover:scale-110 duration-300 hover:text-main"}>
            <NavLink to={"/dashboard/myProfile"}>DashBoard</NavLink>
          </li>
        </ul>
      )}
    </>
  );
  return (
    <div className="">
      <div className={location.pathname=='/'?`navbar  justify-center  py-6  container mx-auto lg:fixed z-50`:'navbar  justify-center  py-6  container mx-auto z-50 '}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold mx-2 mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 hover:scale-110"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:flex  font-bold items-center">
          <Link
            to={"/"}
              className={location.pathname=='/'?`!flex font-black text-main  items-center hover:scale-110 duration-300`:"!flex font-bold items-center hover:scale-110 duration-300"}
            >
              <img
                className="w-22 h-12"
                src="https://i.ibb.co/rbX4J5H/Untitled-design-2.png"
                alt=""
              />
              <p className="text-2xl  font-semibold">Echo Estate</p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  font-semibold gap-4 px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate  mx-3">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="dropdown dropdown-bottom dropdown-end z-50 ">
            <label tabIndex={0} className="">
              {user && (
                <img
                  className="w-12 mr-4 h-12  rounded-full border-2 border-main  "
                  src={userinfo?.photo}
                  alt=""
                />
              )}
            </label>
            {user && (
              <ul className="p-2 shadow menu dropdown-content bg-[#072730da] z-[1]  rounded-box w-56">
                <img
                  className=" w-12 mx-auto  rounded-full mb-2 mt-2 border-2 border-main"
                  src={userinfo?.photo}
                  alt=""
                />
                <p className="font-semibold text-center mr-2 mb-2 text-main ">
                  {userinfo?.name}
                </p>
                <p className="font-semibold text-center mr-2 mb-2  text-main ">
                  {userinfo?.email}
                </p>
                <div className="pb-2 mx-auto"
                  onClick={handleSignOut}
                  >
                    <Button title={'Sign Out'}></Button>
                </div>
              </ul>
            )}
          </div>
          {user ? (
            ""
          ) : (
            <div>
              <Link to={"/signIn "} className="">
                <Button title={"Sign In"}></Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
