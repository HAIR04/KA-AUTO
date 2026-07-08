import { logo } from "../../assets/images";
const KaAuto = () => {
  return (
    <>
      <div
        className="mx-auto py-5 flex flex-col justify-center items-center border-white border-b border-opacity-15 
    w-[95%] md:w-[90%] 2xl:w-[93%] xl:w-[93%]"
      >
        <img
          src={logo}
          alt="Logo KA AUTO"
          className="2xl:w-[10%] w-[50%]
                                   xl:w-[5%]"
        ></img>{" "}
        <p className=" text-base xl:text-xl text-gray-500 tracking-wide pb-5 w-[90%] text-center">
          Hỗ trợ xem Youtube, TV, bản đồ trên màn zin tất cả dòng xe. Cài đặt
          xong dùng oke mới thanh toán
        </p>
        <h1 className="font-great-vibes pt-3 text-orange-500 text-5xl text-center">
          Kính chúc quý khách
        </h1>
        <p className="text-green-700 font-medium text-4xl xl:text-xl tracking-wide font-great-vibes w-[90%] text-center">
          Vạn dặm bình an!
        </p>
        <p className="text-gray-200">_________________________________</p>
        <div className="flex flex-col justify-center font-semibold text-lg  gap-5 py-5 ">
          <p>
            <a
              href="https://play.google.com/apps/internaltest/4702754199735789"
              className="text-orange-600 underline animate-zoom inline-block"
            >
              1. Cấp quyền tải ứng dụng KA Auto
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.projection.gearhead"
              className="text-orange-600 underline"
            >
              2. Android Auto
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.gms"
              className="text-orange-600 underline"
            >
              3. Google Play Service
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps"
              className="text-orange-600 underline"
            >
              4. Google Maps
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox"
              className="text-orange-600 underline"
            >
              5. Google App
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.tts"
              className="text-orange-600 underline"
            >
              6. Speech Service by Google
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.webview&hl=vi&gl=US"
              className="text-orange-600 underline"
            >
              7. Webview
            </a>
          </p>
        </div>
        <div className="mx-auto">
          <button
            className="bg-gradient-to-r  from-red-600 to-orange-500 px-12 py-2 rounded-lg
             hover:bg-gray-300
             transition-all duration-500
             animate-zoom"
          >
            <a
              href="https://zalo.me/0986782544"
              className="font-semibold text-white "
            >
              Liên hệ cài đặt : 098.678.2544
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
export default KaAuto;
