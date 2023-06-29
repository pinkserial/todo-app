import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="w-1/2 mx-auto">
      <Header />
      <TodoList/>
    </main>
  );
}
