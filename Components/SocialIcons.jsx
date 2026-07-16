import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

export function LinkedInIcon({ className = "w-5 h-5" }) {
  return <FaLinkedinIn className={className} />;
}

export function XIcon({ className = "w-5 h-5" }) {
  return <FaXTwitter className={className} />;
}

export function InstagramIcon({ className = "w-5 h-5" }) {
  return <FaInstagram className={className} />;
}