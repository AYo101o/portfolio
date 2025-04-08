import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { ArrowRight, MoveUpRight, Copy } from "lucide-react";

export default function Mid() {
  const arrowRight = "text-2xl mr-1 w-3 text-gray-400";
  const spanBorder = "flex border-b-2 border-dotted border-gray-900";

  return (
    <div className="flex flex-col justify-between pt-10">
      <div className="flex items-center">
        <div className="ring-2 ring-blue-500 w-40 overflow-hidden rounded-full mr-5">
          <Avatar className="">
            <AvatarImage src="/Avatar.jpeg" alt="user avatar" />
          </Avatar>
        </div>
        <div className="">
          <h1 className="text-lg">@AyomideAkinniyi</h1>
          <h2>Frontend Developer | React, Next.js, TypeScript & Web3</h2>
        </div>
      </div>
      <div className="pt-10">
        <h1 className=" text-3xl pb-5">
          Ayomide Akinniyi is <span>Coding... </span>
        </h1>
        <p className="text-gray-500 mb-4">
          <Link href="">@AyomideAkinniyi's recent commits on Github</Link>
        </p>
      </div>
      <div className="leading-relaxed">
        <p>
          Hi, I’m Ayomide Akinniyi, a Frontend Developer passionate about
          crafting clean, responsive, and user-friendly interfaces. I specialize
          in building modern web applications using React, Next.js, Tailwind
          CSS, and Zustand for state management. I enjoy turning designs into
          smooth, functional experiences that feel great to use.
        </p>
        <h1 className="text-3xl font-medium my-4">What Drives Me</h1>
        <div className="pl-3 mb-3">
          <ol className="">
            <li className="flex">
              <ArrowRight className={arrowRight} />
              Writing clean, maintainable frontend code
            </li>
            <li className="flex">
              <ArrowRight className={arrowRight} />
              Creating fast and accessible user interfaces
            </li>
            <li className="flex">
              <ArrowRight className={arrowRight} />
              Learning modern tools and improving workflows
            </li>
            <li className="flex">
              <ArrowRight className={arrowRight} />
              Sharing knowledge and helping others grow
            </li>
          </ol>
        </div>
        <p>
          I’m committed to growing as a developer by constantly improving my
          skills and building projects that solve real problems. Whether I’m
          working solo or collaborating with a team, I bring focus, creativity,
          and a love for the frontend craft.
        </p>
      </div>
      <div className="mt-5">
        <ol>
          <li className="flex">
            <span className={spanBorder}>
              <Link href=""> Learn more about me</Link>
              <MoveUpRight className="text-gray-600 ml-1" />
            </span>
          </li>
        </ol>
        <ol className="flex mt-4">
          <li className="flex mr-8">
            <span className={spanBorder}>
              <Link href="">View my projects</Link>
              <MoveUpRight className="text-gray-600 ml-1" />
            </span>
          </li>
          <li className="flex">
            <span className={spanBorder}>
              <Link href="">Get in touch</Link>
              <MoveUpRight className="text-gray-600 ml-1" />
            </span>
          </li>
        </ol>
      </div>
      <div className="mt-5">
        <p>Send me an email at</p>
        <div className="flex mt-1">
          <span className={spanBorder}>
            <Link href="">ayoakinniyi10@gmail.com</Link>
          </span>
          <button><Copy className="ml-2 w-4 text-gray-600"/></button>
        </div>
      </div>
      <div className="flex mt-5">
        <span className={`${spanBorder} mr-8`}><Link href=''>Blog</Link><MoveUpRight/></span>
        <span className={`${spanBorder} mr-8`}><Link href=''>Photos</Link><MoveUpRight/></span>
        <span className={`${spanBorder} mr-8`}><Link href=''>Stats</Link><MoveUpRight/></span>
      </div>
    </div>
  );
}
