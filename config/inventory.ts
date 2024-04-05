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
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "black_hoodie_men",
    name: "Black Hoodie (Men)",
    description: `Black Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/RVj2k3qW/black-hoodie.png",
    images: [
      "https://i.postimg.cc/RVj2k3qW/black-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "men"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "d5d61769-d993-9e81-4e22-231afd33b584",
    sku: "black_hoodie_women",
    name: "Black Hoodie (Women)",
    description: `Black Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/RVj2k3qW/black-hoodie.png",
    images: [
      "https://i.postimg.cc/RVj2k3qW/black-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "women"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "light_blue_hoodie_men",
    name: "Light Blue Hoodie (Men)",
    description: `Light blue Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/nzcW4BSP/light-blue-hoodie.png",
    images: [
      "https://i.postimg.cc/nzcW4BSP/light-blue-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "men"],
    colors: ["light-blue"],
    currency: "USD",
  },
  {
    id: "71ba72b9-ee48-5ac1-d2c9-71414f11c38b",
    sku: "light_blue_hoodie_women",
    name: "Light Blue Hoodie (Women)",
    description: `Light blue Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/nzcW4BSP/light-blue-hoodie.png",
    images: [
      "https://i.postimg.cc/nzcW4BSP/light-blue-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "women"],
    colors: ["light-blue"],
    currency: "USD",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "purple_hoodie_men",
    name: "Purple Hoodie (Men)",
    description: `Purple Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/BnHR4q1M/purple-hoodie.png",
    images: [
      "https://i.postimg.cc/BnHR4q1M/purple-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "men"],
    colors: ["purple"],
    currency: "USD",
  },
  {
    id: "e61af025-bcbf-d957-3700-78673ca6827f",
    sku: "purple_hoodie_women",
    name: "Purple Hoodie (Women)",
    description: `Purple Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/BnHR4q1M/purple-hoodie.png",
    images: [
      "https://i.postimg.cc/BnHR4q1M/purple-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "women"],
    colors: ["purple"],
    currency: "USD",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "red_hoodie_men",
    name: "Red Hoodie (Men)",
    description: `Red Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/Bv3kvdTs/red-hoodie.png",
    images: [
      "https://i.postimg.cc/Bv3kvdTs/red-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "men"],
    colors: ["red"],
    currency: "USD",
  },
  {
    id: "2a1f803e-9112-8ba0-40e3-6f567f28ae6f",
    sku: "red_hoodie_women",
    name: "Red Hoodie (Women)",
    description: `Red Qozy hoodie.`,
    price: 5999,
    image:
      "https://i.postimg.cc/Bv3kvdTs/red-hoodie.png",
    images: [
      "https://i.postimg.cc/Bv3kvdTs/red-hoodie.png"
    ],
    sizes: ["one-size"],
    categories: ["hoodies", "women"],
    colors: ["red"],
    currency: "USD",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "black_sweats_men",
    name: "Black Sweats (Men)",
    description: `Black Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/vT4SjMs7/black-sweats.png",
    images: [
      "https://i.postimg.cc/vT4SjMs7/black-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "men"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "3032af6c-6ad0-1862-069f-9022f432b714",
    sku: "black_sweats_women",
    name: "Black Sweats (Women)",
    description: `Black Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/vT4SjMs7/black-sweats.png",
    images: [
      "https://i.postimg.cc/vT4SjMs7/black-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "women"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "light_blue_sweats_men",
    name: "Light Blue Sweats (Men)",
    description: `Light blue Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/xCx4t8WT/light-blue-sweats.png",
    images: [
      "https://i.postimg.cc/xCx4t8WT/light-blue-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "men"],
    colors: ["light-blue"],
    currency: "USD",
  },
  {
    id: "d6afda4c-cb92-c88f-2f50-22b2e76d3335",
    sku: "light_blue_sweats_women",
    name: "Light Blue Sweats (Women)",
    description: `Light blue Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/xCx4t8WT/light-blue-sweats.png",
    images: [
      "https://i.postimg.cc/xCx4t8WT/light-blue-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "women"],
    colors: ["light-blue"],
    currency: "USD",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "purple_sweats_men",
    name: "Purple Sweats (Men)",
    description: `Purple Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/FKxqkDpS/purple-sweats.png",
    images: [
      "https://i.postimg.cc/FKxqkDpS/purple-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "men"],
    colors: ["purple"],
    currency: "USD",
  },
  {
    id: "9ca8d008-a7c9-0280-8d65-e8effed2861d",
    sku: "purple_sweats_women",
    name: "Purple Sweats (Women)",
    description: `Purple Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/FKxqkDpS/purple-sweats.png",
    images: [
      "https://i.postimg.cc/FKxqkDpS/purple-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "women"],
    colors: ["purple"],
    currency: "USD",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "red_sweats_men",
    name: "Red Sweats (Men)",
    description: `Red Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/8cxng3p2/red-sweats.png",
    images: [
      "https://i.postimg.cc/8cxng3p2/red-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "men"],
    colors: ["red"],
    currency: "USD",
  },
  {
    id: "f59f03a2-2648-bfe0-e305-36c1b11ec38c",
    sku: "red_sweats_women",
    name: "Red Sweats (Women)",
    description: `Red Qozy sweats.`,
    price: 5999,
    image:
      "https://i.postimg.cc/8cxng3p2/red-sweats.png",
    images: [
      "https://i.postimg.cc/8cxng3p2/red-sweats.png"
    ],
    sizes: ["one-size"],
    categories: ["sweats", "women"],
    colors: ["red"],
    currency: "USD",
  },
]
