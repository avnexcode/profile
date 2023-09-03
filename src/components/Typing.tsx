import Typed from "react-typed";
import { typeConfig } from "../pages/home/interface/typeInterface";

export default function Typing({ config }: { config: typeConfig }) {
  return (
    <>
      <Typed
        strings={config.text}
        typeSpeed={config.typeSpeed}
        backSpeed={config.backSpeed}
        loop={config.loop && true}
        className={config.style}
      />
    </>
  );
}
