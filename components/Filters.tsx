"use client";

import clsx from "clsx";

const Filter = ["All", "Active", "Completed"];

export default function Filters({
  currentFilter,
  setFilter,
}: {
  currentFilter: string;
  setFilter: (t: string) => void;
}) {
  return (
    <ul className="flex gap-3 font-bold">
      {Filter.map((f) => (
        <li
          key={f}
          className={clsx(
            currentFilter === f ? "text-sky-500" : "",
            "hover:text-filter-hover"
          )}
        >
          <button onClick={() => setFilter(f)}>{f}</button>
        </li>
      ))}
    </ul>
  );
}
