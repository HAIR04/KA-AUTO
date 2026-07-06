import React, { useState } from "react";
import { vf5 } from "../../assets/images";
import { vf7 } from "../../assets/images";
import { vf8 } from "../../assets/images";
import { vf9 } from "../../assets/images";
import { vios } from "../../assets/images";
import { ford } from "../../assets/images";
import { xpander } from "../../assets/images";

const TrendingCollection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const Images = [
    { name: "VF5", src: vf5 },
    { name: "VF7", src: vf7 },
    { name: "VF8", src: vf8 },
    { name: "VF9", src: vf9 },
    { name: "Vios", src: vios },
    { name: "Ford", src: ford },
    { name: "Xpander", src: xpander },
  ];

  return (
    <div className="w-full bg-header py-10">
      <div className="w-[75%] sm:w-[80%] lg:w-[70%] text-center mx-auto mb-10">
        <span className="text-3xl sm:text-4xl font-extrabold text-red-600">
          MỘT SỐ DÒNG XE ĐÃ CÀI KA AUTO
        </span>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {Images.map((item, index) => (
          <div
            key={index}
            className="w-[45%] md:w-[30%] xl:w-[15%] flex flex-col items-center"
          >
            <img
              src={item.src}
              alt={item.name}
              onClick={() => setSelectedImage(item)}
              className="w-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />

            <div className="w-full bg-red-500 text-white text-center py-2 font-bold">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Popup xem ảnh */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
            />

            <div className="bg-red-500 text-white text-center py-3 text-xl font-bold">
              {selectedImage.name}
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white text-black font-bold text-xl hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingCollection;