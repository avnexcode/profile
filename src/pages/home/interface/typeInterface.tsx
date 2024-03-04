export interface typeTextTyping {
  text: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
  style: string;
}

export interface typeSocialMedia {
  name: string;
  url: string;
  icon: JSX.Element;
}

export interface typeQuote {
  id: string;
  author: string;
  text: string;
}

export interface typeSplider {
  type: string;
  perPage: number; // jumlah item dalam satu slider
  focus: string; // posisi fokuse elemen
  drag: string; // bebas menggeser item
  pagination: boolean; // menonaktifkan tombol navigasi
  arrows: boolean; // menonaktifkan panah navigasi
  autoHeight: boolean; // mengatur tinggi slider otomatis berdasarkan konten
  interval: number;
  speed: number;
  gap: string; // jarak antar item
  direction: string; // arah auto scroll (right to left)
  autoScroll: {
    pauseOnHover: boolean; // berhenti autoscroll saat hover
    pauseOnFocus: boolean; // berhenti autoscroll saat fokus
    rewind: boolean; // mengulangi slider dari awal atau tidak saat mencapai slider terakhir
    speed: number; // kecepatan autoscroll
  };
  // responsive
  breakpoints: {
    1024: {
      perPage: number;
      perMove: number;
      gap: string;
    };
    640: {
      perPage: number;
      perMove: number;
      gap: string;
    };
    620: {
      perPage: number;
      perMove: number;
      gap: string;
    };
  };
}