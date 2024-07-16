import { MobileSlideshow, QuantitySelector, SizeSelector, Slideshow } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { FormatPrice } from "@/store";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: Props) {
    const { slug } = params;

    const product = initialData.products.find(product => product.slug === slug);

    if (!product) return notFound();

    return (
        <div className="mt-5 mb-30 grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Slideshow */}
            <div className="col-span-1 md:col-span-2">
                {/* Mobile Slideshow */}
                <MobileSlideshow title={product.title} images={product.images} classname="block md:hidden" />
                {/* Desktop Slideshow */}
                <Slideshow title={product.title} images={product.images} classname="hidden md:block" />
            </div>
            {/* Details */}
            <div className="col-span-1 px-5">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
                <p className="text-lg mb-5">{FormatPrice(product.price)}</p>
                <SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[0]} />

                <QuantitySelector quantity={2} />
                {/* Button */}
                <button type="button" className="btn-primary my-5">
                    Agregar al carrito
                </button>

                {/* Description */}
                <h3 className="font-bold text-sm">Descripcion</h3>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    );
}
