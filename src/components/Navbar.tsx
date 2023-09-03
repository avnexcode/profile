import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  return (
    <nav
      id="main-navbar"
      className="flex justify-center w-full p-2 lg:p-7 bg-white"
    >
      <div>
        <ul className="flex justify-around gap-5 lg:gap-32 text-xl">
          <li className="hover:scale-105">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="absolute right-10">
        <ThemeToggle />
      </div>
    </nav>
  );
}
