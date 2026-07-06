import { cnvietmap, vietmap } from "../../assets/images";
const Vietmap = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex text-2xl font-semibold gap-3 py-5">
          <p className="">GIA HẠN </p>
          <p className="text-green-800">VIETMAP LIVE </p>
          <p className="bg-orange-400 px-2">PRO </p>
        </div>
        <img
          className="w-[80%] md:w-[50%] xl:w-[30%] "
          src={cnvietmap}
          alt="Vietmap"
        />

        <div className="flex flex-col gap-4 py-5 w-[80%]  md:w-[50%] xl:w-[30%]">
          {/* Gói 1 năm */}
          <p className="text-xl pt-5 text-center">
            Bảng giá gia hạn Vietmap Live Pro
          </p>
          <div className="flex items-center justify-between bg-blue-500 rounded-2xl px-5 py-4 text-white shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={vietmap}
                alt="Vietmap"
                className="w-12 h-12 rounded-lg"
              />

              <div>
                <p className="font-medium text-lg ">Gói 1 năm</p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="line-through opacity-70">590.000đ</span>

                  <span className="font-semibold text-white-300 text-xl">
                    500.000đ
                  </span>
                </div>
              </div>
            </div>

            <span className="text-3xl  font-light">›</span>
          </div>

          {/* Gói 2 năm */}
          <div className="flex items-center justify-between bg-blue-500 rounded-2xl px-5 py-4 text-white shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={vietmap}
                alt="Vietmap"
                className="w-12 h-12 rounded-lg"
              />

              <div>
                <p className="font-medium   text-lg">Gói 2 năm</p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="line-through opacity-70">890.000đ</span>

                  <span className="font-semibold text-white-300  text-xl">
                    750.000đ
                  </span>
                </div>
              </div>
            </div>

            <span className="text-3xl font-light">›</span>
          </div>

          {/* Gói 3 năm */}
          <div className="flex items-center justify-between bg-blue-500 rounded-2xl px-5 py-4 text-white shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={vietmap}
                alt="Vietmap"
                className="w-12 h-12 rounded-lg"
              />

              <div>
                <p className="font-medium   text-lg">Gói 3 năm</p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="line-through opacity-70">1.290.000đ</span>

                  <span className="font-semibold text-white-300 text-xl">
                    1.000.000đ
                  </span>
                </div>
              </div>
            </div>

            <span className="text-3xl font-light">›</span>
          </div>
          <div className="py-5 mx-auto">
            <button
              className="bg-gradient-to-r  from-red-600 to-orange-500 px-10 py-2 rounded-lg
             hover:bg-gray-300
             transition-all duration-500
             animate-zoom"
            >
              <a
                href="https://zalo.me/0964445201"
                className="font-semibold text-white "
              >
                Liên hệ cài đặt : 096.444.5201
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vietmap;
