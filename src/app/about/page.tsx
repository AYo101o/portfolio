import GoBack from "@/components/layout/GoBack";
import { ChevronRight } from "lucide-react";

export default function About() {
  return (
    <section className="m-3 leading-loose">
      <article>
        <h2 className="text-gray-400 mb-4 font-extrabold text-xl">
          Technical Expertise
        </h2>
        <p className="leading-relaxed">
          As a frontend-focused developer, I craft clean, responsive, and
          accessible user interfaces using modern frameworks and tools. My
          strengths include:
        </p>
        <ul className="leading-relaxed mt-6 text-red list-none">
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>
              Frontend Development: React, TypeScript, JavaScript, Next.js,
              Tailwind CSS
            </span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>State Management: Zustand, React Hook Form</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Styling & UI Libraries: Tailwind CSS, ShadCN</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Backend Familiarity: REST APIs, basic Node.js</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Database & Auth: Prisma, NextAuth</span>
          </li>
        </ul>
      </article>

      <article className="leading-relaxed mt-8">
        <h2 className="text-gray-400 mb-4 font-extrabold text-xl">
          Professional Mindset
        </h2>
        <p>
          I’m hands-on, curious, and always improving. I:
          <br />
          – Focus on writing clean, reusable code.
          <br />
          – Enjoy turning ideas into intuitive interfaces.
          <br />
          – Thrive in fast-paced, learning-first environments.
          <br />
          – Share what I know and stay open to learning from others.
        </p>
      </article>

      <article className="leading-relaxed mt-8">
        <h2 className="font-extrabold text-xl text-gray-400 mb-4">
          Learning Journey
        </h2>
        <p>I stay sharp by:</p>
        <ul className="mt-2 list-none">
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Exploring open-source projects</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Engaging with developer communities</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Keeping up with modern frontend and blockchain tooling</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Building side projects to test ideas and sharpen skills</span>
          </li>
        </ul>
      </article>

      <article className="leading-relaxed mt-8">
        <h2 className="font-extrabold text-xl text-gray-400 mb-4">
          Driven by Curiosity
        </h2>
        <p>I enjoy:</p>
        <ul className="mt-2 list-none">
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Experimenting with new tools and frameworks</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Creating useful, user-friendly apps</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Tackling complex challenges with creative solutions</span>
          </li>
          <li className="flex gap-2 items-start">
            <ChevronRight className="w-6 shrink-0" aria-hidden="true" />
            <span>Helping others grow while growing alongside them</span>
          </li>
        </ul>
      </article>
      <GoBack/>
    </section>
  );
}
