import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
  
import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <div className="bg-white">
      <Sheet >
        <SheetTrigger asChild className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt=""
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <Image src="/assets/images/logo.svg" alt="" width={128} height={38} />
          <Separator />
          <NavItems/>

        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
