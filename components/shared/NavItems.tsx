"use client"
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const pathname = usePathname()
  return (
    <ul className="md:flex-row flex flex-col gap-5 w-full justify-between md:gap-20">
      {
        headerLinks.map((link)=>{
          const isActive = pathname===link.route
          return(
            <li key={link.route} className={`${isActive&&'text-primary-500 '}  p-medium-16 whitespace-nowrap`}>

              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavItems