import Link from "next/link";
import links from "@/data/links.json";

type Linki = { id: number; name: string; url: string };

export default function Links() {
  return (
    <div className="px-5">
      <section className="mt-10 ml-3">
        <ul className="grid grid-cols-4 gap-5">
          {(links as Linki[]).map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
