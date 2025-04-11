import {ChevronRight, Circle} from "lucide-react";
export default function About (){
    return(
        <div className="m-3 text-gray-1000 leading-loose">
            <div>
                <h1 className=" text-gray-400 mb-4 font-extrabold text-xl">Technical Expertise</h1>
                <p className="leading-relaxed">As a frontend-focused developer, I craft clean, responsive, and accessible user interfaces using modern frameworks and tools. My strengths include:
                </p>
                <ul className="leading-relaxed mt-6 text-red">
                    <li className="flex items-center gap-2"> 
                        <ChevronRight /> 
                        Frontend Development: React, TypeScript, JavaScript, Next.js, Tailwind CSS
                        </li>
                    <li className="flex items-center gap-2">
                        <ChevronRight />
                        State Management: Zustand, React Hook Form
                        </li>
                    <li className="flex items-center gap-2">
                        <ChevronRight />
                        Styling & UI Libraries: Tailwind CSS, ShadCN</li>
                    <li className="flex items-center gap-2">
                        <ChevronRight />
                        Backend Familiarity: REST APIs, basic Node.js
                        </li>
                    <li className="flex items-center gap-2">
                        <ChevronRight />
                        Database & Auth: Prisma, NextAuth
                        </li>
                </ul>
            </div>
            <div className="leading-relaxed">
                <h1 className=" text-gray-400 mt-4 font-extrabold text-xl">Professional Mindset</h1>
                <p>I’m hands-on, curious, and always improving. I:

                Focus on writing clean, reusable code

                Enjoy turning ideas into intuitive interfaces

                Thrive in fast-paced, learning-first environments

                Share what I know and stay open to learning from others
                </p>
                <div className="leading-relaxed">
                    <h1 className="font-extrabold text-xl text-gray-400 mt-4">Learning Journey</h1>
                    <p>I stay sharp by:</p>
                    <ul>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Exploring open-source projects
                            </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Engaging with developer communities
                            </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Keeping up with modern frontend and blockchain tooling
                            </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Building side projects to test ideas and sharpen skills
                            </li>
                    </ul>
                </div>
                <div className="leading-relaxed">
                    <h1 className="font-extrabold text-xl text-gray-400 mt-4">Driven by Curiosity</h1>
                    <p>I enjoy:</p>
                    <ul>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Experimenting with new tools and frameworks
                            </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Creating useful, user-friendly apps
                            </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>Tackling complex challenges with creative solutions
                            </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight/>
                            Helping others grow while growing alongside them
                            </li>
                    </ul>
                </div>
            </div>
           
        </div>
    
    )
}




