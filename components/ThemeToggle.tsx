"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button type="button" onClick={() => setIsDark(!isDark)}>
      <Image
        src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
        alt={isDark ? "sun icon" : "moon icon"}
        width={26}
        height={26}
      />
    </button>
  );
}
