import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern py-5 md:py-10">
        <Wrapper className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold font-bold text-xl md:text-2xl">
              Celebrate your event with help of our platform
            </h1>
            <p className="font-medium text-sm  ">
              Book and learn helpful tips from 3434+ mentors in world class
              companies with the global community
            </p>
            <Button className="w-full sm:w-fit rounded-full">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>
          <Image
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
          />
        </Wrapper>
      </section>
      <section id="">
        <Wrapper className=" ">
          <h2 className="font-bold">
            Trusted by <br/>
            Thousands of Events
          </h2>
          <div className="">
              Search
              Category
          </div>
        </Wrapper>
      </section>
    </>
  );
}
