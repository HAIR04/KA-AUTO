import { logo } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="KA AUTO"
            className="w-14 md:w-16"
          />
          <h1 className="text-4xl font-extrabold tracking-wider bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-transparent italic">
            KA AUTO
          </h1>
        </a>

        {/* Mô tả */}
        <p className="mt-4 max-w-md text-gray-600 font-semibold">
          KA AUTO - Giải pháp xem giải trí giá rẻ cho ô tô.
        </p>

        {/* Mạng xã hội */}
        <div className="mt-6">
          <p className="font-semibold mb-3">
            Các nền tảng của chúng tôi
          </p>

          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="#"
              className="hover:text-red-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>

            <a
              href="#"
              className="hover:text-red-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href="#"
              className="hover:text-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="#"
              className="hover:text-pink-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Đường kẻ */}
        <hr className="w-full my-8 border-gray-500" />

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © 2026 KA AUTO. Bản quyền thuộc về KA AUTO.
        </p>
      </div>
    </footer>
  );
};

export default Footer;