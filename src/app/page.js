import BannerHeader from "@/component/BannerHeader";
import HeaderSlider from "@/component/HeaderSlider";
import SliderProduct from "@/component/SliderProduct";
import React from "react";
import MagzinHeader from "@/component/MagzinHeader";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeaderSlider />
      <SliderProduct />
      <BannerHeader />
      <MagzinHeader />
    </div>
  );
}
