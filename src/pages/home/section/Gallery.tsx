import ImageSplider from "../../../components/ImageSplider";
import { typeSplider } from "../interface/typeInterface";
import BoxQuote from "../components/BoxQuote";
import unImg from "../../../assets/image/unimg.jpeg";
export default function Gallery() {
  // const image = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const image = [unImg];
  const config: typeSplider = {
    type: "loop",
    perPage: 1, // jumlah item dalam satu slider
    focus: "center", // posisi fokuse elemen
    drag: "free", // bebas menggeser item
    pagination: false, // menonaktifkan tombol navigasi
    arrows: false, // menonaktifkan panah navigasi
    autoHeight: true, // mengatur tinggi slider otomatis berdasarkan konten
    interval: 5000,
    speed: 1500,
    gap: "1rem", // jarak antar item
    direction: "rtl", // arah auto scroll (right to left)
    autoScroll: {
      pauseOnHover: true, // berhenti autoscroll saat hover
      pauseOnFocus: true, // berhenti autoscroll saat fokus
      rewind: false, // mengulangi slider dari awal atau tidak saat mencapai slider terakhir
      speed: 0.5, // kecepatan autoscroll
    },
    // responsive
    breakpoints: {
      1024: {
        perPage: 1,
        perMove: 1,
        gap: "0.5rem",
      },
      640: {
        perPage: 1,
        perMove: 1,
        gap: "1.5rem",
      },
      620: {
        perPage: 1,
        perMove: 1,
        gap: "1.5rem",
      },
    },
  };
  return (
    <>
      <div className="flex w-full justify-center items-center text-5xl py-10 dark:text-slate-300 font-poppins">
        <h1>__________</h1>
      </div>
      <div className="gap-10 lg:gap-0 lg:p-5 flex flex-col-reverse lg:flex-row lg:[&>*]:w-1/2 px-5 lg:[&>*]:px-10 justify-center items-center">
        <div className="cursor-pointer">
          <ImageSplider imageUrl={image} config={config} />
        </div>
        <div className="">
          <BoxQuote />
        </div>
      </div>
    </>
  );
}
