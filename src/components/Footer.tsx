import Link from "next/link";
import { Logo } from "@/public/logo";
import { FaGithub} from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container-wrap border-t border-ink/10 py-8">
      <div className="flex items-center justify-between">
        
        <Logo/>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com/sara01romao" target="_blank" aria-label="GitHub" className="text-ink transition hover:text-flamingo">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sara-romao/" target="_blank" aria-label="LinkedIn" className="text-ink transition hover:text-flamingo">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com/@sararomaodev" target="_blank" aria-label="YouTube" className="text-ink transition hover:text-flamingo">
            <FaSquareYoutube size={24}/>
          </a>
        </div>
      </div>
    </footer>
  );
}
