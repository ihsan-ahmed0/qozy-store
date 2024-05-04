"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  products: SanityProduct[]
}

const productMap = new Map([
  ["purple_hoodie", 0],
  ["purple_sweats", 1],
  ["red_hoodie", 2],
  ["red_sweats", 3],
  ["light_blue_hoodie", 4],
  ["light_blue_sweats", 5],
  ["black_hoodie", 6],
  ["black_sweats", 7],
]);

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  products.sort((a: SanityProduct, b: SanityProduct) => {
    const a_value = productMap.get(a.sku) ? productMap.get(a.sku) : 0;
    const b_value = productMap.get(b.sku) ? productMap.get(b.sku): 0;
    return a_value! - b_value!;
  });

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64((shimmer(225, 280)))}`}
              src={!product.images ? "/image_not_found.png" : urlForImage(product.images[0]).url()}
              alt={product.name}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 font-medium">{product.name}</h3>
          <p className="mt-2 font-medium">{formatCurrencyString({
            currency: product.currency,
            value: product.price
          })}</p>
        </Link>
      ))}
    </div>
  )
}
