import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"
import Wrapper from "./Wrapper"

export const Header = () => {
  return (
    <header className="w-full border-b">
        <Wrapper className="flex items-center justify-between">
            <Link className="w-36" href={"/"}>
            <Image src="assets/images/logo.svg" width={128} height={38} alt=""/>
          
            </Link>
            <SignedIn>
                <nav className="md:flex hidden">
                    <NavItems/>
                </nav>
            </SignedIn>
            <div className=" flex justify-end w-32 ">
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>

            <UserButton />
            <div className="flex md:hidden items-center"><MobileNav /></div>
          </SignedIn>
            </div>
        </Wrapper>
    </header>
  )
}
