
import { Link } from "@/i18n/routing";
import { FaGithub, FaFacebook } from "react-icons/fa"

const socials = [
  { icon: <FaFacebook size={32} />, path: "https://www.facebook.com/ng.v.t.1101/" },
  { icon: <FaGithub size={32} />, path: "https://github.com/tainv1101" },
]

interface SocailsProps {
  containerClassName: string;
  iconClassName: string;
}

const Socials = ({ containerClassName, iconClassName }: SocailsProps) => {
  return (
    <div className={containerClassName}>
      {socials.map((social, idx) => (
        <Link className={iconClassName} key={idx} href={social.path} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials