import { ProductGrid, Title } from "@/components";
import { initialData, Categorie } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Categorie;
  };
}

const categorys: Record<Categorie, string> = {
  men: "hombres",
  women: "mujeres",
  kid: "niños",
  unisex: "todos",
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (!categorys[id]) return notFound();

  const filteredProducts = initialData.products.filter(
    (products) => products.gender === id,
  );

  return (
    <>
      <Title
        title={`Productos para ${categorys[id]}`}
        subtitle="Todos los productos"
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
