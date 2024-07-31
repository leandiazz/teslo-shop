import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    gender: Gender;
  };
  searchParams: {
    page: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const labels: Record<Gender, string> = {
    men: "hombres",
    women: "mujeres",
    kid: "niños",
    unisex: "todos",
  };
  const { gender } = params;
  if (!labels[gender]) return notFound();

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page, gender });

  if (products.length === 0) redirect(`/gender/${gender}`);

  return (
    <>
      <Title
        title={`Productos para ${labels[gender]}`}
        subtitle="Todos los productos"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
