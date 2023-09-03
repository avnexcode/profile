import { socialUrl } from "../../../data/social";

export default function SocialMedia() {

  return (
    <>
      {socialUrl.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            title={item.name}
            className="text-3xl lg:text-4xl"
            target="_blank"
          >
            {item.icon}
          </a>
        );
      })}
    </>
  );
}
