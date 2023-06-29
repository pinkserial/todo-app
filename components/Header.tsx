import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-32">
      <h1 className="text-3xl tracking-[0.5rem] font-bold text-white">TODO</h1>
      <ThemeToggle />
    </header>
  );
}
