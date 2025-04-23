import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { ChevronRight, MoveUpRight, Copy, ChevronsDown } from "lucide-react";
import skills from "@/data/skills.json";

type Skill = { name: string };

export default function Mid() {
  const arrowRight = "text-2xl mr-1 w-3 text-gray-400";
  const spanBorder = "flex border-b-2 border-dotted border-gray-900";
  const skillStyle =
    "bg-gray-300 p-2 rounded-xl text-center border border-gray-400";

  return (
    <main className="flex flex-col justify-between pt-5 pb-20">
      <section className="flex items-center">
        <div className="w-40 overflow-hidden rounded-full">
          <Avatar className="w-full h-full">
            <AvatarImage src="/Avatar.jpg" alt="User avatar" />
          </Avatar>
        </div>
        <div className="ml-5">
          <h1 className="text-lg font-semibold">@AyomideAkinniyi</h1>
          <h2>Frontend Developer | React, Next.js, TypeScript & Web3</h2>
        </div>
      </section>

      <section className="pt-10">
        <h2 className="text-3xl pb-5">Ayomide Akinniyi is <span>Coding...</span></h2>
        <p className="text-gray-500 mb-4">
          <Link href="">@AyomideAkinniyi's recent commits on GitHub</Link>
        </p>
      </section>

      <section className="leading-relaxed">
        <p>
          Hi, I’m Ayomide Akinniyi, a Frontend Developer passionate about
          crafting clean, responsive, and user-friendly interfaces. I specialize
          in building modern web applications using React, Next.js, Tailwind
          CSS, and Zustand for state management.
        </p>

        <h3 className="text-2xl font-medium my-4">What Drives Me</h3>
        <ul className="pl-3 mb-3">
          <li className="flex items-start">
            <ChevronRight className={arrowRight} aria-hidden="true" />
            Writing clean, maintainable frontend code
          </li>
          <li className="flex items-start">
            <ChevronRight className={arrowRight} aria-hidden="true" />
            Creating fast and accessible user interfaces
          </li>
          <li className="flex items-start">
            <ChevronRight className={arrowRight} aria-hidden="true" />
            Learning modern tools and improving workflows
          </li>
          <li className="flex items-start">
            <ChevronRight className={arrowRight} aria-hidden="true" />
            Sharing knowledge and helping others grow
          </li>
        </ul>

        <p>
          I’m committed to growing as a developer by constantly improving my
          skills and building projects that solve real problems. Whether I’m
          working solo or collaborating with a team, I bring focus, creativity,
          and a love for the frontend craft.
        </p>
      </section>

      <section className="mt-5">
        <ul>
          <li className="flex">
            <span className={spanBorder}>
              <Link href="">Learn more about me</Link>
              <MoveUpRight className="text-gray-600 ml-1" aria-hidden="true" />
            </span>
          </li>
        </ul>
        <ul className="flex mt-4 space-x-8">
          <li className="flex">
            <span className={spanBorder}>
              <Link href="">View my projects</Link>
              <MoveUpRight className="text-gray-600 ml-1" aria-hidden="true" />
            </span>
          </li>
          <li className="flex">
            <span className={spanBorder}>
              <Link href="">Get in touch</Link>
              <MoveUpRight className="text-gray-600 ml-1" aria-hidden="true" />
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-5">
        <p>Send me an email at</p>
        <div className="flex mt-1 items-center">
          <span className={spanBorder}>
            <Link href="mailto:ayoakinniyi10@gmail.com">ayoakinniyi10@gmail.com</Link>
          </span>
          <button type="button" aria-label="Copy email address">
            <Copy className="ml-2 w-4 text-gray-600" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="flex mt-5">
        <span className={`${spanBorder} mr-8`}>
          <Link href="">Photos</Link>
          <MoveUpRight className="text-gray-600 ml-1" aria-hidden="true" />
        </span>
      </section>

      <section className="pt-20 pl-3">
        <div className="flex rounded-2xl w-fit shadow-lg p-2 items-center border border-amber-50">
          <h4 className="text-xs font-medium">MY CORE SKILLSET</h4>
          <span className="rounded-full border border-amber-50 shadow-md ml-4 px-1">
            <ChevronsDown className="text-gray-600 w-4" aria-hidden="true" />
          </span>
        </div>
      </section>

      <section className="pt-10 ml-5">
        <ul className="grid grid-cols-3 gap-4 text-black">
          {(skills as Skill[]).map((skill, index) => (
            <li key={index} className={skillStyle}>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      
    </main>
  );
}
