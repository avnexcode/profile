import Typed from "react-typed";
import { typeTextTyping } from "../pages/home/interface/typeInterface";

export default function Typing({ config }: { config: typeTextTyping }) {
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
