import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Tilt } from "react-tilt";

export default function ProfileImage({ urlImage }: { urlImage: string }) {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    gsap.set(boxElement, { x: 0, y: 0, scale: 1, opacity: 1 });

    // Animasi "flip" dari properti awal ke properti akhir dengan durasi 1 detik
    const animation = gsap.fromTo(
      boxElement,
      { x: -200, y: -200, scale: 0, opacity: 0 },
      { x: 0, y: 0, scale: 1, opacity: 1, duration: 1 }
    );

    return () => {
      animation.kill(); // Menghentikan animasi saat komponen dibongkar
    };
  }, []);

  return (
    <Tilt
      options={defaultOptions} // Perbaikan: Menggunakan 'options' alih-alih 'option'
      className="cursor-pointer border-2 lg:border-4 border-slate-800 dark:border-white rounded-full p-1 lg:p-2"
    >
      <img
        ref={boxRef}
        src={urlImage}
        alt="profile"
        className="w-[235px] md:w-[330px] lg:w-[400px] aspect-square rounded-full object-cover border-2 lg:border-4 dark:border-white border-slate-800 p-1 lg:p-2"
      />
    </Tilt>
  );
}
