export const FormatPrice = (price: number) =>
    price.toLocaleString("en-US", {
        currency: "USD",
        minimumFractionDigits: 1,
        style: "currency"
    });
