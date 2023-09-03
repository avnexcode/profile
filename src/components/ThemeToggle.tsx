import { useState, useEffect } from "react";
import "./css/themeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className={`checkbox-wrapper-8 tgl-${theme}`}>
        <input
          type="checkbox"
          id="cb3-8"
          className={`tgl tgl-skewed`}
          onClick={handleThemeSwitch}
        />
        <label
          htmlFor="cb3-8"
          data-tg={theme === "dark" ? "DARK" : "LIGHT"}
          className="tgl-btn"
        ></label>
      </div>
    </>
  );
}
