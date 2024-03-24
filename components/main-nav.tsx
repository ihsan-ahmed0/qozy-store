import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  const { theme } = useTheme()
  let img_src = "qozy_logo.svg";
  if (theme === "dark") {
    img_src = "qozy_logo_white.svg";
  }
  
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-10 w-70" />
        {/*<Image src={img_src} alt="logo" width={100} height={50}/>*/}
        {
          /*
          <span className="inline-block text-xl font-bold">
          {siteConfig.name}
          </span>
          */
        }
      </Link>
    </div>
  )
}
