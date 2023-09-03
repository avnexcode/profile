import { lazy, Suspense } from "react";
import ThemeToggle from "./components/ThemeToggle";
import { wait } from "./data/module/wait";

const Loader = lazy(() =>
  import("./components/Loader").then((module) => {
    return { default: module.Loader };
  })
);

const Home = lazy(() => wait(1000).then(() => import("./pages/home/Home")));
export default function App() {
  const documentTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Hey, Come back please! 😥";
  });
  window.addEventListener("focus", () => {
    document.title = "Love Youuu...💖";
    setTimeout(() => {
      document.title = documentTitle;
    }, 1000);
  });
  return (
    <Suspense fallback={<Loader />}>
      <div className="absolute right-5 top-5 z-50">
        <ThemeToggle />
      </div>
      <div className="relative overflow-hidden pb-10">
        <Home />
      </div>
    </Suspense>
  );
}
