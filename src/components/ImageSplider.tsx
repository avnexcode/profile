import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { typeSplider } from "../pages/home/interface/typeInterface";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function ImageSplider({
  config,
  imageUrl,
}: {
  config: typeSplider;
  imageUrl: string[];
}) {
  return (
    <div className="w-full">
      <Splide options={config} extensions={{ AutoScroll }}>
        {imageUrl.map((item, index) => {
          return (
            <SplideSlide
              key={index}
              className="flex items-center max-w-fit max-h-fit"
            >
              <img
                className="blur-sm hover:blur-none w-[300px] aspect-square object-contain sm:hover:scale-[2] hover:z-50"
                src={item}
                alt={`gallery`}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
