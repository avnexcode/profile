import { typeSocialMedia } from "../pages/home/interface/typeInterface";
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export const socialUrl: typeSocialMedia[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/axnvee18/",
    icon: <BsInstagram className={"text-red-600"} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/axnvee.axnvee",
    icon: <BsFacebook className={"text-blue-500"} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/avnexcode",
    icon: <BsGithub className=""/>,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-fauzi-nur-aziz-511b8b241/",
    icon: <BsLinkedin className={"text-blue-800"} />,
  },
];