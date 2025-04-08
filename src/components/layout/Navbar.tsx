import Link from "next/link";
import { FolderGit2, MessageSquareShare, Sun, Eclipse } from "lucide-react";

export default function Navbar() {

    const iconStyle = 'mr-3';

  return (
    <nav className="flex justify-between">
      <Link href="/">
        <h1>A.Y.</h1>
      </Link>
      <li className="flex">
        <FolderGit2 className={iconStyle}/>
        <MessageSquareShare className={iconStyle}/>
        <Sun className={iconStyle}/>
        <Eclipse className={iconStyle}/>
      </li>
    </nav>
  );
}
