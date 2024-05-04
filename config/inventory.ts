import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
  order: number
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "purple_hoodie",
    name: "Purple Hoodie",
    description: `Purple Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/BnHR4q1M/purple-hoodie.png",
    images: [
      "https://i.postimg.cc/BnHR4q1M/purple-hoodie.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["hoodies"],
    colors: ["purple"],
    currency: "USD",
    order: 0,
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "purple_sweats",
    name: "Purple Sweats",
    description: `Purple Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/FKxqkDpS/purple-sweats.png",
    images: [
      "https://i.postimg.cc/FKxqkDpS/purple-sweats.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["sweats"],
    colors: ["purple"],
    currency: "USD",
    order: 1,
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "red_hoodie",
    name: "Red Hoodie",
    description: `Red Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/Bv3kvdTs/red-hoodie.png",
    images: [
      "https://i.postimg.cc/Bv3kvdTs/red-hoodie.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["hoodies"],
    colors: ["red"],
    currency: "USD",
    order: 2,
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "red_sweats",
    name: "Red Sweats",
    description: `Red Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/8cxng3p2/red-sweats.png",
    images: [
      "https://i.postimg.cc/8cxng3p2/red-sweats.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["sweats"],
    colors: ["red"],
    currency: "USD",
    order: 3,
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "light_blue_hoodie",
    name: "Light Blue Hoodie",
    description: `Light blue Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/nzcW4BSP/light-blue-hoodie.png",
    images: [
      "https://i.postimg.cc/nzcW4BSP/light-blue-hoodie.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["hoodies"],
    colors: ["light-blue"],
    currency: "USD",
    order: 4,
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "light_blue_sweats",
    name: "Light Blue Sweats",
    description: `Light blue Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/xCx4t8WT/light-blue-sweats.png",
    images: [
      "https://i.postimg.cc/xCx4t8WT/light-blue-sweats.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["sweats"],
    colors: ["light-blue"],
    currency: "USD",
    order: 5,
  },
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "black_hoodie",
    name: "Black Hoodie",
    description: `Black Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/RVj2k3qW/black-hoodie.png",
    images: [
      "https://i.postimg.cc/RVj2k3qW/black-hoodie.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["hoodies"],
    colors: ["black"],
    currency: "USD",
    order: 6,
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "black_sweats",
    name: "Black Sweats",
    description: `Black Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/vT4SjMs7/black-sweats.png",
    images: [
      "https://i.postimg.cc/vT4SjMs7/black-sweats.png"
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["sweats"],
    colors: ["black"],
    currency: "USD",
    order: 7,
  },
]
