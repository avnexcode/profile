import Typing from "../../../components/Typing";
import { typeTextTyping } from "../interface/typeInterface";
import urlImage from "../../../assets/image/profile/cartoon-profile.jpg";
import ProfileImage from "../components/ProfileImage";
import SocialMedia from "../components/SocialMedia";
import WhatsAppButton from "../../../components/WhatsAppButton";
import GmailButton from "../../../components/GmailButton";

export default function Profile() {
  const type: typeTextTyping = {
    text: ["Muhammad Fauzi Nur Aziz"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: false,
    style:
      "text-2xl lg:text-4xl font-bold text-center font-rubikIso lg:p-4 lg:pt-0 dark:text-slate-300",
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-5 lg:min-h-[100vh]">
      {/* left section  */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-center lg:text-left w-full text-2xl lg:text-4xl font-bold lg:pl-48 p-2 dark:text-slate-300">
            Hi There, I'm{" "}
          </span>
          <Typing config={type} />
          <span className="text-lg lg:text-2xl font-semibold font-blackOpsOne dark:text-slate-300">
            Mahasiswa | Pengangguran
          </span>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-5 lg:gap-20 items-center w-full pt-0 lg:pt-5">
          <GmailButton />
          <WhatsAppButton />
        </div>
      </div>
      {/* right section  */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col-reverse lg:flex-row w-full gap-10 justify-center">
          <div className="flex lg:flex-col gap-5 items-center justify-center text-3xl pb-10 lg:pb-0">
            <SocialMedia />
          </div>
          <div className="flex relative items-center justify-center">
            <ProfileImage urlImage={urlImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
