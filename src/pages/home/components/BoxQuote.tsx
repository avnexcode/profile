import { quote } from "../../../data/quote";
import { useEffect, useState } from "react";

export default function BoxQuote() {
  useEffect(() => {
    const random = Math.floor(Math.random() * (quote.length - 1)); // Hindari indeks melebihi panjang array
    const randomQuote = quote[random];
    if (randomQuote) {
      setText(randomQuote.text || "");
      setAuthor(randomQuote.author || "");
    } else {
      // Penanganan jika data yang ditemukan adalah null
      setText("Tidak ada kutipan yang tersedia");
      setAuthor("Penulis tidak diketahui");
    }
  }, []);

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <>
      {/* <div className="border-b-4 border-[rgba(109,40,217)] mt-10 lg:mt-0">
        <h1 className="text-3xl">Kata - Kata Hari Ini</h1>
      </div> */}
      <div className="flex flex-col gap-5 justify-center items-center text-center text-lg shadow-[8px_8px_0px_0px_rgba(109,40,217)] border-2 border-[rgba(109,40,217)] p-5 lg:p-10 my-5 font-poppins">
        <p>{text}</p>
        <p>{author}</p>
      </div>
    </>
  );
}
