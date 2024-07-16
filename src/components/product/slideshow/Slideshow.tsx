"use client";

import type { Swiper as SwiperObject } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css";
import "./slideshow.css";
import { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    classname?: string;
}

export const Slideshow: React.FC<Props> = ({ images, title, classname }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={classname}>
            <Swiper
                style={
                    {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                autoplay={{delay: 2500}}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {images.map(img => (
                    <SwiperSlide key={img}>
                        <Image width={1024} height={800} src={`/products/${img}`} alt={title} className="rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map(img => (
                    <SwiperSlide key={img}>
                        <Image width={300} height={300} src={`/products/${img}`} alt={title} className="rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
