import { Link } from "react-router-dom";
import { logo, vietmap } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mx-auto py-5 flex justify-between border-white border-b border-opacity-15
        w-[95%] md:w-[90%] 2xl:w-[93%] xl:w-[93%]"
      >
        <Link
          to="/"
          className="flex items-center gap-2 2xl:w-[63%] 2xl:gap-3 xl:w-[63%] xl:gap-3"
        >
          <img
            src={logo}
            className="2xl:w-[10%] w-[15%] xl:w-[5%]"
            alt="Logo"
          />
        </Link>

        <ul
          className="2xl:w-[35%] hidden justify-around items-center xl:flex
          text-base font-semibold xl:w-[35%]"
        >
          <li>
            <Link
              to="/kaauto"
              className=" hover:text-xl duration-500"
            >
              <p className="px-2 text-red-800">Cài đặt KA Auto</p>
            </Link>
          </li>

          <li>
            <Link
              to="/vietmap"
              className=" hover:text-xl duration-500"
            >
             <p className="px-2 text-green-900">Gia Hạn Vietmap Live</p>
            </Link>
          </li>

          <li>
            <p
             
              className=" hover:text-xl duration-500"
            >
               <a href="https://zalo.me/0986782544" className="px-4">
                  Hỗ trợ
                </a>
            </p>
          </li>
        </ul>        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-2xl"
        >
          <FontAwesomeIcon icon={faBarsStaggered} />

          {open && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex flex-col">
              <Link
                to="/kaauto"
                className="text-xl border-b border-gray-600 border-opacity-30 p-4 w-full text-left flex items-center font-semibold"
              >
                <img
                  src={logo}
                  className="w-[9%] xl:w-[5%]"
                  alt="KA Auto "
                />
                <p className="px-2 text-red-800">Cài đặt KA Auto </p>
              </Link>

              <Link
                to="/vietmap"
                className="text-xl border-b flex items-center border-gray-600 border-opacity-30 p-4 w-full text-left font-semibold"
              >
                <img
                  src={vietmap}
                  className="w-[9%] xl:w-[5%]"
                  alt="Vietmap"
                />
                <p className="px-2 text-green-900">Gia Hạn Vietmap Live</p>
              </Link>

              <a
                href="https://zalo.me/0986782544"
                className="text-xl border-b border-gray-600 flex items-center border-opacity-30 py-4 px-7 w-full text-left font-semibold"
              >
                <FontAwesomeIcon icon={faPhone} />
                <a href="https://zalo.me/0986782544" className="px-4">
                  Hỗ trợ
                </a>
              </a>
            </div>
          )}
        </button>
      </div>

      {/* Đường kẻ ngăn cách Header và Body */}
      <div className="w-11/12 mx-auto ">
        <hr className="border-gray-300" />
      </div>
    </>
  );
};

export default Header;