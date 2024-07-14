"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ProductGridItem: React.FC<Product> = ({
    description,
    gender,
    images,
    inStock,
    price,
    sizes,
    slug,
    tags,
    title,
    type
}) => {
    const [displayImage, setDisplayImage] = useState(images[0]);
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full object-cover rounded"
                    onMouseEnter={() => setDisplayImage(images[1])}
                    onMouseLeave={() => setDisplayImage(images[0])}
                />
            </Link>
            <div className="p-4 flex flex-col">
                <Link className="hover:text-blue-800" href={`/product/${slug}`}>
                    {title}
                </Link>
                <span className="font-bold">{FormatPrice(price)}</span>
            </div>
        </div>
    );
};

export const FormatPrice = (price: number) =>
    price.toLocaleString("en-US", {
        currency: "USD",
        minimumFractionDigits: 1,
        style: "currency"
    });
