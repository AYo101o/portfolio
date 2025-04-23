import Link from "next/link";
import * as Icons from "lucide-react";
import navbarIcons from "@/data/navbar.json";

type NavbarIcon = { id: number; icon: keyof typeof Icons; url: string };

export default function Navbar() {
  const iconStyle = "mr-3";

  return (
    <nav className="flex justify-between mx-7 mt-10 mb-7">
      <Link href="/">
        <h1>A.Y.</h1>
      </Link>
      <ul className="flex">
        {(navbarIcons as NavbarIcon[]).map((item) => {
          const LucideIcon = Icons[item.icon] as React.ElementType;
          return (
            <li key={item.id}>
              <Link href={item.url}>
                <LucideIcon className={iconStyle}/>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
