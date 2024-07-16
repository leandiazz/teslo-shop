"use client";

import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css";
import "./slideshow.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    classname?: string;
}

export const MobileSlideshow: React.FC<Props> = ({ images, title, classname }) => {
    return (
        <div className={classname}>
            <Swiper
                style={{
                    width: "100vw",
                    height: "500px"
                }}
                pagination
                autoplay={{ delay: 2500 }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {images.map(img => (
                    <SwiperSlide key={img}>
                        <Image width={600} height={500} src={`/products/${img}`} alt={title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
