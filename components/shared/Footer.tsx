import Image from "next/image"
import Link from "next/link"
import Wrapper from "./Wrapper"

const Footer = () => {
  return (
    <footer className="border-t">
      <Wrapper>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center md:justify-between">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="" width={128} height={38} />
        </Link>
        <p>Copy Right. All right reserved</p>
      </div>
      </Wrapper>
    </footer>
  )
}

export default Footer