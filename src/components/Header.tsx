import { Logo } from "@/public/logo";

import { FaGithub} from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube } from "react-icons/fa6";


export default function Header() {
  return (
    <header className="flex items-center justify-between py-7 relative  border-gray-500">
      <span className="font-display text-[22px] font-bold tracking-tight text-center mx-auto">
        <Logo/>
      </span>

      <div className="gap-[20px] text-sm text-sub dark:text-darkSub absolute hidden sm:flex right-0">
       
        <a href="https://github.com/sara01romao" aria-label="GitHub" target="_blank" className="text-gray-600 transition hover:text-flamingo">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/sara-romao/" aria-label="LinkedIn" target="_blank" className="text-gray-600 transition hover:text-flamingo">
          <FaLinkedin size={22} />
        </a>
        <a href="https://www.youtube.com/@sararomaodev" aria-label="YouTube" target="_blank" className="text-gray-600 transition hover:text-flamingo">
          <FaSquareYoutube size={22}/>
        </a>
        
      </div>
    </header>
  );
}
