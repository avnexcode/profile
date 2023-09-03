import { Tilt } from "react-tilt";
export default function ProfileImage({ urlImage }: { urlImage: string }) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <>
      {/* <svg
        id="10015.io"
        viewBox="0 0 480 480"
        className="absolute -left-[230px] w-[500px] lg:w-[800px] -z-50"
      >
        <path
          fill="rgba(109, 40, 217, 0.4)"
          d="M296,338.5Q126,437,124.5,237.5Q123,38,294.5,139Q466,240,296,338.5Z"
        />
      </svg> */}
      <Tilt option={defaultOptions} className="cursor-pointer border-2 lg:border-4 border-slate-800 dark:border-white rounded-full p-1 lg:p-2">
        <img
          src={urlImage}
          alt="profile"
          className="w-[235px] lg:w-[400px] aspect-square rounded-full object-cover border-2 lg:border-4 dark:border-white border-slate-800 p-1 lg:p-2"
        />
      </Tilt>
    </>
  );
}
