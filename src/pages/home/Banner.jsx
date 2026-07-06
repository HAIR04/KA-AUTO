
import { logo } from "../../assets/images";
import { useState } from "react";

const Banner = () => {
  const [result, setResult] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const phone = formData.get("Phone Number").trim();

    const phoneRegex = /^0\d{9,10}$/;

    if (!phoneRegex.test(phone)) {
      setPhoneError(
        "Số điện thoại không hợp lệ, vui lòng kiểm tra lại!",
      );
      setResult(""); // Xóa trạng thái gửi
      return;
    }

    setPhoneError("");
    setResult("Đang gửi thông tin...");

    setPhoneError("");
    formData.append("access_key", "80425b3e-b1c5-4a88-b3d1-97224a054e6b");

    formData.append("subject", "Khách hàng mới đăng ký cài đặt KA AUTO");
    formData.append("from_name", "Website KA AUTO");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "✅ Đăng ký thành công! Bên em sẽ liên hệ với anh/chị sớm nhất.",
      );
      event.target.reset();
    } else {
      console.log(data);
      setResult("❌ Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };
  return (
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
        Hỗ trợ xem Youtube, TV, bản đồ trên màn zin tất cả dòng xe. Cài đặt xong
        dùng oke mới thanh toán
      </p>
      {/* Giới thiệu KA AUTO */}
      <div className="w-[97%] md:w-[90%] xl:w-[75%] bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl mx-auto text-white">
        <div className="w-[100%] mx-auto md:w-[90%] xl:w-[75%]  p-5  text-white">
          <p className="text-center  animate-zoom text-yellow-300 font-bold tracking-widest text-3xl uppercase">
            🎉 ƯU ĐÃI ĐẶC BIỆT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center mt-3">
            Chỉ 500.000đ
          </h2>
          <p className="text-center  text-lg font-semibold mt-2 opacity-95">
            TẶNG MIỄN PHÍ Vietmap Live Pro 2 năm trị giá 890.000đ
          </p>

          <div className="bg-white/15 rounded-2xl -10 p-6 mt-8">
            <p className="font-semibold text-center text-xl mb-4">
              Tính năng của KA AUTO
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-center gap-3">
                ✅ <span>YouTube không quảng cáo</span>
              </div>

              <div className="flex items-center gap-3">
                ✅ <span>Xem TV trực tuyến</span>
              </div>

              <div className="flex items-center gap-3">
                ✅ <span>Trình duyệt Web</span>
              </div>

              <div className="flex items-center gap-3">
                ✅ <span>TikTok & Netflix</span>
              </div>

              <div className="flex items-center gap-3">
                ✅ <span>Tìm kiếm bằng giọng nói</span>
              </div>

              <div className="flex items-center gap-3">
                🎁{" "}
                <span>
                  <b>Tặng Vietmap Live Pro 2 năm trị giá 890k</b>
                </span>
              </div>

              <div className="flex items-center gap-3">
                🚗 <span>Hỗ trợ khi xe đang di chuyển</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://zalo.me/0964445201"
              className="bg-white text-red-600 font-bold text-center text-lg px-10 py-3 rounded-xl  animate-zoom hover:scale-105 transition-all duration-300"
            >
              ĐĂNG KÝ CÀI ĐẶT NGAY
            </a>
          </div>
        </div>
      </div>
      <div className="pt-14">
        <button
          className="bg-gradient-to-r from-red-600 to-orange-500 px-16 py-2 rounded-lg
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
      <div className="w-[97%] max-w-2xl bg-gray-100 rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Đăng ký cài đặt KA AUTO
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Vui lòng để lại thông tin để bên em liên hệ tư vấn cụ thể !
        </p>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold">Họ và tên</label>
            <input
              type="text"
              name="Name"
              required
              placeholder="Nhập họ và tên"
              className="w-full border rounded-lg p-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Số điện thoại</label>

            <input
              type="tel"
              name="Phone Number"
              placeholder="Nhập số điện thoại"
              required
              maxLength={11}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              className={`w-full border rounded-lg p-3 outline-none ${
                phoneError ? "border-red-500" : "focus:border-red-500"
              }`}
            />

            {phoneError && (
              <p className="text-red-600 text-sm mt-2">{phoneError}</p>
            )}
            
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Dòng xe cần cài đặt (Năm sản xuất)
            </label>
            <input
              type="text"
              name="Car Model"
              required
              placeholder="Ví dụ: Hyundai Accent 2022"
              className="w-full border rounded-lg p-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Loại điện thoại (Android / iPhone)
            </label>
            <input
              type="text"
              name="Phone Type"
              required
              placeholder="Ví dụ: Samsung S24 Ultra"
              className="w-full border rounded-lg p-3 outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Gửi ngay
          </button>
          <p className="text-center mt-4 font-medium text-green-700">
            {result}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Banner;
