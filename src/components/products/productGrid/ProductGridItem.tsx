import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

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
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${slug}`}>
                <Image
                    src={`/products/${images[0]}`}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full object-cover"
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
