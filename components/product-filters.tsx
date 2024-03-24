"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [ // removed unused filters
      // { value: "bags", label: "Bags" },
      // { value: "belts", label: "Belts" },
      // { value: "gloves", label: "Gloves" },
      { value: "hoodies", label: "Hoodies" },
      // { value: "scarves", label: "Scarves" },
      { value: "sweats", label: "Sweats" },
      // { value: "wallets", label: "Wallets" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "xs", label: "X-Small" },
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "one-size", label: "One Size" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      // { value: "blue", label: "Blue" },
      { value: "light-blue", label: "Light Blue"},
      // { value: "brown", label: "Brown" },
      // { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "red", label: "Red" },
      // { value: "yellow", label: "Yellow" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams(); // getting the search params to modify them when search options are changed
  const router = useRouter(); // getting router to change querys when search params are changed
  const searchValues = Array.from(searchParams.entries()); // lets us check the search values to set the checks appropriately (good for when page is refreshed)


  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIndex) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`filter-${section.id}-${optionIndex}`}
                      checked={searchValues.some(([key, value]) => key === section.id && value === option.value)}
                      onClick={(event) => {
                      const params = new URLSearchParams(searchParams);
                      const checked = event.currentTarget.dataset.state === "checked";
                      checked ? params.delete(section.id) : params.set(section.id, option.value);
                      router.replace(`/?${params.toString()}`)
                    }} />
                    <label
                    htmlFor={`filter-${section.id}-${optionIndex}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
