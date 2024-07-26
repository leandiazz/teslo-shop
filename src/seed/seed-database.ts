import { initialData } from "./seed"
import prisma from "../lib/prisma"

async function main() {
  // 1. Borrar registros previos
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ])
  // 2. Generar nuevos registros
  const { categories, products } = initialData

  const categoriesData = categories.map((name) => ({
    name,
  }))

  await prisma.category.createMany({
    data: categoriesData,
  })

  console.log("seed ejecutado correctamente")
}

;(() => {
  if (process.env.NODE_ENV == "production") return
  main()
})()
