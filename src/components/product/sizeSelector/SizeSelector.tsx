import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
    selectedSize: Size;
    availableSizes: Size[];
}

export const SizeSelector: React.FC<Props> = ({ selectedSize, availableSizes }) => {
    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">Tallas disponibles</h3>
            <div className="flex gap-3">
                {availableSizes.map(size => (
                    <button
                        key={size}
                        type="button"
                        className={clsx("hover:underline text-lg", size === selectedSize && "underline font-bold")}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
